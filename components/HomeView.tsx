"use client";

import { useMemo } from "react";
import { allPrompts, practices, tasks, type NavPrompt } from "@/lib/prompt-nav";
import type { TaskId } from "@/lib/prompt-meta";

const STEPS = [
  { n: "1", label: "Pick the task", detail: "Choose from the menus, then open a prompt from the list." },
  { n: "2", label: "Add three facts", detail: "The matter, the side you act for, and what you want back." },
  { n: "3", label: "Copy the prompt", detail: "Paste it into your firm's approved AI tool." },
];

interface HomeViewProps {
  browseTask: TaskId | "";
  browsePractice: string | "";
  onTaskSelect: (value: string) => void;
  onPracticeSelect: (value: string) => void;
  onClearBrowse: () => void;
  recentPrompts: NavPrompt[];
  onOpenPrompt: (prompt: NavPrompt) => void;
  openGroups: Record<string, boolean>;
  onToggleGroup: (id: string, currentlyOpen: boolean) => void;
}

/** Browse-first home: task/practice dropdowns above an expandable grouped list. */
export function HomeView({
  browseTask,
  browsePractice,
  onTaskSelect,
  onPracticeSelect,
  onClearBrowse,
  recentPrompts,
  onOpenPrompt,
  openGroups,
  onToggleGroup,
}: HomeViewProps) {
  const hasFilter = Boolean(browseTask || browsePractice);
  const byPractice = Boolean(browseTask);

  const pool = useMemo(() => {
    let result = allPrompts;
    if (browseTask) result = result.filter((prompt) => prompt.task === browseTask);
    if (browsePractice) result = result.filter((prompt) => prompt.practice === browsePractice);
    return result;
  }, [browseTask, browsePractice]);

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
      <p className="home-subhead">Pick a task, narrow by practice area, open the prompt.</p>

      <div className="home-filters">
        <label className="field-select">
          <span>What do you need to do?</span>
          <span className="select-wrap">
            <select
              aria-label="What do you need to do?"
              value={browseTask}
              onChange={(event) => onTaskSelect(event.target.value)}
            >
              <option value="">All tasks</option>
              {tasks.map((task) => (
                <option key={task.id} value={task.id}>
                  {task.label}
                </option>
              ))}
            </select>
            <span className="select-caret" aria-hidden="true">▼</span>
          </span>
        </label>
        <label className="field-select">
          <span>Practice area</span>
          <span className="select-wrap">
            <select
              aria-label="Practice area"
              value={browsePractice}
              onChange={(event) => onPracticeSelect(event.target.value)}
            >
              <option value="">All practice areas</option>
              {practices.map((practice) => (
                <option key={practice.id} value={practice.id}>
                  {practice.label}
                </option>
              ))}
            </select>
            <span className="select-caret" aria-hidden="true">▼</span>
          </span>
        </label>
      </div>

      <div className="home-filter-status">
        <span>
          {pool.length} {pool.length === 1 ? "prompt" : "prompts"} shown
        </span>
        {hasFilter && <button onClick={onClearBrowse}>Clear selection</button>}
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
          <p className="groups-empty">No prompts for that combination. Try clearing the practice area.</p>
        )}
      </section>
    </main>
  );
}
