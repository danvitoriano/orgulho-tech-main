import type { SectionConfig } from "@/lib/content";
import type { ComponentType } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import MeetupMainHero from "./MeetupMainHero";
import Testimonials from "./Testimonials";

const SECTION_MAP = {
  Header,
  MeetupMainHero,
  Hero,
  Testimonials,
  Footer,
} as const;

export default function SectionRenderer({ section }: { section: SectionConfig }) {
  const Component = SECTION_MAP[section.type] as ComponentType<any> | undefined;
  if (!Component) return null;

  return <Component {...(section.props ?? {})} />;
}
