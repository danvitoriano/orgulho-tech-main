import SectionRenderer from "@/components/sections/SectionRenderer";
import { getPageByPath } from "@/lib/content";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = getPageByPath("/");
  return {
    title: page?.metadata?.title,
    description: page?.metadata?.description,
  };
}

export default async function Home() {
  const page = await getPageByPath("/");

  if (!page) return null;

  return (
    <main>
      {page.sections.map((section, index) => (
        <SectionRenderer key={`${section.type}-${index}`} section={section} />
      ))}
    </main>
  );
}
