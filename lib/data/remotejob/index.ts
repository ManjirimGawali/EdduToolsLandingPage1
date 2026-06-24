import { remoteJobWebinarData } from "./data";
import type { RemoteJobWebinarData } from "./type";

export interface RemoteJobPage extends RemoteJobWebinarData {
  slug: string;
}

export const RemoteJobPages: RemoteJobPage[] = [
  {
    ...remoteJobWebinarData,
    slug: "remote-job-webinar",
  },
];

export type { RemoteJobWebinarData };