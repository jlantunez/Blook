---
title: Estándares y Scotch-Brite
date: 2004-08-31
slug: estandares-y-scotch-brite
metas:
  description: 'Rediseño del blog gracias a lo que aprendí de Zeldman, Bowman, Cederholm...'
---
<p class="intro">Rediseño del blog gracias a lo que aprendí de <a href="http://zeldman.com">Zeldman</a>, <a href="http://stopdesign.com">Bowman</a>, <a href="http://simplebits.com">Cederholm</a>... </p>

<p>Leer blogs me descubrió los <a href="http://w3c.org">estándares web</a> y el placer, diversión, reto que proporciona diseñar sin tablas y basarlo casi todo o todo en las hojas de estilo (CSS). Cada día se aprende algo nuevo y resulta apas<p class="intro">Rediseño del blog gracias a lo que aprendí de <a href="http://zeldman.com">Zeldman</a>, <a href="http://stopdesign.com">Bowman</a>, <a href="http://simplebits.com">Cederholm</a>...</p>

<p>Leer blogs me descubrió los <a href="http://w3c.org">estándares web</a> y el placer, diversión y reto que proporciona diseñar sin tablas, basando casi todo —o todo— en las hojas de estilo (CSS). Cada día se aprende algo nuevo y resulta apasionante.</p>

<p>Por lo que a mí respecta, esto ocurrió hace no más de dos años. Ideasapiens ya se había lanzado al ciberespacio y rediseñar, limpiar el sitio cual <a href="http://www.eldiario.cl/shnoti.asp?noticia=197">Scotch-brite</a>, incluido un gestor de contenidos fiable, fue y sigue siendo un objetivo que, conforme han ido apareciendo más proyectos y trabajos, se ha ido aparcando, priorizando estos últimos. Espero un día poder desquitarme.</p>

<p>Mientras tanto, queda el resquicio de este weblog, que hoy estrena nuevo <i>look</i>, el relanzamiento de los <a href="http://www.ideasapiens.com/blogs">3 Blogs Temáticos</a> —sin fecha decidida aún—, e ir quitando el mono realizando trabajos para el curro o la <a href="http://www.bitacoras.org/bit.php?id=81_0_1_0_C">blogosfera</a>, además de retocar pequeños detalles dentro de Ideasapiens.</p>

<h2>Este blog</h2>
<p>La motivación fundamental del cambio fue, ahora que en vacaciones había tiempo, optimizar el blog, suavizarlo... a ritmo de <a href="http://www.fnac.es/dsp/?servlet=extended.HomeExtendedServlet&amp;Code1=2531080605&amp;Code2=235&amp;prodID=367685">Lets Get it On</a>. Para ello había que implementar algunos de los detalles que echábamos en falta en <a href="http://movabletype.org">Movable Type</a> que tenemos <acronym title="Versión 2.66">instalado</acronym>, explotando las posibilidades que brindan los <a href="http://mt-plugins.org/">plugins</a>.</p>

<p>¿Hubiera sido más fácil actualizar al MT 3.0 o pasarnos a <a href="http://wordpress.org">WordPress</a>? Era menos divertido, además de que servía de tubo de ensayo para los blogs temáticos.</p>

<p>Una vez puestos, la tentación siempre llamando a la puerta, el siguiente paso fue cambiarle completamente la cara al blog, intentando plasmar lo que sería, a mi juicio, <b>un estándar de secciones y nomenclaturas personalizadas para cada plantilla, intentando servir la demanda de información más "lógica" en cada una</b>. No sé si lo he conseguido del todo, pero a lo largo de estos días se le irán dando los retoques que <acronym title="más plugins, validación en algunos posts...">faltan</acronym>.</p>

<p>Por momentos iba a desistir del cambio de <i>look</i> y solo centrarme en personalizar el <acronym title="Movable Type">MT</acronym>.</p>

<p>Las vacaciones, Sevilla, familia, deporte a 40 grados, tiran mucho, pero la <b>rotulación televisiva</b> en las retransmisiones de los Juegos Olímpicos de Atenas me convenció definitivamente a darle el último empujón. En cada competición —natación, atletismo, baloncesto...— me quedaba con ganas de conocer datos de los deportistas.</p>

<p>En las pruebas de atletismo fue el caso más evidente: solo aportaban tres datos en la infografía: nombre, nacionalidad con la banderita de turno y marca de clasificación. El comentarista deportivo, si era bueno (y en <a href="http://www.rtve.es/tve">TVE</a> algunos lo son), completaba los otros dos datos fundamentales que toda rotulación en atletismo televisado debe incluir: edad y récord personal.</p>

<p>En baloncesto, la urgencia era menor. Si te gusta el basket, los conocíamos a todos, y los datos como altura o edad pueden obviarse, ya que los datos estadísticos cobran más relevancia. Pero mi vecino no paraba de preguntarme la edad de Duncan, la altura de Gasol... Entre la gente en la piscina dando voces y el vecino, no pude disfrutar de los sabios e "imparciales" comentarios del siempre entrañable <a href="http://servicios.elcomerciodigital.com/pg040814/prensa/noticias/Television/200408/14/GIJ-TEL-151.html">Pedro Barthe</a>.</p>

<h3>Estética</h3>
<p>Bajo la influencia del trabajo que hicimos con <a href="http://blogsmexico.com">BlogsMéxico</a>, quería probar con los <i>double borders</i>, seguir con los verdes, blancos y <i>georgias</i>, y explorar las posibilidades de las cajas con gifs redondeados (y transparentes). Si este <acronym title="#cdc">verde</acronym> y <acronym title="f5f5f5">gris</acronym> cansan en dos líneas de CSS, los cambiamos y listo.</p>

<p>El gif del <i>body</i>, perfilado definitivamente hace un rato, se ve a partir de 1024 px. Parece mentira cómo un gif tan sencillo, con dos trazos de líneas verticales y margen lateral en blanco, aporta personalidad al sitio. Los extremos laterales del gif también son transparentes, dejando que el <acronym title="#f3f3f3">color de fondo</acronym> de la hoja de estilo aparezca.</p>

<h3>Plugins y presentación de anotaciones</h3>
<p>Debido al éxito de <acronym title="Movable Type">MT</acronym> y otros sistemas, muchos blogs se parecen tanto unos a otros que llegan a resultar rígidos, monótonos e impersonales, no ya en estética y disposición, sino también en la forma de nombrar y titular las secciones.</p>

<p>El caso más evidente que incumbe a la herramienta de <a href="http://sixapart.com">Six Apart</a> es la forma de presentar los comentarios y trackbacks, generalmente con el término "| Comentarios (0) |", sin diferenciar si hay o no feedback posteado. Ver el número "0" en algunos casos (por no decir todos) afea el blog.</p>

<p>Hemos combinado el condicional de <a href="http://www.movabletype.org/docs/mtmanual_tags.html">MTElse</a> y el plugin <a href="http://www.virtuelvis.com/archives/48.html">MTSwitch</a> para diferenciar el texto que enlaza a los comentarios y trackbacks.</p>

<h4>Main Index</h4>
<p>Si no hay comentarios ni trackbacks debajo de la anotación, aparecerá: añadir comentario / hacer trackback. En ambos casos, el <i>title</i> completa la información del enlace (añadir primer comentario / ver URL para hacer trackback).</p>

<h4>Permalinks</h4>
<p>Precediendo el desplegable de feedback y siempre enmarcado en un h4, dependiendo de si no hay, hay 1 comentario, 1 trackback o varios, o si los comentarios están desactivados y solo hay trackbacks, etc., las nomenclaturas que aparecen en el h4 también están personalizadas según la existencia o no de feedback remitido.</p>

<p>Además, en <i>permalinks</i>, al desplegarse los comentarios y trackbacks, aparecen juntos como en <a href="http://wordpress.org">WordPress</a> gracias al plugin de Kalsey: <a href="http://kalsey.com/2003/02/simplecomments/">SimpleComments</a>. Tenía dudas, pero finalmente, tras retocar mil veces la manera de presentarlos, se distinguen bien dentro de la uniformidad.</p>

<p>Otros dos aspectos que quería probar fueron insertar una introducción al post, que jugaría el papel de descripción (no más de 4-5 líneas), resumen de la anotación, y eliminar el nombre del autor a pie de post. Aprovechando que uno tiene alma de rata de <a href="http://www.bitacoras.com/directorio/bibliotecologia">biblioteca</a>, hemos insertado el plugin de <a href="http://www.pyrojection.com">Julianne</a> que cuenta el número de anotación: <a href="http://www.pyrojection.com/entrynumber.html">MTEntryNumber</a>, que vuelve a aparecer en las plantillas de archivo mensual y categorías.</p>ionante.</p>

<p>Por lo que a mi respecta esto ocurrió hace no más de dos años. Ideasapiens ya se había lanzado al ciberespacio y rediseñar, limpiar el sitio cual <a href="http://www.eldiario.cl/shnoti.asp?noticia=197">Scotch-brite</a> <acronym title="yo no puedo estar sin él">slogan</acronym> al viento, incluido gestor de contenidos fiable, fue y es un objetivo que conforme han ido apareciendo más proyectos y trabajos se ha ido aparcando, priorizando estos últimos. Espero un día poder desquitarme.</p>

<p>Mientras tanto queda el resquicio de este weblog, que hoy estrena nuevo <i>look</i>, el relanzamiento de los <a href="http://www.ideasapiens.com/blogs">3 Blogs Temáticos</a>, sin fecha decidida aún, e ir quitando el mono realizando trabajos para el curro o la <a href="http://www.bitacoras.org/bit.php?id=81_0_1_0_C">blogosfera</a> además de retocar pequeños detalles dentro de Ideasapiens.</p>

<h2>Este blog</h2>
<p>La motivación fundamental del cambio fue, ahora que en vacaciones había tiempo, optimizar el blog, suavizarlo... a ritmo <a href="http://www.fnac.es/dsp/?servlet=extended.HomeExtendedServlet&amp;Code1=2531080605&amp;Code2=235&amp;prodID=367685">Lets Get it On</a>. Para ello había que implementar algunos de los detalles que echábamos en falta en el <a href="http://movabletype.org">Movable Type</a> que tenemos <acronym title="Versión 2.66">instalado</acronym> explotando las posiblidades que brindan los <a href="http://mt-plugins.org/">plugins</a>. </p>

<p>¿Hubiera sido más fácil actualizar al MT 3.0 o pasarnos a <a href="http://wordpress.org">WordPress</a>? Era menos divertido además de que servía de tubo de ensayo para los blogs temáticos.</p>
<p>Una vez puestos, la tentación siempre llamando a la puerta, el siguiente paso fue cambiarle la cara completamente al blog intentando plasmar lo que sería a mi juicio <b>un estándar de secciones y nomenclaturas personalizadas para cada plantilla intentando servir la demanda de información más "lógica" en cada plantilla</b>. No sé si ha conseguido del todo. Pero a lo largo de estos días se le irá dando los retoques que <acronym title="más plugins, validación en algunos posts...">faltan</acronym>. </p>
<p>Por momentos iba a desistir del cambio de <i>look</i> y solo centrarme en personalizar el <acronym title="Movable Type">MT</acronym>.</p>
<p> Las vacaciones, Sevilla, familia, deporte a 40 grados, tiran mucho pero la <b>rotulación televisiva</b> en las retransmisiones de los Juegos Olímpicos de Atenas me convenció definitivamente a darle el último empujón. En cada competición: natación, atletismo, baloncesto... me quedaba con ganas de saber datos de los deportistas.</p>

<p>En las pruebas de atletismo fue el caso más evidente. Solo aportaban 3 datos en la infografía: nombre, nacionalidad con la banderita de turno y marca de clasificación. El comentarista deportivo, si era bueno (y en <a href="http://www.rtve.es/tve">TVE</a> algunos lo son), completaban los otros dos datos fundamentales que toda rotulación en atletismo televisado debe incluir: edad, récord personal.</p>
<p>En Baloncesto, la urgencia era menor, si te gusta el basket los conocíamos a todos, y los datos como altura o edad pueden ser obviados ya que los datos estadísticos cobran más relevancia pero mi vecino no paraba de preguntarme la edad de Duncan, la altura de Gasol... Entre la gente en la piscina dando voces y el vecino no pude disfrutar de los sabios e "imparciales" comentarios del siempre entrañable <a href="http://servicios.elcomerciodigital.com/pg040814/prensa/noticias/Television/200408/14/GIJ-TEL-151.html">Pedro Barthe</a>.</p>

<h3>Estética</h3>

<p>Bajo la influencia aún del trabajo que hicimos con <a href="http://blogsmexico.com">BlogsMéxico</a> quería  probar con los <i>double borders</i>, seguir con los verdes, blancos, <i>georgias</i>, y probar las posibilidades de las cajas con gifs redondeados (y transparentes) por lo que si este <acronym title="#cdc">verde</acronym> y <acronym title="f5f5f5">gris</acronym> cansan en dos líneas de css cambiamos y listo.</p>

<p>El gif del <i>body</i>, perfilado definitivamente hace un rato, se ve a partir de 1024. Parece mentira como un gif tan sencillo, con dos trazos de líneas verticales y margen lateral en blanco, es lo que de personalidad al sitio. Los extremos laterales del gif también son transparentes aportando el <acronym title="#f3f3f3">color de fondo</acronym> la hoja de estilo.</p>

<h3>Plugins y Presentacion de anotaciones</h3>
<p>Debido al éxito de <acronym title="Movable Type">MT</acronym> y otros sistemas, muchos blogs se parecen tantos unos a otros que llegan a resultar rígidos, monótonos, impersonales, no ya en estética y disposición, pero sí, aunque parezca mentira, en la forma de nombrar y titular las secciones.</p>

<p>El caso más evidente que incumbe a la herramienta de <a href="http://sixapart.com">Six Apart</a> es la forma de presentar los comentarios y trackbacks generalmente con el término "| Comentarios (0)" |" no diferenciando entre si hay o no feedback posteado. Ver el número "0" según qué casos (por no decir todos) afea el blog.</p>

<p>Hemos combinado el condicional de <a href="http://www.movabletype.org/docs/mtmanual_tags.html">MTElse</a> y el plugin <a href="http://www.virtuelvis.com/archives/48.html">MTSwitch</a> para diferenciar el texto que enlace a los comentarios y trackbacks:</p>

<h4>Main Index</h4>
<p>Si no hay comentarios ni trackbacks debajo de la anotación aparecerá: añadir comentario / hacer trackback. En ambos casos el <i>title</i> completa la información del enlace (añadir primer comentario / ver URL para hacer trackback).</p>

<h4>Permalinks</h4>
<p>Precediendo el desplegable de feedback y siempre enmarcado en un h4 dependiendo de si no hay o hay 1 comentario, o 1 trackback, o varios, o si los comentarios están desactivados y solo hay trackbacks, etc... las nomenclaturas que aparecen en el h4 también están personalizadas acordes a la existencia o no de feedback remitido. </p>

<p>Y es que además en <i>permalinks</i> en el momento de desplegarse los comentarios y trackbacks aparecen juntos como en <a href="http://wordpress.org">WordPress</a> gracias al plugin de Kalsey: <a href="http://kalsey.com/2003/02/simplecomments/">SimpleComments</a>. Tenía dudas pero finalmente una vez retocado mil veces la manera de presentarlos se distinguen bien dentro de la uniformidad.</p>

<p>Otros dos aspectos que quería probar fueron insertar una introducción al post que jugaría el papel de descripción (no más de 4, 5 líneas), resumen de la anotación, y eliminar el nombre del autor a pie de post. Aprovechando que uno tiene alma de rata de <a href="http://www.bitacoras.com/directorio/bibliotecologia">biblioteca</a> hemos insertado el plugin de <a href="http://www.pyrojection.com"> Julianne</a> que cuenta el número de anotación: <a href="http://www.pyrojection.com/entrynumber.html">MTEntryNumber</a>,  que vuelve a aparecer en las plantillas de archivo mensual y categorías.</p>

<h4>URL's amigables y archivadas con lógica breadcrumb</h4>
<p>Si utilizáramos versiones posteriores a la 2.6 u otros <acronym title="Content Management System">CMS</acronym> como <a href="http://wordpress.org">WordPress</a> no habría hecho falta pero no sería igual. :)</p>
<p>A partir de hoy las anotaciones se archivan por el nombre de la anotación y dentro de los directorios que explicitan la fecha de publicación tal que así:<br />
<i>urldelblog.com/archivos/2004/08/titulo_anotacion.php</i></p>
<p>Pudiendo consultar los archivos de agosto de 2004 en el directorio <i>/08</i> y los de 2004 en <i>/2004</i>.</p>
<p><b>¿Cómo lo hemos hecho?</b></p>
<p>Hemos utilizado el <a href="http://www.elise.com/mt/archives/000286file_names_and_urls.php">&lt;$MTEntryTitle dirify=&quot;1&quot; trim_to=&quot;20&quot;$&gt;.php</a> (php en nuestro caso) y le hemos sumado un MTEntryDate Format que combinado:</p>
<p>&lt;$MTEntryDate format="%Y/%m"$&gt;/&lt;$MTEntryTitle dirify="1"$&gt;.php</p>
<p>y agregado desde <i>Archiving</i> (Weblog Config) a <i>Archive File Template</i> de <i>Individual Entry</i> obtenemos las URL's de los enlaces permanentes amigables a los buscadores archivándose además en carpetas acordes a la fecha de publicación. Para completar la faena insertamos en el Archive Template de Date Based (Monthly):</p>
<p>&lt;$MTEntryDate format="%Y/%m"$&gt;/index.php</p>
<p>de esta forma conseguimos que la página principal de la carpeta que archiva las anotaciones te ofrezca todos los textos escritos ese mes.</p>


<p>Para que el directorio <i>/2004</i> tenga continuidad con el <a href="http://www.proyectoweb.org/boletines/060-mayo04.html">breadcrumb</a> y paliando que MT no tiene plantilla de archivo anual, no hemos perdido tiempo en soluciones dinámicas, y hemos situado vía FTP en la carpeta <i>/2004</i> un redireccionador a los archivos de enero de 2004, y en la carpeta <i>/2003</i>, otro hacia las anotaciones de noviembre de 2003 (primer mes de publicación del blog). </p>

<h4>Acerca de = Información</h4>
<p>Sección impresincindible que la introducimos con la nomenclatura <b>Información</b> alejándonos de la traducción literal e impersonal del <i>About</i> en inglés y que debía aglutinar todos los datos relevantes del autor y de la bitácora en apenas unas líneas y ocupando el espacio justo ni más ni menos:</p>
<ul><li>Foto del autor. En esta caso <i>tipical spanish</i> a los seis años Todos tenemos un pasado :)</li>
<li>Nombre y apellidos con username entre paréntesis</li>
<li>Ciudad de residencia, edad del autor</li>
<li>Temática de la bitácora</li>
<li>Enlace a perfil más extendido</li>
<li>Link a Archivos que incluye todas las entradas <acronym title="cronológica, temáticamente y por popularidad">organizadas</acronym></li>
<li>Enlace RSS</li>
<li>Validación XHTML y CSS o en su defecto nombre del CMS utilizado</li>
</ul>

<h4>Comentarios recientes y Anotaciones nuevas</h4>
<p>Debajo del <b>Acerca de</b> dependiendo si nos encontramos en <i>Main Index</i> o <i>Individual entry</i> insertaremos dos listados diferentes acorde a la demanda de información más "lógica", al menos para nosotros, y en donde el <i>title</i> de los enlaces será un proveedor de información para ubicar en tiempo y feedback las anotaciones y comentarios.</p>
<p>En <i><b>Main Index</b></i>: se ha introducido listado de los 3 últimos comentarios encabezada por la nomenclatura: "Comentarios recientes". Aquí el <i>title</i> que incluye fecha de publicación de la anotación y del comentario completa la información del listado compuesto por:</p>
<p><i>Nombre anotación (Feedback=número de comentarios + trackbacks).<br />
Nombre de comentarista con web enlazada si tiene: extracto del comentario<br />
Seguir leyendo comentario...</i></p>
<p>Toda la curiosidad que se pueda tener respecto a los comentarios queda resuelta. O eso creo.</p>
<p>En <i><b>Individual Entry</b></i>: en vez de comentarios recientes se ha incluido las 3 últimas anotaciones presentadas como "Anotaciones nuevas" para no volver a repetir "recientes". El título de la anotación viene acompañado de la fecha de publicación (en este caso sin el día de la semana y abreviada: mucho más elegante). En el <i>title</i> hay un extracto de la anotación para ayudar a decidir si la anotación puede ser de su interés o no.</p>
<p>Debajo de "Anotaciones nuevas" se ha insertado listado de categorías introducido con la nomenclatura "Secciones". Hay términos en la blogosfera que cansan y "Categorías" al igual que "fenómeno blog" a pesar de no poder prescindir de ellos hay momentos que causan rechazo a la hora de nombrarlos.</p>
<blockquote>Hay otros pequeños detalles como enlazar el mes de publicación de la anotación desde la plantilla de categorías y otros tantos por aplicar que si da tiempo en estos últimos días en <a href="http://www.alcalaguadaira.org/">Alcalá</a> intentaremos implementar.</blockquote>
<p>Respecto a otros cambios para acercar Ideasapiens a los estándares, e ir avergonzándome menos de lo que programamos antes de la cssmanía. Ayer se cambió:</p>

<h2>Header de la portada principal</h2>
<p>Tablas, columnas y un gif (en <i>background-image</i>) azul y gris componían desde hace más de un año la cabecera de la página principal que enmarca logo, accesos informativos y el buscador de Google &amp; IS. Decir que sobraba código es poco. Una tabla con width: 100% que tenía de fondo el <i>background-image</i>, y otra tabla contenedor centrada de 770px con varias columnas eran el esqueleto:</p>

<p>Desde ayer, una vez pasado por el filtro del xhtml y CSS: mismo aspecto, cabecera sin tablas y con casi 10kb menos de peso, cosa que agradecerá la transferencia mensual contratada y el bolsillo de éste que la paga. También accesibles desde el <a href="http://www.ideasapiens.com/blogs">directorio de Blogs IS </a>y la página de <a href="http://www.ideasapiens.com/error404.php">error 404</a>. Hemos hecho otra versión para este blog. Y es que hay tantas posibilidades para crear lo mismo que el reto está en cómo conseguirlo con el mínimo código posible y accesible en la mayor cantidad de navegadores. Aunque sinceramente para mí <a href="http://www.opera.com/">Opera</a> y <a href="http://www.apple.com/safari/">Safari</a> no existen.</p>

<h2>Página de error 404</h2>
<p>Es una de las páginas más vistas desde que la insertamos hace más o menos un año a pesar de que comprobamos habitualmente si hay enlaces rotos dentro de IS. El resultado es mínimo.</p>

<ol>
<li>Tenían que desaparecer las tablas y validar en XHTML y CSS</li>
<li>Texto explicativo, no más de 3 líneas, para hacerla más amigable en el que se introdujeran los accesos directos y enlace a reportar link roto si había llegado a ella ya dentro de IS.</li>
<li>No debía aparecer el <i>scroll down</i> del navegador</li>
<li>Debía incorporar el nuevo header, buscador incluido. Antes solo aparecía como cabecera un border-top #1264cc (azul IS) en el body</li>
<li>Debía de fomentar el conocimiento de los weblogs de ahí las dos pastillas de bitacoras.com/org y el texto que las introduce.</li>
<li>Integrar el weblog de novedades en IS aplicando la tendencia de transparencia y normalidad que toda web, empresa, institución debe fomentar y si es por medio de weblogs mejor que mejor. Había dudas de si meter include con el título y excerpt de la última anotación, pero era desviar la atención de información y al final no es URL dinámica</li>
</ol>

<p>Y con esto y un bizcocho, los días ya son más cortos, el otoño se deja adivinar, la temporada 2004-2005 a punto de dar el pistoletazo de salida. Y yo que no me quiero a ir a Barcelona. Voy a esconder las maletas.</p>
