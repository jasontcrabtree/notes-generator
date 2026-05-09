import type { APIRoute } from "astro";
import { requireAuth } from "../../lib/auth";
import { publishNote } from "../../lib/github";

export const prerender = false;

export const POST: APIRoute = async (context) => {
  const unauthorized = requireAuth(context);
  if (unauthorized) return unauthorized;

  const body = await context.request.json().catch(() => null);
  const draft = body?.draft;

  if (!draft?.title || !draft?.slug || !draft?.body || !draft?.sourceTitle || !draft?.sourceUrl) {
    return new Response(JSON.stringify({ error: "Complete draft is required" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  try {
    const result = await publishNote(draft);
    return new Response(JSON.stringify({ result }), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Publish failed",
      }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      },
    );
  }
};
