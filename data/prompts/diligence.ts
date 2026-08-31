import type { PromptCategory } from "@/lib/types";

export const diligence: PromptCategory = {
  id: `diligence`,
  label: `Diligence / Extraction`,
  shortLabel: `DD`,
  topics: [
    {
      label: `Contract review & change of control`,
      promptIds: [`change-control`, `contract-matrix`],
    },
    {
      label: `Consents, notices & closing readiness`,
      promptIds: [`consent-list`],
    },
    {
      label: `Data room gaps & reporting`,
      promptIds: [`missing-documents`, `risk-summary`, `data-room-status`],
    },
  ],
  prompts: [
    {
      id: `change-control`,
      title: `Change-of-control consent sweep`,
      summary: `Find consent, notice, termination, and acceleration risks.`,
      prompt: `Review the attached contracts for provisions triggered by the proposed [transaction description]. Extract change-of-control, assignment, deemed assignment, notice, consent, termination, pricing, acceleration, exclusivity, and most-favored terms. Create a table with contract, counterparty, provision, trigger analysis, consent or notice deadline, consequence, assignment path, and exact citation. Flag ambiguous provisions for attorney review and do not infer consent from silence.`,
    },
    {
      id: `contract-matrix`,
      title: `Material contract matrix`,
      summary: `Convert a contract set into comparable deal data.`,
      prompt: `Create a material contract matrix from the attached agreements. Extract parties, purpose, term, renewal, economics, exclusivity, minimum commitments, termination rights, change of control, assignment, indemnity, liability cap, governing law, disputes, confidentiality, data or IP terms, and unusual obligations. Cite every entry. Use Not stated rather than guessing and flag inconsistencies between the agreement and amendments.`,
    },
    {
      id: `consent-list`,
      title: `Closing consent and notice list`,
      summary: `Identify third-party and governmental transaction steps.`,
      prompt: `Review the attached diligence materials and transaction documents to identify every third-party or governmental consent, notice, approval, filing, waiver, payoff, release, or termination required for signing or closing. State the triggering provision, responsible party, timing, required form, consequence of failure, and source citation. Separate mandatory legal steps from contractual steps and from items that are merely prudent.`,
    },
    {
      id: `missing-documents`,
      title: `Missing document and follow-up list`,
      summary: `Turn an incomplete data room into focused requests.`,
      prompt: `Review the attached data-room index, diligence request list, and available documents. Identify missing, incomplete, expired, unsigned, inconsistent, or superseded materials. Group requests by topic and priority. For each request explain why the document matters, what issue it may resolve, and which uploaded material created the follow-up. Draft the result as a concise supplemental request list suitable for circulation.`,
    },
    {
      id: `risk-summary`,
      title: `Executive diligence summary`,
      summary: `Distill a large review into decision-relevant findings.`,
      prompt: `Using the attached diligence reports and underlying documents, prepare an executive summary for the transaction team. Focus on issues that could affect valuation, structure, closing conditions, consents, financing, integration, or post-closing liability. For each issue state the fact, exact source citation, risk, recommended response, and unresolved question. Separate confirmed findings from preliminary concerns. Keep the main summary to one page, followed by a detailed appendix.`,
    },
    {
      id: `data-room-status`,
      title: `Data room review status`,
      summary: `Show coverage, gaps, owners, and next actions.`,
      prompt: `Create a diligence status dashboard from the attached index, request list, review notes, and issue trackers. Show each diligence category, documents requested, documents received, review status, key findings, open questions, responsible reviewer, and next action. Reconcile duplicate or inconsistent entries and cite the underlying tracker or document. Highlight blocked workstreams and deadlines affecting the deal timetable.`,
    },
  ],
};
