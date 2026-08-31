import type { FeaturedWorkflow } from "@/lib/types";

/** Shortcut cards under "Common matter workflows" on the landing view. */
export const featuredWorkflows: FeaturedWorkflow[] = [
  {
    title: `Acquisition diligence`,
    detail: `Risk matrix · consent sweep · executive summary`,
    practice: `corporate`,
  },
  {
    title: `Financing workstream`,
    detail: `Term extraction · CPs · covenant capacity`,
    practice: `finance`,
  },
  {
    title: `Real estate closing`,
    detail: `PSA issues · title review · closing checklist`,
    practice: `real-estate`,
  },
  {
    title: `Fund launch`,
    detail: `LPA matrix · offering check · first close`,
    practice: `funds`,
  },
];
