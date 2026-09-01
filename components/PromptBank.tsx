"use client";

import { useEffect, useMemo, useState } from "react";
import { HomeView } from "@/components/HomeView";
import { PromptWorkspace } from "@/components/PromptWorkspace";
import { ResultsView } from "@/components/ResultsView";
import { SiteFooter } from "@/components/SiteFooter";
import { TopBar } from "@/components/TopBar";
import { totalPromptCount } from "@/lib/prompt-bank";
import { buildGeneratedPrompt, emptyClientFields } from "@/lib/prompt-builder";
import { allPrompts, practices, searchNavPrompts, taskById, type NavPrompt } from "@/lib/prompt-nav";
import type { TaskId } from "@/lib/prompt-meta";
import type { ClientFieldKey, ClientFields } from "@/lib/types";

/** How long the copy button reads "Copied to clipboard" before reverting. */
const COPIED_RESET_MS = 2200;

/** Maximum recently-used prompts kept on the home screen. */
const RECENT_LIMIT = 4;

/** localStorage key for the recently-used prompt list. */
const RECENT_STORAGE_KEY = "ls-recent-prompts";

type View = "home" | "results" | "prompt";

function readRecent(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

/**
 * The whole application: browse-first home, search results, and the
 * single-prompt guided builder.
 */
export function PromptBank() {
  const [view, setView] = useState<View>("home");
  const [from, setFrom] = useState<"home" | "results">("home");

  // Header search.
  const [query, setQuery] = useState("");
  const [committed, setCommitted] = useState("");
  const [task, setTask] = useState<TaskId | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  // Home's own browse dropdowns.
  const [browseTask, setBrowseTask] = useState<TaskId | "">("");
  const [browsePractice, setBrowsePractice] = useState("");
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  // The selected prompt and its guided-builder state.
  const [selected, setSelected] = useState<NavPrompt | null>(null);
  const [fields, setFields] = useState<ClientFields>(emptyClientFields);
  const [edited, setEdited] = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [baseOpen, setBaseOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const [recentIds, setRecentIds] = useState<string[]>([]);
  useEffect(() => setRecentIds(readRecent()), []);

  const recentPrompts = useMemo(
    () => recentIds.map((id) => allPrompts.find((prompt) => prompt.id === id)).filter((p): p is NavPrompt => Boolean(p)),
    [recentIds],
  );

  const pushRecent = (id: string) => {
    try {
      const next = [id, ...readRecent().filter((existing) => existing !== id)].slice(0, RECENT_LIMIT);
      localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(next));
      setRecentIds(next);
    } catch {
      // Storage unavailable (private mode, quota) — recently-used simply stays empty.
    }
  };

  const openPrompt = (prompt: NavPrompt, source: "home" | "results") => {
    pushRecent(prompt.id);
    setSelected(prompt);
    setFields(emptyClientFields);
    setEdited(null);
    setMoreOpen(false);
    setBaseOpen(false);
    setCopied(false);
    setFrom(source);
    setView("prompt");
  };

  const runSearch = (value: string) => {
    setQuery(value);
    setCommitted(value);
    setTask(null);
    setFilter(null);
    setView("results");
  };

  const selectLeadTask = (id: TaskId) => {
    setTask(id);
    setFilter(null);
    setQuery("");
    setCommitted("");
    setView("results");
  };

  const goHome = () => {
    setView("home");
    setQuery("");
    setCommitted("");
    setTask(null);
    setFilter(null);
    setSelected(null);
  };

  const goBack = () => setView(from === "home" ? "home" : "results");

  const updateField = (key: ClientFieldKey, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    setEdited(null);
    setCopied(false);
  };

  const baseResults: NavPrompt[] = task ? allPrompts.filter((p) => p.task === task) : searchNavPrompts(committed);
  const resultsHeading = task ? taskById(task)?.label ?? "" : `“${committed.trim()}”`;

  const generated = edited ?? (selected ? buildGeneratedPrompt(selected, fields) : "");

  const copyPrompt = async () => {
    if (!generated.trim()) return;
    if (navigator.clipboard) await navigator.clipboard.writeText(generated);
    setCopied(true);
    window.setTimeout(() => setCopied(false), COPIED_RESET_MS);
  };

  return (
    <div className="app-shell">
      <TopBar
        query={query}
        onQueryChange={setQuery}
        onSearch={runSearch}
        onGoHome={goHome}
        promptCount={totalPromptCount}
        practiceCount={practices.length}
      />

      {view === "home" && (
        <HomeView
          browseTask={browseTask}
          browsePractice={browsePractice}
          onTaskSelect={(value) => {
            setBrowseTask(value as TaskId | "");
            setOpenGroups({});
          }}
          onPracticeSelect={(value) => {
            setBrowsePractice(value);
            setOpenGroups({});
          }}
          onClearBrowse={() => {
            setBrowseTask("");
            setBrowsePractice("");
            setOpenGroups({});
          }}
          recentPrompts={recentPrompts}
          onOpenPrompt={(prompt) => openPrompt(prompt, "home")}
          openGroups={openGroups}
          onToggleGroup={(id, currentlyOpen) =>
            setOpenGroups((current) => ({ ...current, [id]: !currentlyOpen }))
          }
        />
      )}

      {view === "results" && (
        <ResultsView
          heading={resultsHeading}
          baseResults={baseResults}
          filter={filter}
          onFilterChange={setFilter}
          onOpenPrompt={(prompt) => openPrompt(prompt, "results")}
          onBack={goHome}
          backLabel="Start over"
          query={committed}
          onSelectLeadTask={selectLeadTask}
        />
      )}

      {view === "prompt" && selected && (
        <PromptWorkspace
          prompt={selected}
          fields={fields}
          onFieldChange={updateField}
          generatedPrompt={generated}
          onGeneratedPromptChange={(value) => {
            setEdited(value);
            setCopied(false);
          }}
          moreOpen={moreOpen}
          onToggleMore={() => setMoreOpen((open) => !open)}
          baseOpen={baseOpen}
          onToggleBase={() => setBaseOpen((open) => !open)}
          onCopy={copyPrompt}
          copied={copied}
          onBack={goBack}
          backLabel={from === "home" ? "Start over" : "Back to results"}
        />
      )}

      <SiteFooter />
    </div>
  );
}
