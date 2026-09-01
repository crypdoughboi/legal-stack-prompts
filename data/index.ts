import type { PromptCategory } from "@/lib/types";
import { corporate } from "./prompts/corporate";
import { generalCorporate } from "./prompts/general-corporate";
import { finance } from "./prompts/finance";
import { restructuring } from "./prompts/restructuring";
import { realEstate } from "./prompts/real-estate";
import { funds } from "./prompts/funds";
import { documentReview } from "./prompts/document-review";
import { diligence } from "./prompts/diligence";
import { communications } from "./prompts/communications";

/**
 * The prompt library, in the order the practice chips are rendered.
 *
 * To add a prompt: edit the matching file in `data/prompts/`, then list its id
 * under one of that category's topics. A prompt that is not listed under any
 * topic still appears, grouped under "Other workflows".
 */
export const categories: PromptCategory[] = [
  corporate,
  generalCorporate,
  finance,
  restructuring,
  realEstate,
  funds,
  documentReview,
  diligence,
  communications,
];

export { featuredWorkflows } from "./featured";
