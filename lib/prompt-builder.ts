import type { ClientFieldKey, ClientFields, Prompt } from "@/lib/types";

/** An empty set of matter-context fields. */
export const emptyClientFields: ClientFields = {
  client: "",
  role: "",
  matter: "",
  jurisdictions: "",
  stage: "",
  deadline: "",
  documents: "",
  priorities: "",
  constraints: "",
  output: "",
};

/** The three questions asked up front in the guided builder. */
export const ESSENTIAL_FIELD_KEYS: ClientFieldKey[] = ["matter", "role", "output"];

/** The seven fields tucked behind "Add more context" — optional, but sharpen the result. */
export const OPTIONAL_FIELD_KEYS: ClientFieldKey[] = [
  "client",
  "jurisdictions",
  "stage",
  "deadline",
  "documents",
  "priorities",
  "constraints",
];

/** Number of matter-context fields, used for the "n/10 filled" counter. */
export const clientFieldCount = Object.keys(emptyClientFields).length;

/**
 * Count of fields the caller has actually filled in, among the given keys.
 * Defaults to every field; pass {@link OPTIONAL_FIELD_KEYS} for the
 * "Add more context (n added)" badge.
 */
export function countFilledFields(
  fields: ClientFields,
  keys: ClientFieldKey[] = Object.keys(emptyClientFields) as ClientFieldKey[],
): number {
  return keys.filter((key) => fields[key].trim()).length;
}

/** A field still missing that the guided builder flags before copying. */
export interface FieldGap {
  key: ClientFieldKey;
  label: string;
}

/** The fields worth flagging as missing — the AI will otherwise ask, or guess. */
const GAP_FIELDS: FieldGap[] = [
  { key: "matter", label: "The matter or transaction" },
  { key: "role", label: "Which side we act for" },
  { key: "output", label: "What you want back" },
  { key: "documents", label: "Which documents you are attaching" },
  { key: "jurisdictions", label: "Jurisdiction" },
];

/** Which of {@link GAP_FIELDS} are still blank. */
export function missingGaps(fields: ClientFields): FieldGap[] {
  return GAP_FIELDS.filter((gap) => !fields[gap.key].trim());
}

/**
 * Build the final prompt: matter, role, and deliverable up front, any filled
 * optional context after that, then the selected base prompt verbatim.
 */
export function buildGeneratedPrompt(prompt: Prompt, fields: ClientFields): string {
  const value = (key: ClientFieldKey) => fields[key].trim();
  const lines: string[] = [];

  lines.push(`MATTER: ${value("matter") || "[describe the matter or transaction]"}`);
  lines.push(`WE ACT FOR: ${value("role") || "[which side we represent]"}`);
  lines.push(`DELIVERABLE: ${value("output") || "[what you want back, and for whom]"}`);

  const extra: [string, string][] = (
    [
      ["Client / principal party", value("client")],
      ["Jurisdiction(s)", value("jurisdictions")],
      ["Deal stage", value("stage")],
      ["Deadline", value("deadline")],
      ["Documents provided", value("documents")],
      ["Client priorities", value("priorities")],
      ["Known constraints", value("constraints")],
    ] as [string, string][]
  ).filter(([, filled]) => filled);

  if (extra.length) {
    lines.push("", "FURTHER CONTEXT");
    for (const [label, filled] of extra) lines.push(`${label}: ${filled}`);
  }

  lines.push(
    "",
    "TASK",
    prompt.prompt,
    "",
    "Work only from the documents provided. Cite the section or page for every finding. Where a fact is missing, say so rather than assuming it.",
  );

  return lines.join("\n");
}
