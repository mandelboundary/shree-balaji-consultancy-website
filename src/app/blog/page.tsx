import type { Metadata } from "next";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Admission and study abroad articles for students and parents.",
};

export default function BlogPage() {
  return (
    <section>
      <p className="section-label">Blog</p>
      <h1>Admission & Counselling Guides</h1>
      <p>
        Explore practical advice, latest MBBS admission updates, and career
        counselling articles for Indian students.
      </p>
      <div className="card-grid blog-grid section-gap">
        {blogPosts.map((post) => (
          <article key={post.title} className="card blog-card">
            <span className="blog-tag">{post.category}</span>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <p className="blog-date">{post.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
