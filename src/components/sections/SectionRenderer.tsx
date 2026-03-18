import type { SectionConfig } from "@/lib/content";
import type { ComponentType } from "react";
import BulletSection from "./BulletSection";
import CompanySupport from "./CompanySupport";
import ConfRetro from "./ConfRetro";
import EventDetails from "./EventDetails";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import MeetupMainHero from "./MeetupMainHero";
import SponsorshipTiers from "./SponsorshipTiers";
import Testimonials from "./Testimonials";
import YouTubeEmbed from "./YouTubeEmbed";

const SECTION_MAP = {
  Header,
  MeetupMainHero,
  Hero,
  Testimonials,
  Footer,
  EventDetails,
  CompanySupport,
  SponsorshipTiers,
  ConfRetro,
  BulletSection,
  YouTubeEmbed,
} as const;

export default function SectionRenderer({ section }: { section: SectionConfig }) {
  const Component = SECTION_MAP[section.type] as ComponentType<any> | undefined;
  if (!Component) return null;

  return <Component {...(section.props ?? {})} />;
}
