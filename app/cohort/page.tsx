import { redirect } from "next/navigation";

import { cohortPages } from "@/lib/data/cohort";

export default function CohortIndexPage() {
  redirect(`/cohort/${cohortPages[0]?.slug ?? ""}`);
}
