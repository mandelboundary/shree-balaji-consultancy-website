import type { Metadata } from "next";
import { blogTopics } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Admission and study abroad articles for students and parents.",
};

export default function BlogPage() {
  return (
    <section>
      <h1>Blog</h1>
      <p>
        SEO-ready topic ideas to publish consistent, high-intent content for
        students and parents.
      </p>
      <ul className="list section-gap">
        {blogTopics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </section>
  );
}
