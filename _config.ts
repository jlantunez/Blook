import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import date from "lume/plugins/date.ts";
import icons from "lume/plugins/icons.ts";
import inline from "lume/plugins/inline.ts";
import feed from "lume/plugins/feed.ts";
import metas from "lume/plugins/metas.ts";
import favicon from "lume/plugins/favicon.ts";
import checkUrls from "lume/plugins/check_urls.ts";
import transformImages from "lume/plugins/transform_images.ts";
import sitemap from "lume/plugins/sitemap.ts";

import { es } from "npm:date-fns@4.1.0/locale/es";

const site = lume({
  location: new URL("https://jlantunez.com/"),
})
  .use(icons())
  .use(date({
    locales: { es },
    formats: {
      SHORT: "d MMM yyyy",
    },
  }))
  .use(googleFonts({
    fonts: {
      Inter:
        "https://fonts.google.com/share?selection.family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900",
    },
  }))
  .use(checkUrls({
    ignore: ["https://jlantunez.com/columnas/registro/"],
  }))
  .use(metas())
  .use(favicon())
  .use(feed({
    query: "type=post",
    info: {
      title: "Columnas de José Luís Antúnez",
      lang: "es",
    },
    items: {
      image: "=img",
    },
  }))
  .use(lightningcss())
  .use(basePath())
  .use(transformImages())
  .use(inline())
  .use(sitemap())
  .filter("excerpt", extractExcerpt)
  .ignore("README.md")
  .add("style.css")
  .add("script.js")
  .add("fonts")
  .add("assets")
  .add("img");

export default site;

function extractExcerpt(text: string, length: number = 150) {
  if (text.length <= length) {
    return text;
  }
  const space = text.indexOf(" ", length);
  if (space > 0) {
    return text.slice(0, space) + "…";
  }
  return text.slice(0, length) + "…";
}
