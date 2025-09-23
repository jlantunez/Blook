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
  name: "Columnas",
  store: "src:archivos/*.md",
  documentName: `{title}.md`,
  fields: [
    "title: text",
    "date: date",
    {
      name: "image",
      type: "object",
      attributes: {
        open: true,
      },
      fields: [
        "src: file",
        "x: number",
        "y: number",
      ],
    },
    "content: markdown",
  ],
});

cms.document({
  name: "Portada",
  store: "src:index.yml",
  fields: [
    "title: text",
    "description: text",
    {
      name: "post_limit",
      type: "number",
      label: "Número de posts",
      description:
        "Número de posts a mostrar en la portada (incluyendo el destacado)",
    },
  ],
});

cms.document({
  name: "Archivo",
  store: "src:archivos.yml",
  fields: [
    "title: text",
    "intro: markdown",
    "technology: markdown",
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
