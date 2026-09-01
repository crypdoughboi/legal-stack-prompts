"use client";

import { useMemo } from "react";
import { leadTasks, practiceLabel, promptsForTask, taskById, type NavPrompt } from "@/lib/prompt-nav";
import type { TaskId } from "@/lib/prompt-meta";

interface ResultsViewProps {
  heading: string;
  /** Results before the practice-area filter chip is applied. */
  baseResults: NavPrompt[];
  filter: string | null;
  onFilterChange: (practiceId: string | null) => void;
  onOpenPrompt: (prompt: NavPrompt) => void;
  onBack: () => void;
  backLabel: string;
  query: string;
  onSelectLeadTask: (task: TaskId) => void;
}

/** Filterable results screen, reached from the header search or a lead-task suggestion. */
export function ResultsView({
  heading,
  baseResults,
  filter,
  onFilterChange,
  onOpenPrompt,
  onBack,
  backLabel,
  query,
  onSelectLeadTask,
}: ResultsViewProps) {
  const presentPractices = useMemo(() => {
    const seen = new Set(baseResults.map((prompt) => prompt.practice));
    return Array.from(seen).map((id) => ({ id, label: practiceLabel(id) }));
  }, [baseResults]);

  const filtered = filter ? baseResults.filter((prompt) => prompt.practice === filter) : baseResults;

  const leadTaskSuggestions = leadTasks.map((id) => {
    const task = taskById(id)!;
    return { id, label: task.label, count: promptsForTask(id).length };
  });

  return (
    <main className="results-main">
      <button className="quiet-button" onClick={onBack}>
        ← {backLabel}
      </button>

      <div className="results-header">
        <h1>{heading}</h1>
        <span className="results-count">
          {filtered.length} {filtered.length === 1 ? "prompt" : "prompts"}
        </span>
      </div>

      <div className="filter-chips">
        <button className={filter === null ? "filter-chip active" : "filter-chip"} onClick={() => onFilterChange(null)}>
          All
        </button>
        {presentPractices.map((practice) => (
          <button
            key={practice.id}
            className={filter === practice.id ? "filter-chip active" : "filter-chip"}
            aria-pressed={filter === practice.id}
            onClick={() => onFilterChange(practice.id)}
          >
            {practice.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="results-grid">
          {filtered.map((prompt) => (
            <button key={prompt.id} className="result-card" onClick={() => onOpenPrompt(prompt)}>
              <span className="result-card-main">
                <strong>{prompt.title}</strong>
                <span className="result-card-summary">{prompt.summary}</span>
                <span className="result-card-meta">
                  {prompt.practiceLabel} · {prompt.topic}
                </span>
              </span>
              <span className="result-card-gets">
                <span className="gets-label">You get back</span>
                <span className="gets-text">{prompt.gets}</span>
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h2>Nothing matched &ldquo;{query}&rdquo;</h2>
          <p>Try describing the task rather than the document name, or pick a starting point.</p>
          <div className="no-results-tasks">
            {leadTaskSuggestions.map((task) => (
              <button key={task.id} className="task-suggestion" onClick={() => onSelectLeadTask(task.id)}>
                <span>{task.label}</span>
                <span>{task.count} prompts</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
