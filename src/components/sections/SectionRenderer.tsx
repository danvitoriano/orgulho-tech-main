import type { SectionConfig } from "@/lib/content";
import type { ComponentType } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

const SECTION_MAP = {
  Header,
  Hero,
  Footer,
} as const;

export default function SectionRenderer({ section }: { section: SectionConfig }) {
  const Component = SECTION_MAP[section.type] as ComponentType<any> | undefined;
  if (!Component) return null;

  return <Component {...(section.props ?? {})} />;
}
