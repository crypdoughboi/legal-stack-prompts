import type { PromptCategory } from "@/lib/types";

export const restructuring: PromptCategory = {
  id: `restructuring`,
  label: `Restructuring`,
  shortLabel: `RX`,
  topics: [
    {
      label: `Capital structure & case strategy`,
      promptIds: [`capital-structure`, `rsa-review`, `critical-dates`],
    },
    {
      label: `DIP financing & first-day relief`,
      promptIds: [`dip-order-check`, `first-day-motions`, `multi-affiliate-first-day`],
    },
    {
      label: `Plans, sales & executory contracts`,
      promptIds: [`plan-disclosure`, `red-lobster-stalking-horse`, `lease-portfolio-365`],
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
  ],
};
