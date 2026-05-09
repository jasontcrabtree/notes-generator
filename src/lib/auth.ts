import type { APIContext } from "astro";

const COOKIE_NAME = "notes_admin";
const ONE_WEEK = 60 * 60 * 24 * 7;

function getSecret() {
  return import.meta.env.ADMIN_PASSWORD;
}

export function hasAdminPassword() {
  return Boolean(getSecret());
}

export function isAuthenticated(context: APIContext) {
  const secret = getSecret();
  const cookie = context.cookies.get(COOKIE_NAME)?.value;
  return Boolean(secret && cookie === secret);
}

export function requireAuth(context: APIContext) {
  if (!isAuthenticated(context)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }

  return null;
}

export async function login(context: APIContext) {
  const body = await context.request.json().catch(() => null);
  const password = body?.password;
  const secret = getSecret();

  if (!secret || password !== secret) {
    return new Response(JSON.stringify({ error: "Invalid password" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }

  context.cookies.set(COOKIE_NAME, secret, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    path: "/",
    maxAge: ONE_WEEK,
  });

  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json" },
  });
}
