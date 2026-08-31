"use client";

import { CopyIcon } from "@/components/icons";
import { roleOptions, stageOptions } from "@/lib/form-options";
import { clientFieldCount, countFilledFields } from "@/lib/prompt-builder";
import type { ClientFieldKey, ClientFields, Prompt } from "@/lib/types";

interface GuidedWorkspaceProps {
  prompt: Prompt;
  fields: ClientFields;
  onFieldChange: (field: ClientFieldKey, value: string) => void;
  /** Generated prompt text; editable, so it is owned by the parent. */
  generatedPrompt: string;
  onGeneratedPromptChange: (value: string) => void;
  onClearDetails: () => void;
  /** Return to the free-form workspace and drop the selection. */
  onChangePrompt: () => void;
  onCopy: () => void;
  copied: boolean;
}

/** Two-column builder: the saved base prompt beside the matter-context form. */
export function GuidedWorkspace({
  prompt,
  fields,
  onFieldChange,
  generatedPrompt,
  onGeneratedPromptChange,
  onClearDetails,
  onChangePrompt,
  onCopy,
  copied,
}: GuidedWorkspaceProps) {
  const filled = countFilledFields(fields);

  return (
    <section className="guided-workspace" aria-label="Guided prompt builder">
      <article className="workspace-panel base-column">
        <div className="panel-heading">
          <div>
            <span>1. Base prompt</span>
            <h2>{prompt.title}</h2>
          </div>
          <button onClick={onChangePrompt}>Change</button>
        </div>
        <p className="panel-summary">{prompt.summary}</p>
        <div className="panel-scroll base-task">
          <p>{prompt.prompt}</p>
        </div>
        <div className="panel-note">The saved prompt remains unchanged.</div>
      </article>

      <article className="workspace-panel generated-column">
        <div className="panel-heading">
          <div>
            <span>2. Client details &amp; final prompt</span>
            <h2>Add the matter context</h2>
          </div>
          <small>
            {filled}/{clientFieldCount} filled
          </small>
        </div>

        <div className="client-form panel-scroll" aria-label="Client and matter details">
          <label>
            <span>Client or principal party</span>
            <input
              value={fields.client}
              onChange={(event) => onFieldChange("client", event.target.value)}
              placeholder="Acme Holdings"
              autoComplete="off"
            />
          </label>
          <label>
            <span>Our role</span>
            <select value={fields.role} onChange={(event) => onFieldChange("role", event.target.value)}>
              <option value="">Select role</option>
              {roleOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="wide">
            <span>Matter or transaction</span>
            <input
              value={fields.matter}
              onChange={(event) => onFieldChange("matter", event.target.value)}
              placeholder="Acquisition of a software company"
              autoComplete="off"
            />
          </label>
          <label>
            <span>Jurisdiction(s)</span>
            <input
              value={fields.jurisdictions}
              onChange={(event) => onFieldChange("jurisdictions", event.target.value)}
              placeholder="Delaware; New York"
              autoComplete="off"
            />
          </label>
          <label>
            <span>Deal stage</span>
            <select value={fields.stage} onChange={(event) => onFieldChange("stage", event.target.value)}>
              <option value="">Select stage</option>
              {stageOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Deadline</span>
            <input
              value={fields.deadline}
              onChange={(event) => onFieldChange("deadline", event.target.value)}
              placeholder="Friday, 12:00 p.m. ET"
              autoComplete="off"
            />
          </label>
          <label>
            <span>Desired output</span>
            <input
              value={fields.output}
              onChange={(event) => onFieldChange("output", event.target.value)}
              placeholder="Partner-ready issue list"
              autoComplete="off"
            />
          </label>
          <label className="wide">
            <span>Documents or data provided</span>
            <textarea
              value={fields.documents}
              onChange={(event) => onFieldChange("documents", event.target.value)}
              placeholder="Draft agreement; disclosure schedules; term sheet"
            />
          </label>
          <label>
            <span>Client priorities</span>
            <textarea
              value={fields.priorities}
              onChange={(event) => onFieldChange("priorities", event.target.value)}
              placeholder="Closing certainty; limited exposure"
            />
          </label>
          <label>
            <span>Known constraints</span>
            <textarea
              value={fields.constraints}
              onChange={(event) => onFieldChange("constraints", event.target.value)}
              placeholder="No financing condition; limited review time"
            />
          </label>
        </div>

        <textarea
          className="generated-prompt-editor"
          value={generatedPrompt}
          onChange={(event) => onGeneratedPromptChange(event.target.value)}
          aria-label="Generated prompt"
        />

        <div className="generated-footer">
          <div className="input-hint">
            <span className="dot" />
            <span>The copied prompt includes both sections.</span>
          </div>
          <div className="generated-buttons">
            <button className="clear-placeholders" onClick={onClearDetails}>
              Clear details
            </button>
            <button
              className={generatedPrompt.trim() ? "copy-button ready" : "copy-button"}
              onClick={onCopy}
              disabled={!generatedPrompt.trim()}
            >
              <CopyIcon />
              <span>{copied ? "Copied" : "Copy full prompt"}</span>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
