import type { PromptCategory } from "@/lib/types";

export const realEstate: PromptCategory = {
  id: `real-estate`,
  label: `Real Estate`,
  shortLabel: `RE`,
  topics: [
    {
      label: `Acquisitions & property diligence`,
      promptIds: [`psa-issue-list`, `title-survey`, `property-diligence`, `student-housing-portfolio`],
    },
    {
      label: `Leasing, estoppels & sale-leasebacks`,
      promptIds: [`lease-abstract`, `estoppel-snda`, `hartland-sale-leaseback`],
    },
    {
      label: `Closings & joint ventures`,
      promptIds: [`re-closing`, `asana-retail-jv`],
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
  ],
};
