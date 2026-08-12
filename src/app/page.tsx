import type { Metadata } from "next";
import Link from "next/link";
import {
  allServices,
  blogPosts,
  blogTopics,
  counsellingTypes,
  faqs,
  phoneNumber,
  testimonials,
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
    "Ukraine",
    "Georgia",
    "Uzbekistan",
    "Kazakhstan",
    "Bangladesh",
  ];

  const medicalHighlights = [
    {
      title: "MBBS & Medical Counselling",
      description:
        "Complete guidance for NEET, MBBS, BDS and allied medical seats in private institutions.",
    },
    {
      title: "MBBS University Shortlisting",
      description:
        "Personalized college shortlists based on budget, location, and eligibility.",
    },
    {
      title: "Document Support & Visa Advice",
      description:
        "Application, document verification, and study abroad visa support for medical students.",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero hero-grid home-hero">
        <div className="hero-copy">
          <p className="pill">Trusted Admission Guidance</p>
          <h1>
            Direct College Admissions
            <span>&amp; Study Abroad Guidance</span>
          </h1>
          <p className="hero-lede">
            Make your next education decision with clear college shortlisting,
            documentation support, and guidance tailored to your profile.
          </p>
          <div className="cta-group">
            <Link className="btn btn-primary" href="/contact">
              Start Your Application
            </Link>
            <a className="btn btn-secondary" href={`tel:${phoneNumber}`}>
              Talk to a Counsellor
            </a>
          </div>
          <ul className="hero-assurance" aria-label="Our commitments">
            <li>Transparent guidance</li>
            <li>Student-first support</li>
            <li>No misleading claims</li>
          </ul>
        </div>
        <div className="hero-panel hero-card-interactive">
          <div className="hero-panel-topline">
            <p>2026 intake</p>
            <span>Applications open</span>
          </div>
          <h2>Plan your admission with confidence.</h2>
          <p>
            End-to-end support for counselling strategy, documents, college
            shortlisting, and application execution.
          </p>
          <ul className="hero-benefits">
            <li>
              <span aria-hidden="true">01</span>
              Private and deemed university admissions
            </li>
            <li>
              <span aria-hidden="true">02</span>
              Eligibility and application guidance
            </li>
            <li>
              <span aria-hidden="true">03</span>
              Study abroad and visa documentation support
            </li>
          </ul>
          <a className="btn btn-primary" href={`tel:${phoneNumber}`}>
            Call +91 {phoneNumber}
          </a>
        </div>
      </section>

      <section className="card-grid section-gap trust-grid">
        {trustStats.map((item, index) => (
          <article key={item.label} className="card stat-card">
            <span className="card-kicker">0{index + 1}</span>
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
          {allServices.map((service, index) => (
            <article key={service.title} className="card service-card">
              <span className="service-index">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="card-link">Explore service <span aria-hidden="true">↗</span></span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <p className="section-label">MBBS & Medical Admissions</p>
        <h2>Trusted guidance for medical university admissions</h2>
        <div className="card-grid services-grid">
          {medicalHighlights.map((item, index) => (
            <article key={item.title} className="card service-card medical-card">
              <span className="service-index">M{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="card-link">View admission support <span aria-hidden="true">↗</span></span>
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
              <span className="counselling-label">Counselling pathway</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="counselling-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap testimonial-section">
        <p className="section-label">Student Success</p>
        <h2>What students and parents are saying</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <span className="quote-mark" aria-hidden="true">“</span>
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <h2>Latest Blog Guides</h2>
        <div className="card-grid blog-grid">
          {blogPosts.map((post) => (
            <article key={post.title} className="card blog-card">
              <span className="blog-tag">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <p className="blog-date">{post.date}</p>
                <span aria-hidden="true">Read guide ↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap cta-banner">
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
            <Link key={course} className="chip" href="/admissions">
              {course}<span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <h2>Study Abroad Countries</h2>
        <div className="country-grid">
          {studyCountries.map((country) => (
            <article key={country} className="country-card home-country-card">
              <p>{country}</p>
              <span aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap">
        <h2>Latest Blog Topics</h2>
        <div className="card-grid">
          {blogTopics.slice(0, 6).map((topic) => (
            <article key={topic} className="card topic-card">
              <span className="topic-label">Student guide</span>
              <h3>{topic}</h3>
              <p>SEO content topic for admissions and career guidance.</p>
              <span className="card-link">Read article <span aria-hidden="true">↗</span></span>
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
    </div>
  );
}
