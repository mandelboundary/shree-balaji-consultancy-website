import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about-us",
  "/admissions",
  "/admissions/direct-admission",
  "/admissions/engineering",
  "/admissions/mba",
  "/admissions/medical",
  "/admissions/nursing",
  "/admissions/pharmacy",
  "/admissions/law",
  "/study-abroad",
  "/universities",
  "/scholarships",
  "/career-counselling",
  "/blog",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.shreebalajiconsultancy.com${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
