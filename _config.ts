import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume();

site.use(basePath())
  .add("img");

export default site;
