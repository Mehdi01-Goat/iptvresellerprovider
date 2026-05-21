import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://iptvresellerprovider.com";
  const date = "2026-05-21";

  return [
    { url: base,               lastModified: date, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/trex`,     lastModified: date, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/dino`,     lastModified: date, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/strong`,   lastModified: date, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/mega`,     lastModified: date, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/magnum`,   lastModified: date, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/contact`,  lastModified: date, changeFrequency: "monthly", priority: 0.7 },
  ];
}
