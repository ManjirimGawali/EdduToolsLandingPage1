import CohortTemplate from "@/app/template/CohortTemplate";
import { cohortPages } from "@/lib/data/cohort";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cohort = cohortPages.find(
    item => item.slug === slug
  );

  if (!cohort) {
    return <div>Not Found</div>;
  }

  return <CohortTemplate data={cohort} />;
}