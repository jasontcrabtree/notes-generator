const COOKIE_NAME = "notes_admin";
function getSecret() {
  return undefined                              ;
}
function hasAdminPassword() {
  return Boolean(getSecret());
}
function isAuthenticated(context) {
  const secret = getSecret();
  context.cookies.get(COOKIE_NAME)?.value;
  return Boolean(secret);
}
function requireAuth(context) {
  if (!isAuthenticated(context)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" }
    });
  }
  return null;
}
async function login(context) {
  const body = await context.request.json().catch(() => null);
  body?.password;
  {
    return new Response(JSON.stringify({ error: "Invalid password" }), {
      status: 401,
      headers: { "content-type": "application/json" }
    });
  }
}

export { hasAdminPassword as h, isAuthenticated as i, login as l, requireAuth as r };
