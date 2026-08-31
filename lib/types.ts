/** A single reusable prompt in the bank. */
export interface Prompt {
  /** Stable slug, unique across the whole bank. */
  id: string;
  title: string;
  /** One-line description shown in menus and search results. */
  summary: string;
  /** The prompt body. Bracketed fields are meant to be replaced by the user. */
  prompt: string;
  /**
   * True when the prompt is derived from a publicly reported transaction.
   * Rendered with a "Matter-inspired" tag.
   */
  matterInspired?: boolean;
}

/** A named grouping of prompts inside a practice area. */
export interface PromptTopic {
  label: string;
  /** Prompt ids, in display order. Ids that do not resolve are ignored. */
  promptIds: string[];
}

/** A practice area: the top-level navigation unit of the bank. */
export interface PromptCategory {
  id: string;
  /** Full name, shown on the practice chip. */
  label: string;
  /** Abbreviation, shown on the badge in the open menu. */
  shortLabel: string;
  topics: PromptTopic[];
  prompts: Prompt[];
}

/** A topic label paired with its resolved prompts. */
export interface ResolvedTopicGroup {
  label: string;
  prompts: Prompt[];
}

/** A prompt annotated with where it lives, used for search results. */
export interface PromptSearchResult extends Prompt {
  practice: string;
  topic: string;
}

/** Shortcut card on the landing view that opens a practice menu. */
export interface FeaturedWorkflow {
  title: string;
  detail: string;
  /** Category id opened when the card is clicked. */
  practice: string;
}

/** The ten matter-context fields of the guided prompt builder. */
export interface ClientFields {
  client: string;
  role: string;
  matter: string;
  jurisdictions: string;
  stage: string;
  deadline: string;
  documents: string;
  priorities: string;
  constraints: string;
  output: string;
}

export type ClientFieldKey = keyof ClientFields;
