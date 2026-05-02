import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/atelier", "/services", "/realisations", "/contact"];
  return routes.map((r) => ({
    url: `${siteConfig.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "/" ? 1 : 0.7,
  }));
}
