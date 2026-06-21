import GTMChecker from "@/app/template/GTMChecker";
import { gtmPages } from "@/lib/data/gtm-checklist";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const gtm = gtmPages.find(
    item => item.slug === slug
  );

  if (!gtm) {
    return <div>Not Found</div>;
  }

  return <GTMChecker data={gtm} />;
}