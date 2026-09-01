"use client";

import { SearchIcon } from "@/components/icons";

interface TopBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  onSearch: (query: string) => void;
  onGoHome: () => void;
  promptCount: number;
  practiceCount: number;
}

/** Sticky header: logo lockup, inline search, and the library size on the right. */
export function TopBar({ query, onQueryChange, onSearch, onGoHome, promptCount, practiceCount }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <button className="brand" onClick={onGoHome} aria-label="The Legal Stack Prompt Bank home">
          <span className="brand-mark" aria-hidden="true">
            LS
          </span>
          <span className="brand-name">The Legal Stack</span>
          <span className="brand-sub">Prompt Bank</span>
        </button>

        <div className="topbar-search">
          <SearchIcon />
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && event.currentTarget.value.trim()) {
                onSearch(event.currentTarget.value);
              }
            }}
            placeholder="Search prompts"
            aria-label="Search prompts"
          />
        </div>

        <span className="topbar-count">
          {promptCount} prompts · {practiceCount} practice areas
        </span>
      </div>
    </header>
  );
}
