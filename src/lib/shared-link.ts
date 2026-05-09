const SHARE_URL_PATTERN = /^https:\/\/chatgpt\.com\/share\/[a-zA-Z0-9-]+\/?$/;

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export async function extractSharedConversation(url: string) {
  if (!SHARE_URL_PATTERN.test(url)) {
    throw new Error("Use a ChatGPT shared link like https://chatgpt.com/share/...");
  }

  const response = await fetch(url, {
    headers: {
      "user-agent": "notes-generator/0.1",
      accept: "text/html",
    },
  });

  if (!response.ok) {
    throw new Error("Could not read that shared link.");
  }

  const html = await response.text();
  const text = stripHtml(html);

  if (text.length < 160) {
    throw new Error("The shared link loaded, but there was not enough readable text to draft from.");
  }

  return text.slice(0, 24000);
}
