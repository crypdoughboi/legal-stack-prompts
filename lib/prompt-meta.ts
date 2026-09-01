// Redesign-only metadata. Keyed by the existing prompt ids in /data — no prompt text is modified.
// `task` powers task-first navigation; `gets` is the "You get back" line shown in results.

export type TaskId =
  | "review"
  | "compare"
  | "issues"
  | "list"
  | "draft"
  | "summarize"
  | "extract"
  | "checklist"
  | "comms";

export interface PromptMeta {
  task: TaskId;
  gets: string;
}

export interface TaskDefinition {
  id: TaskId;
  label: string;
  blurb: string;
}

export const TASKS: TaskDefinition[] = [
  { id: "review", label: "Review a document", blurb: "Read a draft and tell me what matters." },
  { id: "compare", label: "Compare two documents", blurb: "Find every substantive difference." },
  { id: "issues", label: "Find negotiation issues", blurb: "Surface the points worth fighting for." },
  { id: "list", label: "Build an issues or status list", blurb: "Turn a review into a partner-ready list." },
  { id: "draft", label: "Draft something", blurb: "First pass at a document or email." },
  { id: "summarize", label: "Summarize a matter", blurb: "Distil a large record into a short read." },
  { id: "extract", label: "Extract terms into a table", blurb: "Pull structured data out of documents." },
  { id: "checklist", label: "Build a checklist", blurb: "Every deliverable, owner, and deadline." },
  { id: "comms", label: "Write to a client or partner", blurb: "Email-ready, in a careful associate's voice." },
];

// The six task rows offered as suggestions when a search comes up empty.
export const LEAD_TASKS: TaskId[] = ["review", "compare", "issues", "list", "draft", "summarize"];

export const PROMPT_META: Record<string, PromptMeta> = {
  "ma-diligence": { task: "review", gets: "A risk table plus the five issues that could move price or closing." },
  "purchase-agreement-issues": { task: "issues", gets: "An issue list ranked must-have, tradeable, low priority." },
  "term-sheet-consistency": { task: "compare", gets: "A term-by-term table of consistencies, omissions, and shifts." },
  "disclosure-schedules": { task: "review", gets: "A clean gap list ready to send to the deal team." },
  "closing-checklist": { task: "checklist", gets: "A checklist by phase with owners, forms, and dependencies." },
  "ancillary-drafts": { task: "draft", gets: "A grouped ancillary list plus first-pass drafts." },
  "green-dot-carveout": { task: "review", gets: "A perimeter table, sequencing map, issue list, and drafting checklist." },
  "weatherford-mixed-consideration": { task: "review", gets: "A mechanics memo and a table of every inconsistency." },
  "terrestrial-spac": { task: "checklist", gets: "A sources-and-uses bridge, cap table, and minute-by-minute closing sequence." },
  "chemaf-critical-minerals": { task: "review", gets: "An integrated workstream matrix across every document." },
  "kufpec-upstream-interest": { task: "review", gets: "Five schedules: interests, consents, JV rights, liabilities, closing steps." },
  "credit-agreement-summary": { task: "summarize", gets: "A cited term summary for the deal team." },
  "commitment-paper-check": { task: "compare", gets: "A term-by-term deviation table across four documents." },
  "covenant-capacity": { task: "extract", gets: "A capacity map with the calculation steps shown." },
  "amendment-waiver": { task: "draft", gets: "A first-pass amendment plus an open-items list." },
  "conditions-precedent": { task: "checklist", gets: "A CP checklist with owner, form, deadline, and dependency." },
  "security-package": { task: "review", gets: "An entity-by-entity collateral table with gaps flagged." },
  "syndicated-refinancing": { task: "checklist", gets: "A lender matrix, payoff table, release plan, and funds flow." },
  "cloudhq-abs": { task: "review", gets: "A structure table, tranche matrix, disclosure check, and closing tracker." },
  "fiber-revenue-notes": { task: "extract", gets: "A collateral and cash-flow map plus a disclosure diligence matrix." },
  "whole-business-securitization": { task: "review", gets: "A ring-fencing map, collateral schedule, and waterfall summary." },
  "capital-structure": { task: "extract", gets: "A tranche-by-tranche map with leverage points identified." },
  "rsa-review": { task: "issues", gets: "A prioritized issue list with the leverage each term creates." },
  "critical-dates": { task: "extract", gets: "A chronological table of every deadline and its consequence." },
  "dip-order-check": { task: "compare", gets: "A provision-by-provision table of what changed." },
  "first-day-motions": { task: "summarize", gets: "A matrix of relief, basis, caps, deadlines, and dependencies." },
  "multi-affiliate-first-day": { task: "review", gets: "An entity-by-entity matrix reconciling every dollar amount." },
  "plan-disclosure": { task: "compare", gets: "A class-by-class treatment table with both sides cited." },
  "red-lobster-stalking-horse": { task: "compare", gets: "One alignment matrix plus a prioritized cure list." },
  "lease-portfolio-365": { task: "extract", gets: "A location-by-location decision matrix and exception list." },
  "psa-issue-list": { task: "issues", gets: "A prioritized issue list with proposed positions." },
  "title-survey": { task: "extract", gets: "An exception matrix with objection deadlines and cures." },
  "property-diligence": { task: "summarize", gets: "A report organized by title, occupancy, condition, and closing." },
  "student-housing-portfolio": { task: "review", gets: "A per-property dashboard plus a portfolio-level issue table." },
  "lease-abstract": { task: "extract", gets: "A full lease abstract table with amendments reconciled." },
  "estoppel-snda": { task: "compare", gets: "A comparison table with targeted revisions proposed." },
  "hartland-sale-leaseback": { task: "review", gets: "A lifecycle map of obligations triggered by the exit." },
  "re-closing": { task: "checklist", gets: "A closing checklist with owners, forms, and deadlines." },
  "asana-retail-jv": { task: "extract", gets: "A JV terms matrix plus a first-acquisition checklist." },
  "lpa-terms": { task: "extract", gets: "A fund terms matrix with every provision cited." },
  "ppm-consistency": { task: "compare", gets: "A table of inconsistencies and which document to fix." },
  "subscription-review": { task: "review", gets: "A completeness checklist and an investor follow-up list." },
  "fund-formation": { task: "checklist", gets: "A checklist with owner, dependency, and target date." },
  "jadwa-private-credit": { task: "checklist", gets: "Five deliverables: entity map, checklist, tracker, authority matrix, deployment list." },
  "side-letter-obligations": { task: "extract", gets: "An obligations matrix by investor, trigger, and owner." },
  "mfn-analysis": { task: "review", gets: "An election matrix with recommendations and assumptions stated." },
  "manrre-reit-conversion": { task: "review", gets: "A conversion-and-closing matrix with legacy conflicts flagged." },
  "precedent-compare": { task: "compare", gets: "A departures table plus a list of missing provisions." },
  "redline-explain": { task: "review", gets: "Edits grouped by issue, plus an email-ready top five." },
  "buyer-seller-flip": { task: "issues", gets: "A targeted issue list with credible alternatives." },
  "defined-term-audit": { task: "review", gets: "A table of errors with proposed corrections and confidence." },
  "proofread": { task: "review", gets: "Only actionable issues, ranked blocking, substantive, cleanup." },
  "negotiation-log": { task: "compare", gets: "A log of positions, movements, and open points by version." },
  "change-control": { task: "extract", gets: "A contract-by-contract table of triggers and deadlines." },
  "contract-matrix": { task: "extract", gets: "One row per contract, every field cited." },
  "consent-list": { task: "checklist", gets: "A consent list separating legal, contractual, and prudent steps." },
  "missing-documents": { task: "list", gets: "A supplemental request list ready to circulate." },
  "risk-summary": { task: "summarize", gets: "A one-page summary with a detailed appendix." },
  "data-room-status": { task: "list", gets: "A status dashboard with blocked workstreams highlighted." },
  "partner-email": { task: "comms", gets: "A short email: status, judgment calls, next deadline." },
  "client-options": { task: "comms", gets: "A client email with options, trade-offs, and a recommendation." },
  "call-agenda": { task: "draft", gets: "An agenda with positions, fallbacks, sequence, and time budget." },
  "meeting-to-actions": { task: "list", gets: "An action list plus a short recap email." },
  "redline-cover": { task: "comms", gets: "A short, neutral cover email for the markup." },
  "deal-summary": { task: "summarize", gets: "A handoff memo separating agreed, proposed, and unknown." },
};

// Extra search vocabulary — lawyer terminology that does not appear in prompt titles.
export const SEARCH_SYNONYMS: Record<string, string> = {
  "purchase-agreement-issues": "spa apa merger agreement negotiation points markup buyer seller reps",
  "ma-diligence": "data room due diligence red flag report",
  "credit-agreement-summary": "loan agreement facility summary term extraction lma",
  "covenant-capacity": "restricted payment basket incurrence debt capacity",
  "precedent-compare": "form template markup redline against precedent",
  "negotiation-log": "versions turns drafts history blackline",
  "psa-issue-list": "real property sale contract issues",
  "lease-abstract": "tenant landlord rent roll abstract summary",
  "change-control": "coc assignment anti-assignment consent",
  "risk-summary": "executive summary findings memo to partner",
  "partner-email": "update supervising partner status note",
  "closing-checklist": "signing closing agenda deliverables",
  "conditions-precedent": "cp list closing conditions financing",
  "defined-term-audit": "typos cross references cleanup qc",
  "proofread": "execution version signature pages final check",
  "plan-disclosure": "chapter 11 plan ds solicitation",
  "first-day-motions": "first day relief bankruptcy filing",
  "lpa-terms": "limited partnership agreement fund terms",
  "mfn-analysis": "most favoured nation side letter election",
  "term-sheet-consistency": "loi heads of terms definitive agreement",
};
