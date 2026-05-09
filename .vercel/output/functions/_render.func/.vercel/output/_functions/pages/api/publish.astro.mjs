import { r as requireAuth } from '../../chunks/auth_Bd2FR1GN.mjs';
import { t as toMdx } from '../../chunks/note_vLhOouv8.mjs';
export { renderers } from '../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://notes.jasontcrabtree.com", "SSR": true};
function env(name) {
  const value = Object.assign(__vite_import_meta_env__, { _: process.env._ })[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}
async function publishNote(draft) {
  const owner = env("GITHUB_OWNER");
  const repo = env("GITHUB_REPO");
  const token = env("GITHUB_TOKEN");
  const branch = Object.assign(__vite_import_meta_env__, { _: process.env._ }).GITHUB_BRANCH || "main";
  const path = `src/content/notes/${draft.slug}.mdx`;
  const mdx = toMdx(draft);
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(path).replaceAll("%2F", "/")}`,
    {
      method: "PUT",
      headers: {
        accept: "application/vnd.github+json",
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
        "x-github-api-version": "2022-11-28"
      },
      body: JSON.stringify({
        message: `Add note: ${draft.title}`,
        content: Buffer.from(mdx).toString("base64"),
        branch
      })
    }
  );
  const json = await response.json();
  if (!response.ok) {
    const message = json?.message ?? "GitHub publish failed";
    throw new Error(message);
  }
  return {
    path,
    commitUrl: json?.commit?.html_url,
    htmlUrl: json?.content?.html_url
  };
}

const prerender = false;
const POST = async (context) => {
  const unauthorized = requireAuth(context);
  if (unauthorized) return unauthorized;
  const body = await context.request.json().catch(() => null);
  const draft = body?.draft;
  if (!draft?.title || !draft?.slug || !draft?.body || !draft?.sourceTitle || !draft?.sourceUrl) {
    return new Response(JSON.stringify({ error: "Complete draft is required" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }
  try {
    const result = await publishNote(draft);
    return new Response(JSON.stringify({ result }), {
      headers: { "content-type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Publish failed"
      }),
      {
        status: 500,
        headers: { "content-type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
