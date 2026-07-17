import type { ReactNode } from "react";
import { buildSiteMetadata } from "../_lib/site-metadata";
import "../globals.css";

export function generateMetadata() {
  return buildSiteMetadata("zh");
}

export default function ChineseRootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
