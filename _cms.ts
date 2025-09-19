import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

// user and pass are environment variables, stored in an .env file
const user = Deno.env.get("CMS_USER") ?? "admin";
const pass = Deno.env.get("CMS_PASSWORD") ?? "";

cms.auth({
  [user]: pass,
});

// Enable git to pull/push changes
cms.git();

cms.collection({
  name: "Posts",
  store: "src:posts/*.md",
  fields: [
    "title: text",
    "date: date",
    "img: file",
    "content: markdown",
  ],
});

cms.document({
  name: "Índice",
  store: "src:acerca-de.yml",
  fields: [
    "title: text",
    "subtitle: text",
    "intro: markdown",
  ],
});

cms.document({
  name: "404",
  store: "src:404.yml",
  fields: [
    "title: text",
    "description: markdown",
  ],
});

cms.upload({
  name: "Imágenes",
  store: "src:img",
});

export default cms;
