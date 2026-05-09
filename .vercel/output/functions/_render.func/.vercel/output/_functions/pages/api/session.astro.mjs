import { h as hasAdminPassword, i as isAuthenticated } from '../../chunks/auth_Bd2FR1GN.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async (context) => new Response(
  JSON.stringify({
    authenticated: isAuthenticated(context),
    configured: hasAdminPassword()
  }),
  { headers: { "content-type": "application/json" } }
);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
