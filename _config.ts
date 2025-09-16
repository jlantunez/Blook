import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

const site = lume()
  .use(basePath())
  .use(googleFonts({
    fonts:
      "https://fonts.google.com/share?selection.family=Geist:wght@100..900",
  }))
  .use(lightningcss())
  .add("style.css")
  .add("img");

export default site;
