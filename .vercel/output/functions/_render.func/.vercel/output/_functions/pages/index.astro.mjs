import { d as createComponent, i as renderComponent, g as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_sZNvva9X.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_aAB2gZof.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CC0azWPy.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const notes = (await getCollection("notes")).filter((note) => !note.data.draft).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="page-title">Questions, distilled.</h1> <p class="lede">
Short technical notes shaped from real learning questions. No chat transcripts,
      just the durable bit worth finding again.
</p> <section class="note-list" aria-label="Notes"> ${notes.map((note) => renderTemplate`<article class="note-card"> <p class="meta"> ${note.data.pubDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })} </p> <h2> <a${addAttribute(`/notes/${note.slug}/`, "href")}>${note.data.title}</a> </h2> <p>${note.data.description}</p> <div class="tags"> ${note.data.tags.map((tag) => renderTemplate`<span class="tag">${tag}</span>`)} </div> </article>`)} </section> </main> ` })}`;
}, "/Users/jasontcrabtree/Documents/Codex/notes-generator/src/pages/index.astro", void 0);

const $$file = "/Users/jasontcrabtree/Documents/Codex/notes-generator/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
