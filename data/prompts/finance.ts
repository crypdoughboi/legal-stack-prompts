import type { PromptCategory } from "@/lib/types";

export const finance: PromptCategory = {
  id: `finance`,
  label: `Finance`,
  shortLabel: `FIN`,
  topics: [
    {
      label: `Credit Agreements & Commitment Papers`,
      promptIds: [`credit-agreement-summary`, `commitment-paper-check`, `covenant-capacity`, `amendment-waiver`, `borrower-side-credit-agreement-review`, `lender-side-credit-agreement-review`, `credit-agreement-draft-from-term-sheet`, `defined-terms-and-covenant-dependency-audit`, `mandatory-prepayment-mechanics-review`, `event-of-default-and-cure-analysis`, `assignment-and-lender-voting-rights-audit`, `credit-agreement-executive-summary`],
    },
    {
      label: `Closing Conditions, Guarantees & Collateral`,
      promptIds: [`conditions-precedent`, `security-package`, `security-agreement-review`, `guarantee-review`, `collateral-package-completeness-audit`, `guarantor-coverage-and-release-test`, `ucc-and-lien-search-exceptions-review`, `collateral-release-mechanics-analysis`, `conditions-precedent-checklist`, `existing-cp-checklist-audit`, `legal-opinion-coverage-matrix`, `financing-funds-flow-verification`],
    },
    {
      label: `Syndicated Loans & Refinancings`,
      promptIds: [`syndicated-refinancing`],
    },
    {
      label: `Structured Finance & Securitization`,
      promptIds: [`cloudhq-abs`, `fiber-revenue-notes`, `whole-business-securitization`],
    },
    {
      label: `Term Sheets & Commitment Letters`,
      promptIds: [`borrower-side-financing-term-sheet-review`, `lender-side-financing-term-sheet-review`, `commitment-letter-conditions-review`, `market-flex-and-fee-letter-analysis`, `commitment-package-consistency-audit`],
    },
    {
      label: `Covenants & Capacity`,
      promptIds: [`debt-basket-capacity-analysis`, `restricted-payment-capacity-analysis`, `investment-basket-capacity-analysis`, `lien-capacity-analysis`, `incremental-facility-capacity-analysis`, `unrestricted-subsidiary-designation-analysis`, `ebitda-add-back-audit`, `financial-covenant-compliance-test`, `asset-sale-and-reinvestment-capacity-analysis`, `available-amount-builder-basket-ledger`],
    },
    {
      label: `Intercreditor & Subordination`,
      promptIds: [`intercreditor-agreement-review`, `abl-term-loan-intercreditor-analysis`, `subordination-agreement-review`, `intercreditor-bankruptcy-scenario-analysis`],
    },
    {
      label: `Amendments & Waivers`,
      promptIds: [`amendment-consent-and-sacred-rights-analysis`, `waiver-request-analysis`, `amendment-conforming-changes-audit`],
    },
    {
      label: `Compare Drafts & Summaries`,
      promptIds: [`credit-agreement-markup-to-issues-list`, `financing-precedent-comparison`, `financing-deal-summary`],
    },
    {
      label: `Compliance & Administration`,
      promptIds: [`borrower-compliance-calendar`, `compliance-certificate-verification`],
    },
  ],
  prompts: [
    {
      id: `credit-agreement-summary`,
      title: `Credit agreement term sheet`,
      summary: `Extract economics, covenants, defaults, and mechanics.`,
      prompt: `Review the attached credit agreement and produce a concise transaction summary for the deal team. Cover facility size and type, pricing, maturity, amortization, mandatory prepayments, conditions to borrowing, representations, affirmative and negative covenants, financial covenants, events of default, guarantors, collateral, voting thresholds, and agency mechanics. Cite the section or definition for every extracted term. Flag internal inconsistencies and provisions that require a calculation rather than a simple extraction.`,
    },
    {
      id: `commitment-paper-check`,
      title: `Commitment papers consistency check`,
      summary: `Test the credit agreement against the commitment package.`,
      prompt: `Compare the attached commitment letter, fee letter, term sheet, and credit agreement. Create a table of each material financing term, its treatment in the commitment papers, its treatment in the credit agreement, the precise citations, and any deviation or open point. Focus on economics, flex, conditionality, covenant levels, baskets, collateral, guarantees, assignments, and lender protections. Separate true inconsistencies from provisions that merely add implementation detail.`,
    },
    {
      id: `covenant-capacity`,
      title: `Covenant and basket capacity map`,
      summary: `Map restricted actions, baskets, growers, and blockers.`,
      prompt: `Analyze the attached credit agreement from the perspective of [borrower/lender] and create a covenant capacity map for [proposed transaction or action]. Trace every relevant defined term, ratio condition, basket, grower, available amount component, reclassification right, and blocker. Show the calculation steps using supplied financial data, cite every source provision, state all assumptions, and identify facts still needed. Do not treat an illustrative calculation as a legal conclusion.`,
    },
    {
      id: `conditions-precedent`,
      title: `Conditions precedent checklist`,
      summary: `Convert closing conditions into an owned action list.`,
      prompt: `Extract every condition precedent to closing and each post-closing undertaking from the attached financing documents. Create a checklist with source citation, responsible party, document or action required, form requirement, deadline, dependency, and status. Reconcile duplicative conditions across the credit agreement, commitment letter, security documents, and local-law schedules. Flag items that are subjective, circular, or not assigned to a clear owner.`,
    },
    {
      id: `amendment-waiver`,
      title: `Amendment or waiver first draft`,
      summary: `Draft from instructions while checking consent mechanics.`,
      prompt: `Draft a first-pass [amendment/waiver/consent] to the attached credit agreement implementing these business terms: [terms]. Before drafting, identify the provisions affected, the consent threshold, required parties, conditions to effectiveness, representations to be repeated, and any conforming changes. Use the agreement's defined terms and drafting conventions. After the draft, provide an open-items list and cite the provisions supporting each structural choice.`,
    },
    {
      id: `security-package`,
      title: `Security package completeness review`,
      summary: `Check collateral documents against the agreed structure.`,
      prompt: `Review the attached financing and organizational documents and assess whether the proposed guarantee and collateral package matches the agreed structure. Create an entity-by-entity table showing jurisdiction, ownership, guarantor status, pledged equity, asset security, exclusions, required filings, perfection steps, and source citations. Flag missing entities, inconsistent names, unaddressed local-law steps, and post-closing items. Do not opine on local law unless the relevant authority or opinion is supplied.`,
    },
    {
      id: `cloudhq-abs`,
      title: `Inaugural ABS master-trust review`,
      summary: `Coordinate trust architecture, tranches, cash flow, ratings, and closing.`,
      matterInspired: true,
      prompt: `Act as counsel to [issuer/initial purchaser] on an inaugural asset-backed securities issuance through a newly established master trust. Review the indenture, trust and servicing documents, offering memorandum, note purchase agreement, cash-flow model, data tape, rating-agency materials, opinions, and closing agenda. Prepare: (1) a structure diagram in table form showing entities, asset transfers, payment flows, control rights, and bankruptcy-remoteness steps; (2) a tranche matrix covering principal, priority, rating, coupon, maturity, amortization, credit enhancement, and voting; (3) an offering-document disclosure check against the operative documents and model; (4) a ratings-condition and opinion checklist; and (5) a closing deliverables tracker. Trace defined terms across documents and flag any mismatch affecting payment priority, collateral, triggers, or investor disclosure.`,
    },
    {
      id: `fiber-revenue-notes`,
      title: `Fiber revenue-note collateral map`,
      summary: `Test network revenues, customer data, waterfalls, and secured-note disclosure.`,
      matterInspired: true,
      prompt: `Review a Rule 144A offering of secured fiber-network revenue notes for a communications provider. Using the offering memorandum, indenture, security documents, customer and network data, revenue model, management agreement, and diligence reports, build a collateral and cash-flow map showing network assets, receivables, accounts, equity pledges, revenue deposits, waterfall priorities, reserves, triggers, and release mechanics. Then produce a disclosure diligence matrix for subscriber counts, service footprint, churn, concentration, capex, outages, regulatory matters, and model assumptions. Cite each source, reconcile numerical inconsistencies, and identify any asset, revenue stream, or obligor that appears outside the collateral package.`,
    },
    {
      id: `syndicated-refinancing`,
      title: `Multi-lender refinancing control sheet`,
      summary: `Reconcile payoffs, new facilities, security releases, and syndicate roles.`,
      matterInspired: true,
      prompt: `Act as borrower counsel on a €[amount] syndicated senior-facilities refinancing involving [number] financial institutions and an administrative agent. Reconcile the facilities agreement, commitment and fee letters, payoff letters, hedge documents, security releases, new security documents, intercreditor agreement, funds flow, and conditions-precedent list. Create a lender-and-role matrix, debt payoff and replacement table, jurisdiction-by-jurisdiction release and perfection plan, CP ownership tracker, and closing funds-flow reconciliation. Flag circular conditions, timing gaps between release and re-perfection, missing accession documents, inconsistent lender allocations, and any legacy obligation not clearly discharged. Cite each operative provision.`,
    },
    {
      id: `whole-business-securitization`,
      title: `Whole-business securitization audit`,
      summary: `Connect franchise cash flows, covenants, servicing, and investor disclosure.`,
      matterInspired: true,
      prompt: `Review a whole-business securitization backed by franchise-related assets for a multi-jurisdiction restaurant platform. Prepare an entity and asset ring-fencing map, a collateral schedule covering franchise agreements, royalties, IP, accounts, and equity interests, and a cash-waterfall summary. Cross-check the offering memorandum against the indenture, management agreement, IP license, franchise data, financial model, and legal opinions for store counts, geographic exposure, revenue definitions, leverage tests, amortization events, manager termination, bankruptcy-remoteness, and permitted leakage. Cite every figure and provision, identify assumptions that need business verification, and flag foreign-law assets or contracts requiring specialist review.`,
    },
    {
      id: `borrower-side-financing-term-sheet-review`,
      title: `Borrower-Side Financing Term Sheet Review`,
      summary: `Review the proposed financing terms from the borrower's perspective.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [TERM SHEET], [BORROWER OBJECTIVES], [CAPITAL STRUCTURE], and [COMPARABLE PRECEDENTS].

Assignment: review the proposed financing terms from the borrower's perspective.

Review the document as a connected transaction document, not as isolated clauses. Focus on: facility size; pricing; OID/fees; tenor; amortization; prepayment; call protection; financial covenants; negative covenants; baskets; incremental debt; MFN; collateral; guarantees; mandatory prepayments; defaults; assignments; and conditions.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a borrower issues list with economics, flexibility, execution risk, and proposed asks..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `lender-side-financing-term-sheet-review`,
      title: `Lender-Side Financing Term Sheet Review`,
      summary: `Review the proposed financing terms from the lender's perspective.`,
      prompt: `You are transactional corporate counsel. You represent [LENDER].

Use only the following materials unless expressly instructed otherwise: [TERM SHEET], [CREDIT APPROVAL], [UNDERWRITING MEMO], and [LENDER PLAYBOOK].

Assignment: review the proposed financing terms from the lender's perspective.

Review the document as a connected transaction document, not as isolated clauses. Focus on: facility structure; pricing; amortization; collateral; guarantees; covenants; baskets; incremental facilities; MFN; prepayments; financial maintenance tests; defaults; assignments; conditions; and documentation standards.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a lender issues list identifying departures from credit approval and required documentary protections..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `commitment-letter-conditions-review`,
      title: `Commitment Letter Conditions Review`,
      summary: `Identify conditions that could undermine financing certainty or create documentation risk.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [COMMITMENT LETTER], [TERM SHEET], [ACQUISITION AGREEMENT if applicable], and [CLIENT INSTRUCTIONS].

Assignment: identify conditions that could undermine financing certainty or create documentation risk.

Review the document as a connected transaction document, not as isolated clauses. Focus on: SunGard/limited-conditionality terms; specified representations; acquisition agreement conditions; MAE concepts; marketing period; syndication; KYC; diligence; documentation principles; flex; fee letter linkage; and termination.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a conditions matrix with source, standard, borrower/lender risk, and proposed revision..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `market-flex-and-fee-letter-analysis`,
      title: `Market Flex and Fee Letter Analysis`,
      summary: `Analyze flex rights and their economic/documentary consequences.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [FEE LETTER], [COMMITMENT LETTER], [TERM SHEET], and [SYNDICATION PLAN].

Assignment: analyze flex rights and their economic/documentary consequences.

Review the document as a connected transaction document, not as isolated clauses. Focus on: pricing flex; OID; floors; tenor; amortization; covenant changes; call protection; MFN; structure flex; tranche changes; collateral/guarantor flex; caps; market triggers; and confidentiality.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a flex matrix: Flex Right | Cap/Limit | Trigger | Economic Effect | Documentary Effect | Consent Needed | Notes..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `commitment-package-consistency-audit`,
      title: `Commitment Package Consistency Audit`,
      summary: `Identify inconsistent economics, conditions, or defined concepts across the financing commitment package.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [TERM SHEET], [COMMITMENT LETTER], [FEE LETTER], [ENGAGEMENT LETTER], and [ACQUISITION AGREEMENT if relevant].

Assignment: identify inconsistent economics, conditions, or defined concepts across the financing commitment package.

Perform a document-integrity and legal-work-product QA audit. Focus on: facility size; pricing; fees; tenor; flex; conditions; representations; covenants; collateral; guarantors; assignment; indemnity; expenses; and termination.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a cross-document inconsistency table and prioritized correction list..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `borrower-side-credit-agreement-review`,
      title: `Borrower-Side Credit Agreement Review`,
      summary: `Review the credit agreement for economic accuracy and operating flexibility.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [TERM SHEET], [BORROWER PLAYBOOK], [MODEL/CAPITAL STRUCTURE], and [PRECEDENTS].

Assignment: review the credit agreement for economic accuracy and operating flexibility.

Review the document as a connected transaction document, not as isolated clauses. Focus on: facility mechanics; interest/fees; amortization; prepayments; representations; affirmative covenants; negative covenants; financial covenants; baskets; incremental debt; restricted payments; investments; asset sales; unrestricted subsidiaries; events of default; assignments; and sacred rights.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a prioritized borrower issues list with section, current term, impact, proposed ask, fallback, and required financial input..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `lender-side-credit-agreement-review`,
      title: `Lender-Side Credit Agreement Review`,
      summary: `Review the credit agreement for credit-protection gaps and departures from approved terms.`,
      prompt: `You are transactional corporate counsel. You represent [LENDER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [CREDIT APPROVAL], [TERM SHEET], [LENDER PLAYBOOK], and [DILIGENCE FINDINGS].

Assignment: review the credit agreement for credit-protection gaps and departures from approved terms.

Review the document as a connected transaction document, not as isolated clauses. Focus on: facility mechanics; conditions; reps; covenants; reporting; financial covenants; baskets; incremental debt; liens; restricted payments; investments; asset sales; unrestricted subsidiaries; defaults; remedies; assignments; and voting.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a lender deviation/issues table and list of items requiring credit approval..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `credit-agreement-draft-from-term-sheet`,
      title: `Credit Agreement Draft from Term Sheet`,
      summary: `Prepare a first draft of the credit agreement consistent with the agreed financing.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [APPROVED CREDIT AGREEMENT PRECEDENT], [TERM SHEET], [COMMITMENT LETTER], [FEE LETTER TERMS], and [CLIENT INSTRUCTIONS].

Assignment: prepare a first draft of the credit agreement consistent with the agreed financing.

Draft using the supplied precedent and approved business/legal terms as the controlling source. Focus on: facility structure; borrowing mechanics; interest/fees; prepayment; representations; covenants; events of default; agency; assignments; lender voting; collateral/guarantee linkage; and schedules/exhibits.

Do not introduce new economics, rights, obligations, standards, remedies, qualifiers, or defined terms unless required to implement the instructions. Preserve the precedent's drafting conventions, defined-term architecture, cross-reference style, and internal logic.

After drafting, run a consequential-effects check for definitions, cross-references, schedules, exhibits, notice provisions, closing conditions, remedies, and any other provisions affected by the change.

Return a clean first draft plus a drafting-notes table identifying open business, tax, accounting, and local-law points..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `defined-terms-and-covenant-dependency-audit`,
      title: `Defined Terms and Covenant Dependency Audit`,
      summary: `Trace key definitions through the covenant package and identify circular, inconsistent, or hidden dependencies.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT] and amendments.

Assignment: trace key definitions through the covenant package and identify circular, inconsistent, or hidden dependencies.

Perform a document-integrity and legal-work-product QA audit. Focus on: EBITDA; Indebtedness; Liens; Investments; Restricted Payments; Available Amount; Permitted Acquisition; Unrestricted Subsidiary; Material Subsidiary; Consolidated Net Income; fixed-charge/leverage ratios; and incorporated definitions.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a dependency map showing Definition | Inputs/Referenced Definitions | Downstream Uses | Ambiguity/Inconsistency | Proposed Fix..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `mandatory-prepayment-mechanics-review`,
      title: `Mandatory Prepayment Mechanics Review`,
      summary: `Determine whether a proposed transaction triggers mandatory prepayment and how the amount is calculated.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [TRANSACTION FACTS], [ASSET SALE/DEBT ISSUANCE/INSURANCE PROCEEDS DATA], and [CLIENT INSTRUCTIONS].

Assignment: determine whether a proposed transaction triggers mandatory prepayment and how the amount is calculated.

Review the document as a connected transaction document, not as isolated clauses. Focus on: asset sale sweep; debt issuance; excess cash flow; casualty/condemnation; reinvestment rights; thresholds; exceptions; declining sweeps; lender rejection; application waterfall; and timing.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a source-linked calculation specification and action checklist, with missing inputs clearly identified..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `event-of-default-and-cure-analysis`,
      title: `Event of Default and Cure Analysis`,
      summary: `Determine which events of default may be implicated and what cure periods, grace periods, or remedies apply.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [FACT PATTERN], [NOTICES], and [RELEVANT FINANCIAL DATA].

Assignment: determine which events of default may be implicated and what cure periods, grace periods, or remedies apply.

Review the document as a connected transaction document, not as isolated clauses. Focus on: payment; covenant breach; misrepresentation; cross-default/cross-acceleration; judgment; bankruptcy; ERISA; change of control; invalidity; security documents; cure periods; notice requirements; and acceleration.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a table: Potential Default | Provision | Trigger | Facts | Cure/Grace | Notice | Consequence | Open Question..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `assignment-and-lender-voting-rights-audit`,
      title: `Assignment and Lender Voting Rights Audit`,
      summary: `Map assignment restrictions and voting thresholds relevant to the proposed action.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [PROPOSED ASSIGNMENT/AMENDMENT], and [LENDER HOLDINGS].

Assignment: map assignment restrictions and voting thresholds relevant to the proposed action.

Perform a document-integrity and legal-work-product QA audit. Focus on: eligible assignees; disqualified institutions; borrower consent; agent consent; minimum amounts; pro rata rules; affiliates; debt funds; defaulting lenders; required lenders; class votes; affected lenders; sacred rights; and yank-a-bank.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return an assignment/voting matrix and required-consent analysis..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `credit-agreement-executive-summary`,
      title: `Credit Agreement Executive Summary`,
      summary: `Prepare a source-backed summary of the current operative financing terms.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [AMENDMENTS], and [CLIENT QUESTION].

Assignment: prepare a source-backed summary of the current operative financing terms.

Extract and normalize the relevant information. Focus on: facilities; pricing; maturity; amortization; collateral/guarantees; financial covenants; negative covenants; baskets; incremental debt; prepayments; reporting; defaults; assignments; and amendment thresholds.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a concise term sheet-style summary with source citations and a separate list of unusual or high-impact provisions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `debt-basket-capacity-analysis`,
      title: `Debt Basket Capacity Analysis`,
      summary: `Determine documentary capacity for the proposed debt incurrence.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [CURRENT FINANCIAL DATA], [CAPITALIZATION], and [PROPOSED DEBT INCURRENCE].

Assignment: determine documentary capacity for the proposed debt incurrence.

Build the analysis from the operative document rather than estimating available capacity. Focus on: fixed baskets; grower baskets; ratio debt; acquisition debt; refinancing debt; local/foreign subsidiary baskets; incremental facilities; incremental-equivalent debt; no-default tests; borrower/guarantor restrictions; ranking; maturity; MFN; and reclassification.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return a capacity-route table with formula, required inputs, conditions, overlap risk, and apparent availability..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `restricted-payment-capacity-analysis`,
      title: `Restricted Payment Capacity Analysis`,
      summary: `Determine documentary capacity for the proposed restricted payment.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [FINANCIAL DATA], [HISTORICAL RP USAGE], [AVAILABLE AMOUNT DATA], and [PROPOSED DISTRIBUTION].

Assignment: determine documentary capacity for the proposed restricted payment.

Build the analysis from the operative document rather than estimating available capacity. Focus on: fixed/grower baskets; builder basket/available amount; ratio-based RP capacity; tax distributions; equity repurchases; employee repurchases; investment reclassification; CNI contributions; equity proceeds; no-default conditions; and interdependent definitions.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return a source-linked capacity waterfall and ledger of required historical usage..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investment-basket-capacity-analysis`,
      title: `Investment Basket Capacity Analysis`,
      summary: `Determine capacity for the proposed investment or acquisition.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [FINANCIAL DATA], [HISTORICAL INVESTMENTS], and [PROPOSED INVESTMENT].

Assignment: determine capacity for the proposed investment or acquisition.

Build the analysis from the operative document rather than estimating available capacity. Focus on: permitted acquisition; general investment basket; grower; available amount; intercompany investments; unrestricted subsidiary investments; joint ventures; loans/advances; acquired debt; and reclassification.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return a pathway matrix and list of required financial/history inputs..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `lien-capacity-analysis`,
      title: `Lien Capacity Analysis`,
      summary: `Determine lien capacity and ranking conditions for the proposed secured obligation.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [EXISTING LIEN SCHEDULE], [PROPOSED FINANCING], and [COLLATERAL STRUCTURE].

Assignment: determine lien capacity and ranking conditions for the proposed secured obligation.

Build the analysis from the operative document rather than estimating available capacity. Focus on: permitted liens; debt-linked liens; general/grower baskets; purchase-money/capital leases; acquired liens; refinancing liens; non-guarantor collateral; equal-and-ratable provisions; intercreditor requirements; and release mechanics.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return a lien-capacity matrix with lien basket, debt basket dependency, collateral scope, ranking, and required intercreditor action..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `incremental-facility-capacity-analysis`,
      title: `Incremental Facility Capacity Analysis`,
      summary: `Determine capacity and conditions for an incremental facility or incremental-equivalent debt.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [FINANCIAL DATA], [EXISTING FACILITIES], and [PROPOSED INCREMENTAL FINANCING].

Assignment: determine capacity and conditions for an incremental facility or incremental-equivalent debt.

Build the analysis from the operative document rather than estimating available capacity. Focus on: free-and-clear amount; ratio-based amount; prepayment-based reloading; leverage calculations; no-default conditions; borrower/guarantor requirements; maturity; weighted-average life; MFN; pricing; collateral/ranking; and incurrence procedures.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return an incremental-capacity table and step-by-step incurrence checklist..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `unrestricted-subsidiary-designation-analysis`,
      title: `Unrestricted Subsidiary Designation Analysis`,
      summary: `Determine the contractual requirements and consequences of designating or redesignating an unrestricted subsidiary.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [ENTITY STRUCTURE], [FINANCIAL DATA], [PROPOSED DESIGNATION], and [ASSET/LIABILITY DATA].

Assignment: determine the contractual requirements and consequences of designating or redesignating an unrestricted subsidiary.

Build the analysis from the operative document rather than estimating available capacity. Focus on: investment capacity; no-default; leverage/pro forma tests; asset/value measurement; guarantee/collateral release; debt recourse; covenant exclusion; EBITDA/CNI effects; IP/assets; re-designation; and downstream basket effects.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return a designation pathway table plus before/after covenant consequences..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `ebitda-add-back-audit`,
      title: `EBITDA Add-Back Audit`,
      summary: `Audit the proposed EBITDA calculation against the contractual definition.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [PROPOSED EBITDA CALCULATION], [SUPPORTING FINANCIAL DATA], and [CERTIFICATIONS].

Assignment: audit the proposed EBITDA calculation against the contractual definition.

Perform a document-integrity and legal-work-product QA audit. Focus on: restructuring charges; synergies; cost savings; run-rate adjustments; acquisitions/dispositions; extraordinary/nonrecurring items; stock comp; transaction costs; integration costs; caps; realization periods; certification; pro forma rules; and double-counting.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return an add-back matrix: Item | Clause | Amount/Input | Cap | Conditions | Evidence | Double-Count Risk | Allowed? | Open Question..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `financial-covenant-compliance-test`,
      title: `Financial Covenant Compliance Test`,
      summary: `Verify compliance with the applicable financial maintenance covenants.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [COMPLIANCE CERTIFICATE], [FINANCIAL STATEMENTS], and [CALCULATION WORKPAPERS].

Assignment: verify compliance with the applicable financial maintenance covenants.

Build the analysis from the operative document rather than estimating available capacity. Focus on: test dates; leverage/coverage definitions; netting; EBITDA; debt; cash; annualized/pro forma adjustments; equity cures; covenant holidays; step-downs; and cure timing.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return a calculation trace with each contractual input, source, arithmetic check, headroom, and unresolved items..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `asset-sale-and-reinvestment-capacity-analysis`,
      title: `Asset Sale and Reinvestment Capacity Analysis`,
      summary: `Determine whether the proposed asset disposition is permitted and what reinvestment or prepayment obligations follow.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [PROPOSED ASSET SALE], [USE OF PROCEEDS PLAN], and [FINANCIAL DATA].

Assignment: determine whether the proposed asset disposition is permitted and what reinvestment or prepayment obligations follow.

Build the analysis from the operative document rather than estimating available capacity. Focus on: asset sale baskets; fair market value; cash consideration; non-cash proceeds; designated non-cash consideration; reinvestment periods; binding commitments; replacement assets; mandatory prepayment; collateral release; and application of proceeds.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return a transaction-step matrix from disposition through final use of proceeds..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `available-amount-builder-basket-ledger`,
      title: `Available Amount / Builder Basket Ledger`,
      summary: `Build an auditable ledger of the Available Amount / builder basket.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [HISTORICAL FINANCIALS], [EQUITY CONTRIBUTIONS], [ASSET SALE DATA], [PRIOR USAGE], and [PROPOSED USE].

Assignment: build an auditable ledger of the Available Amount / builder basket.

Build the analysis from the operative document rather than estimating available capacity. Focus on: opening amount; retained excess cash flow/CNI; equity proceeds; declined prepayments; returns on investments; asset sale proceeds if included; deductions for prior restricted payments/investments/debt prepayments; no-default/ratio gateways; and reclassification.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return a chronological ledger with source provision, inflow/outflow, amount input, evidence, and remaining balance; leave unknown amounts blank..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `security-agreement-review`,
      title: `Security Agreement Review`,
      summary: `Review the security agreement for collateral scope, perfection mechanics, and consistency with the credit agreement.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [SECURITY AGREEMENT], [CREDIT AGREEMENT], [COLLATERAL DESCRIPTION], [UCC SEARCHES], and [CLIENT PLAYBOOK].

Assignment: review the security agreement for collateral scope, perfection mechanics, and consistency with the credit agreement.

Review the document as a connected transaction document, not as isolated clauses. Focus on: granting clause; collateral exclusions; after-acquired property; proceeds; deposit/securities accounts; IP; commercial tort claims; fixtures; perfection covenants; control; further assurances; remedies; and release.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a collateral issues table and a list of perfection deliverables..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `guarantee-review`,
      title: `Guarantee Review`,
      summary: `Review guarantee scope and limitations across the obligor group.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [GUARANTEE], [CREDIT AGREEMENT], [ENTITY STRUCTURE], [GUARANTOR LIMITATIONS], and [CLIENT INSTRUCTIONS].

Assignment: review guarantee scope and limitations across the obligor group.

Review the document as a connected transaction document, not as isolated clauses. Focus on: guaranteed obligations; continuing guarantee; reinstatement; waivers; subrogation; contribution; fraudulent-transfer savings; excluded swap obligations; guarantor release; accession; and local-law limitation language.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a guarantor-by-guarantor matrix and list of legal/local-law questions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `collateral-package-completeness-audit`,
      title: `Collateral Package Completeness Audit`,
      summary: `Determine whether the intended collateral package has been documented and perfected.`,
      prompt: `You are transactional corporate counsel. You represent [LENDER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [SECURITY DOCUMENTS], [ENTITY/ASSET SCHEDULE], [UCC SEARCHES], [IP RECORDS], and [CLOSING CHECKLIST].

Assignment: determine whether the intended collateral package has been documented and perfected.

Verify the work product against the source materials. Focus on: equity pledges; UCC filings; deposit/securities accounts; IP; real estate; material contracts; insurance; landlord/bailee access; foreign assets; exclusions; control agreements; and post-closing perfection.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a collateral coverage matrix: Asset/Entity | Required Security | Document | Perfection Step | Status | Gap | Post-Closing Date..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `guarantor-coverage-and-release-test`,
      title: `Guarantor Coverage and Release Test`,
      summary: `Determine whether an entity must become, remain, or may cease to be a guarantor.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [GUARANTEE], [SECURITY AGREEMENT], [ENTITY STRUCTURE], and [PROPOSED TRANSACTION].

Assignment: determine whether an entity must become, remain, or may cease to be a guarantor.

Build the analysis from the operative document rather than estimating available capacity. Focus on: material subsidiary tests; excluded subsidiaries; immaterial subsidiaries; foreign/CFC rules; regulatory/legal restrictions; cost-benefit exceptions; designation as unrestricted; asset transfers; release events; and joinder deadlines.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return an entity-level table with guarantor status, trigger, exception, source, and required action..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `ucc-and-lien-search-exceptions-review`,
      title: `UCC and Lien Search Exceptions Review`,
      summary: `Classify existing liens and determine required payoff, termination, subordination, or permitted-lien treatment.`,
      prompt: `You are transactional corporate counsel. You represent [LENDER/BORROWER].

Use only the following materials unless expressly instructed otherwise: [UCC SEARCH RESULTS], [LIEN SCHEDULE], [PAYOFF LETTERS], [CREDIT AGREEMENT], and [TRANSACTION CONTEXT].

Assignment: classify existing liens and determine required payoff, termination, subordination, or permitted-lien treatment.

Extract and normalize the relevant information. Focus on: secured party; debtor; filing jurisdiction; collateral indication; continuation; lapse; amendments; tax/judgment liens; fixture filings; and mismatch with permitted lien schedules.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a lien exception matrix with required closing action and evidence..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `collateral-release-mechanics-analysis`,
      title: `Collateral Release Mechanics Analysis`,
      summary: `Determine when and how collateral and guarantees are released.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [SECURITY AGREEMENT], [GUARANTEE], [INTERCREDITOR AGREEMENT], and [PROPOSED DISPOSITION/REORGANIZATION].

Assignment: determine when and how collateral and guarantees are released.

Review the document as a connected transaction document, not as isolated clauses. Focus on: permitted disposition; guarantor release; subsidiary designation; repayment; refinancing; agent authority; automatic vs documented release; UCC termination; IP releases; equity pledge release; and intercreditor consent.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a release checklist with contractual trigger, documents, filings, approvals, and sequencing..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `intercreditor-agreement-review`,
      title: `Intercreditor Agreement Review`,
      summary: `Review lien priority and enforcement rights across creditor classes.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [INTERCREDITOR AGREEMENT], [FIRST-LIEN DOCS], [SECOND-LIEN/ABL DOCS], and [CAPITAL STRUCTURE].

Assignment: review lien priority and enforcement rights across creditor classes.

Review the document as a connected transaction document, not as isolated clauses. Focus on: lien priority; enforcement control; standstill; turnover; permitted payments; DIP financing; adequate protection; 363 sales; credit bidding; amendments; collateral releases; refinancing; purchase option; bankruptcy waivers; and voting.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a rights-by-scenario matrix plus issues requiring restructuring counsel..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `abl-term-loan-intercreditor-analysis`,
      title: `ABL / Term Loan Intercreditor Analysis`,
      summary: `Map priority and control over split collateral.`,
      prompt: `You are transactional corporate counsel. You represent [ABL LENDER/TERM LENDER/BORROWER].

Use only the following materials unless expressly instructed otherwise: [ABL INTERCREDITOR AGREEMENT], [ABL CREDIT AGREEMENT], [TERM CREDIT AGREEMENT], [COLLATERAL DESCRIPTION], and [BORROWING BASE MATERIALS].

Assignment: map priority and control over split collateral.

Review the document as a connected transaction document, not as isolated clauses. Focus on: ABL priority collateral; term priority collateral; shared collateral; proceeds; deposit accounts; enforcement; access rights; inventory dispositions; DIP; adequate protection; turnover; and collateral releases.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a collateral-class matrix and enforcement scenario table..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `subordination-agreement-review`,
      title: `Subordination Agreement Review`,
      summary: `Analyze payment, lien, enforcement, and amendment subordination.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [SUBORDINATION AGREEMENT], [SENIOR DEBT DOCUMENTS], [SUBORDINATED DEBT DOCUMENTS], and [PROPOSED PAYMENT/AMENDMENT].

Assignment: analyze payment, lien, enforcement, and amendment subordination.

Review the document as a connected transaction document, not as isolated clauses. Focus on: payment blockage; standstill; turnover; permitted payments; acceleration; insolvency; amendment restrictions; refinancing; assignment; and cure.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a scenario table showing whether the proposed action is permitted and what consents/notices are required..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `intercreditor-bankruptcy-scenario-analysis`,
      title: `Intercreditor Bankruptcy Scenario Analysis`,
      summary: `Analyze contractual creditor rights in the specified restructuring scenario.`,
      prompt: `You are transactional corporate counsel. You represent [FIRST-LIEN / SECOND-LIEN / ABL / TERM CREDITORS].

Use only the following materials unless expressly instructed otherwise: [INTERCREDITOR AGREEMENT], [CREDIT DOCUMENTS], and proposed [DIP / 363 SALE / ENFORCEMENT ACTION].

Assignment: analyze contractual creditor rights in the specified restructuring scenario.

Review the document as a connected transaction document, not as isolated clauses. Focus on: priority; enforcement control; standstill; turnover; DIP; adequate protection; objections waived/preserved; 363 rights; credit bidding; release; voting; refinancing; and purchase options.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a creditor-class rights matrix, followed by a separate list of enforceability issues requiring bankruptcy-law research..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `conditions-precedent-checklist`,
      title: `Conditions Precedent Checklist`,
      summary: `Build a closing checklist for the financing.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [COMMITMENT LETTER], [SECURITY DOCUMENTS], [CORPORATE DOCUMENTS], and [CLOSING CONDITIONS].

Assignment: build a closing checklist for the financing.

Build an execution-ready checklist. Focus on: corporate authority; KYC; legal opinions; financial statements; solvency; fees; representations; no default; acquisition conditions; security/perfection; insurance; UCC; funds flow; notes; notices; and ancillary documents.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a CP checklist with condition, source, deliverable, responsible party, dependency, waiver right, and status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `existing-cp-checklist-audit`,
      title: `Existing CP Checklist Audit`,
      summary: `Identify missing, stale, or incorrectly described financing conditions and deliverables.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CURRENT CP CHECKLIST], [CREDIT AGREEMENT], [SECURITY DOCUMENTS], [COMMITMENT PACKAGE], and [LATEST CLOSING DOCUMENTS].

Assignment: identify missing, stale, or incorrectly described financing conditions and deliverables.

Verify the work product against the source materials. Focus on: all express CPs; post-closing items incorrectly treated as CPs; signatory/authority documents; opinions; security; fees; notices; and acquisition-related conditions.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a gap table and corrected checklist entries..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `legal-opinion-coverage-matrix`,
      title: `Legal Opinion Coverage Matrix`,
      summary: `Verify that the opinion package covers each required entity, document, and opinion topic.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [REQUIRED OPINION LIST], [DRAFT LEGAL OPINIONS], [CREDIT AGREEMENT], [SECURITY DOCUMENTS], and [ENTITY/JURISDICTION LIST].

Assignment: verify that the opinion package covers each required entity, document, and opinion topic.

Verify the work product against the source materials. Focus on: due organization; power; authorization; execution; enforceability; no conflict; governmental approvals; UCC perfection; choice of law; and local-law limitations.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a matrix: Required Opinion | Entity/Document | Draft Coverage | Qualification | Gap | Responsible Counsel..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `financing-funds-flow-verification`,
      title: `Financing Funds Flow Verification`,
      summary: `Verify sources, uses, fees, payoffs, and net funding at closing.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [FUNDS FLOW], [FEE LETTER], [PAYOFF LETTERS], [ACQUISITION FUNDS FLOW if relevant], and [WIRE DETAILS].

Assignment: verify sources, uses, fees, payoffs, and net funding at closing.

Verify the work product against the source materials. Focus on: gross proceeds; OID; arranger/agent fees; original issue discount; accrued interest; payoff; refinancing; acquisition consideration; expenses; escrow; and borrower cash contribution.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a reconciled sources-and-uses table with discrepancies, missing inputs, and wire dependencies..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `amendment-consent-and-sacred-rights-analysis`,
      title: `Amendment Consent and Sacred Rights Analysis`,
      summary: `Determine the lender consent threshold required for each proposed amendment.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [PROPOSED AMENDMENT], [LENDER HOLDINGS], and [VOTING PROVISIONS].

Assignment: determine the lender consent threshold required for each proposed amendment.

Review the document as a connected transaction document, not as isolated clauses. Focus on: Required Lenders; class votes; affected lenders; sacred rights; pro rata sharing; pricing; maturity; principal; release of guarantees/collateral; subordination; waterfall; and yank-a-bank mechanics.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a provision-by-provision consent matrix with required percentage/class and rationale..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `waiver-request-analysis`,
      title: `Waiver Request Analysis`,
      summary: `Analyze the scope of the requested waiver and prevent unintended broader relief.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [FACTS], [DEFAULT/COMPLIANCE ISSUE], [PROPOSED WAIVER], and [LENDER POSITION].

Assignment: analyze the scope of the requested waiver and prevent unintended broader relief.

Review the document as a connected transaction document, not as isolated clauses. Focus on: specific breached provision; duration; conditions; reservation of rights; repeated breaches; deemed amendments; fees; reporting; cure milestones; defaults preserved; and effectiveness conditions.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a waiver issues list plus proposed narrow drafting instructions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `amendment-conforming-changes-audit`,
      title: `Amendment Conforming Changes Audit`,
      summary: `Identify every consequential conforming change required by the amendment.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [ORIGINAL CREDIT AGREEMENT], [ALL PRIOR AMENDMENTS], and [CURRENT AMENDMENT].

Assignment: identify every consequential conforming change required by the amendment.

Perform a document-integrity and legal-work-product QA audit. Focus on: defined terms; section references; schedules; exhibits; financial covenant tables; pricing grids; maturity dates; commitment amounts; voting thresholds; security/guarantee references; and notices.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a conforming-change table and a clean list of provisions that should be updated in an amended-and-restated or conformed version..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `credit-agreement-markup-to-issues-list`,
      title: `Credit Agreement Markup to Issues List`,
      summary: `Turn the latest financing markup into a call-ready issues list.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [PRIOR CREDIT AGREEMENT DRAFT], [COUNTERPARTY MARKUP], [TERM SHEET], [PLAYBOOK], and [OPEN ISSUES].

Assignment: turn the latest financing markup into a call-ready issues list.

Compare the materials substantively, not merely textually. Focus on: economics; conditions; covenant flexibility; baskets; EBITDA; incremental debt; collateral; guarantees; defaults; assignments; voting; and hidden defined-term changes.

Group related edits into negotiation issues. Identify new issues, resolved issues, hidden consequential changes, and changes made outside previously open points.

Return a prioritized table with issue, sections, old/new position, impact, ask, fallback, and required credit/client decision..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `financing-precedent-comparison`,
      title: `Financing Precedent Comparison`,
      summary: `Identify material deviations from comparable financings.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CURRENT CREDIT AGREEMENT], [COMPARABLE PRECEDENTS], [TERM SHEET], and [TRANSACTION FACTS].

Assignment: identify material deviations from comparable financings.

Benchmark the current document against the supplied precedent set. Normalize for transaction-specific facts before treating language as a deviation. Focus on: facility mechanics; pricing; covenants; baskets; EBITDA; incremental debt; restricted payments; investments; asset sales; unrestricted subsidiaries; defaults; collateral; assignments; and voting.

Separate: (1) consistent precedent positions, (2) acceptable variations, (3) true outliers, (4) transaction-specific provisions that should not be generalized, and (5) areas where the precedent set is too thin to support a conclusion.

Return a deviation matrix with precedent range, current position, likely reason, and negotiation significance..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `financing-deal-summary`,
      title: `Financing Deal Summary`,
      summary: `Prepare a concise summary of the operative financing package.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [EXECUTED CREDIT AGREEMENT], [FEE LETTER], [SECURITY/GUARANTEE DOCS], and [AMENDMENTS].

Assignment: prepare a concise summary of the operative financing package.

Extract and normalize the relevant information. Focus on: facilities; pricing; maturity; amortization; mandatory prepayments; collateral; guarantees; financial covenants; negative covenants; key baskets; incremental capacity; events of default; assignments; and voting.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a term-sheet style summary plus a list of operational compliance items and key source citations..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `borrower-compliance-calendar`,
      title: `Borrower Compliance Calendar`,
      summary: `Build an ongoing borrower compliance calendar.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [SECURITY DOCUMENTS], and [AMENDMENTS].

Assignment: build an ongoing borrower compliance calendar.

Extract and normalize the relevant information. Focus on: financial statements; compliance certificates; budgets; lender calls; notices; covenant tests; insurance; collateral reporting; borrowing base; annual perfection; post-closing deliverables; and event-driven notices.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a calendar: Obligation | Trigger/Cadence | Due Date Rule | Notice Method | Source | Internal Owner | Evidence | Escalation..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `compliance-certificate-verification`,
      title: `Compliance Certificate Verification`,
      summary: `Verify the certificate's calculations, representations, and attachments before delivery.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER].

Use only the following materials unless expressly instructed otherwise: [COMPLIANCE CERTIFICATE], [CREDIT AGREEMENT], [FINANCIAL STATEMENTS], [CALCULATION WORKPAPERS], and [BORROWER DATA].

Assignment: verify the certificate's calculations, representations, and attachments before delivery.

Verify the work product against the source materials. Focus on: financial covenant calculations; EBITDA/debt inputs; permitted add-backs; covenant compliance; no-default statement; required schedules; excess cash flow; and signatory requirements.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a verification table identifying each certificate statement, source support, arithmetic check, missing evidence, and issue..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
  ],
};
