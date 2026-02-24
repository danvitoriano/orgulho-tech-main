import { notFound } from "next/navigation";
import { getDistPageByPath, getDistRoutes } from "@/lib/distPages";

export const generateStaticParams = () =>
  getDistRoutes().map((route) => ({
    slug: route.slice(1).split("/"),
  }));

export default async function DistPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const route = `/${slug.join("/")}`;
  const page = getDistPageByPath(route);

  if (!page) {
    notFound();
  }

  return <div dangerouslySetInnerHTML={{ __html: page.body }} />;
}
