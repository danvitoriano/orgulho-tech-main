import SectionRenderer from "@/components/sections/SectionRenderer";
import { getAllPagePaths, getPageByPath } from "@/lib/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = `/${slug.join("/")}`;
  const page = getPageByPath(route);
  return {
    title: page?.metadata?.title,
    description: page?.metadata?.description,
  };
}

export const generateStaticParams = () =>
  getAllPagePaths()
    .filter((path) => path !== "/")
    .map((path) => ({
      slug: path.slice(1).split("/"),
    }));

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const route = `/${slug.join("/")}`;
  const page = getPageByPath(route);

  if (!page) {
    notFound();
  }

  return (
    <main>
      {page.sections.map((section, index) => (
        <SectionRenderer key={`${section.type}-${index}`} section={section} />
      ))}
    </main>
  );
}
