"use client";

import type { RefObject } from "react";
import { ChevronIcon } from "@/components/icons";
import { categories } from "@/data";
import { findCategory, groupPromptsByTopic } from "@/lib/prompt-bank";
import type { Prompt } from "@/lib/types";

interface PracticeMenuProps {
  /** Id of the category whose menu is open, or null. */
  openPractice: string | null;
  onTogglePractice: (id: string) => void;
  onSelectPrompt: (prompt: Prompt) => void;
  /** Wrapper ref, used to close the menu on an outside click. */
  wrapperRef: RefObject<HTMLDivElement | null>;
}

/** Practice-area chips plus the drop-down of prompts grouped by topic. */
export function PracticeMenu({
  openPractice,
  onTogglePractice,
  onSelectPrompt,
  wrapperRef,
}: PracticeMenuProps) {
  const activeCategory = findCategory(openPractice);
  const topicGroups = activeCategory ? groupPromptsByTopic(activeCategory) : [];

  return (
    <div className="practice-wrap" ref={wrapperRef} id="practice-menu">
      <div className="practice-row" aria-label="Practice areas">
        {categories.map((category) => (
          <button
            key={category.id}
            className={openPractice === category.id ? "practice-chip active" : "practice-chip"}
            onClick={() => onTogglePractice(category.id)}
            aria-expanded={openPractice === category.id}
          >
            <span>{category.label}</span>
            <ChevronIcon open={openPractice === category.id} />
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className="prompt-menu" role="dialog" aria-label={`${activeCategory.label} prompts`}>
          <div className="menu-heading">
            <span className="menu-badge">{activeCategory.shortLabel}</span>
            <div>
              <strong>{activeCategory.label}</strong>
              <span>{activeCategory.prompts.length} practical starting points</span>
            </div>
          </div>
          <div className="menu-list">
            {topicGroups.map((group) => (
              <section className="topic-group" key={group.label}>
                <div className="topic-heading">
                  <span>{group.label}</span>
                  <small>{group.prompts.length}</small>
                </div>
                {group.prompts.map((prompt) => (
                  <button key={prompt.id} onClick={() => onSelectPrompt(prompt)}>
                    <span className="prompt-title-row">
                      <span className="prompt-title">{prompt.title}</span>
                      {prompt.matterInspired && <span className="matter-tag">Matter-inspired</span>}
                    </span>
                    <span className="prompt-summary">{prompt.summary}</span>
                  </button>
                ))}
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
