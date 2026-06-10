import type { MetadataRoute } from "next";
import { site, navLinks } from "@/data/site";

/**
 * Generates /sitemap.xml from the site's nav routes so it stays in sync with
 * navigation. The homepage gets top priority; all other pages share a lower one.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return navLinks.map(({ path }) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
