import SectionRenderer from "@/components/sections/SectionRenderer";
import { getPageByPath } from "@/lib/content";

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
