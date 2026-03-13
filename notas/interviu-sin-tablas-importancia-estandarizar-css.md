---
title: Interviú sin tablas e importancia estandarizar CSS
date: 2005-08-17
slug: interviu-sin-tablas-importancia-estandarizar-css
metas:
  description: >-
    Grupo Zeta ha renovado la edición digital de Interviú apuntándose a la lista
    de medios que usan HXTML y CSS.
---
<p>Hace unos días que los del Grupo Zeta han renovado la edición digital de <a href="http://interviu.es">Interviú</a> apuntándose a la lista de medios importantes españoles que han <a href="http://www.ideasapiens.com/blogs/is/archivos/2005/02/20minutos_y_css.php">apostado</a> por el <acronym title="Transitional">XHTML</acronym> y CSS.</p>

<p>Supongo que los responsables habrán sido sus propios desarrolladores. Viendo CSS no aparecen créditos, pero me ha llamado la atención la castellinización de las ids y clases. Como muestra escriben <code>.migaspan</code> en vez de <code>.breadcrumb</code></p>

<p>Una de las ventajas de maquetar en CSS es su versatilidad. No estandarizando nombres o cambiándolos en cada trabajo, la futura versión incluso si se la encargan al mismo desarrollador, tendrá un inicio confuso.</p>

<p>Estandaricemos nombres. Por ejemplo: header, logo, nav, wrap, main, sidebar, side-l, side-r, footer...</p>

<p>Otra buena práctica es definir <code>body class="ms"</code> y <code>"sm"</code>: main (m) sidebar (s).</p>

<p>Se lo vi a <a href="http://stopdesign.com">Bowman</a> en <a href="http://adaptivepath.com">AdaptivePath</a>. Y hace poco lo apliqué en <a href="http://blogsdominicanos.com">BlogsDominicanos</a>.</p>
