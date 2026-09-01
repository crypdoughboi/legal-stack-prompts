import type { PromptCategory } from "@/lib/types";

export const funds: PromptCategory = {
  id: `funds`,
  label: `Investment Funds`,
  shortLabel: `FUNDS`,
  topics: [
    {
      label: `Formation, Offering & First Close`,
      promptIds: [`lpa-terms`, `ppm-consistency`, `subscription-review`, `fund-formation`, `jadwa-private-credit`, `lpa-manager-side-review`, `investor-side-lpa-review`, `lpa-draft-from-prior-fund-and-term-sheet`, `prior-fund-vs-new-fund-lpa-comparison`, `key-person-provision-analysis`, `removal-and-no-fault-rights-analysis`, `lpa-defined-term-and-cross-reference-audit`, `ppm-to-lpa-consistency-audit`, `ppm-risk-factor-gap-review`, `subscription-agreement-review`, `investor-subscription-package-verification`, `subscription-agreement-change-tracker`],
    },
    {
      label: `Investor Terms & Side Letters`,
      promptIds: [`side-letter-obligations`, `mfn-analysis`, `manager-side-side-letter-review`, `investor-side-side-letter-request-review`, `cross-investor-side-letter-matrix`, `mfn-eligibility-analysis`, `mfn-election-package-verification`, `side-letter-clause-draft-from-precedent`, `side-letter-operational-obligations-register`, `lpa-to-side-letter-conflict-audit`],
    },
    {
      label: `Special Vehicles & Manager Transitions`,
      promptIds: [`manrre-reit-conversion`],
    },
    {
      label: `GP & Management Company Documents`,
      promptIds: [`management-agreement-review`, `gp-agreement-review`, `management-company-agreement-review`, `gp-manager-document-suite-consistency-audit`],
    },
    {
      label: `Investor Negotiation & Diligence`,
      promptIds: [`investor-ddq-response-drafting-with-source-controls`, `investor-request-to-negotiation-issues-list`, `investor-negotiation-call-sheet`, `investor-diligence-request-tracker`, `most-favored-investor-precedent-impact-review`],
    },
    {
      label: `Regulatory & SEC`,
      promptIds: [`investment-adviser-regulatory-obligations-map`, `fund-marketing-rule-review`, `form-adv-consistency-review`, `conflicts-inventory-builder`, `regulatory-change-impact-assessment`],
    },
    {
      label: `Marketing & Investor Communications`,
      promptIds: [`fund-terms-comparison-for-investor`, `investor-update-source-verification`, `investor-notice-drafting-from-governing-documents`],
    },
    {
      label: `Economics, Governance & Conflicts`,
      promptIds: [`fees-and-expenses-allocation-audit`, `waterfall-and-carried-interest-specification`, `management-fee-calculation-audit`, `continuation-vehicle-conflict-review`, `key-governance-rights-matrix`],
    },
    {
      label: `Closing & Ongoing Compliance`,
      promptIds: [`fund-closing-checklist`, `investor-closing-readiness-matrix`, `fund-compliance-obligations-tracker`],
    },
  ],
  prompts: [
    {
      id: `lpa-terms`,
      title: `LPA terms matrix`,
      summary: `Extract core fund economics and governance terms.`,
      prompt: `Review the attached limited partnership agreement and amendments. Create a fund terms matrix covering commitments, closings, investment period, term, management fee, offsets, carried interest, waterfall, recycling, GP commitment, borrowing, investment restrictions, key person, removal, no-fault rights, conflicts, valuations, reporting, transfers, defaults, excuse rights, and LPAC matters. Cite every provision and flag terms that depend on a defined term, schedule, side letter, or missing document.`,
    },
    {
      id: `side-letter-obligations`,
      title: `Side letter obligations matrix`,
      summary: `Turn negotiated rights into an operational compliance tool.`,
      prompt: `Review the attached investor side letters and create an obligations matrix. For each obligation identify the investor, topic, full obligation, trigger, timing, responsible internal team, evidence of compliance, expiration, confidentiality treatment, MFN eligibility, and exact citation. Consolidate identical obligations but preserve investor-specific differences. Flag provisions that conflict with the LPA, require consent, depend on investor status, or create an operational burden.`,
    },
    {
      id: `mfn-analysis`,
      title: `MFN election analysis`,
      summary: `Determine which side-letter rights are electable and why.`,
      prompt: `Using the attached LPA, side letters, MFN notice, and investor data, create an MFN election matrix for [investor]. List each offered provision, source investor, eligibility threshold, exclusions, election deadline, interaction with existing rights, and recommendation. Cite the controlling language and state every factual assumption. Flag packages or linked provisions that cannot be elected separately and provisions requiring tax, regulatory, or ERISA specialist review.`,
    },
    {
      id: `ppm-consistency`,
      title: `PPM and LPA consistency check`,
      summary: `Find mismatches across offering and governing documents.`,
      prompt: `Compare the attached private placement memorandum, LPA, subscription agreement, and marketing materials. Build a table of material economic, risk, strategy, governance, conflicts, liquidity, valuation, and investor-eligibility statements. Cite each document, identify inconsistencies or omissions, and propose which document or disclosure should be updated. Distinguish legal conflicts from differences in level of detail.`,
    },
    {
      id: `subscription-review`,
      title: `Subscription document review`,
      summary: `Check completeness, eligibility, elections, and follow-ups.`,
      prompt: `Review the attached subscription package for [investor]. Prepare a completeness checklist covering signatures, entity information, beneficial ownership, tax forms, investor qualifications, ERISA status, AML/KYC materials, representations, elections, powers of attorney, and requested side-letter terms. Cite the relevant page or section, identify missing or inconsistent responses, and draft a concise follow-up list for the investor or administrator. Do not infer eligibility from incomplete data.`,
    },
    {
      id: `fund-formation`,
      title: `Fund formation document checklist`,
      summary: `Create the formation-to-first-close workplan.`,
      prompt: `Build a fund formation and first-closing checklist for [fund name and strategy] using the attached term sheet and structuring notes. Include entity formations, LPA, PPM, subscription materials, management and GP arrangements, seed or warehousing documents, service-provider agreements, regulatory filings, tax steps, bank accounts, investor onboarding, side letters, approvals, and closing deliverables. Assign an owner, dependency, target date, and status placeholder to each item. Flag jurisdiction-specific steps requiring specialist confirmation.`,
    },
    {
      id: `jadwa-private-credit`,
      title: `GCC blind-pool private credit launch`,
      summary: `Coordinate onshore-offshore structure, first close, and deployment into fintech credit.`,
      matterInspired: true,
      prompt: `Act as fund counsel launching a SAR [target] blind-pool GCC private credit fund with an initial close of SAR [amount] and an onshore-offshore structure. Review the structure chart, LPA or fund rules, PPM, subscription documents, management agreement, side letters, regulatory approvals, tax advice, pipeline, and first investments. Create: (1) an entity and jurisdiction map; (2) a formation and first-close checklist; (3) an investor eligibility, KYC, and subscription tracker; (4) an investment-authority matrix covering origination, underwriting, concentration, conflicts, leverage, valuation, and defaults; and (5) a deployment checklist for fintech-platform investments. Reconcile currency, Sharia or regulatory constraints if applicable, and onshore-offshore cash movements. Cite supplied authority and route jurisdiction-specific conclusions to local counsel.`,
    },
    {
      id: `manrre-reit-conversion`,
      title: `REIT conversion and manager transition`,
      summary: `Control a Sharia-compliant conversion, strategic investment, and change of manager.`,
      matterInspired: true,
      prompt: `Review a strategic investment in an industrial and logistics REIT that will convert into a Sharia-compliant investment vehicle and appoint the investor or its affiliate as fund manager at closing. Using the investment agreement, constitutional documents, offering materials, management agreement, financing documents, asset schedule, investor approvals, regulatory filings, and Sharia materials, prepare a conversion-and-closing matrix. Cover capital issuance or transfer, valuation, governance, reserved matters, conflicts, manager appointment and removal, fee changes, investor consents, financing covenants, asset compliance, cleansing or transition steps, disclosures, conditions precedent, and post-closing reporting. Cite every source, flag legacy provisions inconsistent with the new structure, and identify specialist questions for regulatory, tax, and Sharia advisers.`,
    },
    {
      id: `lpa-manager-side-review`,
      title: `LPA Manager-Side Review`,
      summary: `Review the LPA for consistency with the intended fund economics, governance, and operational model.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [LPA], [TERM SHEET], [PRIOR FUND LPA], [MANAGER PLAYBOOK], and [CLIENT INSTRUCTIONS].

Assignment: review the LPA for consistency with the intended fund economics, governance, and operational model.

Review the document as a connected transaction document, not as isolated clauses. Focus on: commitments; closings; investment period; term/extensions; management fee; carried interest; distributions; recycling; borrowing; investment restrictions; key person; removal; GP giveback/clawback; LPAC; conflicts; transfers; defaults; excuse rights; amendments; reporting; and dissolution.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a manager issues matrix plus a list of terms requiring tax/regulatory/finance specialist confirmation..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investor-side-lpa-review`,
      title: `Investor-Side LPA Review`,
      summary: `Review the fund documents from the LP's perspective.`,
      prompt: `You are transactional corporate counsel. You represent [INVESTOR].

Use only the following materials unless expressly instructed otherwise: [LPA], [PPM], [SUBSCRIPTION AGREEMENT], [INVESTOR POLICY], and [SIDE LETTER REQUESTS].

Assignment: review the fund documents from the LP's perspective.

Review the document as a connected transaction document, not as isolated clauses. Focus on: economics; investment strategy/restrictions; term; key person; GP removal; no-fault divorce; extensions; recycling; borrowing; conflicts; affiliate transactions; valuation; reporting; transfers; default remedies; excuse/exclusion; confidentiality; and amendments.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a High/Medium/Low investor issues list with requested side-letter or LPA protection where appropriate..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `lpa-draft-from-prior-fund-and-term-sheet`,
      title: `LPA Draft from Prior Fund and Term Sheet`,
      summary: `Prepare a first draft of the new fund LPA using the prior fund as the drafting baseline.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [PRIOR FUND LPA], [CURRENT FUND TERM SHEET], [CURRENT STRUCTURE MEMO], [REGULATORY/TAX INSTRUCTIONS], and [CLIENT INSTRUCTIONS].

Assignment: prepare a first draft of the new fund LPA using the prior fund as the drafting baseline.

Draft using the supplied precedent and approved business/legal terms as the controlling source. Focus on: fund structure; closings; investment period; term; fees; carry; distributions; recycling; borrowing; restrictions; key person; removal; LPAC; conflicts; defaults; transfers; amendments; and dissolution.

Do not introduce new economics, rights, obligations, standards, remedies, qualifiers, or defined terms unless required to implement the instructions. Preserve the precedent's drafting conventions, defined-term architecture, cross-reference style, and internal logic.

After drafting, run a consequential-effects check for definitions, cross-references, schedules, exhibits, notice provisions, closing conditions, remedies, and any other provisions affected by the change.

Return a clean first draft plus a change log identifying every intentional deviation from the prior fund..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `prior-fund-vs-new-fund-lpa-comparison`,
      title: `Prior Fund vs New Fund LPA Comparison`,
      summary: `Identify substantive changes between fund vintages and whether each is intentional.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [PRIOR FUND LPA], [NEW FUND LPA DRAFT], [TERM SHEET], and [CLIENT INSTRUCTIONS].

Assignment: identify substantive changes between fund vintages and whether each is intentional.

Compare the materials substantively, not merely textually. Focus on: economics; investment period; term; fees; carry; recycling; borrowing; key person; removal; LPAC; conflicts; transfers; excuse rights; defaults; reporting; and amendments.

Group related edits into negotiation issues. Identify new issues, resolved issues, hidden consequential changes, and changes made outside previously open points.

Return a vintage-change matrix with prior term, new term, rationale if known, investor impact, operational impact, and open question..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `key-person-provision-analysis`,
      title: `Key Person Provision Analysis`,
      summary: `Analyze key-person triggers, consequences, cure/restart mechanics, and side-letter overlays.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER/INVESTOR].

Use only the following materials unless expressly instructed otherwise: [LPA], [SIDE LETTERS], [KEY PERSON BIO/ROLE INFO], and [CLIENT INSTRUCTIONS].

Assignment: analyze key-person triggers, consequences, cure/restart mechanics, and side-letter overlays.

Review the document as a connected transaction document, not as isolated clauses. Focus on: named persons; time commitment; departures/disability; trigger threshold; suspension; permitted investments during suspension; LPAC/LP vote; replacement; restart; termination of investment period; and investor-specific rights.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a key-person scenario matrix with trigger, consequence, cure, vote, source, and side-letter variation..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `removal-and-no-fault-rights-analysis`,
      title: `Removal and No-Fault Rights Analysis`,
      summary: `Map GP removal, cause, no-fault divorce, suspension, and related economic consequences.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER/INVESTOR].

Use only the following materials unless expressly instructed otherwise: [LPA], [SIDE LETTERS], and [INVESTOR REQUESTS].

Assignment: map GP removal, cause, no-fault divorce, suspension, and related economic consequences.

Review the document as a connected transaction document, not as isolated clauses. Focus on: cause definition; vote thresholds; notice/cure; removal for cause; no-fault removal; investment period termination; successor GP; carried interest consequences; management fee; clawback; indemnification; and transfer of control.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a rights-by-scenario matrix and negotiation issues list..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `lpa-defined-term-and-cross-reference-audit`,
      title: `LPA Defined-Term and Cross-Reference Audit`,
      summary: `Audit the LPA's defined terms, cross-references, schedules, and amendment effects.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [LPA], [ANNEXES/SCHEDULES], [SIDE LETTER FORM if incorporated], and amendments.

Assignment: audit the LPA's defined terms, cross-references, schedules, and amendment effects.

Perform a document-integrity and legal-work-product QA audit. Focus on: undefined/unused terms; inconsistent variants; waterfall definitions; commitment/percentage definitions; key person; cause; excuse; affiliate; investment period; term; and stale cross-references.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a correction table with substantive effect and severity..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `ppm-to-lpa-consistency-audit`,
      title: `PPM to LPA Consistency Audit`,
      summary: `Identify inconsistencies between the marketing disclosure and the governing fund terms.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [PPM], [LPA], [TERM SHEET], and [SUBSCRIPTION AGREEMENT].

Assignment: identify inconsistencies between the marketing disclosure and the governing fund terms.

Perform a document-integrity and legal-work-product QA audit. Focus on: strategy; term; fees; carry; expenses; leverage; recycling; conflicts; valuation; risk factors; key person; removal; transfers; investor eligibility; tax/regulatory disclosures; and service providers.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a discrepancy table with PPM statement, LPA term, materiality, and required correction owner..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `ppm-risk-factor-gap-review`,
      title: `PPM Risk Factor Gap Review`,
      summary: `Identify risk disclosures that may be missing, stale, or inconsistent with the current fund.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [PPM], [CURRENT STRATEGY], [STRUCTURE MEMO], [REGULATORY/COMPLIANCE INPUT], and [APPROVED PRIOR PPM].

Assignment: identify risk disclosures that may be missing, stale, or inconsistent with the current fund.

Benchmark the current document against the supplied precedent set. Normalize for transaction-specific facts before treating language as a deviation. Focus on: investment strategy; leverage; concentration; liquidity; valuation; conflicts; affiliates; cybersecurity; AI/data use if relevant; regulatory; tax; sanctions; side letters; key person; and market-specific risks.

Separate: (1) consistent precedent positions, (2) acceptable variations, (3) true outliers, (4) transaction-specific provisions that should not be generalized, and (5) areas where the precedent set is too thin to support a conclusion.

Return a risk-factor gap matrix distinguishing prior-fund boilerplate from current-fund-specific risks..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `subscription-agreement-review`,
      title: `Subscription Agreement Review`,
      summary: `Review subscription terms and investor representations for completeness and consistency.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER/INVESTOR].

Use only the following materials unless expressly instructed otherwise: [SUBSCRIPTION AGREEMENT], [LPA], [PPM], [INVESTOR INFORMATION], and [CLIENT PLAYBOOK].

Assignment: review subscription terms and investor representations for completeness and consistency.

Review the document as a connected transaction document, not as isolated clauses. Focus on: commitment; investor identity; authority; ERISA; tax; securities-law status; AML/KYC; beneficial ownership; sanctions; FOIA; confidentiality; electronic delivery; power of attorney; funding mechanics; and side-letter linkage.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return an issues list plus a missing-information/KYC checklist..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investor-subscription-package-verification`,
      title: `Investor Subscription Package Verification`,
      summary: `Verify whether the investor is ready for admission/closing.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [EXECUTED SUBSCRIPTION], [KYC/AML MATERIALS], [TAX FORMS], [SIDE LETTER], [COMMITMENT RECORD], and [CLOSING LIST].

Assignment: verify whether the investor is ready for admission/closing.

Verify the work product against the source materials. Focus on: signature/execution; entity name; commitment; tax form; beneficial owners; KYC/AML; accreditation/qualified purchaser status if relevant; ERISA; side letter; wire instructions; and unresolved representations.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a closing-readiness table with missing item, source, owner, and status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `subscription-agreement-change-tracker`,
      title: `Subscription Agreement Change Tracker`,
      summary: `Identify substantive changes in the investor subscription package.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [PRIOR FORM], [CURRENT SUBSCRIPTION FORM], [LPA/PPM CHANGES], and [COMPLIANCE INSTRUCTIONS].

Assignment: identify substantive changes in the investor subscription package.

Compare the materials substantively, not merely textually. Focus on: eligibility; representations; AML/KYC; tax; ERISA; sanctions; data/privacy; electronic signatures; power of attorney; side-letter linkage; and notices.

Group related edits into negotiation issues. Identify new issues, resolved issues, hidden consequential changes, and changes made outside previously open points.

Return a change matrix with investor impact, operational impact, and reason/owner if known..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `manager-side-side-letter-review`,
      title: `Manager-Side Side Letter Review`,
      summary: `Review the entire side letter from the manager's perspective.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [SIDE LETTER], [LPA], [PPM], [SUBSCRIPTION DOCUMENTS], [SIDE LETTER PLAYBOOK], and [PRECEDENTS].

Assignment: review the entire side letter from the manager's perspective.

Review the document as a connected transaction document, not as isolated clauses. Focus on: economics; liquidity; MFN; capacity; reporting; transparency; excuse/exclusion; investment restrictions; co-invest; LPAC/advisory rights; transfer; confidentiality; tax/regulatory accommodations; notices; consent rights; and operational obligations.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return an Executive Summary, Key Terms Matrix, Operational Obligation Register, MFN Analysis, Potential Governing-Document Conflicts, Missing/Not Found, and Human Review Questions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investor-side-side-letter-request-review`,
      title: `Investor-Side Side Letter Request Review`,
      summary: `Assess whether the requested side-letter protections adequately address the investor's policy and diligence concerns.`,
      prompt: `You are transactional corporate counsel. You represent [INVESTOR].

Use only the following materials unless expressly instructed otherwise: [INVESTOR SIDE LETTER REQUEST], [LPA], [PPM], [INVESTOR POLICY], and [COMPARABLE INVESTOR TERMS].

Assignment: assess whether the requested side-letter protections adequately address the investor's policy and diligence concerns.

Review the document as a connected transaction document, not as isolated clauses. Focus on: fee/economic terms; reporting; transparency; excuse; investment restrictions; ESG; co-invest; LPAC; MFN; transfer; confidentiality/FOIA; tax; regulatory; sovereign immunity; and notices.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return an investor request matrix with requested right, current fund treatment, gap, proposed language, fallback, and priority..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `cross-investor-side-letter-matrix`,
      title: `Cross-Investor Side Letter Matrix`,
      summary: `Build a normalized side-letter matrix while preserving investor-level source attribution.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: all executed [SIDE LETTERS] for [FUND/VEHICLE], plus [INVESTOR/COMMITMENT DATA].

Assignment: build a normalized side-letter matrix while preserving investor-level source attribution.

Build a normalized comparison matrix. Focus on: economics; fee breaks; liquidity; MFN; capacity; reporting; transparency; investment/excuse restrictions; ESG; co-investment; LPAC/advisory rights; transfer; confidentiality; tax/regulatory accommodations; notices; consent rights; and recurring obligations.

Analyze each source document individually before comparing across documents. Preserve document-level attribution and do not blend materially different rights or obligations.

Return a matrix plus separate MFN Exposure, Operational Burden, Potential Precedent, and Human Review tables..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `mfn-eligibility-analysis`,
      title: `MFN Eligibility Analysis`,
      summary: `Determine which rights may be available to the investor under its MFN provision.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER/INVESTOR].

Use only the following materials unless expressly instructed otherwise: [INVESTOR SIDE LETTER], [ALL OTHER SIDE LETTERS], [LPA], [MFN ELECTION MATERIALS], and [COMMITMENT DATA].

Assignment: determine which rights may be available to the investor under its MFN provision.

Review the document as a connected transaction document, not as isolated clauses. Focus on: commitment thresholds; investor type restrictions; timing; excluded categories; bespoke tax/regulatory provisions; LPAC/co-invest; economics; reporting; election mechanics; notice deadlines; and sunset provisions.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a right-by-right MFN table: Source Investor | Right | Eligible? | Exclusion/Threshold | Election Requirement | Deadline | Citation | Open Question..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `mfn-election-package-verification`,
      title: `MFN Election Package Verification`,
      summary: `Verify that the MFN election package accurately describes available rights and eligibility.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [MFN ELECTION NOTICE], [OFFERED RIGHTS SCHEDULE], [INVESTOR SIDE LETTER], [COMMITMENT DATA], and [UNDERLYING SIDE LETTERS].

Assignment: verify that the MFN election package accurately describes available rights and eligibility.

Verify the work product against the source materials. Focus on: source right; exact wording; eligibility; exclusions; commitment threshold; investor-type conditions; election format; deadline; effective date; and conflicts with existing rights.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a verification table plus a list of rights requiring legal judgment or manager approval..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `side-letter-clause-draft-from-precedent`,
      title: `Side Letter Clause Draft from Precedent`,
      summary: `Draft a side-letter provision implementing the approved business/legal position.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [INVESTOR REQUEST], [SIDE LETTER PLAYBOOK], [APPROVED PRECEDENTS], [LPA], and [CURRENT SIDE LETTER FORM].

Assignment: draft a side-letter provision implementing the approved business/legal position.

Draft using the supplied precedent and approved business/legal terms as the controlling source. Focus on: exact right requested; conditions; thresholds; duration; reporting mechanics; confidentiality; regulatory/tax qualifiers; MFN exposure; operational owner; and consistency with the LPA.

Do not introduce new economics, rights, obligations, standards, remedies, qualifiers, or defined terms unless required to implement the instructions. Preserve the precedent's drafting conventions, defined-term architecture, cross-reference style, and internal logic.

After drafting, run a consequential-effects check for definitions, cross-references, schedules, exhibits, notice provisions, closing conditions, remedies, and any other provisions affected by the change.

Return proposed clause language plus a precedent/MFN impact note and open implementation questions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `side-letter-operational-obligations-register`,
      title: `Side Letter Operational Obligations Register`,
      summary: `Convert investor-specific obligations into an operational compliance register.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [EXECUTED SIDE LETTERS], [LPA], and [INVESTOR DATA].

Assignment: convert investor-specific obligations into an operational compliance register.

Extract and normalize the relevant information. Focus on: reporting; notices; consent; excuse; investment restrictions; ESG; tax documents; regulatory certifications; co-invest; LPAC; fee arrangements; transfers; confidentiality; and recurring deadlines.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a register: Investor | Obligation | Trigger/Cadence | Due Date | Source | Internal Owner | Evidence | Escalation | Status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `lpa-to-side-letter-conflict-audit`,
      title: `LPA-to-Side-Letter Conflict Audit`,
      summary: `Identify terms in the side letter that modify, override, conflict with, or depend on the governing documents.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [LPA], [PPM], [SUBSCRIPTION AGREEMENT], and [SIDE LETTER].

Assignment: identify terms in the side letter that modify, override, conflict with, or depend on the governing documents.

Perform a document-integrity and legal-work-product QA audit. Focus on: economic terms; reporting; transfers; excuse rights; defaults; confidentiality; MFN; LPAC; tax/regulatory rights; amendments; and order-of-precedence language.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a conflict matrix: Side Letter Term | Governing Provision | Conflict/Modification | Effect | Drafting Fix/Clarification | Human Review..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `management-agreement-review`,
      title: `Management Agreement Review`,
      summary: `Review the manager's authority, duties, fees, delegation, and termination rights.`,
      prompt: `You are transactional corporate counsel. You represent [MANAGER/FUND].

Use only the following materials unless expressly instructed otherwise: [INVESTMENT MANAGEMENT AGREEMENT], [LPA], [FUND STRUCTURE], [FEE TERMS], and [CLIENT INSTRUCTIONS].

Assignment: review the manager's authority, duties, fees, delegation, and termination rights.

Review the document as a connected transaction document, not as isolated clauses. Focus on: investment authority; standard of care; delegation; affiliates; fees/expenses; valuation; reporting; compliance; indemnification; limitation of liability; confidentiality; records; termination; and transition.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return an authority/economics/risk matrix and cross-document consistency issues..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `gp-agreement-review`,
      title: `GP Agreement Review`,
      summary: `Review governance and economics at the GP entity level.`,
      prompt: `You are transactional corporate counsel. You represent [GP ENTITY/MEMBER].

Use only the following materials unless expressly instructed otherwise: [GP LLC/LP AGREEMENT], [LPA], [CARRIED INTEREST PLAN], [OWNERSHIP DATA], and [CLIENT INSTRUCTIONS].

Assignment: review governance and economics at the GP entity level.

Review the document as a connected transaction document, not as isolated clauses. Focus on: ownership; voting; capital; distributions; carry allocation; vesting; forfeiture; transfers; death/disability; withdrawal; removal; tax distributions; clawback funding; restrictive covenants; and dissolution.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a member/partner rights matrix and list of conflicts with fund-level documents..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `management-company-agreement-review`,
      title: `Management Company Agreement Review`,
      summary: `Analyze management-company governance, ownership, and economics.`,
      prompt: `You are transactional corporate counsel. You represent [MANAGEMENT COMPANY/MEMBER].

Use only the following materials unless expressly instructed otherwise: [MANAGEMENT COMPANY AGREEMENT], [EMPLOYMENT/PARTNER AGREEMENTS], [FEE/EXPENSE ARRANGEMENTS], and [OWNERSHIP DATA].

Assignment: analyze management-company governance, ownership, and economics.

Review the document as a connected transaction document, not as isolated clauses. Focus on: equity; voting; management; fee income; expenses; compensation; distributions; buy-sell; transfers; departures; restrictive covenants; IP; confidentiality; and dissolution.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a governance/economics matrix and departure-scenario analysis..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `gp-manager-document-suite-consistency-audit`,
      title: `GP / Manager Document Suite Consistency Audit`,
      summary: `Identify inconsistencies across the fund sponsor document suite.`,
      prompt: `You are transactional corporate counsel. You represent [SPONSOR].

Use only the following materials unless expressly instructed otherwise: [LPA], [GP AGREEMENT], [MANAGEMENT AGREEMENT], [MANAGEMENT COMPANY AGREEMENT], [CARRY PLAN], and [EMPLOYMENT/PARTNER DOCS].

Assignment: identify inconsistencies across the fund sponsor document suite.

Perform a document-integrity and legal-work-product QA audit. Focus on: management authority; fee rights; expense allocation; carry; governance; key person; removal; indemnification; conflicts; transfers; departures; and dissolution.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return a cross-document consistency matrix and prioritized conforming changes..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investor-ddq-response-drafting-with-source-controls`,
      title: `Investor DDQ Response Drafting with Source Controls`,
      summary: `Draft responses using only approved and current sources.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [INVESTOR/ILPA DDQ], [APPROVED ANSWER LIBRARY], [CURRENT LPA/PPM], [SIDE LETTERS], [POLICIES], [DATA ROOM], and [FINANCE DATA].

Assignment: draft responses using only approved and current sources.

Verify the work product against the source materials. Focus on: source hierarchy; approval date; calculations; investor-specific exceptions; conflicts among sources; legal/compliance representations; and unsupported questions.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return the draft DDQ plus a verification table: Question | Draft Answer | Source | Approval Status | Conflict | Calculation Required | Compliance Review | Open Item..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investor-request-to-negotiation-issues-list`,
      title: `Investor Request to Negotiation Issues List`,
      summary: `Turn investor comments into a call-ready negotiation issues list.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [INVESTOR COMMENTS], [LPA/PPM], [SIDE LETTER REQUEST], [PLAYBOOK], and [PRIOR INVESTOR TERMS].

Assignment: turn investor comments into a call-ready negotiation issues list.

Extract and normalize the relevant information. Focus on: economics; governance; key person/removal; reporting; transparency; restrictions; excuse; transfers; MFN; co-invest; tax/regulatory accommodations; confidentiality; and operational asks.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a prioritized table with investor ask, current fund term, precedent position, manager preferred response, fallback, and approval owner..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investor-negotiation-call-sheet`,
      title: `Investor Negotiation Call Sheet`,
      summary: `Prepare the next investor negotiation call sheet.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [OPEN ISSUES], [LATEST SIDE LETTER/LPA MARKUP], [INVESTOR PROFILE], [COMMITMENT SIZE], [PLAYBOOK], and [PRECEDENTS].

Assignment: prepare the next investor negotiation call sheet.

Prepare a negotiation or decision strategy. Focus on: highest-value/precedent-sensitive issues; preferred position; fallback; MFN implications; operational burden; strongest rationale; package trades; and internal approval owner.

For each issue, state the current position, preferred outcome, acceptable fallback, walk-away/escalation point if supported, business rationale, likely counterparty argument, possible package trade, and client decision owner.

Return a one-page prioritized call sheet plus items requiring IC/COO/Compliance approval..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investor-diligence-request-tracker`,
      title: `Investor Diligence Request Tracker`,
      summary: `Track investor diligence requests and source-approved responses.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [INVESTOR DDQ], [FOLLOW-UP REQUESTS], [DATA ROOM], [APPROVED MATERIALS], and [INTERNAL OWNERS].

Assignment: track investor diligence requests and source-approved responses.

Build an execution-ready checklist. Focus on: legal; compliance; performance; risk; operations; cybersecurity; ESG; tax; portfolio; valuation; service providers; and governance requests.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a tracker: Request | Investor | Category | Source/Owner | Draft Response | Approval | Deadline | Status | Open Issue..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `most-favored-investor-precedent-impact-review`,
      title: `Most-Favored Investor Precedent Impact Review`,
      summary: `Assess whether granting the proposed concession creates undesirable precedent or MFN exposure.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [PROPOSED INVESTOR CONCESSION], [HISTORICAL SIDE LETTERS], [CURRENT MFN TERMS], [COMMITMENT DATA], and [PLAYBOOK].

Assignment: assess whether granting the proposed concession creates undesirable precedent or MFN exposure.

Benchmark the current document against the supplied precedent set. Normalize for transaction-specific facts before treating language as a deviation. Focus on: frequency; investor size/type; prior conditions; economic/operational burden; MFN eligibility; policy consistency; and whether the concession should be narrowed or conditioned.

Separate: (1) consistent precedent positions, (2) acceptable variations, (3) true outliers, (4) transaction-specific provisions that should not be generalized, and (5) areas where the precedent set is too thin to support a conclusion.

Return a precedent-impact memo with comparable terms, MFN exposure, operational impact, and recommended drafting guardrails..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investment-adviser-regulatory-obligations-map`,
      title: `Investment Adviser Regulatory Obligations Map`,
      summary: `Identify the regulatory framework and recurring obligations relevant to the manager and fund structure.`,
      prompt: `You are transactional corporate counsel. You represent [MANAGER].

Use only the following materials unless expressly instructed otherwise: [MANAGER STRUCTURE], [AUM/CLIENT DATA], [FUND STRATEGY], [REGISTRATION STATUS], [POLICIES], and [JURISDICTION].

Assignment: identify the regulatory framework and recurring obligations relevant to the manager and fund structure.

Analyze the legal question and the transaction documents together. Focus on: registration/exempt reporting adviser status; Form ADV; books and records; marketing; custody; code of ethics; pay-to-play; political contributions; personal trading; valuation; compliance program; and applicable private-fund rules.

If external legal research is permitted, use primary authorities first and distinguish binding from persuasive authority. Do not cite an authority you have not actually reviewed. Separate document interpretation from external-law conclusions.

Return a source-linked obligations matrix separating confirmed facts, legal conclusions, recurring filings, policies, and open questions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `fund-marketing-rule-review`,
      title: `Fund Marketing Rule Review`,
      summary: `Review fund marketing materials for source support and compliance risks.`,
      prompt: `You are transactional corporate counsel. You represent [MANAGER].

Use only the following materials unless expressly instructed otherwise: [PITCH DECK], [TEAR SHEETS], [WEBSITE], [PERFORMANCE DATA], [SUBSTANTIATION FILE], and [COMPLIANCE POLICY].

Assignment: review fund marketing materials for source support and compliance risks.

Verify the work product against the source materials. Focus on: performance; hypothetical/backtested results; extracted performance; testimonials/endorsements; awards/rankings; case studies; gross/net presentation; cherry-picking; material assumptions; and required disclosures.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a claim-by-claim substantiation table with source, disclosure, compliance issue, and required correction/approval..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `form-adv-consistency-review`,
      title: `Form ADV Consistency Review`,
      summary: `Identify inconsistent or stale disclosures across regulatory filings and fund documents.`,
      prompt: `You are transactional corporate counsel. You represent [MANAGER].

Use only the following materials unless expressly instructed otherwise: [FORM ADV PART 1], [FORM ADV PART 2], [LPA/PPM], [POLICIES], [ORGANIZATIONAL CHART], and [BUSINESS PRACTICES].

Assignment: identify inconsistent or stale disclosures across regulatory filings and fund documents.

Verify the work product against the source materials. Focus on: ownership; affiliates; AUM; business activities; fees; conflicts; disciplinary events; custody; brokerage; soft dollars; valuation; personal trading; private funds; and service providers.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a discrepancy table with source, current fact, filing statement, materiality, and action owner..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `conflicts-inventory-builder`,
      title: `Conflicts Inventory Builder`,
      summary: `Build a practical conflicts inventory for legal/compliance review.`,
      prompt: `You are transactional corporate counsel. You represent [MANAGER].

Use only the following materials unless expressly instructed otherwise: [LPA/PPM], [SIDE LETTERS], [MANAGER POLICIES], [AFFILIATE ARRANGEMENTS], [CO-INVEST PRACTICES], and [PORTFOLIO STRUCTURE].

Assignment: build a practical conflicts inventory for legal/compliance review.

Extract and normalize the relevant information. Focus on: allocation of opportunities; co-investments; cross trades; continuation funds; warehoused investments; affiliates; service providers; fees/expenses; valuation; personal investments; information barriers; and investor-specific rights.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a conflicts register with source, affected parties, mitigation, disclosure, approval process, and monitoring owner..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `regulatory-change-impact-assessment`,
      title: `Regulatory Change Impact Assessment`,
      summary: `Assess the impact of the specified regulatory development on the fund complex.`,
      prompt: `You are transactional corporate counsel. You represent [MANAGER].

Use only the following materials unless expressly instructed otherwise: [NEW RULE/RELEASE/ENFORCEMENT ACTION], [CURRENT LPA/PPM], [POLICIES], [SIDE LETTERS], and [OPERATING PRACTICES].

Assignment: assess the impact of the specified regulatory development on the fund complex.

Analyze the legal question and the transaction documents together. Focus on: effective/compliance dates; affected advisers/funds; new obligations; disclosures; contracts; policies; reporting; recordkeeping; investor communications; and implementation dependencies.

If external legal research is permitted, use primary authorities first and distinguish binding from persuasive authority. Do not cite an authority you have not actually reviewed. Separate document interpretation from external-law conclusions.

Return a memo: Rule Summary; Applicability; Current-State Gap; Required Document Changes; Policy/Process Changes; Owner; Deadline; Open Legal Questions..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `fund-terms-comparison-for-investor`,
      title: `Fund Terms Comparison for Investor`,
      summary: `Compare two fund offerings from the investor's perspective.`,
      prompt: `You are transactional corporate counsel. You represent [INVESTOR].

Use only the following materials unless expressly instructed otherwise: [FUND A LPA/PPM], [FUND B LPA/PPM], [SIDE LETTERS if relevant], and [INVESTOR PRIORITIES].

Assignment: compare two fund offerings from the investor's perspective.

Compare the materials substantively, not merely textually. Focus on: strategy; term; fees; carry; recycling; leverage; governance; key person; removal; LPAC; conflicts; reporting; liquidity; transfer; side-letter/MFN; and expenses.

Group related edits into negotiation issues. Identify new issues, resolved issues, hidden consequential changes, and changes made outside previously open points.

Return a normalized comparison table plus a concise investor-facing summary of the most consequential differences..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investor-update-source-verification`,
      title: `Investor Update Source Verification`,
      summary: `Verify factual and contractual statements in the investor communication.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [DRAFT INVESTOR LETTER], [PORTFOLIO DATA], [FINANCIAL REPORTS], [VALUATION MATERIALS], [LPA/PPM], and [APPROVED DISCLOSURES].

Assignment: verify factual and contractual statements in the investor communication.

Verify the work product against the source materials. Focus on: performance; valuation; portfolio events; fund term; capital calls/distributions; fees/expenses; regulatory statements; conflicts; forward-looking statements; and investor-specific rights.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a statement-to-source table and corrected language for unsupported or overbroad statements..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investor-notice-drafting-from-governing-documents`,
      title: `Investor Notice Drafting from Governing Documents`,
      summary: `Draft the required investor notice for [EVENT].`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [LPA], [SIDE LETTER], [EVENT FACTS], [NOTICE PRECEDENT], and [CLIENT INSTRUCTIONS].

Assignment: draft the required investor notice for [EVENT].

Draft using the supplied precedent and approved business/legal terms as the controlling source. Focus on: notice trigger; recipients; timing; required content; consent/election mechanics; delivery method; definitions; effective date; and follow-up obligations.

Do not introduce new economics, rights, obligations, standards, remedies, qualifiers, or defined terms unless required to implement the instructions. Preserve the precedent's drafting conventions, defined-term architecture, cross-reference style, and internal logic.

After drafting, run a consequential-effects check for definitions, cross-references, schedules, exhibits, notice provisions, closing conditions, remedies, and any other provisions affected by the change.

Return a clean notice plus an internal compliance checklist confirming the contractual notice requirements..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `fees-and-expenses-allocation-audit`,
      title: `Fees and Expenses Allocation Audit`,
      summary: `Map which fees and expenses may be charged to the fund, manager, portfolio companies, or investors.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [LPA], [PPM], [SIDE LETTERS], [EXPENSE POLICY], [MANAGEMENT AGREEMENT], and [SAMPLE EXPENSE DATA].

Assignment: map which fees and expenses may be charged to the fund, manager, portfolio companies, or investors.

Perform a document-integrity and legal-work-product QA audit. Focus on: organizational expenses; broken-deal expenses; travel; consultants; operating partners; regulatory/compliance; insurance; litigation; placement fees; portfolio monitoring/director fees; offsets; caps; and side-letter limitations.

Do a second pass specifically for issues that are easy to miss in a linear review, including embedded definitions, provisions modified indirectly by amendments, stale references, duplicate concepts, and inconsistencies between operative text and schedules/exhibits.

Return an allocation matrix plus a list of ambiguous or policy-sensitive expense categories..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `waterfall-and-carried-interest-specification`,
      title: `Waterfall and Carried Interest Specification`,
      summary: `Verify that the distribution waterfall and carry model implement the governing documents.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [LPA], [DISTRIBUTION MODEL], [CAPITAL ACCOUNT DATA], [SIDE LETTER ECONOMIC TERMS], and [TAX/FINANCE INPUTS].

Assignment: verify that the distribution waterfall and carry model implement the governing documents.

Verify the work product against the source materials. Focus on: return of capital; preferred return; catch-up; carry tiers; deal-by-deal vs whole-fund; recycling; tax distributions; GP giveback/clawback; escrow; special allocations; and investor-specific economics.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return a tier-by-tier legal-to-model reconciliation and list of missing calculation inputs..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `management-fee-calculation-audit`,
      title: `Management Fee Calculation Audit`,
      summary: `Verify management fee calculations against the governing documents.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [LPA], [PPM], [SIDE LETTERS], [FEE MODEL], [COMMITMENT/NAV DATA], and [INVESTMENT PERIOD STATUS].

Assignment: verify management fee calculations against the governing documents.

Verify the work product against the source materials. Focus on: fee rate; base; commitment vs invested cost/NAV; step-down; offsets; waivers; fee breaks; parallel/AIV allocation; broken-deal treatment; timing; and side-letter adjustments.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return an investor-by-investor fee calculation trace with source and discrepancy..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `continuation-vehicle-conflict-review`,
      title: `Continuation Vehicle Conflict Review`,
      summary: `Identify investor rights, approvals, conflicts, and disclosure issues in the proposed continuation transaction.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER/INVESTOR].

Use only the following materials unless expressly instructed otherwise: [LEGACY FUND LPA], [SIDE LETTERS], [CONTINUATION VEHICLE TERMS], [CONFLICT POLICY], and [TRANSACTION PROCESS MATERIALS].

Assignment: identify investor rights, approvals, conflicts, and disclosure issues in the proposed continuation transaction.

Review the document as a connected transaction document, not as isolated clauses. Focus on: LPAC consent; conflicts waiver; valuation/fairness process; rollover/cash election; allocation; fees/carry crystallization; affiliate transaction; information rights; side-letter rights; key person; term; and investor communications.

For each material issue, explain the practical effect, identify related provisions that change the analysis, and distinguish legal risk, commercial risk, drafting/consistency defects, and questions requiring client input.

Return a rights/consent/conflict matrix plus a transaction process checklist..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `key-governance-rights-matrix`,
      title: `Key Governance Rights Matrix`,
      summary: `Map all governance, consent, consultation, and information rights across investors.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [LPA], [SIDE LETTERS], [LPAC CHARTER if any], and [INVESTOR DATA].

Assignment: map all governance, consent, consultation, and information rights across investors.

Build a normalized comparison matrix. Focus on: LPAC seats/observer rights; major decision consent; conflicts approval; extensions; key person; removal; valuation; amendments; waivers; transfers; information; and investor-specific consultation rights.

Analyze each source document individually before comparing across documents. Preserve document-level attribution and do not blend materially different rights or obligations.

Return an investor/right matrix with threshold, trigger, source, and operational owner..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `fund-closing-checklist`,
      title: `Fund Closing Checklist`,
      summary: `Build the fund closing checklist for admitting investors and activating the fund structure.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [LPA], [PPM], [SUBSCRIPTION DOCUMENTS], [SIDE LETTERS], [ENTITY DOCS], [BANK/ADMIN MATERIALS], and [CLOSING LIST].

Assignment: build the fund closing checklist for admitting investors and activating the fund structure.

Build an execution-ready checklist. Focus on: entity formation; GP/manager approvals; offering docs; subscriptions; KYC/AML; tax forms; side letters; commitments; wire/funding; administrator records; ERISA/tax/regulatory checks; signatures; countersigning; and investor notices.

Sequence items chronologically where possible. Distinguish hard conditions from best-practice items, dependencies from standalone tasks, and pre-signing, signing, pre-closing, closing, and post-closing actions where relevant.

Return a closing checklist with investor-specific and fund-level workstreams, dependencies, responsible party, and evidence..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `investor-closing-readiness-matrix`,
      title: `Investor Closing Readiness Matrix`,
      summary: `Determine which investors are ready to close and why others are not.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [INVESTOR SUBSCRIPTION PACKAGES], [SIDE LETTERS], [KYC/AML], [TAX FORMS], [COMMITMENT DATA], and [CLOSING INSTRUCTIONS].

Assignment: determine which investors are ready to close and why others are not.

Verify the work product against the source materials. Focus on: execution; commitment; eligibility reps; tax; KYC/AML; beneficial ownership; ERISA; sanctions; side-letter approval; MFN; funding; and unresolved exceptions.

For every statement or populated field, identify the supporting source. Flag unsupported statements, stale information, contradictions, calculation dependencies, and matters that require specialist or client confirmation.

Return an investor-by-investor readiness matrix with blocker, owner, action, and status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
    {
      id: `fund-compliance-obligations-tracker`,
      title: `Fund Compliance Obligations Tracker`,
      summary: `Build a recurring legal/compliance obligations tracker for the fund complex.`,
      prompt: `You are transactional corporate counsel. You represent [GP/MANAGER].

Use only the following materials unless expressly instructed otherwise: [LPA], [PPM], [SIDE LETTERS], [MANAGER POLICIES], [REGULATORY FILINGS], and [SERVICE PROVIDER AGREEMENTS].

Assignment: build a recurring legal/compliance obligations tracker for the fund complex.

Extract and normalize the relevant information. Focus on: investor reporting; notices; MFN elections; LPAC meetings; regulatory filings; valuations; audits; financial statements; tax reports; key person; investment restrictions; side-letter obligations; and policy certifications.

Preserve defined terms and source wording where precision matters. Do not collapse materially different concepts into one generic category.

Return a calendar/register: Obligation | Fund/Investor | Trigger/Cadence | Due Date | Source | Owner | Evidence | Escalation | Status..

Verification rules:

- Do not invent facts, dates, financial inputs, defined terms, legal authorities, or deal positions that are not supported by the supplied materials.

- Cite each material conclusion to the relevant section, page, paragraph, schedule, exhibit, or source document.

- Where the materials are incomplete, conflicting, or ambiguous, say so expressly and identify what is needed to resolve the issue.`,
    },
  ],
};
