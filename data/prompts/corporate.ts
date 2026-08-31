import type { PromptCategory } from "@/lib/types";

export const corporate: PromptCategory = {
  id: `corporate`,
  label: `Corporate / M&A`,
  shortLabel: `M&A`,
  topics: [
    {
      label: `Acquisition agreements & diligence`,
      promptIds: [`ma-diligence`, `purchase-agreement-issues`, `term-sheet-consistency`, `disclosure-schedules`],
    },
    {
      label: `Signing, closing & ancillaries`,
      promptIds: [`closing-checklist`, `ancillary-drafts`],
    },
    {
      label: `Public-company & strategic M&A`,
      promptIds: [`green-dot-carveout`, `weatherford-mixed-consideration`, `terrestrial-spac`],
    },
    {
      label: `Cross-border, energy & special situations`,
      promptIds: [`chemaf-critical-minerals`, `kufpec-upstream-interest`],
    },
  ],
  prompts: [
    {
      id: `ma-diligence`,
      title: `M&A diligence risk matrix`,
      summary: `Turn a data room review into an actionable risk table.`,
      prompt: `Act as deal counsel reviewing the attached documents for a proposed [buyer-side/seller-side] acquisition of [target]. Create a diligence risk matrix with columns for document, issue, exact source citation, risk level, agreement section affected, recommended follow-up, and proposed drafting response. Separate confirmed issues from missing information. Do not infer facts that are not in the documents. End with the five issues that could most affect price, structure, closing certainty, or post-closing liability.`,
    },
    {
      id: `purchase-agreement-issues`,
      title: `Purchase agreement issue list`,
      summary: `Surface negotiated points and propose positions by priority.`,
      prompt: `Review the attached [stock/asset/merger] purchase agreement from the perspective of [buyer/seller]. Prepare a partner-ready issue list organized by economics, closing risk, representations, covenants, indemnification, termination, and boilerplate. For each issue, quote or cite the relevant section, explain the practical consequence, state the market or factual question that controls the position, and propose a concise response. Rank issues as must-have, tradeable, or low priority. Do not describe a position as market without supporting precedent or supplied market data.`,
    },
    {
      id: `term-sheet-consistency`,
      title: `Term sheet to definitive check`,
      summary: `Compare agreed deal terms against the draft documents.`,
      prompt: `Compare the attached signed term sheet or letter of intent against the attached definitive agreement. Build a table of every substantive term showing the term-sheet position, definitive-agreement treatment, whether it is consistent, and the exact section citations. Flag omissions, newly added obligations, ambiguous implementation, and terms that shifted economic or closing risk. End with a short list of points requiring client confirmation before the next draft.`,
    },
    {
      id: `disclosure-schedules`,
      title: `Disclosure schedules gap review`,
      summary: `Test schedules against the representations they qualify.`,
      prompt: `Review the disclosure schedules against the representations and warranties in the attached acquisition agreement. For each representation requiring disclosure, identify the relevant schedule, assess whether the disclosure appears complete and properly cross-referenced, and flag missing detail, overbroad incorporation, stale dates, or information that may create a standalone covenant or closing issue. Cite the agreement section and schedule entry for every point. Return a clean gap list suitable for sending to the deal team.`,
    },
    {
      id: `closing-checklist`,
      title: `M&A closing checklist`,
      summary: `Build a responsibility-driven checklist from the agreement.`,
      prompt: `Create a closing checklist from the attached transaction documents for [transaction name]. Include every signing deliverable, closing condition, consent, filing, certificate, payment, ancillary agreement, and post-closing item. For each item, identify the responsible party, source section, required form, dependency, status placeholder, and timing. Separate signing, pre-closing, closing, and post-closing items. Flag circular dependencies and items whose owner or form is unclear.`,
    },
    {
      id: `ancillary-drafts`,
      title: `Ancillary document set`,
      summary: `Identify and draft the first pass of routine deal documents.`,
      prompt: `Using the attached definitive agreement and deal summary, identify the full set of ancillary documents required for signing and closing. Group them by party and timing, cite the source obligation, and distinguish negotiated ancillaries from routine certificates or resolutions. Then draft first-pass forms for [select documents] using the defined terms and factual details in the agreement. Insert bracketed placeholders only where the source materials do not provide the fact.`,
    },
    {
      id: `green-dot-carveout`,
      title: `Public fintech carve-out take-private`,
      summary: `Coordinate an asset carve-out, privatization, and regulated-business perimeter.`,
      matterInspired: true,
      prompt: `Act as buyer's deal counsel on a proposed $[amount] acquisition that will take a public company's non-bank fintech business private while leaving regulated bank assets outside the purchased perimeter. Using the attached merger or asset purchase agreement, separation plan, organizational chart, regulatory memo, transition-services term sheet, and disclosure schedules, create: (1) a perimeter table identifying included and excluded entities, assets, liabilities, contracts, employees, data, IP, and licenses; (2) a sequencing map for shareholder approval, regulatory approvals, separation steps, financing, and closing; (3) an issue list covering stranded costs, shared contracts, commingled data, intercompany balances, wrong-pocket mechanics, TSA scope, brand transition, and post-closing cooperation; and (4) a drafting checklist for definitions, covenants, conditions, and closing deliverables. Cite every conclusion and separate confirmed facts from assumptions.`,
    },
    {
      id: `weatherford-mixed-consideration`,
      title: `Mixed-consideration public acquisition`,
      summary: `Test stock-and-cash election mechanics, approvals, and closing certainty.`,
      matterInspired: true,
      prompt: `Review the attached public-company acquisition documents for a transaction in which target stockholders may elect [buyer stock] or a mix of [stock and cash]. Prepare a transaction-mechanics memorandum covering consideration elections, allocation and proration, treatment of equity awards, fractional shares, exchange-agent mechanics, withholding, appraisal or dissent rights, board and stockholder approvals, controlling-stockholder implications, regulatory conditions, termination rights, and closing timing. Reconcile the merger agreement, proxy materials, support agreement, and public announcement. Build a table of every inconsistency or missing operational step, cite the source, identify the responsible workstream, and propose precise drafting or disclosure fixes.`,
    },
    {
      id: `chemaf-critical-minerals`,
      title: `Distressed cross-border minerals acquisition`,
      summary: `Integrate acquisition, JV, financing, creditors, offtake, and government approvals.`,
      matterInspired: true,
      prompt: `Act as coordinating transaction counsel for a distressed cross-border acquisition of a critical-minerals group by a newly formed joint venture. Review the acquisition agreement, JV agreement, financing documents, creditor arrangements, offtake agreements, licenses, government correspondence, and closing checklist. Produce an integrated workstream matrix covering acquisition structure, creditor consents and releases, funding sources and uses, offtake economics and security, governance and reserved matters, sanctions and anti-corruption diligence, mining and foreign-investment approvals, local-law deliverables, stakeholder engagement, and funds flow. Identify cross-document dependencies, conditions that can fail independently, long-lead approvals, and terms that allocate the same risk inconsistently. Cite every document and route jurisdiction-specific conclusions to qualified local counsel.`,
    },
    {
      id: `kufpec-upstream-interest`,
      title: `Minority upstream asset acquisition`,
      summary: `Map title, operatorship, joint-venture rights, and regulatory transfer steps.`,
      matterInspired: true,
      prompt: `Review the proposed acquisition of a [percentage]% participating interest in [oil and gas blocks/assets] from [seller]. Using the sale agreement, concession or production-sharing documents, joint operating agreement, title materials, operator records, environmental materials, and regulatory checklist, prepare: (1) an asset-and-interest schedule; (2) a consent and pre-emption analysis; (3) a joint-venture rights matrix covering voting, budgets, cash calls, default, withdrawal, decommissioning, and transfer restrictions; (4) a liabilities map separating pre-closing, post-closing, environmental, abandonment, tax, and operator liabilities; and (5) a closing and post-closing registration checklist. Cite the governing provisions, identify local-law questions, and flag mismatches between the commercial deal and the underlying asset documents.`,
    },
    {
      id: `terrestrial-spac`,
      title: `De-SPAC and PIPE closing control`,
      summary: `Reconcile business-combination, PIPE, redemptions, and listing deliverables.`,
      matterInspired: true,
      prompt: `Act as transaction counsel managing a de-SPAC closing with a concurrent $[amount] PIPE and a post-closing public-company listing. Reconcile the business combination agreement, PIPE subscription agreements, sponsor arrangements, registration statement or proxy, redemption results, funds flow, exchange-agent materials, charter documents, board approvals, legal opinions, and listing conditions. Create a sources-and-uses bridge, capitalization table, security-issuance ledger, closing-condition matrix, and minute-by-minute closing sequence. Flag assumptions affected by redemptions, minimum-cash tests, PIPE funding failures, share-count changes, lockups, earnouts, and exchange conditions. Cite every input and identify figures requiring confirmation from finance, the transfer agent, or the exchange.`,
    },
  ],
};
