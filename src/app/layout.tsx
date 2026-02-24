import type { Metadata } from "next";
import { getDistPageByPath } from "@/lib/distPages";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orgulho Tech",
  description: "Site da comunidade Orgulho Tech.",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="view-transition" content="same-origin" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="manifest" href="/site.webmanifest" />
        {(() => {
          const page = getDistPageByPath("/");
          const styleMatch = page?.head.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
          if (!styleMatch?.[1]) return null;
          return <style dangerouslySetInnerHTML={{ __html: styleMatch[1] }} />;
        })()}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/htmx.org@1.9.11"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
