import type { PromptCategory } from "@/lib/types";

export const restructuring: PromptCategory = {
  id: `restructuring`,
  label: `Restructuring`,
  shortLabel: `RX`,
  topics: [
    {
      label: `Capital structure & case strategy`,
      promptIds: [`capital-structure`, `rsa-review`, `critical-dates`, `restructuring-support-agreement-review`, `rsa-milestone-and-termination-trigger-tracker`, `out-of-court-exchange-offer-document-review`, `consent-solicitation-threshold-analysis`, `restructuring-term-sheet-to-document-workplan`],
    },
    {
      label: `DIP financing & first-day relief`,
      promptIds: [`dip-order-check`, `first-day-motions`, `multi-affiliate-first-day`, `dip-credit-agreement-review`, `dip-order-hot-provisions-review`, `dip-credit-agreement-vs-dip-order-audit`, `cash-collateral-order-review`, `dip-budget-covenant-tracker`],
    },
    {
      label: `Plans, sales & executory contracts`,
      promptIds: [`plan-disclosure`, `red-lobster-stalking-horse`, `lease-portfolio-365`, `plan-of-reorganization-treatment-matrix`, `plan-and-disclosure-statement-consistency-audit`, `plan-waterfall-and-recovery-verification`, `release-exculpation-and-injunction-review`, `effective-date-conditions-checklist`, `creditor-position-and-recovery-analysis`, `proof-of-claim-review`, `claims-objection-package-builder`, `executory-contract-assumption-rejection-matrix`, `cure-claim-reconciliation`, `section-363-bidder-compliance-checklist`, `363-apa-buyer-side-review`, `sale-order-vs-apa-consistency-audit`, `bid-comparison-matrix`],
    },
    {
      label: `Chapter 11 & first-day matters`,
      promptIds: [`first-day-motion-fact-verification`, `first-day-relief-matrix`, `docket-order-and-deadline-tracker`, `first-day-order-vs-motion-comparison`, `chapter-11-case-opening-executive-brief`],
    },
    {
      label: `LMTs, debt capacity & intercreditor`,
      promptIds: [`liability-management-documentary-capacity-screen`, `uptier-exchange-consent-path-analysis`, `drop-down-unrestricted-subsidiary-capacity-analysis`, `intercreditor-rights-in-restructuring-scenario`],
    },
    {
      label: `Chronologies & client updates`,
      promptIds: [`restructuring-chronology-builder`, `weekly-restructuring-client-update`],
    },
  ],
  prompts: [
    {
      id: `capital-structure`,
      title: `Capital structure and stakeholder map`,
      summary: `Map debt, liens, priorities, and constituencies.`,
      prompt: `Using the attached debt documents, organizational chart, lien materials, and capitalization data, prepare a restructuring stakeholder map. Identify each debt tranche, borrower, guarantors, collateral, priority, maturity, key holders, voting threshold, intercreditor position, and likely leverage point. Cite the source for every legal term, distinguish face amount from estimated holdings, and list conflicts or missing documents that prevent a reliable priority analysis.`,
    },
    {
      id: `rsa-review`,
      title: `RSA issue list`,
      summary: `Review support obligations, milestones, and termination rights.`,
      prompt: `Review the attached restructuring support agreement from the perspective of [company/ad hoc group/sponsor/other stakeholder]. Prepare an issue list covering support commitments, milestones, fiduciary outs, termination events, fees, releases, plan treatment, transfer restrictions, joinders, disclosure obligations, and remedies. Cite each provision, explain the practical leverage created, and propose a prioritized response. Cross-check the RSA against the attached term sheet and flag inconsistencies.`,
    },
    {
      id: `dip-order-check`,
      title: `DIP term sheet to order check`,
      summary: `Trace negotiated DIP terms into the proposed order.`,
      prompt: `Compare the attached DIP term sheet, DIP credit agreement, motion, interim order, and final order. Build a provision-by-provision table covering economics, collateral, priorities, roll-up, milestones, budgets, variances, reporting, releases, challenge rights, waivers, case controls, and remedies. Cite each document precisely and flag terms that were added, expanded, omitted, or implemented inconsistently.`,
    },
    {
      id: `first-day-motions`,
      title: `First-day relief matrix`,
      summary: `Summarize requested relief, evidence, and objections.`,
      prompt: `Review the attached first-day motions and proposed orders. Create a matrix showing the relief requested, statutory basis stated in the filing, factual support, interim versus final relief, monetary cap, notice parties, objection deadline, hearing date, and dependencies. Identify nonstandard or expansive relief, discrepancies between motion and order, and facts that should be confirmed with the declaration or client team.`,
    },
    {
      id: `plan-disclosure`,
      title: `Plan and disclosure statement cross-check`,
      summary: `Find treatment, voting, and implementation inconsistencies.`,
      prompt: `Compare the attached chapter 11 plan, disclosure statement, solicitation procedures, and restructuring term sheet. Create a class-by-class treatment table and flag inconsistencies in classification, impairment, voting rights, distributions, releases, exculpation, injunctions, conditions to effectiveness, and implementation steps. Cite both sides of every inconsistency. End with a list of provisions requiring bankruptcy counsel judgment or updated financial data.`,
    },
    {
      id: `critical-dates`,
      title: `Case milestones and critical dates`,
      summary: `Build one timeline from pleadings, orders, and agreements.`,
      prompt: `Extract every material deadline, milestone, hearing, notice period, objection date, reporting date, covenant date, and drop-dead date from the attached restructuring documents. Return a chronological table with date, event, source citation, responsible party, dependency, consequence of missing it, and whether the date is fixed or calculated. Identify conflicting dates and calculate derived dates only when the triggering date and counting rule are clear.`,
    },
    {
      id: `red-lobster-stalking-horse`,
      title: `Stalking-horse sale and DIP alignment`,
      summary: `Cross-check sale milestones, DIP controls, bid procedures, and going-concern execution.`,
      matterInspired: true,
      prompt: `Act as debtor's counsel in a multi-affiliate Chapter 11 designed to preserve a large operating business through a going-concern sale to a stalking-horse bidder affiliated with existing term lenders. Compare the stalking-horse APA, DIP credit agreement, DIP orders, bid-procedures motion and order, case milestones, budget, and sale timeline. Build one alignment matrix covering milestones, purchase-price credit bid or cash components, assumed liabilities, cure costs, executory contracts and leases, bid protections, qualified-bid requirements, releases, challenge rights, variance covenants, funding availability, and termination rights. Flag any provision that lets one document force a default or termination under another, cite both sources, and propose a prioritized cure.`,
    },
    {
      id: `multi-affiliate-first-day`,
      title: `Multi-affiliate first-day control matrix`,
      summary: `Tie requested relief to entities, cash needs, caps, evidence, and proposed orders.`,
      matterInspired: true,
      prompt: `Review the first-day package for a Chapter 11 filing by [number] affiliated debtors operating approximately [number] locations. Create an entity-by-entity matrix for cash management, wages, taxes, customer programs, vendors, insurance, utilities, critical suppliers, and joint administration. For each motion identify the debtor beneficiaries, bank accounts or payment streams, requested cap, interim need, statutory basis stated, declaration support, proposed-order language, notice requirements, and operational owner. Reconcile all dollar amounts and defined debtor groups across the motion, declaration, proposed order, budget, and creditor matrix. Flag relief that is unsupported, duplicative, entity-misaligned, or broader in the order than in the motion.`,
    },
    {
      id: `lease-portfolio-365`,
      title: `Large lease portfolio Section 365 plan`,
      summary: `Prioritize assumption, assignment, rejection, cure, and operational continuity.`,
      matterInspired: true,
      prompt: `Using the lease database, amendments, payment ledger, cure schedule, sale documents, and operating plan for a multi-location debtor, create a Section 365 decision matrix. For each location identify debtor tenant, landlord, term, rent, arrears, cure components, defaults, assignment restrictions, anti-assignment language, co-tenancy or reciprocal-easement issues, guarantees, profitable or loss-making status, buyer designation rights, notice deadlines, and proposed treatment. Separate legal eligibility from the business recommendation. Reconcile landlord claims to debtor records, flag missing lease documents, identify disputed cure amounts, and produce a hearing-ready exception list with exact citations.`,
    },
    {
      id: `first-day-motion-fact-verification`,
      title: `First-Day Motion Fact Verification`,
      summary: `Verify factual statements and requested relief in the first-day package against source materials.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR].

Use only the following materials unless expressly instructed otherwise: [DRAFT FIRST-DAY MOTIONS], [DECLARATION], [BUSINESS RECORDS], [BANK/EMPLOYEE/TAX/VENDOR DATA], and [CLIENT INSTRUCTIONS].

Assignment: verify factual statements and requested relief in the first-day package against source materials.

Verify the work product against the source materials. Focus on: debtor history; liquidity; employees; payroll; taxes; cash management; critical vendors; customer programs; insurance; utilities; foreign operations; debt structure; and requested authority.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a statement-to-source audit: Motion/Paragraph | Statement | Source | Supported? | Discrepancy | Required Fix/Client Confirmation..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `first-day-relief-matrix`,
      title: `First-Day Relief Matrix`,
      summary: `Summarize the relief requested, legal basis, dollar caps, notice, and operational consequences across the first-day package.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR/CREDITOR].

Use only the following materials unless expressly instructed otherwise: [FIRST-DAY MOTIONS], [PROPOSED ORDERS], and [CASE FACTS].

Assignment: summarize the relief requested, legal basis, dollar caps, notice, and operational consequences across the first-day package.

Extract and normalize the relevant information. Focus on: cash management; wages; taxes; insurance; utilities; customer programs; critical vendors; foreign vendors; lien maintenance; and procedural relief.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a motion-by-motion matrix with relief, cap, key conditions, objection risk, hearing date, and owner..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `docket-order-and-deadline-tracker`,
      title: `Docket Order and Deadline Tracker`,
      summary: `Create a live case chronology and deadline tracker from entered orders and docket events.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [DOCKET], [ENTERED ORDERS], [HEARING NOTICES], and [CASE CALENDAR].

Assignment: create a live case chronology and deadline tracker from entered orders and docket events.

Construct a source-linked chronology. Focus on: petition date; hearings; objection deadlines; bar dates; financing milestones; sale milestones; plan milestones; exclusivity; reporting; and any dates imposed by orders.

Use actual dates where available. Distinguish event date, effective date, filing date, notice date, deadline, and date inferred from surrounding facts. Do not infer a date unless the basis is explicit.

Return a chronological table: Date | Event/Deadline | Source Docket No./Paragraph | Responsible Party | Consequence | Status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `first-day-order-vs-motion-comparison`,
      title: `First-Day Order vs Motion Comparison`,
      summary: `Identify changes between requested and granted relief.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [FIRST-DAY MOTION], [PROPOSED ORDER], and [ENTERED ORDER].

Assignment: identify changes between requested and granted relief.

Compare the materials substantively, not merely textually. Focus on: dollar caps; conditions; lien/claim grants; notice; reporting; objection reservations; deadlines; carve-outs; professional-fee treatment; and other substantive modifications.

Group related edits into negotiation issues. Identify new issues, resolved issues, hidden consequential changes, and changes made outside previously open points.

Return a table: Issue | Motion Request | Proposed Order | Entered Order | Effect | Required Operational Follow-Up..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `chapter-11-case-opening-executive-brief`,
      title: `Chapter 11 Case Opening Executive Brief`,
      summary: `Prepare a concise opening-case brief for a creditor or internal deal team.`,
      prompt: `You are transactional corporate counsel. You represent [CREDITOR/CLIENT].

Use only the following materials unless expressly instructed otherwise: [PETITION], [FIRST-DAY DECLARATION], [DEBTOR AFFIDAVITS], [DIP/CASH COLLATERAL MOTIONS], and [CASE DOCKET].

Assignment: prepare a concise opening-case brief for a creditor or internal deal team.

Extract and normalize the relevant information. Focus on: capital structure; liquidity; causes of filing; proposed restructuring path; DIP/cash collateral; key milestones; significant first-day relief; major creditors; litigation; sale process; and near-term dates.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a two-page brief with Key Facts, Capital Structure, Proposed Path, Immediate Risks, Key Dates, and Questions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `restructuring-support-agreement-review`,
      title: `Restructuring Support Agreement Review`,
      summary: `Review the RSA from [DEBTOR / SUPPORTING CREDITOR] perspective.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR / SUPPORTING CREDITOR].

Use only the following materials unless expressly instructed otherwise: [RSA], [TERM SHEET], [DEBT DOCUMENTS], and [CASE/TRANSACTION TIMELINE].

Assignment: review the RSA from [DEBTOR / SUPPORTING CREDITOR] perspective.

Review the document as a connected transaction document, not as isolated clauses. Focus on: supported restructuring; class treatment; new money/DIP; support obligations; alternative transaction restrictions; milestones; termination; fiduciary out; transfer restrictions; joinders; amendments/waivers; releases; expenses; disclosure; plan modification; and remedies.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a provision map plus a separate milestone calendar and client-decision list..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `rsa-milestone-and-termination-trigger-tracker`,
      title: `RSA Milestone and Termination Trigger Tracker`,
      summary: `Build a source-linked tracker of milestones, termination events, cure periods, waivers, and extension rights.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [RSA], [AMENDMENTS], and [CASE CALENDAR].

Assignment: build a source-linked tracker of milestones, termination events, cure periods, waivers, and extension rights.

Extract and normalize the relevant information. Focus on: filing; DIP; disclosure statement; solicitation; plan confirmation; effective date; sale milestones; support thresholds; covenant breaches; fiduciary outs; and mutual/party-specific termination rights.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a chronological table: Milestone/Trigger | Date/Test | Source | Cure/Extension | Waiver Holder | Consequence | Status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `out-of-court-exchange-offer-document-review`,
      title: `Out-of-Court Exchange Offer Document Review`,
      summary: `Identify legal, documentary, and execution issues in the proposed exchange.`,
      prompt: `You are transactional corporate counsel. You represent [ISSUER/CREDITOR].

Use only the following materials unless expressly instructed otherwise: [EXCHANGE OFFER MEMORANDUM], [SUPPORT AGREEMENT], [EXISTING DEBT DOCS], [NEW DEBT DOCS], and [TRANSACTION STRUCTURE].

Assignment: identify legal, documentary, and execution issues in the proposed exchange.

Review the document as a connected transaction document, not as isolated clauses. Focus on: eligibility; consideration; minimum participation; exit consents; new-money commitments; priority/ranking; collateral; guarantees; covenants; tender/withdrawal; conditions; releases; fees; and settlement mechanics.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return an issues matrix plus required consent/threshold calculations..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `consent-solicitation-threshold-analysis`,
      title: `Consent Solicitation Threshold Analysis`,
      summary: `Determine the voting/consent threshold for each proposed amendment or waiver.`,
      prompt: `You are transactional corporate counsel. You represent [ISSUER/CREDITOR].

Use only the following materials unless expressly instructed otherwise: [INDENTURE/CREDIT AGREEMENT], [CONSENT SOLICITATION], [HOLDER DATA], and [PROPOSED AMENDMENTS].

Assignment: determine the voting/consent threshold for each proposed amendment or waiver.

Review the document as a connected transaction document, not as isolated clauses. Focus on: majority/supermajority thresholds; sacred rights; affected holders; class/series voting; quorum; record dates; exit consents; collateral/guarantee releases; payment terms; maturity; principal; interest; and subordination.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a provision-by-provision consent matrix and list of amendments that cannot be achieved through the proposed consent mechanism..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `restructuring-term-sheet-to-document-workplan`,
      title: `Restructuring Term Sheet to Document Workplan`,
      summary: `Translate the restructuring term sheet into a document and execution workplan.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [RESTRUCTURING TERM SHEET], [CAPITAL STRUCTURE], [ENTITY STRUCTURE], and [CLIENT INSTRUCTIONS].

Assignment: translate the restructuring term sheet into a document and execution workplan.

Build an execution-ready checklist. Focus on: exchange/new money; debt amendments; equity issuance; governance; releases; intercreditor changes; collateral; tax/structural steps; consents; securities-law steps; regulatory approvals; and closing deliverables.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a workplan: Term | Required Document/Action | Responsible Workstream | Dependency | Consent | Timing | Open Issue..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `dip-credit-agreement-review`,
      title: `DIP Credit Agreement Review`,
      summary: `Review the DIP financing for documentary and bankruptcy-order consistency.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR/DIP LENDER/COMMITTEE].

Use only the following materials unless expressly instructed otherwise: [DIP CREDIT AGREEMENT], [DIP TERM SHEET], [DIP MOTION], [PROPOSED DIP ORDER], and [PREPETITION DEBT DOCS].

Assignment: review the DIP financing for documentary and bankruptcy-order consistency.

Review the document as a connected transaction document, not as isolated clauses. Focus on: facility; roll-up; pricing; milestones; budget; variances; covenants; defaults; collateral; priming; superpriority; adequate protection; carve-out; releases; challenge period; waivers; remedies; and case milestones.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a DIP issues table plus a separate credit-agreement-to-order inconsistency matrix..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `dip-order-hot-provisions-review`,
      title: `DIP Order Hot-Provisions Review`,
      summary: `Identify bankruptcy-specific provisions that materially affect stakeholder rights.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [PROPOSED DIP ORDER], [DIP MOTION], [DIP CREDIT AGREEMENT], [PREPETITION CREDIT DOCS], and [CLIENT PLAYBOOK/PRECEDENTS].

Assignment: identify bankruptcy-specific provisions that materially affect stakeholder rights.

Review the document as a connected transaction document, not as isolated clauses. Focus on: findings; stipulations; liens; priming; superpriority; adequate protection; roll-up; releases; challenge period/budget; investigation budget; carve-out; 506(c); 552(b); marshaling; equities-of-case; credit bidding; remedies notice; and milestones.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a hot-provisions matrix with current term, client impact, precedent position, proposed revision, and escalation..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `dip-credit-agreement-vs-dip-order-audit`,
      title: `DIP Credit Agreement vs DIP Order Audit`,
      summary: `Identify conflicts between the financing documents and the court order.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [DIP CREDIT AGREEMENT], [DIP ORDER], [DIP MOTION], and [BUDGET].

Assignment: identify conflicts between the financing documents and the court order.

Perform a document-integrity and legal-work-product QA audit. Focus on: defined terms; borrowing conditions; milestones; defaults; budget/variance; collateral; adequate protection; remedies; release; carve-out; reporting; and termination.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a cross-document conflict table with which document controls and recommended conforming action..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `cash-collateral-order-review`,
      title: `Cash Collateral Order Review`,
      summary: `Review cash collateral terms and adequate-protection package.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR/SECURED CREDITOR/COMMITTEE].

Use only the following materials unless expressly instructed otherwise: [CASH COLLATERAL MOTION], [PROPOSED ORDER], [PREPETITION CREDIT DOCS], and [BUDGET].

Assignment: review cash collateral terms and adequate-protection package.

Review the document as a connected transaction document, not as isolated clauses. Focus on: stipulations; cash collateral definition; adequate protection liens/claims; reporting; budget; variance; fees; releases; challenge rights; carve-out; 506(c); 552(b); remedies; replacement liens; and termination events.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a stakeholder-impact matrix and negotiation issues list..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `dip-budget-covenant-tracker`,
      title: `DIP Budget Covenant Tracker`,
      summary: `Track budget testing and reporting obligations under the DIP package.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR/DIP LENDER].

Use only the following materials unless expressly instructed otherwise: [DIP/CASH COLLATERAL ORDER], [DIP CREDIT AGREEMENT], [APPROVED BUDGET], and [WEEKLY ACTUALS].

Assignment: track budget testing and reporting obligations under the DIP package.

Extract and normalize the relevant information. Focus on: testing periods; permitted variance; receipts/disbursements; professional fees; capex; reporting; budget updates; variance cure; default consequences; and approval rights.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a weekly tracker with covenant, period, budget, actual, variance, threshold, status, and source..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `plan-of-reorganization-treatment-matrix`,
      title: `Plan of Reorganization Treatment Matrix`,
      summary: `Map the legal treatment of each class and interest under the plan.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [PLAN], [DISCLOSURE STATEMENT], [CAPITAL STRUCTURE], [CLAIMS DATA], and [TERM SHEET/RSA].

Assignment: map the legal treatment of each class and interest under the plan.

Extract and normalize the relevant information. Focus on: classification; impairment; voting; distribution; new securities; reinstatement; cure; subordinated claims; intercompany claims; equity; releases; exculpation; injunction; and conditions to effectiveness.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a class-by-class treatment matrix with source citations and inconsistencies between plan and disclosure statement..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `plan-and-disclosure-statement-consistency-audit`,
      title: `Plan and Disclosure Statement Consistency Audit`,
      summary: `Identify inconsistencies in treatment, economics, dates, releases, and case mechanics.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [PLAN], [DISCLOSURE STATEMENT], [RSA/TERM SHEET], [FINANCIAL PROJECTIONS], and [RECOVERY ANALYSIS].

Assignment: identify inconsistencies in treatment, economics, dates, releases, and case mechanics.

Perform a document-integrity and legal-work-product QA audit. Focus on: class treatment; recoveries; valuation; projections; new-money terms; governance; releases/exculpation; voting; feasibility; liquidation analysis; effective-date conditions; and distributions.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a discrepancy table ranked by materiality and required correction owner..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `plan-waterfall-and-recovery-verification`,
      title: `Plan Waterfall and Recovery Verification`,
      summary: `Verify that modeled recoveries implement the plan's legal treatment.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [PLAN], [RECOVERY MODEL], [CLAIMS REGISTER], [CAPITAL STRUCTURE], and [VALUATION ASSUMPTIONS].

Assignment: verify that modeled recoveries implement the plan's legal treatment.

Verify the work product against the source materials. Focus on: priority; allowed claims; class allocations; cash/new debt/equity; dilution; rights offerings; backstop; management incentive pool; disputed claims reserve; subordination; and rounding.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a class-by-class reconciliation showing legal entitlement, model input, modeled recovery, discrepancy, and unresolved assumptions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `release-exculpation-and-injunction-review`,
      title: `Release, Exculpation and Injunction Review`,
      summary: `Analyze the scope and mechanics of plan releases, exculpation, injunctions, and opt-out/consent provisions.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [PLAN], [DISCLOSURE STATEMENT], [SOLICITATION MATERIALS], and [RELEVANT ORDERS].

Assignment: analyze the scope and mechanics of plan releases, exculpation, injunctions, and opt-out/consent provisions.

Review the document as a connected transaction document, not as isolated clauses. Focus on: releasing parties; released parties; claims covered; conduct carve-outs; opt-in/opt-out; deemed consent; voting/nonvoting classes; exculpated conduct; injunction scope; and third-party release mechanics.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a stakeholder-by-stakeholder rights matrix plus legal research questions if external law review is permitted..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `effective-date-conditions-checklist`,
      title: `Effective Date Conditions Checklist`,
      summary: `Build the effective-date checklist.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR/CLIENT].

Use only the following materials unless expressly instructed otherwise: [PLAN], [CONFIRMATION ORDER], [PLAN SUPPLEMENT], [EXIT FINANCING DOCS], and [IMPLEMENTATION STEPS].

Assignment: build the effective-date checklist.

Build an execution-ready checklist. Focus on: conditions precedent; waivers; financing; equity issuance; corporate governance; distributions; releases; professional fees; claim reserves; regulatory approvals; documents in plan supplement; and required notices/filings.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a chronological checklist with source paragraph, responsible party, dependency, waiver holder, evidence, and status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `creditor-position-and-recovery-analysis`,
      title: `Creditor Position and Recovery Analysis`,
      summary: `Summarize a creditor's contractual rights, bankruptcy position, and proposed recovery.`,
      prompt: `You are transactional corporate counsel. You represent [CREDITOR].

Use only the following materials unless expressly instructed otherwise: [DEBT DOCUMENTS], [PLAN/TERM SHEET], [CLAIMS DATA], [COLLATERAL INFO], and [VALUATION/RECOVERY MODEL].

Assignment: summarize a creditor's contractual rights, bankruptcy position, and proposed recovery.

Extract and normalize the relevant information. Focus on: claim amount; priority; collateral; guarantees; intercreditor rights; voting class; plan treatment; cash/new debt/equity recovery; releases; impairment; and key objections/negotiation leverage.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a creditor position memo with a rights/recovery matrix and open legal/valuation questions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `proof-of-claim-review`,
      title: `Proof of Claim Review`,
      summary: `Evaluate the evidentiary support and potential objections to the claim.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR/CREDITOR].

Use only the following materials unless expressly instructed otherwise: [PROOF OF CLAIM], [SUPPORTING DOCUMENTS], [DEBTOR SCHEDULES], [LEDGER], [CONTRACTS], and [PAYMENT HISTORY].

Assignment: evaluate the evidentiary support and potential objections to the claim.

Verify the work product against the source materials. Focus on: claimant identity; amount; secured/unsecured/priority status; basis; documentation; payments/credits; duplicate claims; interest/fees; setoff; amendment history; and schedule treatment.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a claim review table with supported amount, disputed components, evidence, potential objection grounds, and follow-up..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `claims-objection-package-builder`,
      title: `Claims Objection Package Builder`,
      summary: `Prepare a first-pass objection package for the specified claims.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR].

Use only the following materials unless expressly instructed otherwise: [CLAIMS DATA], [PROOFS OF CLAIM], [LEDGER], [CONTRACTS], [SCHEDULES], [OBJECTION PRECEDENT], and [CLIENT INSTRUCTIONS].

Assignment: prepare a first-pass objection package for the specified claims.

Draft using the supplied precedent and approved business/legal terms as the controlling source. Focus on: duplicate; amended/superseded; no liability; wrong debtor; amount discrepancy; paid/satisfied; insufficient documentation; priority; secured status; and other fact-supported grounds.

Do not introduce new economics, rights, obligations, standards, remedies, qualifiers, or defined terms unless required to implement the instructions. Preserve the precedent's drafting conventions, defined-term architecture, cross-reference style, and internal logic.

After drafting, run a consequential-effects check for definitions, cross-references, schedules, exhibits, notice provisions, closing conditions, remedies, and any other provisions affected by the change.

Return a draft objection schedule plus claim-by-claim evidentiary support table; do not assert a ground not supported by the record..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `executory-contract-assumption-rejection-matrix`,
      title: `Executory Contract Assumption/Rejection Matrix`,
      summary: `Map executory contracts and leases for assumption, assignment, or rejection decisions.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR/BUYER].

Use only the following materials unless expressly instructed otherwise: [CONTRACT SET], [CURE SCHEDULE], [ASSUMPTION/REJECTION MOTIONS], and [BUSINESS INPUT].

Assignment: map executory contracts and leases for assumption, assignment, or rejection decisions.

Extract and normalize the relevant information. Focus on: counterparty; term; economics; cure; default; assignment restrictions; anti-assignment clauses; change of control; criticality; burdens; benefits; cure disputes; and proposed treatment.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a matrix: Contract | Counterparty | Cure | Key Rights | Operational Value | Proposed Treatment | Deadline | Issue | Source..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `cure-claim-reconciliation`,
      title: `Cure Claim Reconciliation`,
      summary: `Reconcile proposed cure amounts and objections.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR/BUYER/CREDITOR].

Use only the following materials unless expressly instructed otherwise: [CURE NOTICE], [CONTRACTS], [ACCOUNTING LEDGER], [COUNTERPARTY OBJECTIONS], and [PAYMENT HISTORY].

Assignment: reconcile proposed cure amounts and objections.

Verify the work product against the source materials. Focus on: prepetition amounts; postpetition amounts; credits; disputed invoices; contract defaults; nonmonetary defaults; interest/fees; amendments; and assignment conditions.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a contract-by-contract cure reconciliation with amount supported, amount disputed, evidence, and resolution path..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `section-363-bidder-compliance-checklist`,
      title: `Section 363 Bidder Compliance Checklist`,
      summary: `Extract every requirement for submitting and maintaining a qualified bid.`,
      prompt: `You are transactional corporate counsel. You represent [BIDDER].

Use only the following materials unless expressly instructed otherwise: [BIDDING PROCEDURES MOTION], [ENTERED BIDDING PROCEDURES ORDER], [STALKING HORSE APA], [SALE NOTICE], and [CURE NOTICE].

Assignment: extract every requirement for submitting and maintaining a qualified bid.

Build an execution-ready checklist. Focus on: deposit; executed APA; required markup; purchase price; overbid increment; financial capability; corporate authorization; regulatory info; adequate assurance; bid deadline; auction mechanics; assumed contracts; sale hearing; backup-bid obligations; and bid expiration.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a chronological bidder checklist plus a separate Hard Stop list of bid-disqualification risks..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `363-apa-buyer-side-review`,
      title: `363 APA Buyer-Side Review`,
      summary: `Review the distressed APA from the bidder's perspective.`,
      prompt: `You are transactional corporate counsel. You represent [BIDDER].

Use only the following materials unless expressly instructed otherwise: [363 APA], [BIDDING PROCEDURES ORDER], [SALE ORDER FORM], [DILIGENCE FINDINGS], and [CLIENT INSTRUCTIONS].

Assignment: review the distressed APA from the bidder's perspective.

Review the document as a connected transaction document, not as isolated clauses. Focus on: acquired/excluded assets; assumed/excluded liabilities; executory contracts; cure; free-and-clear relief; stalking-horse protections; deposit; closing conditions; regulatory approval; representations; covenants; termination; remedies; backup bid; and sale-order requirements.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a bidder issues list separating agreement points from bankruptcy-order points..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `sale-order-vs-apa-consistency-audit`,
      title: `Sale Order vs APA Consistency Audit`,
      summary: `Verify that the sale order delivers the rights and protections required by the APA.`,
      prompt: `You are transactional corporate counsel. You represent [BUYER/SELLER].

Use only the following materials unless expressly instructed otherwise: [APA], [SALE ORDER], [BIDDING PROCEDURES ORDER], [ASSUMED CONTRACT SCHEDULE], and [CURE MATERIALS].

Assignment: verify that the sale order delivers the rights and protections required by the APA.

Perform a document-integrity and legal-work-product QA audit. Focus on: free-and-clear findings; good faith; successor liability; assignment; cure; liens; claims; executory contracts; jurisdiction; releases; closing conditions; and retained liabilities.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a consistency table with required order revisions or APA conforming changes..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `bid-comparison-matrix`,
      title: `Bid Comparison Matrix`,
      summary: `Compare bids on total value, certainty, conditionality, and estate impact.`,
      prompt: `You are transactional corporate counsel. You represent [DEBTOR/CREDITOR COMMITTEE].

Use only the following materials unless expressly instructed otherwise: [QUALIFIED BIDS], [MARKED APAS], [FUNDS SOURCES], [ASSUMED LIABILITY SCHEDULES], and [BIDDING PROCEDURES].

Assignment: compare bids on total value, certainty, conditionality, and estate impact.

Build a normalized comparison matrix. Focus on: cash consideration; assumed liabilities; cure; excluded assets/liabilities; financing; contingencies; regulatory risk; closing timing; employee treatment; contract assumption; breakup fees/expenses; and markup deviations.

Analyze each source document individually before comparing across documents. Preserve document-level attribution and do not blend materially different rights or obligations.

Return a normalized bid matrix and a separate list of non-price execution risks..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `liability-management-documentary-capacity-screen`,
      title: `Liability Management Documentary Capacity Screen`,
      summary: `Screen documentary capacity for the proposed liability-management transaction without opining on enforceability or advisability.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CREDIT DOCUMENTS], [INTERCREDITOR DOCUMENTS], [CAPITAL STRUCTURE], [FINANCIAL DATA], and [PROPOSED TRANSACTION STEPS].

Assignment: screen documentary capacity for the proposed liability-management transaction without opining on enforceability or advisability.

Build the analysis from the operative document rather than estimating available capacity. Focus on: debt; liens; incremental/equivalent debt; investments; restricted payments; asset sales; unrestricted subsidiaries; asset/IP transfers; guarantee/collateral releases; non-pro-rata purchases; assignment; pro rata sharing; amendment thresholds; sacred rights; affiliate transactions; refinancing debt; and intercreditor restrictions.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return a transaction-step pathway matrix followed by Documentary Blockers, Required Votes, Required Financial Inputs, and External-Law Questions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `uptier-exchange-consent-path-analysis`,
      title: `Uptier / Exchange Consent Path Analysis`,
      summary: `Map the contractual consents, amendment thresholds, and priority consequences of the proposed transaction.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/CREDITOR].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [INTERCREDITOR AGREEMENT], [PROPOSED EXCHANGE/UPTIER TERMS], and [LENDER HOLDINGS].

Assignment: map the contractual consents, amendment thresholds, and priority consequences of the proposed transaction.

Review the document as a connected transaction document, not as isolated clauses. Focus on: open-market purchase provisions; assignment; pro rata sharing; sacred rights; lien priorities; new-money capacity; subordination; collateral release; guarantee release; affected-lender votes; and participating/nonparticipating lender treatment.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a step-by-step consent and documentary pathway with adverse-readings section..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `drop-down-unrestricted-subsidiary-capacity-analysis`,
      title: `Drop-Down / Unrestricted Subsidiary Capacity Analysis`,
      summary: `Determine contractual capacity to transfer assets to unrestricted or non-guarantor subsidiaries.`,
      prompt: `You are transactional corporate counsel. You represent [BORROWER/CREDITOR].

Use only the following materials unless expressly instructed otherwise: [CREDIT AGREEMENT], [SECURITY DOCUMENTS], [ENTITY/ASSET STRUCTURE], [VALUATION DATA], and [PROPOSED TRANSFERS].

Assignment: determine contractual capacity to transfer assets to unrestricted or non-guarantor subsidiaries.

Build the analysis from the operative document rather than estimating available capacity. Focus on: investment baskets; asset sale baskets; unrestricted-subsidiary designation; fair-market-value tests; material IP restrictions; guarantee/collateral release; affiliate transactions; no-default/ratio tests; and reclassification.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return a transfer-step matrix showing authority, basket usage, release effect, required valuation/input, and blocker..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `intercreditor-rights-in-restructuring-scenario`,
      title: `Intercreditor Rights in Restructuring Scenario`,
      summary: `Map each creditor class's contractual rights and restrictions in the proposed scenario.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [INTERCREDITOR AGREEMENT], [DEBT DOCUMENTS], and [PROPOSED RESTRUCTURING SCENARIO].

Assignment: map each creditor class's contractual rights and restrictions in the proposed scenario.

Review the document as a connected transaction document, not as isolated clauses. Focus on: enforcement; standstill; turnover; DIP; adequate protection; 363 sale; credit bid; releases; amendments; purchase options; refinancing; bankruptcy voting; and waivers.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a creditor-class rights matrix plus separate enforceability and bankruptcy-law research questions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `restructuring-chronology-builder`,
      title: `Restructuring Chronology Builder`,
      summary: `Construct a defensible chronology of the restructuring process.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [DRAFTS], [EMAILS/NOTICES], [DEBT DOCUMENTS], [PUBLIC FILINGS/DOCKET], [BOARD MATERIALS], and [TRANSACTION DOCUMENTS].

Assignment: construct a defensible chronology of the restructuring process.

Construct a source-linked chronology. Focus on: defaults; negotiations; proposals; board actions; lender communications; amendments; forbearances; transfers; filings; hearings; orders; milestones; and material decision points.

Use actual dates where available. Distinguish event date, effective date, filing date, notice date, deadline, and date inferred from surrounding facts. Do not infer a date unless the basis is explicit.

Return a chronology: Date | Event | Parties | Source | Legal/Commercial Significance | Disputed/Unclear? | Follow-Up..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `weekly-restructuring-client-update`,
      title: `Weekly Restructuring Client Update`,
      summary: `Prepare a concise weekly client update focused on what changed and what requires action.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CURRENT DOCKET], [ORDERS], [NEGOTIATION STATUS], [MILESTONE TRACKER], [CLIENT ISSUES LIST], and [PRIOR UPDATE].

Assignment: prepare a concise weekly client update focused on what changed and what requires action.

Verify the work product against the source materials. Focus on: new filings/orders; hearing results; financing/sale/plan milestones; negotiations; creditor positions; deadlines; emerging risks; decisions required; and next-week actions.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a client-ready update with sections: What Changed; Why It Matters; Decisions Needed; Key Dates; Next Steps; source references..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
  ],
};
