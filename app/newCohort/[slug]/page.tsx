import NewCohort from "@/app/template/NewCohort";
import { newcohortPages } from "@/lib/data/cohortnew/index";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cohort = newcohortPages.find(
    item => item.slug === slug
  );

  if (!cohort) {
    return <div>Not Found</div>;
  }

  return <NewCohort data={cohort} />;
}