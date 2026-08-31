import { describe, expect, it } from "vitest";
import { categories, featuredWorkflows } from "@/data";
import { groupPromptsByTopic, topicByPromptId, totalPromptCount } from "@/lib/prompt-bank";

describe("prompt library", () => {
  it("has the eight practice areas in display order", () => {
    expect(categories.map((category) => category.id)).toEqual([
      "corporate",
      "finance",
      "restructuring",
      "real-estate",
      "funds",
      "document-review",
      "diligence",
      "communications",
    ]);
  });

  it("contains 65 prompts", () => {
    expect(totalPromptCount).toBe(65);
  });

  it("uses globally unique prompt ids", () => {
    const ids = categories.flatMap((category) => category.prompts.map((prompt) => prompt.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every prompt a title, summary, and body", () => {
    for (const category of categories) {
      for (const prompt of category.prompts) {
        expect(prompt.title.trim(), `${prompt.id} title`).not.toBe("");
        expect(prompt.summary.trim(), `${prompt.id} summary`).not.toBe("");
        expect(prompt.prompt.trim().length, `${prompt.id} body`).toBeGreaterThan(50);
      }
    }
  });

  it("references only real prompt ids from topics", () => {
    for (const category of categories) {
      const known = new Set(category.prompts.map((prompt) => prompt.id));
      for (const topic of category.topics) {
        for (const promptId of topic.promptIds) {
          expect(known.has(promptId), `${category.id} topic references ${promptId}`).toBe(true);
        }
      }
    }
  });

  it("places every prompt in a topic, so no 'Other workflows' group is needed", () => {
    for (const category of categories) {
      expect(
        groupPromptsByTopic(category).map((group) => group.label),
        category.id,
      ).not.toContain("Other workflows");
    }
  });

  it("keeps grouped prompts equal to the category's prompts", () => {
    for (const category of categories) {
      const grouped = groupPromptsByTopic(category).flatMap((group) => group.prompts);
      expect(grouped).toHaveLength(category.prompts.length);
    }
  });

  it("maps every prompt id to a topic label", () => {
    for (const category of categories) {
      for (const prompt of category.prompts) {
        expect(topicByPromptId[prompt.id], prompt.id).toBeTruthy();
      }
    }
  });

  it("points every featured workflow at a real practice", () => {
    const ids = new Set(categories.map((category) => category.id));
    for (const workflow of featuredWorkflows) {
      expect(ids.has(workflow.practice), workflow.title).toBe(true);
    }
  });
});
