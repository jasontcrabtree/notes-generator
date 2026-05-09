import type { APIRoute } from "astro";
import { hasAdminPassword, isAuthenticated } from "../../lib/auth";

export const prerender = false;

export const GET: APIRoute = async (context) =>
  new Response(
    JSON.stringify({
      authenticated: isAuthenticated(context),
      configured: hasAdminPassword(),
    }),
    { headers: { "content-type": "application/json" } },
  );
