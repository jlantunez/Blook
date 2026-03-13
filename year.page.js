export const layout = "layouts/year-archive.vto";

export default function* ({ search }) {
  const allItems = search.pages("layout=layouts/post.vto", "date=asc");
  const allNotes = search.pages("layout=layouts/note.vto", "date=asc");
  const combined = [...allItems, ...allNotes].sort((a, b) => a.date - b.date);

  const groups = new Map();

  for (const item of combined) {
    const year = item.date.getFullYear().toString();
    if (!groups.has(year)) groups.set(year, []);
    groups.get(year).push(item);
  }

  for (const [year, items] of groups) {
    yield {
      url: `/archivos/${year}/`,
      title: year,
      year,
      items,
    };
  }
}