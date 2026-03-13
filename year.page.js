export const layout = "layouts/year-archive.vto";

export default function* ({ search }) {
  const allItems = search.pages("type=post|note", "date=asc");

  const groups = new Map();

  for (const item of allItems) {
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