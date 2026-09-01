import type { PromptCategory } from "@/lib/types";

export const documentReview: PromptCategory = {
  id: `document-review`,
  label: `Review / Redline`,
  shortLabel: `REVIEW`,
  topics: [
    {
      label: `Precedent, Redlines & Drafting Posture`,
      promptIds: [`precedent-compare`, `redline-explain`, `buyer-seller-flip`],
    },
    {
      label: `Drafting Quality Control`,
      promptIds: [`defined-term-audit`, `proofread`],
    },
    {
      label: `Negotiation History`,
      promptIds: [`negotiation-log`],
    },
  ],
  prompts: [
    {
      id: `precedent-compare`,
      title: `Compare against precedent`,
      summary: `Explain every meaningful departure from a trusted form.`,
      prompt: `Compare the current draft against the attached precedent from the perspective of [party]. Ignore purely stylistic changes. Create a table of substantive departures with current-draft citation, precedent citation, risk or effect, likely reason for the change, and recommended response. Separately list missing provisions and defined terms whose meaning changed. Do not assume the precedent is correct; flag places where the current draft may be preferable.`,
    },
    {
      id: `redline-explain`,
      title: `Explain a redline`,
      summary: `Translate markup into legal and commercial consequences.`,
      prompt: `Review the attached redline and explain each substantive change for the deal team. Group related edits by issue rather than page order. For each issue identify who benefits, the practical and legal effect, hidden interactions with other provisions, and a recommended response. Cite the affected sections. End with a short email-ready summary of the five points that matter most.`,
    },
    {
      id: `defined-term-audit`,
      title: `Defined-term and cross-reference audit`,
      summary: `Catch broken drafting mechanics before circulation.`,
      prompt: `Audit the attached document for defined-term, cross-reference, numbering, exhibit, schedule, date, party-name, and internal-consistency errors. Return a table with location, quoted text, issue, proposed correction, and confidence level. Check for unused definitions, undefined capitalized terms, circular definitions, mismatched section references, inconsistent standards, and obligations that conflict. Do not rewrite negotiated language unless needed to fix the identified error.`,
    },
    {
      id: `buyer-seller-flip`,
      title: `Flip drafting posture`,
      summary: `Reframe a draft for the opposite side without overcorrecting.`,
      prompt: `Review the attached agreement currently drafted for [current side] and prepare a targeted issue list for [our side]. Identify provisions that materially shift economic, execution, liability, control, or enforcement risk. For each, propose a commercially credible alternative, explain the trade-off, and note any fact needed before taking the position. Preserve neutral language and ordinary deal mechanics where no change is needed.`,
    },
    {
      id: `negotiation-log`,
      title: `Negotiation log from drafts`,
      summary: `Reconstruct issue history across multiple versions.`,
      prompt: `Compare the attached document versions and reconstruct a negotiation log. For each substantive issue show the original position, each material movement, current language, apparent open point, responsible party if stated, and next action. Cite the version and section for every entry. Separate agreed points, unresolved points, and apparent drafting errors. Do not infer agreement merely because language disappeared without explanation.`,
    },
    {
      id: `proofread`,
      title: `Final execution proofread`,
      summary: `Run a disciplined pre-signing quality-control review.`,
      prompt: `Perform a final execution-readiness review of the attached document set. Check parties and entity names, dates, amounts, signature blocks, defined terms, cross-references, schedules, exhibits, blanks, bracketed text, footers, pagination references, governing law, notice details, and consistency across documents. Return only actionable issues, ranked as blocking, substantive, or cleanup. Cite the exact location and propose the correction.`,
    },
  ],
};
