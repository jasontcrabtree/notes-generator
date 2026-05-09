export type NoteDraft = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  source: "chatgpt" | "codex" | "manual";
  sourceTitle: string;
  sourceUrl: string;
  body: string;
};

export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function toMdx(draft: NoteDraft) {
  const tags = draft.tags.map((tag) => JSON.stringify(tag)).join(", ");
  const date = new Date().toISOString().slice(0, 10);

  return `---
title: ${JSON.stringify(draft.title)}
description: ${JSON.stringify(draft.description)}
pubDate: ${date}
tags: [${tags}]
source: ${JSON.stringify(draft.source)}
sourceTitle: ${JSON.stringify(draft.sourceTitle)}
sourceUrl: ${JSON.stringify(draft.sourceUrl)}
draft: false
---

${draft.body.trim()}
`;
}

export function fallbackDraft(input: {
  question: string;
  answer?: string;
  source: NoteDraft["source"];
}): NoteDraft {
  const firstLine = input.question.split("\n").find(Boolean) ?? "Untitled note";
  const title = firstLine.replace(/[?.!]+$/, "").slice(0, 82);
  const body = [
    "## Short Version",
    (input.answer || input.question).trim(),
    "",
    "## Mental Model",
    "Add the core distinction or rule of thumb here.",
    "",
    "## Code Example",
    "Add a small code example when it clarifies the idea.",
  ].join("\n");

  return {
    title,
    slug: slugify(title) || "untitled-note",
    description: "A concise technical note distilled from a learning question.",
    tags: ["notes"],
    source: input.source,
    sourceTitle: "Apple Developer Documentation",
    sourceUrl: "https://developer.apple.com/documentation/",
    body,
  };
}
