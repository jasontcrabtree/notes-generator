import OpenAI from 'openai';
import { z } from 'zod';
import { zodResponseFormat } from 'openai/helpers/zod';
import { fallbackDraft, slugify, type NoteDraft } from './note';

const DraftSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).max(6),
  sourceTitle: z.string(),
  sourceUrl: z.string(),
  body: z.string(),
});

function normalizeUrl(value: string) {
  try {
    return new URL(value).toString();
  } catch {
    return (
      'https://www.google.com/search?q=' +
      encodeURIComponent(value || 'technical documentation')
    );
  }
}

export async function createDraft(input: {
  question: string;
  answer?: string;
  source: NoteDraft['source'];
}): Promise<NoteDraft> {
  if (!import.meta.env.OPENAI_API_KEY) {
    return fallbackDraft(input);
  }

  const client = new OpenAI({ apiKey: import.meta.env.OPENAI_API_KEY });

  const response = await client.beta.chat.completions.parse({
    model: import.meta.env.OPENAI_MODEL || 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'Turn learning conversations into concise but exhaustive technical notes, e.g. if the chat describes multiple items or approaches include all approaches. Do not preserve chatty transcript style. Every note body must use this structure: ## Short Version, ## Mental Model, ## Code Example and ## Long Version. If code is not genuinely relevant, still include ## Code Example with one sentence explaining why there is no useful code example. Choose the best definitive primary source for the topic, usually official documentation, a language guide, a standards document, or an authoritative project page. Include fenced code blocks with a language whenever code is relevant. Return MDX body only, without frontmatter.',
      },
      {
        role: 'user',
        content: [
          `Question:\n${input.question}`,
          input.answer ? `Context or answer:\n${input.answer}` : '',
        ]
          .filter(Boolean)
          .join('\n\n'),
      },
    ],
    response_format: zodResponseFormat(DraftSchema, 'note_draft'),
  });

  const parsed = response.choices[0]?.message.parsed;

  if (!parsed) {
    return fallbackDraft(input);
  }

  return {
    title: parsed.title,
    slug: slugify(parsed.title),
    description: parsed.description,
    tags: parsed.tags,
    source: input.source,
    sourceTitle: parsed.sourceTitle,
    sourceUrl: normalizeUrl(parsed.sourceUrl),
    body: parsed.body,
  };
}
