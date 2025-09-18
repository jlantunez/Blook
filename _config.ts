import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import date from "lume/plugins/date.ts";
import icons from "lume/plugins/icons.ts";
import inline from "lume/plugins/inline.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import feed from "lume/plugins/feed.ts";
import metas from "lume/plugins/metas.ts";
import favicon from "lume/plugins/favicon.ts";

import { es } from "npm:date-fns@4.1.0/locale/es";

const site = lume()
  .use(icons())
  .use(date({
    locales: { es },
    formats: {
      SHORT: "d MMM yyyy",
    },
  }))
  .use(googleFonts({
    fonts: {
      text:
        "https://fonts.google.com/share?selection.family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900",
    },
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
  .use(readingInfo())
  .use(inline())
  .use(basePath())
  .add("style.css")
  .add("fonts")
  .add("img");

export default site;
