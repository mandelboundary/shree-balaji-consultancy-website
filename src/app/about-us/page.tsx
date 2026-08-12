import type { Metadata } from "next";
import Link from "next/link";
import { phoneNumber, trustStats, whyChooseUs } from "@/lib/site-data";

const credentials = [
  {
    title: "Certification Partner",
    partner: "Cambridge",
    description:
      "In association with Cambridge, ensuring high language and educational training standards.",
  },
  {
    title: "Our Accreditation",
    partner: "ICEF Accredited",
    description:
      "ICEF Accredited Agency Status verifies our compliance with international education standards.",
  },
  {
    title: "Referral Partner",
    partner: "IELTS",
    description:
      "Trusted IELTS referral partner, assisting students in registering and preparing for language exams.",
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shree Balaji Consultancy and our approach to ethical, transparent admission counselling.",
};

export default function AboutUsPage() {
  return (
    <>
      <section className="about-film about-film-first" aria-labelledby="about-film-title">
        <video
          className="about-film-video"
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
        <div className="about-film-content">
          <p className="about-film-label">Our story in motion</p>
          <h1 id="about-film-title">
            Your ambition deserves a wider horizon.
          </h1>
          <p>
            We bring students, families, universities, and opportunity together
            through guidance that stays personal from the first conversation to
            the first day on campus.
          </p>
          <Link className="btn about-film-button" href="/contact">
            Meet your counsellor <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <p className="about-film-note">Admissions · Counselling · Study abroad</p>
      </section>

      <section className="about-story section-gap">
        <div className="about-story-copy">
          <p className="section-label">About Shree Balaji Consultancy</p>
          <h2>Credible counselling, made personal.</h2>
          <p>
            We help students and parents make informed higher-education choices
            for MBBS, engineering, management, and study abroad. Every plan is
            built around verified options, transparent advice, and practical
            application support.
          </p>
          <div className="cta-group">
            <Link className="btn btn-primary" href="/contact">
              Book a Free Consultation
            </Link>
            <a className="btn btn-secondary" href={`tel:${phoneNumber}`}>
              Call +91 {phoneNumber}
            </a>
          </div>
        </div>

        <div className="about-story-panel">
          <div className="hero-panel-topline">
            <p>21 years of experience</p>
            <span>1000+ colleges supported</span>
          </div>
          <ul className="hero-benefits">
            <li><span aria-hidden="true">01</span>Transparent guidance with no hidden fees</li>
            <li><span aria-hidden="true">02</span>Personalised India and study abroad shortlists</li>
            <li><span aria-hidden="true">03</span>Document review and application tracking</li>
          </ul>
          <Link className="btn btn-primary" href="/contact">
            Start your admission journey
          </Link>
        </div>
      </section>

      <section className="section-gap credentials-section">
        <p className="section-label">Trusted Credentials</p>
        <h2>Recognised by leading education and language partners</h2>
        <p className="section-copy">
          We work with trusted certification, accreditation, and IELTS referral
          partners to guide students with confidence.
        </p>
        <div className="credentials-grid">
          {credentials.map((item) => (
            <article key={item.partner} className="card credential-card">
              <p className="credential-label">{item.title}</p>
              <h3>{item.partner}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap credibility-section">
        <p className="section-label">Our Credibility</p>
        <h2>Trusted by students and parents across India</h2>
        <div className="card-grid credibility-grid">
          {trustStats.map((item) => (
            <article key={item.label} className="card service-card">
              <p className="stat">{item.value}</p>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <div className="card section-gap">
          <h2>{whyChooseUs.subtitle}</h2>
          <p>{whyChooseUs.body}</p>
        </div>
      </section>
    </>
  );
}
