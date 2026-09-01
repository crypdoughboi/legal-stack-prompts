import { describe, expect, it } from "vitest";
import {
  buildGeneratedPrompt,
  clientFieldCount,
  countFilledFields,
  emptyClientFields,
  missingGaps,
  OPTIONAL_FIELD_KEYS,
} from "@/lib/prompt-builder";
import type { ClientFields, Prompt } from "@/lib/types";

const prompt: Prompt = {
  id: "test",
  title: "Test prompt",
  summary: "A summary.",
  prompt: "Do the thing for [target].",
};

describe("buildGeneratedPrompt", () => {
  it("uses bracketed placeholders for the three essentials when nothing is filled", () => {
    const output = buildGeneratedPrompt(prompt, emptyClientFields);
    expect(output).toBe(
      `MATTER: [describe the matter or transaction]
WE ACT FOR: [which side we represent]
DELIVERABLE: [what you want back, and for whom]

TASK
Do the thing for [target].

Work only from the documents provided. Cite the section or page for every finding. Where a fact is missing, say so rather than assuming it.`,
    );
  });

  it("substitutes filled essentials and keeps the base prompt verbatim", () => {
    const output = buildGeneratedPrompt(prompt, {
      ...emptyClientFields,
      matter: "Acquisition of a software company",
      role: "Buyer",
      output: "Partner-ready issue list",
    });
    expect(output).toContain("MATTER: Acquisition of a software company");
    expect(output).toContain("WE ACT FOR: Buyer");
    expect(output).toContain("DELIVERABLE: Partner-ready issue list");
    expect(output.endsWith("TASK\nDo the thing for [target].\n\nWork only from the documents provided. Cite the section or page for every finding. Where a fact is missing, say so rather than assuming it.")).toBe(
      true,
    );
  });

  it("adds a FURTHER CONTEXT block only when an optional field is filled", () => {
    expect(buildGeneratedPrompt(prompt, emptyClientFields)).not.toContain("FURTHER CONTEXT");

    const output = buildGeneratedPrompt(prompt, { ...emptyClientFields, client: "Acme Holdings" });
    expect(output).toContain("FURTHER CONTEXT");
    expect(output).toContain("Client / principal party: Acme Holdings");
  });

  it("treats whitespace-only input as empty", () => {
    const output = buildGeneratedPrompt(prompt, { ...emptyClientFields, matter: "   " });
    expect(output).toContain("MATTER: [describe the matter or transaction]");
  });
});

describe("countFilledFields", () => {
  it("counts all ten fields by default", () => {
    const filled = Object.fromEntries(
      Object.keys(emptyClientFields).map((key) => [key, "x"]),
    ) as unknown as ClientFields;
    expect(clientFieldCount).toBe(10);
    expect(countFilledFields(filled)).toBe(10);
  });

  it("ignores blank and whitespace-only values", () => {
    expect(countFilledFields({ ...emptyClientFields, client: "Acme", role: "  " })).toBe(1);
  });

  it("can be scoped to just the optional fields", () => {
    const fields = { ...emptyClientFields, matter: "x", role: "x", output: "x", client: "Acme" };
    expect(countFilledFields(fields, OPTIONAL_FIELD_KEYS)).toBe(1);
  });
});

describe("missingGaps", () => {
  it("flags all five gap fields when nothing is filled", () => {
    expect(missingGaps(emptyClientFields).map((gap) => gap.key)).toEqual([
      "matter",
      "role",
      "output",
      "documents",
      "jurisdictions",
    ]);
  });

  it("drops a gap once its field is filled", () => {
    const gaps = missingGaps({ ...emptyClientFields, matter: "Acquisition" });
    expect(gaps.map((gap) => gap.key)).not.toContain("matter");
    expect(gaps).toHaveLength(4);
  });
});
