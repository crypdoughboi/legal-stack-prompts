import type { PromptCategory } from "@/lib/types";

export const communications: PromptCategory = {
  id: `communications`,
  label: `Deal Communications`,
  shortLabel: `COMMS`,
  topics: [
    {
      label: `Partner Updates & Client Advice`,
      promptIds: [`partner-email`, `client-options`],
    },
    {
      label: `Negotiations, Calls & Action Items`,
      promptIds: [`call-agenda`, `meeting-to-actions`],
    },
    {
      label: `Draft Circulation & Matter Handoffs`,
      promptIds: [`redline-cover`, `deal-summary`],
    },
  ],
  prompts: [
    {
      id: `partner-email`,
      title: `Partner update email`,
      summary: `Report progress, open issues, and decisions needed.`,
      prompt: `Draft a concise update email to the supervising partner based on the attached notes. Lead with current status, then identify the few issues that require judgment, the recommendation on each, work completed, items still outstanding, and the next deadline. Use precise deal language, avoid unnecessary background, and do not present an assumption as a fact. Tone should sound like a careful associate who has done the work.`,
    },
    {
      id: `client-options`,
      title: `Client options email`,
      summary: `Explain a negotiated point without over-lawyering it.`,
      prompt: `Draft a client email explaining [issue] based on the attached agreement and negotiation notes. State what the other side proposed, the practical consequence, our realistic options, the trade-off of each, and the recommended response. Cite section numbers naturally where helpful. Keep it concise, avoid unexplained jargon, and identify any fact the client must confirm before we respond.`,
    },
    {
      id: `call-agenda`,
      title: `Negotiation call agenda`,
      summary: `Order open points by leverage and dependency.`,
      prompt: `Create a negotiation call agenda from the attached issue list and draft. Group related issues, prioritize points that unlock others, and for each item include our position, their position, proposed compromise, fallback, fact owner, and section citation. Add a suggested sequence and time budget. Separate items suitable for lawyer-to-lawyer resolution from business points that require the client.`,
    },
    {
      id: `meeting-to-actions`,
      title: `Meeting notes to action list`,
      summary: `Convert rough notes into owned, dated next steps.`,
      prompt: `Convert the attached meeting notes into a clean action list. For each action identify owner, deliverable, deadline, dependency, related document or section, and open question. Separate decisions made, tentative positions, and unresolved points. Draft a short recap email that confirms next steps without overstating agreement.`,
    },
    {
      id: `redline-cover`,
      title: `Redline cover email`,
      summary: `Summarize the markup and frame the remaining issues.`,
      prompt: `Draft a short cover email sending the attached redline to [recipient]. Summarize the principal changes by issue, explain any points held for client confirmation, and identify the items that would benefit from a call. Keep the tone constructive and neutral. Do not characterize a change as minor or customary unless the supplied context supports that characterization.`,
    },
    {
      id: `deal-summary`,
      title: `Matter handoff summary`,
      summary: `Give another lawyer the context needed to take over.`,
      prompt: `Prepare a matter handoff summary from the attached emails, drafts, and trackers. Cover transaction structure, parties and counsel, current document status, agreed economics, unresolved issues, key deadlines, client preferences, precedent choices, filing or consent status, and next actions. Cite the source for disputed or non-obvious facts. Distinguish what is agreed, what is proposed, and what remains unknown.`,
    },
  ],
};
