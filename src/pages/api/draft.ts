import type { APIRoute } from "astro";
import { requireAuth } from "../../lib/auth";
import { createDraft } from "../../lib/openai";
import { extractSharedConversation } from "../../lib/shared-link";

export const prerender = false;

export const POST: APIRoute = async (context) => {
  const unauthorized = requireAuth(context);
  if (unauthorized) return unauthorized;

  const body = await context.request.json().catch(() => null);

  let question = body?.question;
  let answer = body?.answer;

  if (body?.shareUrl) {
    const conversation = await extractSharedConversation(body.shareUrl);
    question = `Distill this shared ChatGPT conversation into a technical note:\n\n${conversation}`;
    answer = body.answer;
  }

  if (!question) {
    return new Response(JSON.stringify({ error: "Question or shared link is required" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const draft = await createDraft({
    question,
    answer,
    source: body.source || (body.shareUrl ? "chatgpt" : "manual"),
  });

  return new Response(JSON.stringify({ draft }), {
    headers: { "content-type": "application/json" },
  });
};
