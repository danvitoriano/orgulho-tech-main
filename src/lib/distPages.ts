import fs from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IGNORED_DIRS = new Set(["_frsh"]);

export type DistPage = {
  html: string;
  head: string;
  body: string;
};

const normalizeRoute = (route: string) => {
  if (!route || route === "/") return "/";
  const cleaned = route.replace(/\/+$/, "");
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
};

const getHtmlPathForRoute = (route: string) => {
  const normalized = normalizeRoute(route);
  if (normalized === "/") {
    return path.join(PUBLIC_DIR, "index.html");
  }
  return path.join(PUBLIC_DIR, normalized.slice(1), "index.html");
};

const extractTag = (html: string, tag: "head" | "body") => {
  const match = html.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"),
  );
  return match?.[1]?.trim() ?? "";
};

export const getDistPageByPath = (route: string): DistPage | null => {
  const htmlPath = getHtmlPathForRoute(route);
  if (!fs.existsSync(htmlPath)) return null;

  const html = fs.readFileSync(htmlPath, "utf8");
  return {
    html,
    head: extractTag(html, "head"),
    body: extractTag(html, "body"),
  };
};

const walkForIndexPages = (dir: string, segments: string[]): string[] => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes: string[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (IGNORED_DIRS.has(entry.name)) continue;

    const entryDir = path.join(dir, entry.name);
    const indexPath = path.join(entryDir, "index.html");
    const nextSegments = [...segments, entry.name];

    if (fs.existsSync(indexPath)) {
      routes.push(`/${nextSegments.join("/")}`);
    }

    routes.push(...walkForIndexPages(entryDir, nextSegments));
  }

  return routes;
};

export const getDistRoutes = () => walkForIndexPages(PUBLIC_DIR, []);
