"use client";

import { categories, featuredWorkflows } from "@/data";
import { totalPromptCount } from "@/lib/prompt-bank";

interface FeaturedSectionProps {
  /** Opens the practice menu for the card's category. */
  onOpenPractice: (practice: string) => void;
}

/** Landing-view workstream shortcuts and the library counts. */
export function FeaturedSection({ onOpenPractice }: FeaturedSectionProps) {
  return (
    <section className="featured-section" aria-labelledby="featured-title">
      <div className="research-note">
        <span>NEW</span>
        <p>
          <strong>Matter-inspired prompts</strong> draw from publicly reported transactions and
          convert recurring deal structures into reusable workflows.
        </p>
      </div>
      <div className="section-heading">
        <div>
          <span className="section-kicker">START WITH A WORKSTREAM</span>
          <h2 id="featured-title">Common matter workflows</h2>
        </div>
        <span className="prompt-count">
          {totalPromptCount} prompts · {categories.length} categories
        </span>
      </div>
      <div className="featured-grid">
        {featuredWorkflows.map((workflow, index) => (
          <button key={workflow.title} onClick={() => onOpenPractice(workflow.practice)}>
            <span className="feature-number">0{index + 1}</span>
            <span className="feature-copy">
              <strong>{workflow.title}</strong>
              <small>{workflow.detail}</small>
            </span>
            <span className="feature-arrow">↗</span>
          </button>
        ))}
      </div>
    </section>
  );
}
