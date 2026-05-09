import type { NoteDraft } from "./note";
import { toMdx } from "./note";

type PublishResult = {
  path: string;
  commitUrl?: string;
  htmlUrl?: string;
};

function env(name: string) {
  const value = import.meta.env[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

export async function publishNote(draft: NoteDraft): Promise<PublishResult> {
  const owner = env("GITHUB_OWNER");
  const repo = env("GITHUB_REPO");
  const token = env("GITHUB_TOKEN");
  const branch = import.meta.env.GITHUB_BRANCH || "main";
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
        "x-github-api-version": "2022-11-28",
      },
      body: JSON.stringify({
        message: `Add note: ${draft.title}`,
        content: Buffer.from(mdx).toString("base64"),
        branch,
      }),
    },
  );

  const json = await response.json();

  if (!response.ok) {
    const message = json?.message ?? "GitHub publish failed";
    throw new Error(message);
  }

  return {
    path,
    commitUrl: json?.commit?.html_url,
    htmlUrl: json?.content?.html_url,
  };
}
