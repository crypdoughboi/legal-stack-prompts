"use client";

import { SearchIcon } from "@/components/icons";
import { totalPromptCount } from "@/lib/prompt-bank";
import type { Prompt, PromptSearchResult } from "@/lib/types";

interface SearchFieldProps {
  query: string;
  onQueryChange: (query: string) => void;
  results: PromptSearchResult[];
  onSelectPrompt: (prompt: Prompt) => void;
}

/** Search input plus the result list that replaces it while typing. */
export function SearchField({ query, onQueryChange, results, onSelectPrompt }: SearchFieldProps) {
  return (
    <>
      <div className="search-wrap">
        <SearchIcon />
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={`Search ${totalPromptCount} transactional prompts`}
          aria-label="Search the prompt bank"
        />
        {query && (
          <button className="clear-search" onClick={() => onQueryChange("")} aria-label="Clear search">
            ×
          </button>
        )}
      </div>

      {query && (
        <div className="search-results" role="listbox">
          {results.length ? (
            results.map((result) => (
              <button key={result.id} onClick={() => onSelectPrompt(result)}>
                <span>
                  <strong>{result.title}</strong>
                  <small>
                    {result.practice} · {result.topic}
                    {result.matterInspired ? " · Matter-inspired" : ""}
                  </small>
                </span>
                <span>{result.summary}</span>
              </button>
            ))
          ) : (
            <p>
              No prompts match “{query}”. Try a task like consent, lease, covenant, or side letter.
            </p>
          )}
        </div>
      )}
    </>
  );
}
