import type { PromptCategory } from "@/lib/types";

export const generalCorporate: PromptCategory = {
  id: `general-corporate`,
  label: `General Corporate`,
  shortLabel: `GC`,
  topics: [
    {
      label: `Corporate Governance`,
      promptIds: [`board-consent-authority-audit`, `board-materials-decision-memo`, `reserved-matters-map`, `stockholder-approval-analysis`, `director-and-officer-authority-matrix`],
    },
    {
      label: `Entity Formation & Capitalization`,
      promptIds: [`entity-formation-package-review`, `capitalization-rights-reconciliation`, `equity-issuance-closing-checklist`, `safe-and-convertible-note-conversion-audit`, `subsidiary-and-entity-structure-map`],
    },
    {
      label: `Commercial Agreements`,
      promptIds: [`customer-msa-playbook-review`, `vendor-agreement-risk-review`, `saas-agreement-review`, `data-processing-addendum-review`, `nda-review-and-redline-instructions`, `ip-license-scope-analysis`, `distribution-agreement-review`, `professional-services-agreement-and-sow-hierarchy-review`],
    },
    {
      label: `Drafting & Contract QA`,
      promptIds: [`draft-agreement-from-approved-precedent`, `targeted-amendment-with-consequential-effects-check`, `defined-term-integrity-audit`, `cross-reference-and-schedule-audit`, `missing-provision-audit-against-baseline`, `multi-document-consistency-audit`],
    },
    {
      label: `Due Diligence & Securities`,
      promptIds: [`material-contracts-diligence-matrix`, `entity-compliance-and-good-standing-audit`, `private-offering-exemption-checklist`, `disclosure-consistency-check`, `beneficial-ownership-and-control-rights-map`],
    },
    {
      label: `Corporate Housekeeping & Obligations`,
      promptIds: [`executed-contract-obligations-tracker`, `renewal-and-termination-calendar`, `corporate-records-book-completeness-audit`, `signature-and-execution-audit`],
    },
    {
      label: `Negotiation, Research & Communications`,
      promptIds: [`negotiation-playbook-from-precedents`, `executive-contract-summary`, `board-approval-memo-from-operative-documents`, `targeted-contract-law-research-memo`],
    },
  ],
  prompts: [
    {
      id: `board-consent-authority-audit`,
      title: `Board Consent Authority Audit`,
      summary: `Determine whether the proposed board action is properly authorized and whether additional approvals are required.`,
      prompt: `You are transactional corporate counsel. You represent [COMPANY].

Use only the following materials unless expressly instructed otherwise: [CHARTER], [BYLAWS], [STOCKHOLDER AGREEMENT], [DELEGATION POLICIES], and the proposed [BOARD CONSENT].

Assignment: determine whether the proposed board action is properly authorized and whether additional approvals are required.

Perform a document-integrity and legal-work-product QA audit. Focus on: board and committee authority; quorum; voting thresholds; reserved matters; interested-director procedures; officer authority; stockholder approval triggers; notice/waiver requirements; and any approval sequence imposed by governing documents.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a table: Action | Required Authority | Source | Approval Threshold | Current Draft Coverage | Missing Approval/Defect | Recommended Fix, followed by a short execution sequence..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `board-materials-decision-memo`,
      title: `Board Materials Decision Memo`,
      summary: `Prepare a board-facing decision memo that accurately reflects the action being requested and the material facts supplied to the board.`,
      prompt: `You are transactional corporate counsel. You represent [COMPANY].

Use only the following materials unless expressly instructed otherwise: [BOARD DECK], [MANAGEMENT MEMO], [DRAFT RESOLUTIONS], [TRANSACTION DOCUMENTS], and [CLIENT INSTRUCTIONS].

Assignment: prepare a board-facing decision memo that accurately reflects the action being requested and the material facts supplied to the board.

Verify the work product against the source materials. Focus on: decision requested; material economics; key legal obligations; conflicts; approvals; alternatives; open conditions; risk factors; and facts that appear in resolutions but not in board materials.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a concise board memo with sections: Decision Requested; Key Facts; Material Legal/Commercial Terms; Conflicts/Process; Open Items; Resolutions to Be Approved; Source Appendix..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `reserved-matters-map`,
      title: `Reserved Matters Map`,
      summary: `Identify every action requiring special board, class, investor, or stockholder consent.`,
      prompt: `You are transactional corporate counsel. You represent [COMPANY].

Use only the following materials unless expressly instructed otherwise: [CHARTER], [BYLAWS], [INVESTOR RIGHTS AGREEMENT], [STOCKHOLDER AGREEMENT], [VOTING AGREEMENT], and amendments.

Assignment: identify every action requiring special board, class, investor, or stockholder consent.

Extract and normalize the relevant information. Focus on: protective provisions; veto rights; class votes; board-designated approvals; consent thresholds; sunset provisions; exceptions; and amendment requirements.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a normalized matrix: Action | Approval Right Holder | Threshold | Exceptions | Sunset/Termination | Source | Practical Note..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `stockholder-approval-analysis`,
      title: `Stockholder Approval Analysis`,
      summary: `Determine which stockholder approvals are contractually required for the proposed transaction and where the documents create overlapping approval regimes.`,
      prompt: `You are transactional corporate counsel. You represent [COMPANY].

Use only the following materials unless expressly instructed otherwise: [CHARTER], [BYLAWS], [STOCKHOLDER AGREEMENT], [VOTING AGREEMENT], [CAP TABLE], and [PROPOSED TRANSACTION].

Assignment: determine which stockholder approvals are contractually required for the proposed transaction and where the documents create overlapping approval regimes.

Review the document as a connected transaction document, not as isolated clauses. Focus on: class votes; drag-along; preferred protective provisions; voting agreements; written-consent mechanics; record dates; notice requirements; and conflicts among governing documents.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a table: Approval | Holder/Class | Threshold | Source | Interaction with Other Rights | Satisfied? | Action Needed..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `director-and-officer-authority-matrix`,
      title: `Director and Officer Authority Matrix`,
      summary: `Map who may approve, sign, or delegate specified corporate actions.`,
      prompt: `You are transactional corporate counsel. You represent [COMPANY].

Use only the following materials unless expressly instructed otherwise: [BYLAWS], [BOARD DELEGATIONS], [COMMITTEE CHARTERS], [SIGNING POLICIES], and relevant resolutions.

Assignment: map who may approve, sign, or delegate specified corporate actions.

Build a normalized comparison matrix. Focus on: contract authority; banking authority; equity issuances; employment matters; litigation settlements; financing; acquisitions; real estate; and subdelegation.

Analyze each source document individually before comparing across documents. Preserve document-level attribution and do not blend materially different rights or obligations.

Return a matrix: Action | Approver | Signatory | Dollar/Other Limit | Delegation Right | Source | Escalation Trigger..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `entity-formation-package-review`,
      title: `Entity Formation Package Review`,
      summary: `Confirm that the entity formation package is internally complete and consistent.`,
      prompt: `You are transactional corporate counsel. You represent [COMPANY].

Use only the following materials unless expressly instructed otherwise: [CERTIFICATE/ARTICLES], [BYLAWS/OPERATING AGREEMENT], [INCORPORATOR ACTION], [INITIAL BOARD/MEMBER CONSENT], [EIN/STATE FILINGS], and [FORMATION CHECKLIST].

Assignment: confirm that the entity formation package is internally complete and consistent.

Perform a document-integrity and legal-work-product QA audit. Focus on: entity name; jurisdiction; authorized equity; classes/series; registered agent; incorporator/organizer actions; initial directors/managers; officers; fiscal year; bank authority; indemnification; equity issuance authority; and state filing status.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a formation gap list plus a document-by-document correction table..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `capitalization-rights-reconciliation`,
      title: `Capitalization Rights Reconciliation`,
      summary: `Reconcile the legal rights of each security class and outstanding convertible instrument.`,
      prompt: `You are transactional corporate counsel. You represent [COMPANY].

Use only the following materials unless expressly instructed otherwise: [CHARTER], [CAP TABLE], [STOCK PURCHASE AGREEMENTS], [SAFEs/NOTES], [OPTION PLAN], [WARRANTS], and [STOCKHOLDER AGREEMENTS].

Assignment: reconcile the legal rights of each security class and outstanding convertible instrument.

Build a normalized comparison matrix. Focus on: authorized/issued/outstanding amounts; conversion; liquidation preference; participation; dividends; anti-dilution; voting; protective provisions; redemption; exercise mechanics; maturity; discounts/caps; and pro rata rights.

Analyze each source document individually before comparing across documents. Preserve document-level attribution and do not blend materially different rights or obligations.

Return a security-level rights matrix plus a list of cap-table/document inconsistencies and missing source documents..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `equity-issuance-closing-checklist`,
      title: `Equity Issuance Closing Checklist`,
      summary: `Build a checklist for the proposed equity issuance.`,
      prompt: `You are transactional corporate counsel. You represent [COMPANY].

Use only the following materials unless expressly instructed otherwise: [BOARD CONSENT], [STOCK PURCHASE/OPTION DOCUMENTS], [CAP TABLE], [CHARTER], [PLAN], and [CLIENT INSTRUCTIONS].

Assignment: build a checklist for the proposed equity issuance.

Build an execution-ready checklist. Focus on: corporate approvals; securities-law representations; purchase price/exercise price; vesting; IP/confidentiality prerequisites; 83(b) notices if relevant; ledger/cap-table updates; certificates/book-entry; legends; state/federal filings; and post-closing records.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a chronological checklist: Item | Source | Responsible Party | Timing | Dependency | Evidence of Completion | Status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `safe-and-convertible-note-conversion-audit`,
      title: `SAFE and Convertible Note Conversion Audit`,
      summary: `Determine how each SAFE or convertible note converts in the proposed financing.`,
      prompt: `You are transactional corporate counsel. You represent [COMPANY].

Use only the following materials unless expressly instructed otherwise: [SAFE/NOTE], [CHARTER], [FINANCING DOCUMENTS], [CAP TABLE], and [FINANCING TERMS].

Assignment: determine how each SAFE or convertible note converts in the proposed financing.

Build the analysis from the operative document rather than estimating available capacity. Focus on: trigger; valuation cap; discount; MFN; interest; pre-money/post-money mechanics; company capitalization definition; excluded securities; conversion price; rounding; cash-out alternatives; pro rata rights; and required consents.

For every possible pathway, identify the exact contractual authority, formula or fixed amount, conditions, required financial inputs, no-default tests, ratio tests, reclassification mechanics, overlap/double-count risk, required consents, and blockers.

If a required financial or factual input is missing, state 'Cannot determine' rather than estimating.

Return an instrument-by-instrument calculation specification showing every formula and required input, without inventing missing numbers..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `subsidiary-and-entity-structure-map`,
      title: `Subsidiary and Entity Structure Map`,
      summary: `Produce a legal entity structure map suitable for diligence or transaction planning.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [ORGANIZATIONAL CHART], [FORMATION DOCUMENTS], [OWNERSHIP LEDGERS], [INTERCOMPANY AGREEMENTS], and [STATE/FOREIGN FILINGS].

Assignment: produce a legal entity structure map suitable for diligence or transaction planning.

Extract and normalize the relevant information. Focus on: entity name; jurisdiction; entity type; ownership percentage; direct/indirect parent; governance control; managers/directors; good standing; material intercompany agreements; and missing ownership evidence.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a parent-child hierarchy and a table: Entity | Jurisdiction | Type | Parent | Ownership | Control | Good Standing | Key Documents | Gaps..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `customer-msa-playbook-review`,
      title: `Customer MSA Playbook Review`,
      summary: `Review the customer MSA against the client's approved negotiating positions.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CUSTOMER MSA], [CLIENT PLAYBOOK], [APPROVED FORM], [CLIENT INSTRUCTIONS], and [PRIOR REDLINES].

Assignment: review the customer MSA against the client's approved negotiating positions.

Review against the supplied playbook, approved form, negotiation guidance, and precedents. Focus on: scope; fees/payment; service levels; warranties; indemnification; liability; IP; data/privacy/security; confidentiality; term/termination; audit; assignment; insurance; compliance; dispute resolution; publicity; and operational burden.

For each deviation, state the counterparty position, preferred position, available fallback, consequence of accepting the deviation, and whether escalation is required. Do not call a term 'market' unless the supplied precedent set supports that conclusion.

Return a table: Priority | Section | Counterparty Term | Preferred Position | Fallback | Risk/Impact | Proposed Redline | Escalation Owner..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `vendor-agreement-risk-review`,
      title: `Vendor Agreement Risk Review`,
      summary: `Identify contractual and operational risks before the client signs the vendor agreement.`,
      prompt: `You are transactional corporate counsel. You represent [CUSTOMER].

Use only the following materials unless expressly instructed otherwise: [VENDOR AGREEMENT], [SOW/ORDER FORM], [SECURITY/DPA ADDENDA], and [CLIENT REQUIREMENTS].

Assignment: identify contractual and operational risks before the client signs the vendor agreement.

Review the document as a connected transaction document, not as isolated clauses. Focus on: fees/renewals; service commitments; implementation; data rights; security; confidentiality; IP ownership; licenses; subcontractors; audit; indemnities; liability caps/exclusions; termination; transition assistance; assignment/change of control; and governing law.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a risk table ranked High/Medium/Low with section citation, issue, consequence, proposed ask, fallback, and client owner..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `saas-agreement-review`,
      title: `SaaS Agreement Review`,
      summary: `Review the SaaS transaction from the perspective of the subscribing customer.`,
      prompt: `You are transactional corporate counsel. You represent [CUSTOMER].

Use only the following materials unless expressly instructed otherwise: [SAAS AGREEMENT], [ORDER FORM], [SLA], [DPA], [SECURITY EXHIBIT], and [CLIENT PLAYBOOK].

Assignment: review the SaaS transaction from the perspective of the subscribing customer.

Review the document as a connected transaction document, not as isolated clauses. Focus on: availability/service credits; data ownership/use; AI/model training rights; security incidents; privacy; subprocessors; data return/deletion; IP; acceptable use; support; implementation; pricing changes; auto-renewal; suspension; termination; indemnity; and liability.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a structured issues list with separate Legal, Security/Privacy, Commercial, and Operational sections..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `data-processing-addendum-review`,
      title: `Data Processing Addendum Review`,
      summary: `Review the DPA against the client's approved privacy and security positions.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [DPA], [MSA], [PRIVACY PLAYBOOK], [SECURITY REQUIREMENTS], and [DATA FLOW DESCRIPTION].

Assignment: review the DPA against the client's approved privacy and security positions.

Review against the supplied playbook, approved form, negotiation guidance, and precedents. Focus on: controller/processor roles; processing instructions; purpose limitation; subprocessors; cross-border transfers; SCCs; security measures; incident notification; audits; assistance obligations; deletion/return; data subject requests; government requests; and conflicts with the MSA.

For each deviation, state the counterparty position, preferred position, available fallback, consequence of accepting the deviation, and whether escalation is required. Do not call a term 'market' unless the supplied precedent set supports that conclusion.

Return a deviation table with issue, source clause, client standard, proposed revision, fallback, and escalation to Privacy/Security..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `nda-review-and-redline-instructions`,
      title: `NDA Review and Redline Instructions`,
      summary: `Review the NDA and prepare targeted redline instructions.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [NDA], [NDA PLAYBOOK], [TRANSACTION CONTEXT], and [APPROVED FORM].

Assignment: review the NDA and prepare targeted redline instructions.

Review against the supplied playbook, approved form, negotiation guidance, and precedents. Focus on: definition of confidential information; exclusions; permitted recipients; use restriction; compelled disclosure; residuals; standstill/no-contact/no-hire if present; term; return/destruction; privilege; remedies; assignment; and residual confidentiality obligations.

For each deviation, state the counterparty position, preferred position, available fallback, consequence of accepting the deviation, and whether escalation is required. Do not call a term 'market' unless the supplied precedent set supports that conclusion.

Return a concise redline instruction list: Section | Issue | Preferred Change | Fallback | Rationale | Escalate?..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `ip-license-scope-analysis`,
      title: `IP License Scope Analysis`,
      summary: `Determine the actual scope of rights granted and retained under the license.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [LICENSE AGREEMENT], [PRODUCT/TECH DESCRIPTION], [RELATED COMMERCIAL AGREEMENTS], and [CLIENT INSTRUCTIONS].

Assignment: determine the actual scope of rights granted and retained under the license.

Review the document as a connected transaction document, not as isolated clauses. Focus on: licensed IP; field; territory; exclusivity; sublicensing; affiliates; improvements; derivative works; ownership; feedback; restrictions; source code; escrow; audit; royalties; change of control; termination; post-termination rights; and infringement obligations.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a rights map plus a table of ambiguities, overbreadth, missing rights, and proposed drafting fixes..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `distribution-agreement-review`,
      title: `Distribution Agreement Review`,
      summary: `Review the distribution arrangement for legal and commercial risk.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [DISTRIBUTION AGREEMENT], [COMMERCIAL TERMS], [TERRITORY/CHANNEL PLAN], and [CLIENT PLAYBOOK].

Assignment: review the distribution arrangement for legal and commercial risk.

Review the document as a connected transaction document, not as isolated clauses. Focus on: territory; exclusivity; channels; minimums/quotas; pricing; resale restrictions; marketing; IP/brand use; inventory; forecasts; compliance; warranties; returns; indemnities; termination; post-termination sell-off; non-compete; and antitrust-sensitive provisions.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return an issues table with legal/commercial classification and a separate list of terms requiring antitrust or regulatory review..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `professional-services-agreement-and-sow-hierarchy-review`,
      title: `Professional Services Agreement and SOW Hierarchy Review`,
      summary: `Determine the current operative commercial deal and resolve hierarchy conflicts among the documents.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [MSA], [SOW], [CHANGE ORDERS], [ORDER FORMS], and amendments.

Assignment: determine the current operative commercial deal and resolve hierarchy conflicts among the documents.

Perform a document-integrity and legal-work-product QA audit. Focus on: scope/deliverables; acceptance; milestones; fees; expenses; IP ownership; background materials; warranties; staffing; subcontracting; dependencies; change control; termination; and order-of-precedence clauses.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a document hierarchy, term-by-term conflict matrix, and list of drafting corrections..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `draft-agreement-from-approved-precedent`,
      title: `Draft Agreement from Approved Precedent`,
      summary: `Prepare a first draft of [AGREEMENT] that conforms to the approved precedent and negotiated terms.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [APPROVED PRECEDENT], [TERM SHEET], [CLIENT INSTRUCTIONS], and [DEAL FACTS].

Assignment: prepare a first draft of [AGREEMENT] that conforms to the approved precedent and negotiated terms.

Draft using the supplied precedent and approved business/legal terms as the controlling source. Focus on: party names; transaction structure; economics; conditions; covenants; representations; indemnities/remedies; termination; notices; schedules/exhibits; and deal-specific terms.

Do not introduce new economics, rights, obligations, standards, remedies, qualifiers, or defined terms unless required to implement the instructions. Preserve the precedent's drafting conventions, defined-term architecture, cross-reference style, and internal logic.

After drafting, run a consequential-effects check for definitions, cross-references, schedules, exhibits, notice provisions, closing conditions, remedies, and any other provisions affected by the change.

Return a clean draft plus a drafting-notes section listing every place where the inputs were incomplete, inconsistent, or required a legal judgment..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `targeted-amendment-with-consequential-effects-check`,
      title: `Targeted Amendment with Consequential Effects Check`,
      summary: `Draft an amendment that implements the requested changes without unintentionally altering unrelated rights.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [EXISTING AGREEMENT], [PRIOR AMENDMENTS], [AMENDMENT INSTRUCTIONS], and [APPROVED PRECEDENT].

Assignment: draft an amendment that implements the requested changes without unintentionally altering unrelated rights.

Draft using the supplied precedent and approved business/legal terms as the controlling source. Focus on: defined terms; references to amended sections; conforming changes; effective date; ratification; continuing effect; representations; counterpart/e-signature language; and impacts on schedules, exhibits, notices, defaults, or termination.

Do not introduce new economics, rights, obligations, standards, remedies, qualifiers, or defined terms unless required to implement the instructions. Preserve the precedent's drafting conventions, defined-term architecture, cross-reference style, and internal logic.

After drafting, run a consequential-effects check for definitions, cross-references, schedules, exhibits, notice provisions, closing conditions, remedies, and any other provisions affected by the change.

Return a clean amendment plus a consequential-effects table identifying every related provision reviewed..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `defined-term-integrity-audit`,
      title: `Defined-Term Integrity Audit`,
      summary: `Audit all defined terms and their usage across the document set.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [AGREEMENT], all schedules, exhibits, annexes, joinders, and amendments.

Assignment: audit all defined terms and their usage across the document set.

Perform a document-integrity and legal-work-product QA audit. Focus on: undefined capitalized terms; unused definitions; inconsistent variants; circular definitions; embedded definitions; changed definitions not conformed elsewhere; missing external definitions; and definitions that change thresholds, timing, rights, remedies, or conditions.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a table: Defined Term | Definition Location | Usage | Problem | Substantive Effect | Proposed Correction | Severity..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `cross-reference-and-schedule-audit`,
      title: `Cross-Reference and Schedule Audit`,
      summary: `Verify every internal and external cross-reference and every schedule/exhibit reference.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [AGREEMENT], [SCHEDULES], [EXHIBITS], [ANNEXES], and amendments.

Assignment: verify every internal and external cross-reference and every schedule/exhibit reference.

Perform a document-integrity and legal-work-product QA audit. Focus on: incorrect section references; missing schedules/exhibits; references to deleted provisions; inconsistent schedule names; circular references; mismatched exhibit titles; and amendment-created stale references.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a table: Reference Location | Current Reference | Expected Target | Problem | Effect | Correction..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `missing-provision-audit-against-baseline`,
      title: `Missing Provision Audit Against Baseline`,
      summary: `Identify provisions or concepts present in the approved baseline but missing or materially narrowed in the current draft.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CURRENT DRAFT], [APPROVED FORM], [PLAYBOOK], and [TRANSACTION TERMS].

Assignment: identify provisions or concepts present in the approved baseline but missing or materially narrowed in the current draft.

Benchmark the current document against the supplied precedent set. Normalize for transaction-specific facts before treating language as a deviation. Focus on: core operative terms; definitions; protections; remedies; boilerplate; schedules; exhibits; notice mechanics; assignment; confidentiality; indemnity; liability; termination; and transaction-specific protections.

Separate: (1) consistent precedent positions, (2) acceptable variations, (3) true outliers, (4) transaction-specific provisions that should not be generalized, and (5) areas where the precedent set is too thin to support a conclusion.

Return a table: Baseline Provision | Current Draft Treatment | Missing/Narrowed? | Material Effect | Recommended Action | Source..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `multi-document-consistency-audit`,
      title: `Multi-Document Consistency Audit`,
      summary: `Identify inconsistencies across the transaction document suite.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [PRIMARY AGREEMENT], [SOWS/ORDERS], [ANCILLARIES], [SCHEDULES], [EXHIBITS], and amendments.

Assignment: identify inconsistencies across the transaction document suite.

Perform a document-integrity and legal-work-product QA audit. Focus on: party names; defined terms; economics; dates; notice details; liability/indemnity allocation; term/termination; order of precedence; governing law; confidentiality; IP; deliverables; and signature blocks.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a cross-document inconsistency matrix ranked by severity and a list of proposed conforming edits..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `material-contracts-diligence-matrix`,
      title: `Material Contracts Diligence Matrix`,
      summary: `Review the contract set and extract only matters meeting the stated diligence standard.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CONTRACT SET], [DILIGENCE REQUEST LIST], [MATERIALITY THRESHOLD], and [TRANSACTION CONTEXT].

Assignment: review the contract set and extract only matters meeting the stated diligence standard.

Extract and normalize the relevant information. Focus on: change of control; assignment; consent; termination; exclusivity; non-compete; MFN; pricing changes; unusual indemnity/liability; IP ownership; data rights; minimum commitments; debt-like obligations; and uncured defaults.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a table: Contract | Counterparty | Key Term | Trigger/Risk | Section | Materiality Basis | Consent/Action | Follow-Up..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `entity-compliance-and-good-standing-audit`,
      title: `Entity Compliance and Good-Standing Audit`,
      summary: `Identify entity-maintenance deficiencies and transaction-readiness issues.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [ENTITY LIST], [FORMATION DOCS], [ANNUAL REPORTS], [GOOD-STANDING CERTIFICATES], [QUALIFICATION RECORDS], and [CLIENT RECORDS].

Assignment: identify entity-maintenance deficiencies and transaction-readiness issues.

Verify the work product against the source materials. Focus on: jurisdiction of formation; current legal name; status; foreign qualification; registered agent; annual filings; franchise taxes; assumed names; dissolved/inactive entities; and mismatches among records.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a status table and prioritized remediation list..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `private-offering-exemption-checklist`,
      title: `Private Offering Exemption Checklist`,
      summary: `Prepare a transaction checklist for the contemplated private securities offering.`,
      prompt: `You are transactional corporate counsel. You represent [ISSUER].

Use only the following materials unless expressly instructed otherwise: [OFFERING FACTS], [INVESTOR INFORMATION], [SECURITY TERMS], [PRIOR OFFERINGS], and [JURISDICTION].

Assignment: prepare a transaction checklist for the contemplated private securities offering.

Build an execution-ready checklist. Focus on: federal exemption elements; investor eligibility; offering integration; solicitation; bad-actor issues; disclosure requirements; Form D; state notice filings; legends; subscription representations; board approvals; and cap-table updates.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a source-linked checklist separating facts established, facts needed, filings, deadlines, and legal questions requiring securities-law research..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.

- Do not provide a legal conclusion on exemption availability unless every required factual element is established and the governing law has been verified.`,
    },
    {
      id: `disclosure-consistency-check`,
      title: `Disclosure Consistency Check`,
      summary: `Identify inconsistent or unsupported statements across disclosure materials.`,
      prompt: `You are transactional corporate counsel. You represent [ISSUER].

Use only the following materials unless expressly instructed otherwise: [BOARD MATERIALS], [INVESTOR DECK], [OFFERING MEMO/PPM], [WEBSITE/MARKETING MATERIALS], [FINANCIAL DATA], and [LEGAL DOCUMENTS].

Assignment: identify inconsistent or unsupported statements across disclosure materials.

Verify the work product against the source materials. Focus on: financial metrics; capitalization; customer/market claims; legal risks; IP ownership; material contracts; regulatory status; use of proceeds; projections; transaction terms; and dates.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a table: Statement/Topic | Source A | Source B | Conflict/Support Issue | Materiality | Required Correction/Verification..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `beneficial-ownership-and-control-rights-map`,
      title: `Beneficial Ownership and Control Rights Map`,
      summary: `Map ownership, voting control, board designation rights, and contingent ownership.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [CAP TABLE], [STOCKHOLDER AGREEMENTS], [VOTING AGREEMENTS], [PROXIES], [OPTION/WARRANT DATA], and [CONVERTIBLES].

Assignment: map ownership, voting control, board designation rights, and contingent ownership.

Build a normalized comparison matrix. Focus on: record ownership; beneficial ownership; voting agreements; proxies; board seats; conversion/exercise rights; transfer restrictions; and rights that change on specified thresholds.

Analyze each source document individually before comparing across documents. Preserve document-level attribution and do not blend materially different rights or obligations.

Return a person/entity-level matrix plus unresolved ownership questions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `executed-contract-obligations-tracker`,
      title: `Executed Contract Obligations Tracker`,
      summary: `Create an operational register of post-signing obligations for [CLIENT].`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [EXECUTED AGREEMENT SET].

Assignment: create an operational register of post-signing obligations for [CLIENT].

Extract and normalize the relevant information. Focus on: payment; delivery; reporting; notice; audit; insurance; certification; security/privacy; renewal; termination windows; consent; compliance; recordkeeping; and other recurring or event-driven obligations.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a table: Obligation | Responsible Party | Trigger | Due Date/Cadence | Notice Method | Evidence | Source | Internal Owner | Escalation..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `renewal-and-termination-calendar`,
      title: `Renewal and Termination Calendar`,
      summary: `Identify every renewal, expiration, non-renewal, termination, price-change, and notice deadline.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [EXECUTED CONTRACT SET].

Assignment: identify every renewal, expiration, non-renewal, termination, price-change, and notice deadline.

Extract and normalize the relevant information. Focus on: initial term; auto-renewal; notice windows; termination for convenience; termination for cause; cure periods; price notices; optional extensions; and post-termination obligations.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a chronological calendar with earliest action date, latest action date, notice method, consequence, and source..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `corporate-records-book-completeness-audit`,
      title: `Corporate Records Book Completeness Audit`,
      summary: `Identify missing corporate actions, inconsistent records, and items that may require ratification or cleanup.`,
      prompt: `You are transactional corporate counsel. You represent [COMPANY].

Use only the following materials unless expressly instructed otherwise: [MINUTE BOOK], [BOARD/STOCKHOLDER CONSENTS], [LEDGERS], [CHARTER/BYLAWS], [FILINGS], [CAP TABLE], and [MATERIAL TRANSACTION DOCUMENTS].

Assignment: identify missing corporate actions, inconsistent records, and items that may require ratification or cleanup.

Perform a document-integrity and legal-work-product QA audit. Focus on: formation; officer/director appointments; equity issuances; option grants; financing approvals; material contracts; acquisitions; annual actions; resignations; amendments; and ledger/cap-table consistency.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a chronological gap table: Event | Required Corporate Action | Evidence Found | Missing/Defect | Potential Remediation | Priority..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `signature-and-execution-audit`,
      title: `Signature and Execution Audit`,
      summary: `Confirm that each agreement was validly executed by the correct parties and signatories.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [FINAL AGREEMENT SET], [SIGNATURE PACKETS], [COUNTERPARTS], [ENTITY AUTHORITY DOCUMENTS], and [CLOSING CHECKLIST].

Assignment: confirm that each agreement was validly executed by the correct parties and signatories.

Verify the work product against the source materials. Focus on: party legal names; signature blocks; signatory titles; counterpart pages; dating; notarization/witness requirements; joinders; missing signatures; duplicate/inconsistent signatures; and authority evidence.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return an execution status table and list of curing actions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `negotiation-playbook-from-precedents`,
      title: `Negotiation Playbook from Precedents`,
      summary: `Build a reusable negotiation playbook for [CONTRACT TYPE].`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [EXECUTED PRECEDENTS], [PRIOR REDLINES], [INTERNAL GUIDANCE], and [APPROVED FORMS].

Assignment: build a reusable negotiation playbook for [CONTRACT TYPE].

Benchmark the current document against the supplied precedent set. Normalize for transaction-specific facts before treating language as a deviation. Focus on: recurring preferred positions; accepted fallbacks; rejected terms; escalation triggers; business rationales; factual conditions associated with exceptions; and representative language.

Separate: (1) consistent precedent positions, (2) acceptable variations, (3) true outliers, (4) transaction-specific provisions that should not be generalized, and (5) areas where the precedent set is too thin to support a conclusion.

Return a matrix: Issue | Preferred Position | Fallback A | Fallback B | Reject/Escalate Trigger | Rationale | Representative Precedent | Decision Owner..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `executive-contract-summary`,
      title: `Executive Contract Summary`,
      summary: `Prepare an executive summary for a business stakeholder who needs the practical deal, not a clause-by-clause digest.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [AGREEMENT], [SCHEDULES], and [CLIENT QUESTION].

Assignment: prepare an executive summary for a business stakeholder who needs the practical deal, not a clause-by-clause digest.

Extract and normalize the relevant information. Focus on: economics; term; obligations; exclusivity; liability; indemnity; termination; renewal; operational dependencies; data/IP; approvals; deadlines; and unusual provisions.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a one-page summary with: What We Agreed; What We Must Do; What Could Cost Us Money; Key Dates; Key Risks; Open Questions; source citations..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `board-approval-memo-from-operative-documents`,
      title: `Board Approval Memo from Operative Documents`,
      summary: `Prepare a source-backed memo identifying exactly what the board is being asked to approve.`,
      prompt: `You are transactional corporate counsel. You represent [COMPANY].

Use only the following materials unless expressly instructed otherwise: [TRANSACTION AGREEMENTS], [TERM SHEET], [BOARD MATERIALS], [FINANCIAL SUMMARY], and [DRAFT RESOLUTIONS].

Assignment: prepare a source-backed memo identifying exactly what the board is being asked to approve.

Verify the work product against the source materials. Focus on: transaction structure; economics; material obligations; conflicts; financing; conditions; termination rights; approvals; delegated authority; and open items.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a board approval memo plus an appendix mapping each proposed resolution to its supporting document provision..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `targeted-contract-law-research-memo`,
      title: `Targeted Contract-Law Research Memo`,
      summary: `Analyze how the specified contract provision is likely to be interpreted or enforced under the governing law.`,
      prompt: `You are transactional corporate counsel. You represent [CLIENT].

Use only the following materials unless expressly instructed otherwise: [AGREEMENT], [FACT PATTERN], [JURISDICTION], and [RESEARCH QUESTION].

Assignment: analyze how the specified contract provision is likely to be interpreted or enforced under the governing law.

Analyze the legal question and the transaction documents together. Focus on: the exact disputed wording; governing-law clause; relevant statutory rules; controlling cases; treatment of comparable language; factual distinctions; and unresolved questions.

If external legal research is permitted, use primary authorities first and distinguish binding from persuasive authority. Do not cite an authority you have not actually reviewed. Separate document interpretation from external-law conclusions.

Return a concise memo: Question Presented; Contract Text; Governing Law; Primary Authorities; Analysis; Counterarguments; Conclusion; Practical Drafting/Negotiation Implications..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
  ],
};
