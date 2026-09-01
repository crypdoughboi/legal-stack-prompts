import type { PromptCategory } from "@/lib/types";

export const realEstate: PromptCategory = {
  id: `real-estate`,
  label: `Real Estate`,
  shortLabel: `RE`,
  topics: [
    {
      label: `Acquisitions & property diligence`,
      promptIds: [`psa-issue-list`, `title-survey`, `property-diligence`, `student-housing-portfolio`, `real-estate-diligence-request-list`, `service-contract-and-vendor-diligence`, `zoning-and-land-use-document-review`, `environmental-diligence-issue-matrix`],
    },
    {
      label: `Leasing, estoppels & sale-leasebacks`,
      promptIds: [`lease-abstract`, `estoppel-snda`, `hartland-sale-leaseback`, `tenant-side-lease-review`, `landlord-side-lease-review`, `lease-abstraction-with-amendment-tracing`, `lease-operating-expense-audit`, `renewal-and-expansion-option-analysis`, `assignment-and-change-of-control-analysis`, `tenant-estoppel-vs-lease-reconciliation`, `lease-negotiation-call-sheet`, `snda-review`, `portfolio-estoppel-reconciliation`, `estoppel-and-snda-closing-tracker`],
    },
    {
      label: `Closings, joint ventures & development`,
      promptIds: [`re-closing`, `asana-retail-jv`, `real-estate-jv-agreement-review`, `jv-waterfall-specification-audit`, `development-agreement-review`, `development-entitlement-condition-tracker`, `property-management-agreement-review`, `real-estate-closing-checklist`, `proration-and-settlement-statement-verification`, `critical-dates-portfolio-calendar`],
    },
    {
      label: `Purchase & sale agreements`,
      promptIds: [`buyer-side-psa-review`, `seller-side-psa-review`, `psa-draft-from-loi-and-precedent`, `psa-critical-dates-extract`, `psa-closing-deliverables-checklist`, `psa-markup-to-negotiation-issues`],
    },
    {
      label: `Real estate finance`,
      promptIds: [`real-estate-loan-agreement-review`, `mortgage-deed-of-trust-review`, `bad-boy-guaranty-review`, `loan-document-consistency-audit`, `real-estate-loan-closing-checklist`],
    },
    {
      label: `Title & survey`,
      promptIds: [`title-commitment-and-survey-review`, `title-objection-letter-builder`, `recorded-document-restriction-abstract`, `survey-exception-issue-spot`, `title-and-survey-closing-cure-tracker`],
    },
    {
      label: `Compare drafts & negotiation`,
      promptIds: [`real-estate-document-markup-to-issues-list`, `real-estate-negotiation-strategy`],
    },
  ],
  prompts: [
    {
      id: `lease-abstract`,
      title: `Lease abstract`,
      summary: `Extract key economics, rights, dates, and unusual clauses.`,
      prompt: `Abstract the attached lease and amendments into a table covering parties, premises, term, rent, escalations, additional rent, security, use, assignment and subletting, alterations, maintenance, insurance, indemnity, casualty, condemnation, defaults, remedies, options, exclusives, co-tenancy, SNDA, estoppel, and notice details. Cite the controlling provision for every item and explain how amendments change the original lease. Flag missing exhibits, conflicting provisions, and dates requiring calculation.`,
    },
    {
      id: `psa-issue-list`,
      title: `Purchase and sale agreement issue list`,
      summary: `Review a real estate PSA by party and deal priority.`,
      prompt: `Review the attached real estate purchase and sale agreement from the perspective of [buyer/seller]. Prepare a prioritized issue list covering deposit, diligence, title and survey, representations, covenants, casualty, condemnation, closing conditions, prorations, defaults, remedies, assignments, broker provisions, and survival. Cite the exact section, explain the practical consequence, and propose a concise position. Identify facts that should be confirmed with the client before markup.`,
    },
    {
      id: `title-survey`,
      title: `Title and survey exception matrix`,
      summary: `Organize exceptions, locations, risk, and cure actions.`,
      prompt: `Review the attached title commitment, exception documents, survey, and purchase agreement. Create a title and survey matrix showing exception number, document, affected parcel or survey location, nature of burden, permitted-exception status, objection deadline, cure obligation, business impact, and recommended action. Cite the source materials. Flag encroachments, access issues, easements, restrictions, liens, gaps, and exceptions that cannot be evaluated without the underlying document.`,
    },
    {
      id: `property-diligence`,
      title: `Property diligence report`,
      summary: `Combine leases, contracts, permits, and reports into one view.`,
      prompt: `Prepare a concise property diligence report from the attached leases, service contracts, environmental materials, permits, zoning materials, title documents, surveys, and property reports. Organize findings by ownership and title, occupancy, operations, physical condition, environmental, zoning and land use, litigation, and closing requirements. For each issue include source citation, risk, missing information, recommended follow-up, and whether it affects price, closing, financing, or post-closing operations.`,
    },
    {
      id: `estoppel-snda`,
      title: `Estoppel and SNDA review`,
      summary: `Compare tenant statements against lease and lender forms.`,
      prompt: `Review the attached lease, amendments, tenant estoppel, and SNDA. Create a comparison table showing each material statement or obligation, the controlling lease provision, the proposed estoppel or SNDA treatment, and any inconsistency or added concession. Focus on rent, term, defaults, offsets, deposits, options, notice, casualty, subordination, attornment, nondisturbance conditions, and lender cure rights. Propose targeted revisions with citations.`,
    },
    {
      id: `re-closing`,
      title: `Real estate closing checklist`,
      summary: `Capture title, escrow, entity, lender, and recording items.`,
      prompt: `Build a closing checklist for the attached real estate transaction. Include purchase agreement deliverables, title and survey items, entity approvals, estoppels, SNDAs, lender conditions, escrow instructions, transfer documents, tax forms, prorations, funds flow, recording items, possession, and post-closing obligations. For each item state the responsible party, source citation, required form, dependency, deadline, and status placeholder. Flag items requiring local counsel or title-company confirmation.`,
    },
    {
      id: `asana-retail-jv`,
      title: `Institutional retail joint venture launch`,
      summary: `Translate a $500M venture mandate into governance, funding, and acquisition controls.`,
      matterInspired: true,
      prompt: `Act as real estate joint-venture counsel forming a $[amount] U.S. neighborhood-retail investment platform between an operator and an institutional capital partner. Review the JV agreement, investment-management agreement, acquisition pipeline, contribution documents, financing parameters, and initial business plan. Prepare a terms matrix covering commitments, drawdowns, investment criteria, exclusivity, pipeline allocation, acquisition approval, leverage limits, fees, promote and waterfall, major decisions, deadlock, removal, key person, reporting, valuation, conflicts, transfers, exit, and default remedies. Then create a first-acquisition closing checklist showing which approvals and deliverables sit at the venture, asset, property, lender, and investor levels. Cite every term and flag provisions that do not operationalize the stated mandate.`,
    },
    {
      id: `student-housing-portfolio`,
      title: `Eight-asset student-housing acquisition`,
      summary: `Run portfolio-level and property-level diligence without losing local exceptions.`,
      matterInspired: true,
      prompt: `Review an acquisition of [number] student-housing assets valued at more than $[amount]. Build a portfolio diligence dashboard with one row per property and standardized fields for title and survey, zoning and beds, university affiliation, occupancy and pre-leasing, rent roll, ground lease, management agreement, material contracts, permits, environmental and physical reports, taxes, litigation, insurance, financing, and required consents. Create a second table for portfolio-level issues including allocation of purchase price, cross-defaults, closing packages, partial-closing rights, common representations, knowledge qualifiers, materiality thresholds, and aggregate versus asset-level remedies. Cite each source and prevent one property's exception from being generalized to the portfolio.`,
    },
    {
      id: `hartland-sale-leaseback`,
      title: `Sale-leaseback lifecycle and exit review`,
      summary: `Reconstruct acquisition, lease, financing, and disposition obligations across the hold period.`,
      matterInspired: true,
      prompt: `Act as seller's counsel on the exit from a bespoke sale-leaseback investment originally acquired from an owner affiliate and leased to an operating school or other specialized user. Review the original conditional sale agreement, lease, financing documents, amendments, title materials, tenant consents, payoff materials, and exit PSA. Produce a lifecycle map showing acquisition conditions, lease commencement, rent and security, ownership and affiliate relationships, lender rights, transfer restrictions, change-of-control provisions, purchase options, reinstatement or restoration obligations, payoff and release mechanics, and sale deliverables. Identify obligations that survive or are triggered by the exit, reconcile the tenant's continuing rights with buyer requirements, and cite every conclusion.`,
    },
    {
      id: `buyer-side-psa-review`,
      title: `Buyer-Side PSA Review`,
      summary: `Review the purchase and sale agreement from the buyer's perspective.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER].

Use only the following materials unless expressly instructed otherwise: [PSA], [LOI/TERM SHEET], [BUYER PLAYBOOK], [PROPERTY INFO], and [CLIENT INSTRUCTIONS].

Assignment: review the purchase and sale agreement from the buyer's perspective.

Review the document as a connected transaction document, not as isolated clauses. Focus on: purchase price/deposit; diligence; title/survey; zoning; environmental; reps; covenants; casualty/condemnation; closing conditions; default/remedies; prorations; tenant matters; service contracts; estoppels; financing; assignment; and post-closing obligations.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a buyer issues list with section, risk, ask, fallback, and client decision..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `seller-side-psa-review`,
      title: `Seller-Side PSA Review`,
      summary: `Review the PSA from the seller's perspective for closing certainty and limited post-closing exposure.`,
      prompt: `You are transactional corporate counsel. You represent [SELLER].

Use only the following materials unless expressly instructed otherwise: [PSA], [LOI/TERM SHEET], [SELLER PLAYBOOK], [PROPERTY INFO], and [CLIENT INSTRUCTIONS].

Assignment: review the PSA from the seller's perspective for closing certainty and limited post-closing exposure.

Review the document as a connected transaction document, not as isolated clauses. Focus on: deposit; diligence termination; title objections; reps; knowledge qualifiers; survival; covenants; casualty/condemnation; conditions; default/remedies; prorations; tenant estoppels; service contracts; broker; assignment; and liability limitations.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a seller issues list with proposed positions and fallbacks..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `psa-draft-from-loi-and-precedent`,
      title: `PSA Draft from LOI and Precedent`,
      summary: `Prepare a first draft of the PSA.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [APPROVED PSA PRECEDENT], [SIGNED LOI], [PROPERTY FACTS], [DEAL STRUCTURE], and [CLIENT INSTRUCTIONS].

Assignment: prepare a first draft of the PSA.

Draft using the supplied precedent and approved business/legal terms as the controlling source. Focus on: property description; price/deposit; diligence; title/survey; closing; reps; covenants; tenant matters; service contracts; casualty/condemnation; defaults; prorations; closing deliverables; and exhibits.

Do not introduce new economics, rights, obligations, standards, remedies, qualifiers, or defined terms unless required to implement the instructions. Preserve the precedent's drafting conventions, defined-term architecture, cross-reference style, and internal logic.

After drafting, run a consequential-effects check for definitions, cross-references, schedules, exhibits, notice provisions, closing conditions, remedies, and any other provisions affected by the change.

Return a clean draft plus open drafting questions and missing property-specific inputs..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `psa-critical-dates-extract`,
      title: `PSA Critical Dates Extract`,
      summary: `Extract all dates, deadlines, notice windows, and extension rights.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [PSA], [AMENDMENTS], and [ESCROW/NOTICE INFORMATION].

Assignment: extract all dates, deadlines, notice windows, and extension rights.

Extract and normalize the relevant information. Focus on: effective date; deposit; diligence; title objection; cure; survey; financing if applicable; estoppels; tenant notices; closing; extension; casualty; condemnation; and post-closing survival.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a chronological critical-date table with trigger, earliest/latest date, notice method, responsible party, consequence, and source..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `psa-closing-deliverables-checklist`,
      title: `PSA Closing Deliverables Checklist`,
      summary: `Build the buyer/seller closing deliverables checklist.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/SELLER].

Use only the following materials unless expressly instructed otherwise: [PSA], [TITLE COMMITMENT], [SURVEY], [ENTITY DOCUMENTS], and [CLIENT INSTRUCTIONS].

Assignment: build the buyer/seller closing deliverables checklist.

Build an execution-ready checklist. Focus on: deed; bill of sale; assignments; tenant notices; affidavits; FIRPTA; title affidavits; entity authority; estoppels; SNDAs; service contract assignments; keys/data; settlement statement; and post-closing filings.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a closing checklist with source, responsible party, prerequisite, execution/notary requirement, and status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `psa-markup-to-negotiation-issues`,
      title: `PSA Markup to Negotiation Issues`,
      summary: `Convert the latest PSA markup into a negotiation call sheet.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [PRIOR PSA], [COUNTERPARTY MARKUP], [LOI], [PLAYBOOK], and [OPEN ISSUES].

Assignment: convert the latest PSA markup into a negotiation call sheet.

Compare the materials substantively, not merely textually. Focus on: economics; diligence; title; reps; casualty/condemnation; conditions; default/remedies; estoppels; service contracts; closing; and assignment.

Group related edits into negotiation issues. Identify new issues, resolved issues, hidden consequential changes, and changes made outside previously open points.

Return a prioritized issue table with old/new position, practical effect, ask, fallback, and client decision..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `tenant-side-lease-review`,
      title: `Tenant-Side Lease Review`,
      summary: `Review the lease from the tenant's perspective.`,
      prompt: `You are transactional corporate counsel. You represent [TENANT].

Use only the following materials unless expressly instructed otherwise: [LEASE], [LOI], [TENANT PLAYBOOK], [BUILDING/SPACE INFO], and [CLIENT INSTRUCTIONS].

Assignment: review the lease from the tenant's perspective.

Review the document as a connected transaction document, not as isolated clauses. Focus on: premises; term; rent; operating expenses; taxes; security; use; exclusivity; delivery/work; repairs; compliance; services; utilities; insurance; indemnity; assignment/subletting; change of control; casualty; condemnation; default/remedies; renewal/expansion; SNDA; surrender; and guaranty.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a tenant issues list ranked by economic, operational, and legal impact..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `landlord-side-lease-review`,
      title: `Landlord-Side Lease Review`,
      summary: `Review the lease from the landlord's perspective.`,
      prompt: `You are transactional corporate counsel. You represent [LANDLORD].

Use only the following materials unless expressly instructed otherwise: [LEASE], [LOI], [LANDLORD PLAYBOOK], [BUILDING STANDARDS], and [CLIENT INSTRUCTIONS].

Assignment: review the lease from the landlord's perspective.

Review the document as a connected transaction document, not as isolated clauses. Focus on: rent/security; use; alterations; repairs; compliance; insurance; indemnity; assignment/subletting; recapture; operating expenses; defaults; remedies; casualty; condemnation; renewal/expansion; surrender; and guaranty.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a landlord issues list with preferred position, fallback, and building-operations impact..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `lease-abstraction-with-amendment-tracing`,
      title: `Lease Abstraction with Amendment Tracing`,
      summary: `Produce the current operative lease abstract, not separate historical summaries.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [ORIGINAL LEASE] and every [AMENDMENT] in chronological order.

Assignment: produce the current operative lease abstract, not separate historical summaries.

Extract and normalize the relevant information. Focus on: parties; premises; area; term; rent; escalations; CAM; security; use; exclusivity; repairs; insurance; indemnity; assignment/subletting; change of control; renewal/extension; expansion/contraction; ROFR/ROFO; purchase rights; termination; casualty; condemnation; default/remedies; SNDA/estoppel; holdover; surrender; and notices.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a current-term abstract with source document for every field plus a separate critical-date table..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `lease-operating-expense-audit`,
      title: `Lease Operating Expense Audit`,
      summary: `Test whether operating expense charges comply with the lease.`,
      prompt: `You are transactional corporate counsel. You represent [TENANT].

Use only the following materials unless expressly instructed otherwise: [LEASE], [AMENDMENTS], [ANNUAL CAM/OPEX RECONCILIATIONS], [LANDLORD STATEMENTS], [INVOICES if supplied], and [TENANT PAYMENTS].

Assignment: test whether operating expense charges comply with the lease.

Verify the work product against the source materials. Focus on: base year; exclusions; caps; gross-up; controllable/uncontrollable expenses; management fees; capital expenditures; amortization; taxes; audit rights; allocation; occupancy; reconciliations; and notice deadlines.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a contract-to-charge variance table with lease rule, billed treatment, amount/input, discrepancy, and follow-up..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `renewal-and-expansion-option-analysis`,
      title: `Renewal and Expansion Option Analysis`,
      summary: `Map renewal, extension, expansion, contraction, ROFR, ROFO, purchase, and termination options.`,
      prompt: `You are transactional corporate counsel. You represent [TENANT/LANDLORD].

Use only the following materials unless expressly instructed otherwise: [LEASE], [AMENDMENTS], [NOTICES], and [CURRENT DATE/CLIENT PLANS].

Assignment: map renewal, extension, expansion, contraction, ROFR, ROFO, purchase, and termination options.

Extract and normalize the relevant information. Focus on: exercise windows; conditions; no-default requirements; rent-setting mechanism; notice method; appraisal/arbitration; space availability; superior rights; one-time/multiple rights; and expiration.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return an option calendar with earliest/latest exercise dates, conditions, pricing mechanism, and source..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `assignment-and-change-of-control-analysis`,
      title: `Assignment and Change-of-Control Analysis`,
      summary: `Determine whether the proposed transaction requires landlord consent or triggers recapture/other rights.`,
      prompt: `You are transactional corporate counsel. You represent [TENANT/LANDLORD].

Use only the following materials unless expressly instructed otherwise: [LEASE], [AMENDMENTS], [PROPOSED ASSIGNMENT/TRANSACTION], and [ENTITY STRUCTURE].

Assignment: determine whether the proposed transaction requires landlord consent or triggers recapture/other rights.

Review the document as a connected transaction document, not as isolated clauses. Focus on: assignment; subletting; change of control; merger; affiliate transfers; permitted transfers; financial tests; notice; consent standard; recapture; profit sharing; guarantees; and continuing liability.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a transaction-step table with trigger, exception, required notice/consent, conditions, and risk..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `tenant-estoppel-vs-lease-reconciliation`,
      title: `Tenant Estoppel vs Lease Reconciliation`,
      summary: `Verify that the estoppel accurately states the lease and does not waive or misstate tenant rights.`,
      prompt: `You are transactional corporate counsel. You represent [TENANT/LANDLORD/BUYER/LENDER].

Use only the following materials unless expressly instructed otherwise: [LEASE], [AMENDMENTS], [ESTOPPEL], [RENT LEDGER], and [NOTICE/CORRESPONDENCE].

Assignment: verify that the estoppel accurately states the lease and does not waive or misstate tenant rights.

Verify the work product against the source materials. Focus on: term; rent; security; defaults; landlord obligations; options; amendments; commencement; concessions; claims; offsets; notices; and subleases.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a discrepancy table with estoppel statement, operative lease term, source, risk, and proposed correction..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `lease-negotiation-call-sheet`,
      title: `Lease Negotiation Call Sheet`,
      summary: `Prepare the next lease negotiation call sheet.`,
      prompt: `You are transactional corporate counsel. You represent [TENANT/LANDLORD].

Use only the following materials unless expressly instructed otherwise: [LATEST LEASE MARKUP], [LOI], [PLAYBOOK], and [CLIENT INSTRUCTIONS].

Assignment: prepare the next lease negotiation call sheet.

Prepare a negotiation or decision strategy. Focus on: operating expenses; assignment/subletting; use; delivery/work; repairs; compliance costs; insurance/indemnity; casualty/condemnation; default/remedies; options; surrender; guaranty/security; and open economics.

For each issue, state the current position, preferred outcome, acceptable fallback, walk-away/escalation point if supported, business rationale, likely counterparty argument, possible package trade, and client decision owner.

Return a one-page prioritized call sheet plus Points Not Worth Spending Negotiating Capital On..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `real-estate-loan-agreement-review`,
      title: `Real Estate Loan Agreement Review`,
      summary: `Review the real estate loan from the perspective of [BORROWER/LENDER].`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [LOAN AGREEMENT], [TERM SHEET], [BORROWER/LENDER PLAYBOOK], [PROPERTY/OWNERSHIP INFO], and [FINANCIALS].

Assignment: review the real estate loan from the perspective of [BORROWER/LENDER].

Review the document as a connected transaction document, not as isolated clauses. Focus on: loan amount; interest; maturity; reserves; cash management; financial covenants; leasing covenants; SPE covenants; transfers; change of control; permitted debt; property covenants; insurance; casualty/condemnation; defaults; recourse; and prepayment.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a prioritized issues table plus operational compliance items..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `mortgage-deed-of-trust-review`,
      title: `Mortgage / Deed of Trust Review`,
      summary: `Review the mortgage for collateral scope and consistency with the loan agreement.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [MORTGAGE/DEED OF TRUST], [LOAN AGREEMENT], [TITLE COMMITMENT], and [PROPERTY DESCRIPTION].

Assignment: review the mortgage for collateral scope and consistency with the loan agreement.

Review the document as a connected transaction document, not as isolated clauses. Focus on: secured obligations; legal description; fixtures; rents; leases; after-acquired property; environmental provisions; assignment of leases/rents; remedies; receiver; casualty/condemnation; releases; and governing law.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a collateral consistency table and title/legal-description issues list..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `bad-boy-guaranty-review`,
      title: `Bad-Boy Guaranty Review`,
      summary: `Analyze springing recourse and guarantor exposure.`,
      prompt: `You are transactional corporate counsel. You represent [GUARANTOR/LENDER].

Use only the following materials unless expressly instructed otherwise: [GUARANTY], [LOAN AGREEMENT], [BORROWER STRUCTURE], and [CLIENT PLAYBOOK].

Assignment: analyze springing recourse and guarantor exposure.

Review the document as a connected transaction document, not as isolated clauses. Focus on: nonrecourse carveouts; losses vs full recourse; fraud; misapplication; voluntary bankruptcy; collusive involuntary bankruptcy; transfers; SPE breaches; environmental; taxes; insurance; waste; and litigation interference.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a trigger-by-trigger matrix with exposure type, causation standard, cure if any, and proposed revision..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `loan-document-consistency-audit`,
      title: `Loan Document Consistency Audit`,
      summary: `Identify inconsistent economics, defaults, defined terms, recourse triggers, and collateral provisions across the loan package.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [LOAN AGREEMENT], [NOTE], [MORTGAGE], [GUARANTY], [ASSIGNMENT OF LEASES/RENTS], [CASH MANAGEMENT], and [ENVIRONMENTAL INDEMNITY].

Assignment: identify inconsistent economics, defaults, defined terms, recourse triggers, and collateral provisions across the loan package.

Perform a document-integrity and legal-work-product QA audit. Focus on: principal; interest; maturity; prepayment; defaults; notice/cure; transfer; SPE; reserves; insurance; casualty; condemnation; recourse; guarantor obligations; and governing law.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a cross-document inconsistency matrix with proposed conforming edits..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `real-estate-loan-closing-checklist`,
      title: `Real Estate Loan Closing Checklist`,
      summary: `Build the financing closing checklist.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/LENDER].

Use only the following materials unless expressly instructed otherwise: [LOAN DOCUMENTS], [TITLE/SURVEY], [ENTITY DOCS], [INSURANCE], [PROPERTY AGREEMENTS], and [LENDER REQUIREMENTS].

Assignment: build the financing closing checklist.

Build an execution-ready checklist. Focus on: entity authority; opinions; title policy; survey; zoning; insurance; organizational docs; UCC; mortgage recording; reserves; estoppels/SNDAs; tenant documents; property management; environmental; and funds flow.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a chronological checklist with condition, source, party, dependency, evidence, and status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `real-estate-jv-agreement-review`,
      title: `Real Estate JV Agreement Review`,
      summary: `Review the JV governance and economics from [MEMBER/PARTNER] perspective.`,
      prompt: `You are transactional corporate counsel. You represent [MEMBER/PARTNER].

Use only the following materials unless expressly instructed otherwise: [JV AGREEMENT], [TERM SHEET], [BUSINESS PLAN], [CAP TABLE/OWNERSHIP], and [CLIENT INSTRUCTIONS].

Assignment: review the JV governance and economics from [MEMBER/PARTNER] perspective.

Review the document as a connected transaction document, not as isolated clauses. Focus on: capital commitments; funding defaults; dilution; distributions; preferred return; promote; major decisions; budgets; transfer; buy-sell; deadlock; removal; cause; key person; affiliate transactions; fees; development/management roles; and exit.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a governance/economics issues matrix with proposed positions and fallbacks..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `jv-waterfall-specification-audit`,
      title: `JV Waterfall Specification Audit`,
      summary: `Verify that the economic model implements the agreement's distribution waterfall.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [JV AGREEMENT], [WATERFALL MODEL], [CAPITAL ACCOUNT DATA], and [BUSINESS TERMS].

Assignment: verify that the economic model implements the agreement's distribution waterfall.

Verify the work product against the source materials. Focus on: return of capital; preferred return; catch-up; promote tiers; IRR/multiple tests; fees; special allocations; clawback; tax distributions; interim vs exit distributions; and member-specific adjustments.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a tier-by-tier legal-to-model reconciliation and unresolved calculation assumptions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `development-agreement-review`,
      title: `Development Agreement Review`,
      summary: `Review developer/owner obligations and project risk allocation.`,
      prompt: `You are transactional corporate counsel. You represent [OWNER/DEVELOPER].

Use only the following materials unless expressly instructed otherwise: [DEVELOPMENT AGREEMENT], [BUDGET/SCHEDULE], [PLANS], [ENTITLEMENTS], and [CLIENT INSTRUCTIONS].

Assignment: review developer/owner obligations and project risk allocation.

Review the document as a connected transaction document, not as isolated clauses. Focus on: scope; approvals; budget; schedule; change orders; procurement; subcontracting; standard of care; fees; contingencies; delays; force majeure; indemnity; insurance; warranties; completion; termination; and ownership of plans/work product.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a risk matrix plus a milestone/approval tracker..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `development-entitlement-condition-tracker`,
      title: `Development Entitlement Condition Tracker`,
      summary: `Build a source-linked tracker of entitlement conditions and continuing obligations.`,
      prompt: `You are transactional corporate counsel. You represent [OWNER/DEVELOPER].

Use only the following materials unless expressly instructed otherwise: [DEVELOPMENT AGREEMENT], [ZONING/LAND-USE APPROVALS], [PERMITS], [COVENANTS], and [AGENCY LETTERS].

Assignment: build a source-linked tracker of entitlement conditions and continuing obligations.

Extract and normalize the relevant information. Focus on: conditions precedent; construction milestones; affordable housing; public improvements; dedications; fees; reporting; use restrictions; design conditions; inspection; certificate of occupancy; and sunset/extension.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a chronological tracker with condition, agency, source, due date/trigger, dependency, evidence, owner, and status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `property-management-agreement-review`,
      title: `Property Management Agreement Review`,
      summary: `Review manager authority, economics, and owner controls.`,
      prompt: `You are transactional corporate counsel. You represent [OWNER/MANAGER].

Use only the following materials unless expressly instructed otherwise: [PROPERTY MANAGEMENT AGREEMENT], [ASSET MANAGEMENT AGREEMENT if any], [BUDGET], and [CLIENT PLAYBOOK].

Assignment: review manager authority, economics, and owner controls.

Review the document as a connected transaction document, not as isolated clauses. Focus on: scope; leasing authority; spending limits; budgets; employees; vendor contracting; bank accounts; fees; reimbursements; insurance; indemnity; reporting; audit; conflicts; affiliate services; termination; transition; and records.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return an authority/fee/risk matrix and list of owner-approval thresholds..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `title-commitment-and-survey-review`,
      title: `Title Commitment and Survey Review`,
      summary: `Review title and survey from the perspective of [BUYER/LENDER].`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/LENDER].

Use only the following materials unless expressly instructed otherwise: [TITLE COMMITMENT], [SURVEY], [PSA/LOAN DOCUMENTS], and all [RECORDED DOCUMENTS] provided.

Assignment: review title and survey from the perspective of [BUYER/LENDER].

Review the document as a connected transaction document, not as isolated clauses. Focus on: Schedule B requirements/exceptions; access; easements; encroachments; setbacks; legal description; utilities; parking; restrictions; liens; gaps/overlaps; survey exceptions; endorsements; and PSA treatment.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a table: Exception | Title Citation | Survey Reference | Effect | PSA/Loan Treatment | Risk | Cure/Action | Responsible Party | Deadline..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `title-objection-letter-builder`,
      title: `Title Objection Letter Builder`,
      summary: `Prepare a first draft of the buyer's title objection notice.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER].

Use only the following materials unless expressly instructed otherwise: [TITLE COMMITMENT], [SURVEY], [PSA], [RECORDED DOCUMENTS], and [CLIENT INSTRUCTIONS].

Assignment: prepare a first draft of the buyer's title objection notice.

Draft using the supplied precedent and approved business/legal terms as the controlling source. Focus on: removable monetary liens; unacceptable easements/restrictions; access issues; survey encroachments; legal-description defects; seller cure obligations; permitted exceptions; objection deadline; and reservation language.

Do not introduce new economics, rights, obligations, standards, remedies, qualifiers, or defined terms unless required to implement the instructions. Preserve the precedent's drafting conventions, defined-term architecture, cross-reference style, and internal logic.

After drafting, run a consequential-effects check for definitions, cross-references, schedules, exhibits, notice provisions, closing conditions, remedies, and any other provisions affected by the change.

Return a draft objection letter plus an internal table explaining each objection, contractual basis, and fallback..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `recorded-document-restriction-abstract`,
      title: `Recorded Document Restriction Abstract`,
      summary: `Abstract restrictions and obligations affecting the property.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [RECORDED DECLARATIONS], [EASEMENTS], [CC&RS], [RECIPROCAL EASEMENT AGREEMENTS], and [TITLE COMMITMENT].

Assignment: abstract restrictions and obligations affecting the property.

Extract and normalize the relevant information. Focus on: use restrictions; development rights; easements; maintenance; cost sharing; approvals; parking; signage; access; exclusives; expansion; transfer; amendment rights; enforcement; and termination.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a document-by-document matrix with burden/benefit, parties, term, approval rights, cost obligations, and property impact..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `survey-exception-issue-spot`,
      title: `Survey Exception Issue Spot`,
      summary: `Identify survey matters that could impair title, use, development, access, or financing.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/LENDER].

Use only the following materials unless expressly instructed otherwise: [SURVEY], [TITLE COMMITMENT], [RECORDED EXCEPTIONS], [SITE PLAN], and [PROPERTY INTENDED USE].

Assignment: identify survey matters that could impair title, use, development, access, or financing.

Review the document as a connected transaction document, not as isolated clauses. Focus on: encroachments; overlaps/gaps; easements; setback violations; access; utilities; parking; building lines; party walls; improvements outside parcel; and mismatches with title exception plotting.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return an issue table with location/reference, legal document if any, effect, cure, and title-objection recommendation..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `title-and-survey-closing-cure-tracker`,
      title: `Title and Survey Closing Cure Tracker`,
      summary: `Track every title/survey cure through closing.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/SELLER].

Use only the following materials unless expressly instructed otherwise: [TITLE OBJECTIONS], [SELLER RESPONSES], [TITLE COMMITMENT], [SURVEY], [PAYOFFS/RELEASES], and [PSA].

Assignment: track every title/survey cure through closing.

Build an execution-ready checklist. Focus on: lien releases; satisfactions; affidavits; gap indemnities; endorsements; survey revisions; easement amendments; access documentation; entity documents; and title-company requirements.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a cure tracker: Issue | Required Cure | Responsible Party | Deadline | Evidence | Title Company Confirmation | Status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `real-estate-diligence-request-list`,
      title: `Real Estate Diligence Request List`,
      summary: `Prepare a tailored commercial real estate diligence request list.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/LENDER].

Use only the following materials unless expressly instructed otherwise: [PROPERTY TYPE], [TRANSACTION STRUCTURE], [KNOWN RISKS], and [BASE REQUEST LIST].

Assignment: prepare a tailored commercial real estate diligence request list.

Build an execution-ready checklist. Focus on: title; survey; zoning; environmental; leases; rent roll; service contracts; permits; certificates; litigation; taxes; utilities; insurance; property management; development agreements; warranties; and capital projects.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a prioritized request list with purpose, likely source, owner, and follow-up trigger..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `service-contract-and-vendor-diligence`,
      title: `Service Contract and Vendor Diligence`,
      summary: `Identify property contracts that should be assumed, terminated, or addressed at closing.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/SELLER].

Use only the following materials unless expressly instructed otherwise: [PROPERTY SERVICE CONTRACTS], [PSA], [BUDGET], and [OPERATING INFO].

Assignment: identify property contracts that should be assumed, terminated, or addressed at closing.

Extract and normalize the relevant information. Focus on: term; renewal; termination; assignment; change of control; fees; service scope; exclusivity; liens; insurance; indemnity; notice; and transition.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a contract matrix with proposed closing treatment and required notice/consent..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `zoning-and-land-use-document-review`,
      title: `Zoning and Land-Use Document Review`,
      summary: `Identify land-use conditions, nonconformities, approvals, and risks affecting current or intended use.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/LENDER/OWNER].

Use only the following materials unless expressly instructed otherwise: [ZONING REPORT], [LAND-USE APPROVALS], [CERTIFICATES], [VARIANCES/SPECIAL PERMITS], [SITE PLAN], and [PROPERTY USE].

Assignment: identify land-use conditions, nonconformities, approvals, and risks affecting current or intended use.

Extract and normalize the relevant information. Focus on: use; density; height; setbacks; parking; FAR; variances; special permits; conditions; expiration; transfer; rebuild rights; legal nonconforming status; and open violations.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a land-use matrix plus issues requiring local land-use counsel confirmation..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `environmental-diligence-issue-matrix`,
      title: `Environmental Diligence Issue Matrix`,
      summary: `Identify environmental conditions and contractual allocation issues.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/LENDER].

Use only the following materials unless expressly instructed otherwise: [PHASE I/II REPORTS], [ENVIRONMENTAL INDEMNITIES], [REGULATORY CORRESPONDENCE], [REMEDIATION RECORDS], and [PSA/LOAN DOCS].

Assignment: identify environmental conditions and contractual allocation issues.

Extract and normalize the relevant information. Focus on: RECs/CRECs/HRECs; contamination; tanks; asbestos/lead/mold if reported; remediation; agency status; institutional controls; indemnities; insurance; closure letters; and purchase/loan protections.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a risk matrix with factual basis, legal/contract implications, follow-up, and specialist questions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `snda-review`,
      title: `SNDA Review`,
      summary: `Review subordination, nondisturbance, attornment, and lender protection terms.`,
      prompt: `You are transactional corporate counsel. You represent [TENANT/LENDER].

Use only the following materials unless expressly instructed otherwise: [SNDA], [LEASE], [LOAN DOCUMENTS], and [CLIENT PLAYBOOK].

Assignment: review subordination, nondisturbance, attornment, and lender protection terms.

Review the document as a connected transaction document, not as isolated clauses. Focus on: subordination; nondisturbance conditions; attornment; lender liability limits; notice/cure; lease amendments; rent prepayment; offsets; purchase/renewal rights; casualty/condemnation; assignment; and successor landlord obligations.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a tenant/lender issues table with proposed revisions and fallbacks..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `portfolio-estoppel-reconciliation`,
      title: `Portfolio Estoppel Reconciliation`,
      summary: `Reconcile tenant estoppels across a portfolio against the operative lease records.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/LENDER/OWNER].

Use only the following materials unless expressly instructed otherwise: [LEASES], [AMENDMENTS], [ESTOPPELS], [RENT ROLL], and [LANDLORD/TENANT RECORDS].

Assignment: reconcile tenant estoppels across a portfolio against the operative lease records.

Verify the work product against the source materials. Focus on: term; rent; security; options; amendments; defaults; landlord obligations; concessions; claims; offsets; subleases; and notice addresses.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a portfolio exception matrix with tenant, field, estoppel statement, lease term, discrepancy, materiality, and cure/follow-up..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `estoppel-and-snda-closing-tracker`,
      title: `Estoppel and SNDA Closing Tracker`,
      summary: `Track required estoppels and SNDAs through closing.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/LENDER/SELLER].

Use only the following materials unless expressly instructed otherwise: [PSA/LOAN AGREEMENT], [LEASE SCHEDULE], [ESTOPPEL/SNDA FORMS], and [RECEIVED EXECUTIONS].

Assignment: track required estoppels and SNDAs through closing.

Build an execution-ready checklist. Focus on: required tenants; threshold tests; form requirements; material deviations; delivery dates; landlord/lender signatures; cure; replacement certificates; and closing-condition implications.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a tenant-by-tenant tracker with requirement, status, deviation, approval needed, and closing impact..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `real-estate-closing-checklist`,
      title: `Real Estate Closing Checklist`,
      summary: `Build the master real estate closing checklist.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [PSA/LOAN/JV DOCUMENTS as applicable], [TITLE], [SURVEY], [ENTITY DOCS], [TENANT/PROPERTY DOCS], and [CLIENT INSTRUCTIONS].

Assignment: build the master real estate closing checklist.

Build an execution-ready checklist. Focus on: title cures; survey; deed/mortgage; entity authority; estoppels; SNDAs; assignments; service contracts; tenant notices; prorations; settlement statement; tax forms; affidavits; insurance; wires; recordables; and post-closing filings.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a phased checklist with item, source, party, dependency, execution/recording requirements, and status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `proration-and-settlement-statement-verification`,
      title: `Proration and Settlement Statement Verification`,
      summary: `Verify contractual prorations and closing adjustments.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/SELLER].

Use only the following materials unless expressly instructed otherwise: [PSA], [SETTLEMENT STATEMENT], [RENT ROLL], [TAX BILLS], [CAM RECONCILIATIONS], [UTILITY DATA], and [CLOSING DATE].

Assignment: verify contractual prorations and closing adjustments.

Verify the work product against the source materials. Focus on: rent; prepaid rent; arrears; CAM; taxes; utilities; service contracts; security deposits; leasing commissions; tenant improvement obligations; deposits; credits; and purchase-price adjustments.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a line-item verification table with contract rule, source data, calculation, discrepancy, and open item..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `critical-dates-portfolio-calendar`,
      title: `Critical Dates Portfolio Calendar`,
      summary: `Build a cross-document critical dates calendar for the portfolio.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [LEASES], [PSAs], [LOAN DOCUMENTS], [JV AGREEMENTS], [MANAGEMENT AGREEMENTS], and amendments.

Assignment: build a cross-document critical dates calendar for the portfolio.

Extract and normalize the relevant information. Focus on: renewals; options; rent resets; notices; loan maturities; covenant tests; reporting; insurance; tax appeals; purchase rights; development milestones; consent windows; and termination rights.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a chronological calendar with document, obligation/right, trigger, deadline, notice method, owner, consequence, and source..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `real-estate-document-markup-to-issues-list`,
      title: `Real Estate Document Markup to Issues List`,
      summary: `Convert the latest markup of [PSA/LEASE/LOAN/JV AGREEMENT] into a substantive issues list.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [PRIOR DRAFT], [COUNTERPARTY MARKUP], [LOI/TERM SHEET], [PLAYBOOK], and [OPEN ISSUES].

Assignment: convert the latest markup of [PSA/LEASE/LOAN/JV AGREEMENT] into a substantive issues list.

Compare the materials substantively, not merely textually. Focus on: economics; timing; conditions; operational obligations; approvals; liability; defaults/remedies; transfer; termination; and defined-term changes.

Group related edits into negotiation issues. Identify new issues, resolved issues, hidden consequential changes, and changes made outside previously open points.

Return a prioritized issue table with old/new position, practical effect, ask, fallback, and client decision..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `real-estate-negotiation-strategy`,
      title: `Real Estate Negotiation Strategy`,
      summary: `Prepare a negotiation strategy for the next call.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [LATEST DRAFT], [ISSUES LIST], [LOI/TERM SHEET], [PLAYBOOK], [CLIENT PRIORITIES], and [PRECEDENTS].

Assignment: prepare a negotiation strategy for the next call.

Prepare a negotiation or decision strategy. Focus on: top economic/legal points; fallback ladder; package trades; likely counterparty rationale; precedent support; internal decision owners; and low-value points that can be conceded.

For each issue, state the current position, preferred outcome, acceptable fallback, walk-away/escalation point if supported, business rationale, likely counterparty argument, possible package trade, and client decision owner.

Return a one-page call sheet plus an escalation list..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
  ],
};
