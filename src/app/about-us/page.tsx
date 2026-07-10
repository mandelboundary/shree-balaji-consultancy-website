import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shree Balaji Consultancy and our approach to ethical, transparent admission counselling.",
};

export default function AboutUsPage() {
  return (
    <>
      <section className="hero hero-fullscreen about-hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src="https://a2-us.storyblok.com/f/1023936/x/cb8efc2e08/stanford125-loop_v2.mp4"
            type="video/mp4"
          />
        </video>
        <div>
          <p className="pill">About Us</p>
          <h1>About Shree Balaji Consultancy</h1>
          <p>
            Shree Balaji Consultancy is an education consultancy focused on
            helping students and parents make informed higher-education
            decisions.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <p>
          Our team offers practical, transparent, and personalized counselling
          for admissions in private and deemed universities.
        </p>
        <div className="card section-gap">
          <h2>Our Positioning</h2>
          <p>
            We provide expert admission guidance for private and deemed
            universities, career counselling, and study abroad services. We
            help students choose the right institution and support them
            throughout the admission process.
          </p>
        </div>
      </section>
    </>
  );
}
