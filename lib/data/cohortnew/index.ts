import { aiSaasData } from "./ai_saas";
import { aiAutomationData } from "./ai_automation";
import type { CohortData } from "./types";

export interface CohortPage extends CohortData {
  slug: string;
}

export const newcohortPages: CohortPage[] = [
  {
    ...aiSaasData,
    slug: "ai_saas",
  },
  {
    ...aiAutomationData,
    slug: "ai_automation",
  },
];

export type { CohortData };