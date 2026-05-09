import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://notes.jasontcrabtree.com",
  output: "server",
  adapter: vercel(),
  integrations: [mdx()],
});
