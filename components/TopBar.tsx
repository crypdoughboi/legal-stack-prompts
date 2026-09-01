"use client";

import { SearchIcon } from "@/components/icons";

interface TopBarProps {
  query: string;
  onQueryChange: (query: string) => void;
  onSearch: (query: string) => void;
  onOpenNav: () => void;
  promptCount: number;
  practiceCount: number;
}

/** Sticky header: a mobile nav toggle, inline search, and the library size. The brand lives at the top of the side nav. */
export function TopBar({ query, onQueryChange, onSearch, onOpenNav, promptCount, practiceCount }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <button className="nav-toggle" onClick={onOpenNav} aria-label="Open task and practice area navigation">
          <span />
          <span />
          <span />
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
