import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import googleFonts from "lume/plugins/google_fonts.ts";
import date from "lume/plugins/date.ts";
import icons from "lume/plugins/icons.ts";
import inline from "lume/plugins/inline.ts";

import { es } from "npm:date-fns@4.1.0/locale/es";

const site = lume()
  .use(icons())
  .use(date({
    locales: { es },
  }))
  .use(googleFonts({
    fonts: {
      text:
        "https://fonts.google.com/share?selection.family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900",
    },
  }))
  .use(lightningcss())
  .use(inline())
  .use(basePath())
  .add("style.css")
  .add("img");

export default site;
