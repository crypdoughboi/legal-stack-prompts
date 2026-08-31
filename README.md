# The Legal Stack Prompt Bank

A transactional AI prompt workspace for corporate, finance, restructuring, real
estate, and investment funds work: 65 practical prompts across 8 practice areas,
a search index, and a guided builder that prepends client and matter context to
the prompt you copy.

This repository is the source of truth for the site. It is a recreation of the
original ChatGPT Sites deployment, matched pixel-for-pixel and behavior-for-behavior.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
npm test           # vitest (unit + component tests)
```

## Project structure

```
app/                 Next.js App Router entry (layout, metadata, page)
components/          UI. PromptBank.tsx owns all state; the rest are presentational
data/                The prompt library — no UI code lives here
  prompts/<area>.ts  One file per practice area: its topics and its prompts
  featured.ts        The four "Common matter workflows" shortcut cards
  index.ts           Category order as rendered in the practice row
lib/                 Pure logic: search, topic grouping, prompt assembly, types
styles/              base.css (vendored reset) and app.css (application styles)
tests/               Vitest suites for the data, the logic, and the UI
public/              Logo and Open Graph image
```

State lives in one place (`components/PromptBank.tsx`) and flows down; the prompt
content lives entirely under `data/`, so prompts can be edited without touching
components.

## Editing the prompt library

Everything in the bank comes from `data/prompts/*.ts`. To add a prompt:

1. Open the file for its practice area, e.g. `data/prompts/corporate.ts`.
2. Add an entry to `prompts`:

   ```ts
   {
     id: `unique-slug`,          // unique across the whole bank
     title: `Prompt title`,      // shown in the menu and search results
     summary: `One line.`,       // shown beneath the title
     matterInspired: true,       // optional; renders the "Matter-inspired" tag
     prompt: `The prompt body, with [BRACKETED FIELDS] to replace.`,
   }
   ```

3. List its `id` under one of that category's `topics` to place it in the menu.
   A prompt left out of every topic still appears, grouped under
   "Other workflows".

To add a practice area, create a new file in `data/prompts/`, export a
`PromptCategory`, and add it to the array in `data/index.ts` in the position you
want its chip to appear. Counts ("65 prompts · 8 categories", the search
placeholder, the per-topic counts) are all derived, so nothing else needs
updating.

`npm test` covers the library's invariants: unique ids, topic references that
resolve, and no prompt stranded outside a topic.

## How the app works

- **Practice chips** open a menu of that area's prompts grouped by topic; the
  menu closes on a second click or an outside click.
- **Search** matches practice label, topic label, title, and summary
  (case-insensitive substring) and shows up to 12 results.
- **Selecting a prompt** swaps the free-form composer for the two-column guided
  builder: the saved base prompt on the left, ten matter-context fields on the
  right. Unfilled fields stay as bracketed placeholders such as
  `[CLIENT OR PRINCIPAL PARTY]`, so the copied prompt always says what is still
  missing.
- **The generated prompt is editable**; editing a context field regenerates it.
  "Clear details" empties the fields, "Change" returns to the landing view.
- **Copy** writes the full prompt (context header plus base prompt) to the
  clipboard and shows "Copied" for 1.8 seconds.

## Deployment

Deploys to Vercel with no configuration — it is a standard Next.js App Router
project and the page prerenders as static content.

Optional environment variable:

- `NEXT_PUBLIC_SITE_URL` — absolute base URL used for the Open Graph and Twitter
  image URLs. On Vercel the production domain is detected automatically, so set
  this only when serving from a custom domain that Vercel does not know about.

No secrets or credentials are required to build or run this project.
