import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/atelier", priority: 0.8, freq: "monthly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/realisations", priority: 0.8, freq: "weekly" },
    { path: "/contact", priority: 0.9, freq: "monthly" },
  ] as const;

  const serviceRoutes = siteConfig.services.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: `${siteConfig.url}${r.path}`,
      lastModified: new Date(),
      changeFrequency: r.freq as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: r.priority,
    })),
    ...serviceRoutes,
  ];
}
