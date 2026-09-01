"use client";

import { CopyIcon } from "@/components/icons";
import { countFilledFields, missingGaps, OPTIONAL_FIELD_KEYS } from "@/lib/prompt-builder";
import type { ClientFieldKey, ClientFields } from "@/lib/types";
import type { NavPrompt } from "@/lib/prompt-nav";

const ESSENTIALS: { key: ClientFieldKey; label: string; hint: string; placeholder: string }[] = [
  {
    key: "matter",
    label: "What are you working on?",
    hint: "The transaction or matter, in a sentence.",
    placeholder: "Acquisition of a software company by our client",
  },
  {
    key: "role",
    label: "Who do we act for?",
    hint: "Naming the side changes the whole analysis.",
    placeholder: "Buyer",
  },
  {
    key: "output",
    label: "What do you want back?",
    hint: "Format, audience, and length.",
    placeholder: "Partner-ready issue list, two pages",
  },
];

const OPTIONALS: { key: ClientFieldKey; label: string; placeholder: string; wide?: boolean }[] = [
  { key: "client", label: "Client or principal party", placeholder: "Acme Holdings" },
  { key: "jurisdictions", label: "Jurisdiction(s)", placeholder: "Delaware; New York" },
  { key: "stage", label: "Deal stage", placeholder: "Second draft exchanged" },
  { key: "deadline", label: "Deadline", placeholder: "Friday, 12:00 p.m. ET" },
  { key: "documents", label: "Documents you are attaching", placeholder: "Draft agreement; disclosure schedules", wide: true },
  { key: "priorities", label: "Client priorities", placeholder: "Closing certainty; limited exposure" },
  { key: "constraints", label: "Known constraints", placeholder: "No financing condition; limited time" },
];

interface PromptWorkspaceProps {
  prompt: NavPrompt;
  fields: ClientFields;
  onFieldChange: (key: ClientFieldKey, value: string) => void;
  generatedPrompt: string;
  onGeneratedPromptChange: (value: string) => void;
  moreOpen: boolean;
  onToggleMore: () => void;
  baseOpen: boolean;
  onToggleBase: () => void;
  onCopy: () => void;
  copied: boolean;
  onBack: () => void;
  backLabel: string;
}

/** The single-prompt workspace: summary + three-fact builder beside the ready-to-copy prompt. */
export function PromptWorkspace({
  prompt,
  fields,
  onFieldChange,
  generatedPrompt,
  onGeneratedPromptChange,
  moreOpen,
  onToggleMore,
  baseOpen,
  onToggleBase,
  onCopy,
  copied,
  onBack,
  backLabel,
}: PromptWorkspaceProps) {
  const filledOptionals = countFilledFields(fields, OPTIONAL_FIELD_KEYS);
  const gaps = missingGaps(fields);

  return (
    <main className="workspace-main">
      <button className="quiet-button" onClick={onBack}>
        ← {backLabel}
      </button>

      <div className="workspace-grid">
        <div className="workspace-left">
          <section className="workspace-section">
            <span className="prompt-eyebrow">
              {prompt.practiceLabel} · {prompt.topic}
            </span>
            <h1 className="prompt-title">{prompt.title}</h1>
            <p className="prompt-description">{prompt.summary}</p>
            <div className="you-get-back">
              <span className="you-get-back-label">You get back</span>
              <span className="you-get-back-text">{prompt.gets}</span>
            </div>
            <button className="reveal-toggle" aria-expanded={baseOpen} onClick={onToggleBase}>
              {baseOpen ? "Hide the underlying instructions" : "See the underlying instructions"}
            </button>
            {baseOpen && <p className="base-instructions">{prompt.prompt}</p>}
          </section>

          <section className="workspace-section">
            <div className="facts-heading">
              <span className="step-badge">1</span>
              <h2>Give the AI the facts</h2>
            </div>
            <p className="facts-subhead">Three answers is enough. Everything else sharpens the result.</p>

            <div className="essentials-grid">
              {ESSENTIALS.map((field) => (
                <label className="field-label" key={field.key}>
                  <span>{field.label}</span>
                  <span className="field-hint">{field.hint}</span>
                  <input
                    aria-label={field.label}
                    value={fields[field.key]}
                    onChange={(event) => onFieldChange(field.key, event.target.value)}
                    placeholder={field.placeholder}
                    autoComplete="off"
                  />
                </label>
              ))}
            </div>

            <div className="more-context">
              <button className="more-toggle" aria-expanded={moreOpen} onClick={onToggleMore}>
                <span className="more-toggle-copy">
                  <span>{filledOptionals ? `More context (${filledOptionals} added)` : "Add more context"}</span>
                  <span>Jurisdiction, documents, deadline, priorities</span>
                </span>
                <span className="more-caret">{moreOpen ? "−" : "+"}</span>
              </button>
              {moreOpen && (
                <div className="optionals-grid">
                  {OPTIONALS.map((field) => (
                    <label className={field.wide ? "optional-field wide" : "optional-field"} key={field.key}>
                      <span>{field.label}</span>
                      <input
                        value={fields[field.key]}
                        onChange={(event) => onFieldChange(field.key, event.target.value)}
                        placeholder={field.placeholder}
                        autoComplete="off"
                      />
                    </label>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        <section className="prompt-panel">
          <div className="prompt-panel-heading">
            <span className="step-badge">2</span>
            <h2>Your prompt</h2>
            <span className="ready-label">Ready to copy</span>
          </div>

          <textarea
            className="generated-textarea"
            value={generatedPrompt}
            onChange={(event) => onGeneratedPromptChange(event.target.value)}
            aria-label="Your prompt — editable"
          />
          <p className="generated-hint">Edit anything here before copying.</p>

          <button className={copied ? "copy-button copied" : "copy-button"} onClick={onCopy}>
            <CopyIcon />
            <span>{copied ? "Copied to clipboard" : "Copy prompt"}</span>
          </button>

          {gaps.length > 0 && (
            <div className="gaps-box">
              <strong>Still missing — the AI will ask, or guess</strong>
              <ul>
                {gaps.map((gap) => (
                  <li key={gap.key}>{gap.label}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="panel-footnote">
            Paste into your firm&rsquo;s approved AI tool only. Confirm citations and facts before relying on the
            output.
          </p>
        </section>
      </div>
    </main>
  );
}
