import { r as requireAuth } from '../../chunks/auth_Bd2FR1GN.mjs';
import { z } from 'zod';
import { f as fallbackDraft } from '../../chunks/note_vLhOouv8.mjs';
export { renderers } from '../../renderers.mjs';

z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).max(6),
  sourceTitle: z.string(),
  sourceUrl: z.string().url(),
  body: z.string()
});
async function createDraft(input) {
  {
    return fallbackDraft(input);
  }
}

const SHARE_URL_PATTERN = /^https:\/\/chatgpt\.com\/share\/[a-zA-Z0-9-]+\/?$/;
function stripHtml(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
}
async function extractSharedConversation(url) {
  if (!SHARE_URL_PATTERN.test(url)) {
    throw new Error("Use a ChatGPT shared link like https://chatgpt.com/share/...");
  }
  const response = await fetch(url, {
    headers: {
      "user-agent": "notes-generator/0.1",
      accept: "text/html"
    }
  });
  if (!response.ok) {
    throw new Error("Could not read that shared link.");
  }
  const html = await response.text();
  const text = stripHtml(html);
  if (text.length < 160) {
    throw new Error("The shared link loaded, but there was not enough readable text to draft from.");
  }
  return text.slice(0, 24e3);
}

const prerender = false;
const POST = async (context) => {
  const unauthorized = requireAuth(context);
  if (unauthorized) return unauthorized;
  const body = await context.request.json().catch(() => null);
  let question = body?.question;
  let answer = body?.answer;
  if (body?.shareUrl) {
    const conversation = await extractSharedConversation(body.shareUrl);
    question = `Distill this shared ChatGPT conversation into a technical note:

${conversation}`;
    answer = body.answer;
  }
  if (!question) {
    return new Response(JSON.stringify({ error: "Question or shared link is required" }), {
      status: 400,
      headers: { "content-type": "application/json" }
    });
  }
  const draft = await createDraft({
    question,
    answer,
    source: body.source || (body.shareUrl ? "chatgpt" : "manual")
  });
  return new Response(JSON.stringify({ draft }), {
    headers: { "content-type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
