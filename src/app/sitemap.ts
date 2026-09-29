import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services",
  "/seo-growth",
  "/ai-websites",
  "/ai-voice-agents",
  "/ai-automation",
  "/custom-ai-agents",
  "/solutions",
  "/case-studies",
  "/about",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.omnivoxio.com${route}`,
    lastModified: new Date(),
  }));
}
