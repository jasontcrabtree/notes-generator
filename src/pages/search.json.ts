import { getCollection } from "astro:content";

export const prerender = true;

export async function GET() {
  const notes = (await getCollection("notes"))
    .filter((note) => !note.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return new Response(
    JSON.stringify(
      notes.map((note) => ({
        title: note.data.title,
        description: note.data.description,
        tags: note.data.tags,
        url: `/notes/${note.id}/`,
      })),
    ),
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=0, must-revalidate",
      },
    },
  );
}
