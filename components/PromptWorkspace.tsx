"use client";

import { CopyIcon } from "@/components/icons";

interface PromptWorkspaceProps {
  value: string;
  onChange: (value: string) => void;
  onCopy: () => void;
  copied: boolean;
}

/** Free-form composer shown before a prompt is selected. */
export function PromptWorkspace({ value, onChange, onCopy, copied }: PromptWorkspaceProps) {
  return (
    <>
      <div className="composer-label-row">
        <span>Prompt workspace</span>
      </div>
      <textarea
        className="prompt-editor"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Select a prompt above, or write your own request here. Replace bracketed fields with matter-specific facts."
        aria-label="Prompt workspace"
      />
      <div className="composer-footer">
        <div className="input-hint">
          <span className="dot" />
          <span>Confirm remaining brackets, facts, and citations.</span>
        </div>
        <button
          className={value.trim() ? "copy-button ready" : "copy-button"}
          onClick={onCopy}
          disabled={!value.trim()}
        >
          <CopyIcon />
          <span>{copied ? "Copied" : "Copy prompt"}</span>
        </button>
      </div>
    </>
  );
}
