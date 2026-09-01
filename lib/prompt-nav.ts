import { categories } from "@/data";
import { OTHER_WORKFLOWS_LABEL, topicByPromptId } from "@/lib/prompt-bank";
import { PROMPT_META, SEARCH_SYNONYMS, TASKS, LEAD_TASKS, type TaskDefinition, type TaskId } from "@/lib/prompt-meta";
import type { Prompt } from "@/lib/types";

/** Maximum number of results returned by {@link searchNavPrompts}. */
const SEARCH_RESULT_LIMIT = 40;

/** A prompt annotated with where it lives, plus the task-first navigation fields. */
export interface NavPrompt extends Prompt {
  practice: string;
  practiceLabel: string;
  topic: string;
  task: TaskId;
  gets: string;
}

/** A practice area as used by the task-first navigation (id + display label). */
export interface PracticeOption {
  id: string;
  label: string;
}

/** Every prompt in the bank, flattened and annotated with its task and "you get back" line. */
export const allPrompts: NavPrompt[] = categories.flatMap((category) =>
  category.prompts.map((prompt) => {
    const meta = PROMPT_META[prompt.id];
    return {
      ...prompt,
      practice: category.id,
      practiceLabel: category.label,
      topic: topicByPromptId[prompt.id] ?? OTHER_WORKFLOWS_LABEL,
      task: meta?.task ?? "review",
      gets: meta?.gets ?? prompt.summary,
    };
  }),
);

/** Practice areas, in the same order the practice chips render elsewhere. */
export const practices: PracticeOption[] = categories.map((category) => ({
  id: category.id,
  label: category.label,
}));

/** Tasks, in the order they should be offered in menus. */
export const tasks: TaskDefinition[] = TASKS;

/** The six tasks offered as suggestions when a search comes up empty. */
export const leadTasks: TaskId[] = LEAD_TASKS;

export function practiceLabel(id: string): string {
  return categories.find((category) => category.id === id)?.label ?? "";
}

export function taskById(id: TaskId): TaskDefinition | undefined {
  return TASKS.find((task) => task.id === id);
}

export function promptsForTask(id: TaskId): NavPrompt[] {
  return allPrompts.filter((prompt) => prompt.task === id);
}

export function promptsForPractice(id: string): NavPrompt[] {
  return allPrompts.filter((prompt) => prompt.practice === id);
}

/**
 * Case-insensitive search across practice, topic, title, summary, and the
 * extra lawyer-terminology vocabulary in {@link SEARCH_SYNONYMS}.
 */
export function searchNavPrompts(query: string): NavPrompt[] {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];

  return allPrompts
    .filter((prompt) => {
      const haystack = `${prompt.practiceLabel} ${prompt.topic} ${prompt.title} ${prompt.summary} ${SEARCH_SYNONYMS[prompt.id] ?? ""}`
        .toLowerCase();
      return haystack.includes(needle);
    })
    .slice(0, SEARCH_RESULT_LIMIT);
}
