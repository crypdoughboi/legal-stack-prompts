"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FeaturedSection } from "@/components/FeaturedSection";
import { GuidedWorkspace } from "@/components/GuidedWorkspace";
import { PracticeMenu } from "@/components/PracticeMenu";
import { PromptWorkspace } from "@/components/PromptWorkspace";
import { SearchField } from "@/components/SearchField";
import { SiteFooter } from "@/components/SiteFooter";
import { TopBar } from "@/components/TopBar";
import { searchPrompts } from "@/lib/prompt-bank";
import {
  buildGeneratedPrompt,
  emptyClientFields,
} from "@/lib/prompt-builder";
import type { ClientFieldKey, ClientFields, Prompt } from "@/lib/types";

/** How long the copy button reads "Copied" before reverting. */
const COPIED_RESET_MS = 1800;

/**
 * The whole application: practice navigation, search, the free-form
 * composer, and the guided prompt builder.
 */
export function PromptBank() {
  const [openPractice, setOpenPractice] = useState<string | null>(null);
  const [selected, setSelected] = useState<Prompt | null>(null);
  const [promptText, setPromptText] = useState("");
  const [fields, setFields] = useState<ClientFields>(emptyClientFields);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const practiceWrapRef = useRef<HTMLDivElement>(null);

  // Close the practice menu when clicking anywhere outside it.
  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (practiceWrapRef.current && !practiceWrapRef.current.contains(event.target as Node)) {
        setOpenPractice(null);
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const searchResults = useMemo(() => searchPrompts(query), [query]);

  const selectPrompt = (prompt: Prompt) => {
    const freshFields = { ...emptyClientFields };
    setSelected(prompt);
    setFields(freshFields);
    setPromptText(buildGeneratedPrompt(prompt, freshFields));
    setOpenPractice(null);
    setQuery("");
    setCopied(false);
  };

  const updateField = (field: ClientFieldKey, value: string) => {
    const nextFields = { ...fields, [field]: value };
    setFields(nextFields);
    if (selected) setPromptText(buildGeneratedPrompt(selected, nextFields));
    setCopied(false);
  };

  const clearDetails = () => {
    const freshFields = { ...emptyClientFields };
    setFields(freshFields);
    if (selected) setPromptText(buildGeneratedPrompt(selected, freshFields));
    setCopied(false);
  };

  const changePrompt = () => {
    setPromptText("");
    setFields({ ...emptyClientFields });
    setSelected(null);
  };

  const copyPrompt = async () => {
    if (!promptText.trim()) return;
    await navigator.clipboard.writeText(promptText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), COPIED_RESET_MS);
  };

  const openPracticeFromFeatured = (practice: string) => {
    setOpenPractice(practice);
    window.setTimeout(
      () =>
        document
          .getElementById("practice-menu")
          ?.scrollIntoView({ block: "center", behavior: "smooth" }),
      50,
    );
  };

  return (
    <main className="app-shell">
      <TopBar />

      <section className={selected ? "workspace selected-workspace" : "workspace"} id="top">
        {!selected && (
          <div className="intro">
            <p className="eyebrow">TRANSACTIONAL AI WORKSPACE</p>
            <h1>What are you working on?</h1>
            <p>
              Choose a practice, find the right subtopic, and replace the bracketed fields with
              matter-specific facts.
            </p>
          </div>
        )}

        <PracticeMenu
          openPractice={openPractice}
          onTogglePractice={(id) => setOpenPractice((current) => (current === id ? null : id))}
          onSelectPrompt={selectPrompt}
          wrapperRef={practiceWrapRef}
        />

        <div className={selected ? "composer-card has-selection" : "composer-card"}>
          <SearchField
            query={query}
            onQueryChange={setQuery}
            results={searchResults}
            onSelectPrompt={selectPrompt}
          />

          {selected ? (
            <GuidedWorkspace
              prompt={selected}
              fields={fields}
              onFieldChange={updateField}
              generatedPrompt={promptText}
              onGeneratedPromptChange={setPromptText}
              onClearDetails={clearDetails}
              onChangePrompt={changePrompt}
              onCopy={copyPrompt}
              copied={copied}
            />
          ) : (
            <PromptWorkspace
              value={promptText}
              onChange={setPromptText}
              onCopy={copyPrompt}
              copied={copied}
            />
          )}
        </div>

        {!selected && <FeaturedSection onOpenPractice={openPracticeFromFeatured} />}
      </section>

      {!selected && <SiteFooter />}
    </main>
  );
}
