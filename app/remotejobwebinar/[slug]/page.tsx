import Remotejobwebinar from "@/app/template/Remotejobwebinar";
import { RemoteJobPages } from "@/lib/data/remotejob";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const webinar = RemoteJobPages.find(
    item => item.slug === slug
  );

  if (!webinar) {
    return <div>Not Found</div>;
  }

  return <Remotejobwebinar data={webinar} />;
}