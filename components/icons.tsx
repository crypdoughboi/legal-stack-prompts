/** Copy icon used on the workspace's copy button. */
export function CopyIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="6.5" y="6.5" width="9" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.5 13.5h-.4A1.6 1.6 0 0 1 2.5 12V4.1a1.6 1.6 0 0 1 1.6-1.6H12a1.6 1.6 0 0 1 1.5 1.6v.4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/** Magnifier inside the header search field. */
export function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="m13 13 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}
