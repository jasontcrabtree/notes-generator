import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DYnOg752.mjs';
import { manifest } from './manifest_6R10g_G0.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/draft.astro.mjs');
const _page2 = () => import('./pages/api/login.astro.mjs');
const _page3 = () => import('./pages/api/publish.astro.mjs');
const _page4 = () => import('./pages/api/session.astro.mjs');
const _page5 = () => import('./pages/new.astro.mjs');
const _page6 = () => import('./pages/notes/_---slug_.astro.mjs');
const _page7 = () => import('./pages/search.json.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/draft.ts", _page1],
    ["src/pages/api/login.ts", _page2],
    ["src/pages/api/publish.ts", _page3],
    ["src/pages/api/session.ts", _page4],
    ["src/pages/new/index.astro", _page5],
    ["src/pages/notes/[...slug].astro", _page6],
    ["src/pages/search.json.ts", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e14419c2-435a-49d6-812a-0710c4cdc48b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
