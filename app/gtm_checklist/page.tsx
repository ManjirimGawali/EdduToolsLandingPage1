import { redirect } from "next/navigation";

import { gtmPages } from "@/lib/data/gtm-checklist";

export default function GTMChecklistIndexPage() {
  redirect(`/gtm_checklist/${gtmPages[0]?.slug ?? ""}`);
}
