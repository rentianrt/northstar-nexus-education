import type { Metadata } from "next";
import { headers } from "next/headers";

export type SiteLocale = "en" | "zh";

const DEFAULT_ORIGIN = "https://northstar-nexus.education";

const sharedMetadata = {
  applicationName: "Northstar Nexus Education",
  siteName: "Northstar Nexus Education | 北辰智汇",
  icons: {
    icon: "/brand/northstar-logo.png",
    shortcut: "/brand/northstar-logo.png",
    apple: "/brand/northstar-logo.png",
  },
} as const;

const localizedMetadata = {
  en: {
    pathname: "/",
    title: "Northstar Nexus Education | Chart Your Path in the Age of AI",
    description:
      "AI-powered research mentorship, U.S. admissions advising, and career development through one connected growth path and a global mentor network.",
    keywords: [
      "Northstar Nexus Education",
      "AI research mentorship",
      "U.S. admissions advising",
      "college admissions",
      "career development",
      "student mentorship",
    ],
    openGraphLocale: "en_US",
    image: "/og-en.png",
    imageAlt: "Northstar Nexus Education: chart your path in the age of AI",
  },
  zh: {
    pathname: "/zh",
    title: "北辰智汇｜在 AI 时代，为成长建立坐标",
    description:
      "以 AI 能力与全球导师网络，将科研、美国升学与职业发展连接为一条连续、可验证的成长路径。",
    keywords: [
      "北辰智汇",
      "Northstar Nexus Education",
      "AI 科研",
      "美国升学",
      "UC 转学",
      "职业发展",
    ],
    openGraphLocale: "zh_CN",
    image: "/og-zh.png",
    imageAlt: "北辰智汇：在 AI 时代，为成长建立坐标",
  },
} as const;

async function getMetadataBase() {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";

  if (!host) {
    return new URL(DEFAULT_ORIGIN);
  }

  return new URL(`${protocol}://${host}`);
}

export async function buildSiteMetadata(locale: SiteLocale): Promise<Metadata> {
  const metadataBase = await getMetadataBase();
  const localized = localizedMetadata[locale];
  const pageUrl = new URL(localized.pathname, metadataBase);
  const imageUrl = new URL(localized.image, metadataBase);

  return {
    metadataBase,
    applicationName: sharedMetadata.applicationName,
    title: localized.title,
    description: localized.description,
    keywords: [...localized.keywords],
    icons: sharedMetadata.icons,
    alternates: {
      canonical: pageUrl,
      languages: {
        en: new URL("/", metadataBase),
        "zh-CN": new URL("/zh", metadataBase),
        "x-default": new URL("/", metadataBase),
      },
    },
    openGraph: {
      title: localized.title,
      description: localized.description,
      type: "website",
      locale: localized.openGraphLocale,
      siteName: sharedMetadata.siteName,
      url: pageUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: localized.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: localized.title,
      description: localized.description,
      images: [
        {
          url: imageUrl,
          alt: localized.imageAlt,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
