import type { PromptCategory } from "@/lib/types";

export const finance: PromptCategory = {
  id: `finance`,
  label: `Finance`,
  shortLabel: `FIN`,
  topics: [
    {
      label: `Credit agreements & commitment papers`,
      promptIds: [`credit-agreement-summary`, `commitment-paper-check`, `covenant-capacity`, `amendment-waiver`],
    },
    {
      label: `Closing conditions, guarantees & collateral`,
      promptIds: [`conditions-precedent`, `security-package`],
    },
    {
      label: `Syndicated loans & refinancings`,
      promptIds: [`syndicated-refinancing`],
    },
    {
      label: `Structured finance & securitization`,
      promptIds: [`cloudhq-abs`, `fiber-revenue-notes`, `whole-business-securitization`],
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
  ],
};
