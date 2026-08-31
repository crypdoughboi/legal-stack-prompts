import { categories } from "@/data";
import type {
  Prompt,
  PromptCategory,
  PromptSearchResult,
  ResolvedTopicGroup,
} from "@/lib/types";

/** Label used for prompts that are not listed under any topic. */
export const OTHER_WORKFLOWS_LABEL = "Other workflows";

/** Maximum number of search results rendered at once. */
export const SEARCH_RESULT_LIMIT = 12;

/** Total number of prompts in the bank. */
export const totalPromptCount = categories.reduce(
  (total, category) => total + category.prompts.length,
  0,
);

/** Map of prompt id -> the topic label it belongs to. */
export const topicByPromptId: Record<string, string> = Object.fromEntries(
  categories.flatMap((category) =>
    category.topics.flatMap((topic) =>
      topic.promptIds.map((promptId) => [promptId, topic.label] as const),
    ),
  ),
);

export function findCategory(id: string | null): PromptCategory | undefined {
  if (!id) return undefined;
  return categories.find((category) => category.id === id);
}

/**
 * Resolve a category's topics into groups of prompts, in topic order.
 * Empty topics are dropped; prompts missing from every topic are appended
 * under "Other workflows".
 */
export function groupPromptsByTopic(
  category: PromptCategory,
): ResolvedTopicGroup[] {
  const byId = new Map(category.prompts.map((prompt) => [prompt.id, prompt]));

  const groups = category.topics
    .map((topic) => ({
      label: topic.label,
      prompts: topic.promptIds
        .map((promptId) => byId.get(promptId))
        .filter((prompt): prompt is Prompt => Boolean(prompt)),
    }))
    .filter((group) => group.prompts.length > 0);

  const grouped = new Set(category.topics.flatMap((topic) => topic.promptIds));
  const ungrouped = category.prompts.filter((prompt) => !grouped.has(prompt.id));

  return ungrouped.length
    ? [...groups, { label: OTHER_WORKFLOWS_LABEL, prompts: ungrouped }]
    : groups;
}

/**
 * Case-insensitive substring search across practice label, topic label,
 * title, and summary. Returns at most {@link SEARCH_RESULT_LIMIT} results.
 */
export function searchPrompts(query: string): PromptSearchResult[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];

  return categories
    .flatMap((category) =>
      category.prompts
        .filter((prompt) =>
          `${category.label} ${topicByPromptId[prompt.id] ?? ""} ${prompt.title} ${prompt.summary}`
            .toLowerCase()
            .includes(needle),
        )
        .map((prompt) => ({
          ...prompt,
          practice: category.label,
          topic: topicByPromptId[prompt.id] ?? OTHER_WORKFLOWS_LABEL,
        })),
    )
    .slice(0, SEARCH_RESULT_LIMIT);
}
