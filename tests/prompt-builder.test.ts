import { describe, expect, it } from "vitest";
import {
  buildGeneratedPrompt,
  clientFieldCount,
  countFilledFields,
  emptyClientFields,
} from "@/lib/prompt-builder";
import type { ClientFields, Prompt } from "@/lib/types";

const prompt: Prompt = {
  id: "test",
  title: "Test prompt",
  summary: "A summary.",
  prompt: "Do the thing for [target].",
};

describe("buildGeneratedPrompt", () => {
  it("uses bracketed placeholders for every empty field", () => {
    const output = buildGeneratedPrompt(prompt, emptyClientFields);
    expect(output).toBe(
      `CLIENT & MATTER DETAILS
Client / principal party: [CLIENT OR PRINCIPAL PARTY]
Our role: [OUR ROLE]
Matter / transaction: [MATTER OR TRANSACTION]
Jurisdiction(s): [JURISDICTION(S)]
Deal stage: [DEAL STAGE]
Deadline: [DEADLINE]
Documents or data provided: [DOCUMENTS OR DATA PROVIDED]
Client priorities: [CLIENT PRIORITIES]
Known constraints: [KNOWN CONSTRAINTS]
Desired output: [FORMAT, AUDIENCE, AND LENGTH]

MATTER-SPECIFIC TASK
Do the thing for [target].`,
    );
  });

  it("substitutes filled fields and keeps the base prompt verbatim", () => {
    const output = buildGeneratedPrompt(prompt, {
      ...emptyClientFields,
      client: "Acme Holdings",
      role: "Buyer",
    });
    expect(output).toContain("Client / principal party: Acme Holdings");
    expect(output).toContain("Our role: Buyer");
    expect(output).toContain("Matter / transaction: [MATTER OR TRANSACTION]");
    expect(output.endsWith("MATTER-SPECIFIC TASK\nDo the thing for [target].")).toBe(true);
  });

  it("treats whitespace-only input as empty", () => {
    const output = buildGeneratedPrompt(prompt, { ...emptyClientFields, client: "   " });
    expect(output).toContain("Client / principal party: [CLIENT OR PRINCIPAL PARTY]");
  });
});

describe("countFilledFields", () => {
  it("counts ten fields when all are filled", () => {
    const filled = Object.fromEntries(
      Object.keys(emptyClientFields).map((key) => [key, "x"]),
    ) as unknown as ClientFields;
    expect(clientFieldCount).toBe(10);
    expect(countFilledFields(filled)).toBe(10);
  });

  it("ignores blank and whitespace-only values", () => {
    expect(countFilledFields({ ...emptyClientFields, client: "Acme", role: "  " })).toBe(1);
  });
});
