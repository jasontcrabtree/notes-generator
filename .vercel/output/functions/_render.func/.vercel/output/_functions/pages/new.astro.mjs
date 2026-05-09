import { d as createComponent, i as renderComponent, g as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_sZNvva9X.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CC0azWPy.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "New note | Notes", "description": "Create a new distilled learning note." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="admin-shell"> <h1 class="page-title">New note</h1> <p class="lede">
Paste a ChatGPT shared link, copied conversation text, or both. Distill it,
      edit the note, then publish to GitHub.
</p> <section id="login-panel" class="panel" hidden> <label>
Admin password
<input id="password" type="password" autocomplete="current-password"> </label> <button id="login-button" type="button">Unlock</button> <p id="login-status" class="status"></p> </section> <section id="admin-panel" class="admin-grid" hidden> <form class="panel" id="source-form"> <label>
ChatGPT shared link
<input id="share-url" type="url" placeholder="https://chatgpt.com/share/..."> </label> <label>
Source
<select id="source"> <option value="chatgpt">ChatGPT</option> <option value="codex">Codex</option> <option value="manual">Manual</option> </select> </label> <label>
Question
<textarea id="question" placeholder="Paste the copied ChatGPT text or the question you asked."></textarea> </label> <label>
Extra context
<textarea id="answer" placeholder="Optional: add constraints, corrections, links, or notes."></textarea> </label> <div class="button-row"> <button id="draft-button" type="submit">Distill draft</button> <button class="secondary" id="clear-button" type="button">Clear</button> </div> <p id="draft-status" class="status"></p> </form> <form class="panel" id="publish-form"> <label>
Title
<input id="title" required> </label> <label>
Slug
<input id="slug" required> </label> <label>
Description
<textarea id="description" required></textarea> </label> <label>
Tags
<input id="tags" placeholder="swift, swiftdata, swiftui"> </label> <label>
Definitive source title
<input id="source-title" required> </label> <label>
Definitive source URL
<input id="source-url" type="url" required> </label> <label>
MDX body
<textarea id="body" required></textarea> </label> <button id="publish-button" type="submit">Publish</button> <p id="publish-status" class="status"></p> </form> </section> </main> ` })} `;
}, "/Users/jasontcrabtree/Documents/Codex/notes-generator/src/pages/new/index.astro", void 0);

const $$file = "/Users/jasontcrabtree/Documents/Codex/notes-generator/src/pages/new/index.astro";
const $$url = "/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
