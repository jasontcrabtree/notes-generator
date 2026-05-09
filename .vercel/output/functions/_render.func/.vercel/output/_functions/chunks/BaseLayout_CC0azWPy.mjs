import { c as createAstro, d as createComponent, e as addAttribute, r as renderHead, f as renderSlot, g as renderTemplate } from './astro/server_sZNvva9X.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://notes.jasontcrabtree.com");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Notes", description = "Short technical notes distilled from real questions." } = Astro2.props;
  const themeParam = Astro2.url.searchParams.get("theme");
  const theme = themeParam === "blueprint" || themeParam === "salon" || themeParam === "mono" ? themeParam : void 0;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="noindex, nofollow"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body${addAttribute(theme, "data-theme")}>  <header class="site-header"> <div class="site-header__inner"> <a class="brand" href="/">Notes</a> <nav class="nav" aria-label="Main navigation"> <a href="/">Notes</a> <a href="/new">New</a> </nav> <div class="site-search" role="search"> <label class="site-search__label" for="note-search">Search</label> <input id="note-search" name="notes_query" type="text" inputmode="search" autocomplete="off" autocapitalize="off" spellcheck="false" data-lpignore="true" data-1p-ignore="true" data-form-type="other" placeholder="Find a note"> <div class="site-search__results" id="note-search-results" hidden></div> </div> </div> </header> ${renderSlot($$result, $$slots["default"])} <aside class="ai-banner" id="ai-banner" hidden> <p>All Notes are AI-generated for the purpose of technical references</p> <button class="ai-banner__dismiss" id="ai-banner-dismiss" type="button" aria-label="Dismiss AI note notice">
&times;
</button> </aside>   </body></html>`;
}, "/Users/jasontcrabtree/Documents/Codex/notes-generator/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
