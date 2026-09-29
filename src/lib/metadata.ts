import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const baseUrl = "https://www.omnivoxio.com";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `${baseUrl}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const metadataBase = new URL(baseUrl);
