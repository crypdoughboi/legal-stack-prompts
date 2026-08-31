import type { ClientFields, Prompt } from "@/lib/types";

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

/** Number of matter-context fields, used for the "n/10 filled" counter. */
export const clientFieldCount = Object.keys(emptyClientFields).length;

/** Count of fields the user has actually filled in. */
export function countFilledFields(fields: ClientFields): number {
  return Object.values(fields).filter((value) => value.trim()).length;
}

/** A filled value, or the bracketed placeholder the lawyer should replace. */
function valueOrPlaceholder(value: string, placeholder: string): string {
  return value.trim() || `[${placeholder}]`;
}

/**
 * Build the final prompt: a client and matter header followed by the
 * selected base prompt.
 */
export function buildGeneratedPrompt(
  prompt: Prompt,
  fields: ClientFields,
): string {
  return `CLIENT & MATTER DETAILS
Client / principal party: ${valueOrPlaceholder(fields.client, "CLIENT OR PRINCIPAL PARTY")}
Our role: ${valueOrPlaceholder(fields.role, "OUR ROLE")}
Matter / transaction: ${valueOrPlaceholder(fields.matter, "MATTER OR TRANSACTION")}
Jurisdiction(s): ${valueOrPlaceholder(fields.jurisdictions, "JURISDICTION(S)")}
Deal stage: ${valueOrPlaceholder(fields.stage, "DEAL STAGE")}
Deadline: ${valueOrPlaceholder(fields.deadline, "DEADLINE")}
Documents or data provided: ${valueOrPlaceholder(fields.documents, "DOCUMENTS OR DATA PROVIDED")}
Client priorities: ${valueOrPlaceholder(fields.priorities, "CLIENT PRIORITIES")}
Known constraints: ${valueOrPlaceholder(fields.constraints, "KNOWN CONSTRAINTS")}
Desired output: ${valueOrPlaceholder(fields.output, "FORMAT, AUDIENCE, AND LENGTH")}

MATTER-SPECIFIC TASK
${prompt.prompt}`;
}
