import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://iptvresellerprovider.com";
  const siteDate = "2026-07-29";

  return [
    { url: base,                  lastModified: siteDate, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/trex`,        lastModified: siteDate, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/dino`,        lastModified: siteDate, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/strong`,      lastModified: siteDate, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/mega`,        lastModified: siteDate, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/magnum`,      lastModified: siteDate, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/contact`,     lastModified: siteDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`,        lastModified: siteDate, changeFrequency: "weekly",  priority: 0.8 },
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
