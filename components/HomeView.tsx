"use client";

import { useMemo } from "react";
import { allPrompts, practices, tasks, type NavPrompt } from "@/lib/prompt-nav";
import type { TaskId } from "@/lib/prompt-meta";

const STEPS = [
  { n: "1", label: "Pick the task", detail: "Use the left-hand nav, then open a prompt from the list." },
  { n: "2", label: "Add three facts", detail: "The matter, the side you act for, and what you want back." },
  { n: "3", label: "Copy the prompt", detail: "Paste it into your firm's approved AI tool." },
];

interface HomeViewProps {
  navTask: TaskId | "";
  navPractice: string;
  navTopic: string;
  onClearNav: () => void;
  recentPrompts: NavPrompt[];
  onOpenPrompt: (prompt: NavPrompt) => void;
  openGroups: Record<string, boolean>;
  onToggleGroup: (id: string, currentlyOpen: boolean) => void;
}

/** Browse-first home: an expandable grouped list, filtered by the left-hand nav. */
export function HomeView({
  navTask,
  navPractice,
  navTopic,
  onClearNav,
  recentPrompts,
  onOpenPrompt,
  openGroups,
  onToggleGroup,
}: HomeViewProps) {
  const hasFilter = Boolean(navTask || navPractice || navTopic);
  const byPractice = Boolean(navTask);

  const pool = useMemo(() => {
    let result = allPrompts;
    if (navTask) result = result.filter((prompt) => prompt.task === navTask);
    if (navPractice) result = result.filter((prompt) => prompt.practice === navPractice);
    if (navTopic) result = result.filter((prompt) => prompt.topic === navTopic);
    return result;
  }, [navTask, navPractice, navTopic]);

  const groups = useMemo(() => {
    const buckets = byPractice ? practices : tasks;
    return buckets
      .map((bucket) => {
        const items = pool.filter((prompt) => (byPractice ? prompt.practice : prompt.task) === bucket.id);
        const open = openGroups[bucket.id] ?? hasFilter;
        return {
          id: bucket.id,
          label: bucket.label,
          blurb: byPractice ? "" : (bucket as (typeof tasks)[number]).blurb,
          count: `${items.length} ${items.length === 1 ? "prompt" : "prompts"}`,
          open,
          items,
        };
      })
      .filter((group) => group.items.length > 0);
  }, [byPractice, pool, openGroups, hasFilter]);

  return (
    <main className="home-main">
      <h1 className="home-title">Every prompt your practice needs.</h1>
      <p className="home-subhead">Pick a task on the left, narrow by practice area, open the prompt.</p>

      <div className="home-filter-status">
        <span>
          {pool.length} {pool.length === 1 ? "prompt" : "prompts"} shown
        </span>
        {hasFilter && <button onClick={onClearNav}>Clear selection</button>}
      </div>

      <div className="home-steps">
        {STEPS.map((step) => (
          <div className="step" key={step.n}>
            <span className="step-index">{step.n}</span>
            <span className="step-copy">
              <strong>{step.label}</strong>
              <span>{step.detail}</span>
            </span>
          </div>
        ))}
      </div>

      {recentPrompts.length > 0 && (
        <section className="home-section">
          <h2 className="eyebrow">Recently used</h2>
          <div className="compact-row-list">
            {recentPrompts.map((prompt) => (
              <button key={prompt.id} className="compact-row" onClick={() => onOpenPrompt(prompt)}>
                <span className="compact-row-title">{prompt.title}</span>
                <span className="compact-row-meta">{prompt.practiceLabel}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="home-section">
        <h2 className="eyebrow">{byPractice ? "By practice area" : "All prompts by task"}</h2>
        {groups.length > 0 ? (
          <div className="group-list">
            {groups.map((group) => (
              <div className="group" key={group.id}>
                <button
                  className="group-toggle"
                  aria-expanded={group.open}
                  onClick={() => onToggleGroup(group.id, group.open)}
                >
                  <span className="group-copy">
                    <strong>{group.label}</strong>
                    {group.blurb && <span>{group.blurb}</span>}
                  </span>
                  <span className="group-count">{group.count}</span>
                  <span className="group-caret">{group.open ? "−" : "+"}</span>
                </button>
                {group.open && (
                  <div className="group-items">
                    {group.items.map((prompt) => (
                      <button key={prompt.id} className="group-item" onClick={() => onOpenPrompt(prompt)}>
                        <span className="group-item-copy">
                          <strong>{prompt.title}</strong>
                          <span>{prompt.summary}</span>
                        </span>
                        <span className="group-item-meta">{prompt.practiceLabel}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="groups-empty">No prompts for that combination. Try clearing a filter on the left.</p>
        )}
      </section>
    </main>
  );
}
