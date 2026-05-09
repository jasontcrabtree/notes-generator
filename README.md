# notes-generator

Astro site for short technical notes distilled from learning questions.

Public site:

- `/` lists notes from `src/content/notes`
- `/notes/:slug` renders each MDX note
- The site sends `noindex, nofollow` metadata and ships a `robots.txt` that disallows crawling.

Admin flow:

- `/new` is protected by `ADMIN_PASSWORD`
- `/api/draft` uses OpenAI to convert a question plus rough context into a concise note draft
- `/api/publish` commits the MDX note to GitHub through the GitHub Contents API
- Vercel redeploys automatically when the connected GitHub repo receives the commit

## Required Vercel Environment Variables

```txt
ADMIN_PASSWORD=...
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-4o-mini
GITHUB_TOKEN=...
GITHUB_OWNER=jasontcrabtree
GITHUB_REPO=notes-generator
GITHUB_BRANCH=main
```

The GitHub token needs permission to write repository contents. For a fine-grained
personal access token, grant Contents read/write access to this repository.
