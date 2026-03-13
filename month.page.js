export const layout = "layouts/month-archive.vto";

export default function* ({ search }) {
  const allItems = search.pages("type=post|note", "date=asc");

  const groups = new Map();

  for (const item of allItems) {
    const key = item.date.toISOString().slice(0, 7);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }

  for (const [key, items] of groups) {
    const [year, month] = key.split("-");

    yield {
      url: `/archivos/${year}/${month}/`,
      title: items[0].date.toLocaleDateString("es", { month: "long", year: "numeric" }),
      year,
      month,
      items: items.sort((a, b) => a.date - b.date),
    };
  }
}