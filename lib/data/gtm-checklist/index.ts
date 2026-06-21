import { gtmChecklistData } from "./data1";

import type { GTMChecklistData } from "./types";

export interface GTMPage extends GTMChecklistData {
  slug: string;
}

export const gtmPages: GTMPage[] = [
  {
    ...gtmChecklistData,
    slug: "data1",
  },
  
];

export type { GTMChecklistData };