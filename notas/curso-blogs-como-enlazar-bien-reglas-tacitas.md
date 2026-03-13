---
title: 'Curso de Blogs IV (2). Cómo enlazar bien: reglas tácitas'
date: 2006-05-28
slug: curso-blogs-como-enlazar-bien-reglas-tacitas
metas:
  description: Enlazar bien es credibilidad.
---
<p class="intro">Segunda parte de la cuarta entrega del <a href="http://jlantunez.com/2006/01/12/arquitectura-weblog/">capítulo extra</a> y online del libro <a href="http://librodeblogs.com">"Blogs"</a>. Curso práctico de blogs: diseño, redacción de posts, reglas tácitas para enlazar...</p>

<p>En la redacción de contenidos online, enlazar correctamente y utilizar los enlaces para ilustrar con información complementaria son cuestiones prioritarias para fidelizar al lector. <strong>Enlazar bien es credibilidad</strong>. La pedagogía del hipertexto: compartir, debatir, aplicar lo aprendido en tu vida laboral o personal, es la constante que originó y popularizó los blogs.</p>

<p>¿Quién o qué mide la correción de qué se enlaza y cómo enlazar? El sentido común. Cualquier demanda de información que genere la lectura, satisfácela. Añadirá valor al contenido. Te dará a conocer en otros blogs, especialmente si haces trackback, que amplificará el debate en otras bitácoras.</p>

<h2>¿Qué se enlaza?</h2>

<p>Si la información que quieres enlazar tiene web/fuente oficial, es preferible. Estarán actualizadas y el contenido será fiable:</p>

<ol>
	<li>Nombre propios de personajes del presente: actualidad, celebridades, anónimos (con referencia online: blog, perfil en red social...). En el caso de los profesionales del cine se ha convertido en una práctica estandarizada enlazar a su perfil en <a href="http://imdb.com" target="_blank">IMDB</a> (el sitio por antonomasia de la industria del cine).</li>
	<li>Nombre propios de personajes históricos, conceptos técnicos/científicos, acontecimientos históricos... La entrada en la Wikipedia es la opción más fiable a la hora de reseñar material hasta hace pocos años propiedad de las enciclopedias cuyo destino hoy día es coleccionar ácaros en las estanterías de casa.</li>
	<li>Organizaciones: empresas, instituciones, medios de comunicación... Si las citas varias veces, enlázalas sólo la primera vez. Si hablas de su historia, orígenes, resultados, un segundo enlace a estos contenidos que supuestamente se encontrarán en la web corporativa o en la <a title="Wikipedia" href="http://es.wikipedia.org/wiki/Wikipedia:Portada" target="_blank">Wikipedia</a> completarán la información.</li>
	<li>Productos. Si es una película, la ficha en imdb.com (que mencionamos anteriormente) y un enlace a un tráiler de gran calidad de imagen será suficiente. Si es un libro, un enlace a <a title="Amazon" href="http://amazon.com" target="_blank">Amazon</a> o alguna otra tienda de libros (por ej, la más barata). Si enlazas un gadget, además de la información oficial y de compra, incluye un vídeo. Lo visual siempre complementa muy bien la información. Y por supuesto, sea cual sea el producto, algún enlace que opine a favor o en contra, es recomendable.</li>
</ol>

<h2>Sintaxis: ¿Qué palabras se enlazan?</h2>
Belén Sanz, en <a href="http://www.bitacoras.org/bit.php?id=58_0_1_0_C">Formas recomendadas de enlazar en las bitácoras</a>, abundaba en algunos detalles que no por sencillos son intrascendentes. Al contrario, elevan la valoración y credibilidad de tu blog de manera imediata.

<blockquote>Por favor, no enlaces el "haga click aquí". El "aquí" está vacío de información. Enlaza palabras clave.</blockquote>

<p>Presta atención a dónde y cómo situar los enlaces en cada frase. <strong>No utilices el recurso de "Más información aquí" o <a href="http://www.w3.org/QA/Tips/noClickHere">"Haga click aquí"</a></strong> y enlaces esa frase. Es una frase vacía de contenido.</p>

<p>En el predicado de la frase, los objetos directos/indirectos, lo complementos circunstanciales y los adjetivos son los elementos que tienen mayo dosis de contenidos/información, y no el tiempo verbal. Sanz daba el siguiente ejemplo:</p>
  
<blockquote>"El Gobierno ha anunciado la convocatoria de elecciones"</blockquote>

<p>Es habitual después de esa frase, abrir el blockquote para reproducir parte de esa noticia, pero antes hay enlazar en esa frase.
¿Qué parte de la frase enlazamos para ver la noticia? ¿En el verbo de la acción ("ha anunciado")? o ¿en el objeto directo? ("convocatoria de elecciones")?</p>

<p>En mi opinión, lo importante es el objeto directo. Es mucho más informativo que el verbo. Si enlazamos "ha anunciado", no aclaramos qué está ocurriendo, puede haber anunciado quién sea lo que sea, pero si enlazamos "convocatoria de elecciones", estamos informando del asunto de la noticia, del motivo.</p>

<h3>Enlazar documentos con extensiones .pdf, .doc...</h3>

<p>Si enlazas documentos con extensiones diferentes a los de una web común, como archivos de Word (.doc, .rtf), PowerPoint (.ppt) o .pdf que necesitan de mayor memoria del PC, añade el tipo de extensión al lado del término enlazado. El lector podrá decidir si hace click o no. Si no está señalizado y su navegación se ralentiza o cuelga, lo defraudarás por decirlo eufemísticamente.</p>

<p>Igual sucede con los contenidos que se consultan bajo suscripción de pago o de usuario y que no están accesible al primer vistazo.</p>

<h3>Atributo title de los enlaces</h3>

<p>El atributo para titular los enlaces también es eficaz para dar pistas del contenido que se encontrarán cuando hagan click, además de sus beneficios en posicionamiento en buscadores. Por ejemplo:</p>

<p>&lt;a title="palabra enlazada o info complementaria" href="URL"&gt;texto enlazado&lt;/a&gt;</p>

<h2>Diseño de los enlaces</h2>

<p>La apariencia de los enlaces se personaliza desde la CSS. Las normas tradicionales de usabilidad, basadas en la experiencia y test de usuarios, recomiendan que los enlaces se presenten <a href="http://www.useit.com/alertbox/20040510.html">subrayados en azul</a>, al tiempo que se diferencien entre los enlaces no visitados y los ya clickados (visitados).</p>

<p>En CSS, los parámetros de los enlaces son:</p>

<p>a, atributos del enlace nuevo<br>
a:visited, atributos del enlace visitado<br>
a:hover, atributos del enlace al pasar el cursor por el texto enlazado <br>
a:active, atributos del enlace en el momento de clickar</p>

<h2>Conclusión</h2>

<p>Actualmente hay millones de personas que tienen un blog o que han creado uno en algún momento de su vida poniendo de relieve, igual que lo hizo el Manifiesto Cluetrain cuando proclamó que el mercado son conversaciones, que se acabaron los púlpitos y los discursos verticales. La cultura del hipertexto supone credibilidad y democratización de las jerarquías.</p>

<p>La web 2.0 es participación. El ecosistema en el que cualquier ciudadano puede alzar la voz y ser escuchado, valorado personal y profesionalmente... de forma inmediata. Si además esta coyuntura se construye con la implantación de tecnologías que como resultado de su uso generalizado se crean nuevos estándares para el desarrollo de la innovación y de nuevos productos hasta ahora inimaginables, la revolución acaba de empezar.</p>

<p>Si Guttenberg levantara la cabeza...</p>
