import type { Metadata } from "next";
import Link from "next/link";
import {
  allServices,
  blogTopics,
  counsellingTypes,
  faqs,
  phoneNumber,
  trustStats,
  whyChooseUs,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Shree Balaji Consultancy | Direct College Admissions & Study Abroad",
  description:
    "Get expert admission guidance for private and deemed universities in India. Shree Balaji Consultancy also offers study abroad counseling, career guidance, scholarships, and visa assistance.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function HomePage() {
  const popularCourses = [
    "MBBS",
    "BDS",
    "BTech",
    "MBA",
    "BBA",
    "BCA",
    "BSc Nursing",
    "Pharmacy",
    "Law",
    "Allied Health",
  ];

  const studyCountries = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Germany",
    "Russia",
    "Georgia",
    "Uzbekistan",
    "Kazakhstan",
    "Bangladesh",
  ];

  return (
    <>
      <section className="hero hero-grid">
        <div>
          <p className="pill">Trusted Admission Guidance</p>
          <h1>Direct College Admissions & Study Abroad Experts</h1>
          <p>
            Secure admissions in top private and deemed universities across
            India with personalized counseling, documentation support, and
            overseas education guidance.
          </p>
          <div className="cta-group">
            <Link className="btn btn-primary" href="/contact">
              Apply Now
            </Link>
            <a className="btn btn-secondary" href={`tel:${phoneNumber}`}>
              Talk to an Admission Counselor
            </a>
          </div>
          <p className="hero-small">
            No misleading claims. Clear process, transparent guidance, and
            student-first support.
          </p>
        </div>
        <div className="hero-panel">
          <h2>Admission Open 2026</h2>
          <p>
            End-to-end support for counselling strategy, documents, college
            shortlisting, and application execution.
          </p>
          <ul className="list">
            <li>Private & Deemed University Admissions</li>
            <li>Management Quota Guidance</li>
            <li>Study Abroad & Visa Support</li>
          </ul>
          <a className="btn btn-primary" href={`tel:${phoneNumber}`}>
            Call +91 {phoneNumber}
          </a>
        </div>
      </section>

      <section className="card-grid section-gap">
        {trustStats.map((item) => (
          <article key={item.label} className="card">
            <p className="stat">{item.value}</p>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="section-gap why-section">
        <p className="section-label">{whyChooseUs.title}</p>
        <h2>{whyChooseUs.subtitle}</h2>
        <p className="why-body">{whyChooseUs.body}</p>
      </section>

      <section className="section-gap">
        <p className="section-label">Our All Services</p>
        <h2>What we are offering to Students</h2>
        <div className="card-grid services-grid">
          {allServices.map((service) => (
            <article key={service.title} className="card service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap counselling-section">
        <p className="section-label">How To Use NEET Rank</p>
        <h2>Types Of Counselling</h2>
        <div className="counselling-grid">
          {counsellingTypes.map((item) => (
            <article
              key={item.title}
              className={`counselling-card counselling-card--${item.variant}`}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner section-gap">
        <p>
          Helping Students In Getting Admission Over 1000+ Colleges in India.
        </p>
        <Link className="btn btn-accent" href="/contact">
          Get Started
        </Link>
      </section>

      <section className="section-gap">
        <h2>Our Popular Courses</h2>
        <div className="chip-grid">
          {popularCourses.map((course) => (
            <span key={course} className="chip">
              {course}
            </span>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <h2>Study Abroad Countries</h2>
        <div className="country-grid">
          {studyCountries.map((country) => (
            <article key={country} className="country-card">
              <p>{country}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <h2>Latest Blog Topics</h2>
        <div className="card-grid">
          {blogTopics.slice(0, 6).map((topic) => (
            <article key={topic} className="card">
              <h3>{topic}</h3>
              <p>SEO content topic for admissions and career guidance.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap enquiry">
        <div>
          <h2>Career Counselling With Us</h2>
          <p>
            Submit your details to get a call back from our admission team.
          </p>
          <div className="cta-group">
            <Link className="btn btn-secondary" href="/contact">
              Enquiry Form
            </Link>
            <a className="btn btn-primary" href={`tel:${phoneNumber}`}>
              Helpline +91 {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
