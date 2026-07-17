import type { ReactNode } from "react";
import { buildSiteMetadata } from "../_lib/site-metadata";
import "../globals.css";

export function generateMetadata() {
  return buildSiteMetadata("en");
}

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
