import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/team", "/events", "/gallery", "/sponsors", "/achievements", "/blogs", "/resources", "/recruitment", "/contact", "/dashboard", "/admin", "/portal", "/profile", "/privacy", "/terms"];
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
