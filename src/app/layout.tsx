import type { Metadata } from "next";
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
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
