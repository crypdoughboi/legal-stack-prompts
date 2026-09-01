"use client";

import { useMemo } from "react";
import { practiceLabel, practices, tasks, topicsForPractice } from "@/lib/prompt-nav";
import type { TaskId } from "@/lib/prompt-meta";

interface SideNavProps {
  selectedTask: TaskId | "";
  selectedPractice: string;
  selectedTopic: string;
  onSelectTask: (task: TaskId | "") => void;
  onSelectPractice: (practiceId: string) => void;
  onSelectTopic: (topic: string) => void;
  onClearAll: () => void;
  onGoHome: () => void;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Persistent left rail: the brand at a fixed top (never scrolls away),
 * then task-first navigation with practice area as an optional secondary
 * narrow. Practice-specific subcategories only appear once a practice is
 * chosen, so the primary list stays short.
 */
export function SideNav({
  selectedTask,
  selectedPractice,
  selectedTopic,
  onSelectTask,
  onSelectPractice,
  onSelectTopic,
  onClearAll,
  onGoHome,
  isOpen,
  onClose,
}: SideNavProps) {
  const topics = useMemo(() => topicsForPractice(selectedPractice), [selectedPractice]);
  const hasFilter = Boolean(selectedTask || selectedPractice || selectedTopic);

  return (
    <>
      {isOpen && <div className="side-nav-backdrop" onClick={onClose} aria-hidden="true" />}
      <nav className={isOpen ? "side-nav open" : "side-nav"} aria-label="Browse by task and practice area">
        <div className="side-nav-topbar">
          <button className="side-nav-brand" onClick={onGoHome} aria-label="The Legal Stack Prompt Bank home">
            <span className="side-nav-mark" aria-hidden="true">
              LS
            </span>
            <span className="side-nav-brand-copy">
              <strong>The Legal Stack</strong>
              <small>Prompt Bank</small>
            </span>
          </button>
          <button className="side-nav-close" onClick={onClose} aria-label="Close navigation">
            ×
          </button>
        </div>

        <div className="side-nav-scroll">
          <span className="side-nav-eyebrow">What do you need to do?</span>

          <div className="side-nav-tasks">
            <button
              className={selectedTask === "" ? "side-nav-task active" : "side-nav-task"}
              aria-pressed={selectedTask === ""}
              onClick={() => onSelectTask("")}
            >
              All tasks
            </button>
            {tasks.map((task) => (
              <button
                key={task.id}
                className={selectedTask === task.id ? "side-nav-task active" : "side-nav-task"}
                aria-pressed={selectedTask === task.id}
                onClick={() => onSelectTask(task.id)}
              >
                {task.label}
              </button>
            ))}
          </div>

          <hr className="side-nav-divider" />

          <label className="side-nav-field">
            <span className="side-nav-eyebrow">
              Practice area <span className="side-nav-optional">(optional)</span>
            </span>
            <select
              aria-label="Practice area"
              value={selectedPractice}
              onChange={(event) => onSelectPractice(event.target.value)}
            >
              <option value="">All practice areas</option>
              {practices.map((practice) => (
                <option key={practice.id} value={practice.id}>
                  {practice.label}
                </option>
              ))}
            </select>
          </label>

          {selectedPractice ? (
            topics.length > 0 && (
              <div className="side-nav-topics">
                <span className="side-nav-eyebrow">Subcategories in {practiceLabel(selectedPractice)}</span>
                <div className="side-nav-topic-list">
                  <button
                    className={selectedTopic === "" ? "side-nav-topic active" : "side-nav-topic"}
                    onClick={() => onSelectTopic("")}
                  >
                    <span>All {practiceLabel(selectedPractice)}</span>
                  </button>
                  {topics.map((topic) => (
                    <button
                      key={topic.label}
                      className={selectedTopic === topic.label ? "side-nav-topic active" : "side-nav-topic"}
                      onClick={() => onSelectTopic(topic.label)}
                    >
                      <span>{topic.label}</span>
                      <span className="side-nav-topic-count">{topic.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            )
          ) : (
            <p className="side-nav-hint">Each practice area breaks down further into its own subcategories once selected.</p>
          )}

          {hasFilter && (
            <button className="side-nav-clear" onClick={onClearAll}>
              Clear filters
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
