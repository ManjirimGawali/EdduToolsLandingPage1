import { redirect } from "next/navigation";

import { newcohortPages } from "@/lib/data/cohortnew/index";

export default function CohortIndexPage() {
  redirect(`/newCohort/${newcohortPages[0]?.slug ?? ""}`);
}
