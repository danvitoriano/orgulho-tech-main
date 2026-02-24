import { getDistPageByPath } from "@/lib/distPages";

export default async function DistHead({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const route = `/${slug.join("/")}`;
  const page = getDistPageByPath(route);
  const styleMatch = page?.head.match(/<style[^>]*>([\s\S]*?)<\/style>/i);

  return (
    <>
      <meta name="view-transition" content="same-origin" />
      <link rel="stylesheet" href="/styles.css" />
      <link rel="manifest" href="/site.webmanifest" />
      {styleMatch?.[1] ? (
        <style dangerouslySetInnerHTML={{ __html: styleMatch[1] }} />
      ) : null}
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/htmx.org@1.9.11"
        crossOrigin="anonymous"
      />
    </>
  );
}
