import type { PromptCategory } from "@/lib/types";

export const funds: PromptCategory = {
  id: `funds`,
  label: `Investment Funds`,
  shortLabel: `FUNDS`,
  topics: [
    {
      label: `Formation, offering & first close`,
      promptIds: [`lpa-terms`, `ppm-consistency`, `subscription-review`, `fund-formation`, `jadwa-private-credit`],
    },
    {
      label: `Investor terms & side letters`,
      promptIds: [`side-letter-obligations`, `mfn-analysis`],
    },
    {
      label: `Special vehicles & manager transitions`,
      promptIds: [`manrre-reit-conversion`],
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
  ],
};
