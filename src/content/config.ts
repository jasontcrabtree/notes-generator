import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    source: z.enum(["chatgpt", "codex", "manual"]).default("manual"),
    sourceTitle: z.string(),
    sourceUrl: z.string().url(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
