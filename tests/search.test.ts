import { describe, expect, it } from "vitest";
import { SEARCH_RESULT_LIMIT, searchPrompts } from "@/lib/prompt-bank";

describe("searchPrompts", () => {
  it("returns nothing for an empty or whitespace query", () => {
    expect(searchPrompts("")).toEqual([]);
    expect(searchPrompts("   ")).toEqual([]);
  });

  it("matches prompt titles regardless of case", () => {
    const ids = searchPrompts("ESTOPPEL").map((result) => result.id);
    expect(ids).toContain("estoppel-snda");
  });

  it("matches on summary text", () => {
    expect(searchPrompts("covenant").length).toBeGreaterThan(0);
  });

  it("matches on the practice-area label", () => {
    const results = searchPrompts("Restructuring");
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((result) => result.practice === "Restructuring")).toBe(true);
  });

  it("annotates results with practice and topic", () => {
    const [result] = searchPrompts("side letter");
    expect(result.practice).toBeTruthy();
    expect(result.topic).toBeTruthy();
  });

  it("caps the result list", () => {
    expect(searchPrompts("a").length).toBeLessThanOrEqual(SEARCH_RESULT_LIMIT);
  });

  it("returns an empty list when nothing matches", () => {
    expect(searchPrompts("zzzzzzz")).toEqual([]);
  });
});
