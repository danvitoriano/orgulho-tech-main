import conf from "@/content/pages/conf.json";
import github from "@/content/pages/github.json";
import home from "@/content/pages/home.json";
import womanQueerTech from "@/content/pages/woman-queer-tech.json";
import podcast from "@/content/pages/podcast.json";
import sobre from "@/content/pages/sobre.json";

export type SectionType = "Header" | "MeetupMainHero" | "Hero" | "Testimonials" | "Footer" | "EventDetails" | "CompanySupport";

export type SectionConfig = {
  type: SectionType;
  props?: Record<string, unknown>;
};

export type PageMetadata = {
  title?: string;
  description?: string;
};

export type PageConfig = {
  path: string;
  metadata?: PageMetadata;
  sections: SectionConfig[];
};

const pages: PageConfig[] = [
  home as PageConfig,
  sobre as PageConfig,
  womanQueerTech as PageConfig,
  podcast as PageConfig,
  conf as PageConfig,
  github as PageConfig,
];

export const getPageByPath = (path: string) =>
  pages.find((page) => page.path === path) ?? null;

export const getAllPagePaths = () => pages.map((page) => page.path);
