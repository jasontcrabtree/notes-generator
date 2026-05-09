import type { APIRoute } from "astro";
import { login } from "../../lib/auth";

export const prerender = false;

export const POST: APIRoute = async (context) => login(context);
