<?php
session_start();
header('Content-Type: application/json');

// Solo permitir POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success'=>false, 'error' => "METHOD_NOT_ALLOWED"]);
    exit();
}

// Configuración
include_once "../../env.php";
$ACUMBAMAIL_AUTH_TOKEN = getenv("ACUMBAMAIL_AUTH_TOKEN");
$ACUMBAMAIL_LIST_ID = 1159613;

// Leer datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];

// Validación de datos
if (empty($name) || mb_strlen($name) < 2 || mb_strlen($name) > 30) {
    echo json_encode(['success'=>false, 'error'=> "INVALID_NAME"]);
    exit();
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success'=>false, 'error'=> "INVALID_EMAIL"]);
    exit();
}

// Función para llamar a Acumbamail (CORREGIDA)
function callAcumbamail($authToken, $listId, $email, $name) {
    $url = 'https://acumbamail.com/api/1/addSubscriber/';

    // CORRECCIÓN: Diferentes formatos para el campo char_01
    $post = [
        'auth_token' => $authToken,
        'list_id' => $listId,
        'email' => $email,  // Email como campo principal
        'nombre' => $name,  // Formato directo
        'merge_fields[email]' => $email,  // Email en merge_fields también
        'merge_fields[nombre]' => $name,  // Formato original por si acaso
        'double_optin' => 0,
        'update_subscriber' => 0,
        'complete_json' => 1
    ];

    // Log detallado para debug
    $maskedToken = substr($authToken, 0, 6) . '***' . substr($authToken, -6);
    error_log("[DEBUG] Enviando a Acumbamail - List: {$listId}, Email: {$email}, Nombre: {$firstName}, Token: {$maskedToken}");
    error_log("[DEBUG] POST data: " . json_encode($post, JSON_UNESCAPED_UNICODE));

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Newsletter-Subscription/1.0');

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlErr = curl_error($ch);
    
    // Log la respuesta completa
    error_log("[DEBUG] Acumbamail response - HTTP: {$httpCode}, Body: " . substr($response, 0, 1000));
    curl_close($ch);

    if ($curlErr) {
        error_log("[ERROR] cURL error: {$curlErr}");
        return ['success'=>false, 'error'=>'NETWORK_ERROR', 'details'=>$curlErr, 'raw'=>$response, 'httpCode'=>$httpCode];
    }

    $decoded = json_decode($response, true);
    return ['success'=>($httpCode >=200 && $httpCode < 300), 'httpCode'=>$httpCode, 'data'=>$decoded, 'raw'=>$response];
}

// Mapear errores de forma segura
function mapError($result) {
    if (isset($result['error']) && $result['error'] === 'NETWORK_ERROR') return 'NETWORK_ERROR';
    $http = $result['httpCode'] ?? 0;
    if ($http === 401) return 'INVALID_AUTH';
    if ($http === 429) return 'RATE_LIMIT';
    if ($http >= 500) return 'API_ERROR';

    $data = $result['data'] ?? null;
    if (is_array($data) && isset($data['error'])) {
        $err = strtolower($data['error']);
        if (strpos($err,'already exists') !== false || strpos($err,'exist') !== false) return 'EMAIL_EXISTS';
        if (strpos($err,'invalid') !== false && strpos($err,'email') !== false) return 'INVALID_EMAIL';
        if (strpos($err,'list') !== false) return 'INVALID_LIST';
        if (strpos($err,'spam') !== false || strpos($err,'blocked') !== false) return 'SPAM_DETECTED';
        if (strpos($err,'rate') !== false || strpos($err,'limit') !== false) return 'RATE_LIMIT';
    }

    return 'DEFAULT';
}

// Ejecutar suscripción
try {
    $result = callAcumbamail($ACUMBAMAIL_AUTH_TOKEN, $ACUMBAMAIL_LIST_ID, $email, $name);

    // Detectar éxito - MEJORADO
    $isSuccess = false;
    $respId = null;

    if ($result['httpCode'] >= 200 && $result['httpCode'] < 300) {
        $rawTrim = trim($result['raw'] ?? '');
        
        // Caso 1: Respuesta es JSON válido
        if (is_array($result['data'])) {
            if (isset($result['data']['id']) || isset($result['data']['email']) || 
                (isset($result['data']['response']) && $result['data']['response'] === 'OK')) {
                $isSuccess = true;
                $respId = $result['data']['id'] ?? $result['data']['subscriber_id'] ?? null;
            }
        }
        // Caso 2: Respuesta es un número (ID del suscriptor)
        else if (is_numeric($rawTrim) && intval($rawTrim) > 0) {
            $isSuccess = true;
            $respId = intval($rawTrim);
        }
        // Caso 3: Respuesta contiene "OK" o mensaje de éxito
        else if (stripos($rawTrim, 'ok') !== false || stripos($rawTrim, 'success') !== false) {
            $isSuccess = true;
        }
    }

    if ($isSuccess) {
        error_log("[SUCCESS] Suscripción exitosa - Email: {$email}, Nombre: {$name}, ID: " . ($respId ?? 'N/A'));
        unset($_SESSION['subscription_token']);
        echo json_encode(['success'=>true, 'message'=>'Subscription successful', 'id'=>$respId]);
        exit();
    } else {
        error_log("[ERROR] Suscripción falló - " . json_encode($result));
        $code = mapError($result);
        echo json_encode([
            'success'=>false,
            'error'=>['code'=>$code],
            'api_response' => $result['data'] ?? $result['raw'] ?? null,
            'httpCode' => $result['httpCode'] ?? null
        ]);
        exit();
    }

} catch (Exception $e) {
    error_log("[EXCEPTION] Subscribe exception: " . $e->getMessage());
    echo json_encode(['success'=>false,'error'=>['code'=>'DEFAULT']]);
    exit();
}
