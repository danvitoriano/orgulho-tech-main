import home from "@/content/pages/home.json";

export type SectionType = "Header" | "MeetupMainHero" | "Hero" | "Testimonials" | "Footer";

export type SectionConfig = {
  type: SectionType;
  props?: Record<string, unknown>;
};

export type PageConfig = {
  path: string;
  sections: SectionConfig[];
};

const pages: PageConfig[] = [home as PageConfig];

export const getPageByPath = (path: string) =>
  pages.find((page) => page.path === path) ?? null;

export const getAllPagePaths = () => pages.map((page) => page.path);
