import { redirect } from "next/navigation";

import { RemoteJobPages } from "@/lib/data/remotejob";

export default function RemoteJobIndexPage() {
  redirect(`/remotejobwebinar/${RemoteJobPages[0]?.slug ?? ""}`);
}