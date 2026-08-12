"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./study-abroad.module.css";

const destinations = [
  {
    name: "USA",
    imageUrl: "/destinations/usa-campus.png",
    imageAlt: "University campus in the United States",
    description: "Flexible programs, research pathways, and global campuses.",
  },
  {
    name: "UK",
    imageUrl: "/destinations/uk-campus.png",
    imageAlt: "Historic university campus in the United Kingdom",
    description: "Focused degrees, strong universities, and shorter programs.",
  },
  {
    name: "Canada",
    imageUrl: "/destinations/canada-campus.png",
    imageAlt: "University campus in Canada",
    description: "Career-focused programs and a multicultural student experience.",
  },
  {
    name: "Australia",
    imageUrl: "/destinations/australia-campus.png",
    imageAlt: "Sydney education destination in Australia",
    description: "Recognized education with diverse study options.",
  },
  {
    name: "Germany",
    imageUrl: "/destinations/germany-campus.png",
    imageAlt: "Academic destination in Germany",
    description: "Technical excellence and high-value education pathways.",
  },
  {
    name: "Russia",
    imageUrl: "/destinations/russia-campus.png",
    imageAlt: "University campus in Moscow, Russia",
    description: "Established universities with medicine, science, and research pathways.",
  },
  {
    name: "Ukraine",
    imageUrl: "/destinations/ukraine-campus.jpg",
    imageAlt: "Taras Shevchenko National University campus in Kyiv, Ukraine",
    description: "Historic universities with current admission and safety guidance.",
  },
];

const processSteps = [
  {
    title: "Free Expert Consultation",
    detail: "Kickstart your study abroad dream with a one-on-one consultation — absolutely free.",
    cta: "Schedule Your Free Call",
  },
  {
    title: "Find Your Perfect University",
    detail: "Get personalized recommendations for universities and programs tailored to your goals.",
    cta: "Get University Options",
  },
  {
    title: "Complete Your Application",
    detail: "Our experts will guide you through applications, document prep, and submission — hassle-free.",
    cta: "Start Application Process",
  },
  {
    title: "Visa & Travel Support",
    detail: "Get expert visa guidance, interview tips, and pre-departure support to land smoothly.",
    cta: "Get Visa Assistance",
  },
];

const credentials = [
  {
    title: "Certification Partner",
    brand: "Cambridge",
    description:
      "In association with Cambridge, ensuring high language and educational training standards.",
  },
  {
    title: "Our Accreditation",
    brand: "ICEF Accredited",
    description:
      "ICEF Accredited Agency Status verifying our compliance with international standards.",
  },
  {
    title: "Referral Partner",
    brand: "IELTS",
    description:
      "Trusted IELTS referral partner, assisting students in registering and preparing for language exams.",
  },
];

export default function StudyAbroadClient() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedStep, setSelectedStep] = useState(0);
  const selectedDestination = destinations[selectedIndex];
  const activeStep = processSteps[selectedStep];

  return (
    <section className={styles.studyPage}>
      <div className={styles.heroSection}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Study abroad · 2026 intake</p>
          <h1>Your global education journey, planned around you.</h1>
          <p className={styles.heroLede}>
            From finding the right university to visas and pre-departure support,
            our counsellors turn a complicated process into a clear, confident plan.
          </p>
          <div className={styles.heroActions}>
            <Link className="btn btn-primary" href={`/contact?country=${selectedDestination.name}`}>
              Start your application <span aria-hidden="true">↗</span>
            </Link>
            <Link className="btn btn-secondary" href="/contact">
              Get a free call
            </Link>
          </div>

          <div className={styles.heroCountries} aria-label="Choose a study destination">
            {destinations.map((destination, index) => (
              <button
                key={destination.name}
                type="button"
                className={selectedIndex === index ? styles.heroCountryActive : ""}
                onClick={() => setSelectedIndex(index)}
                aria-pressed={selectedIndex === index}
              >
                <span className={styles.countryDot} aria-hidden="true" />
                <span>{destination.name}</span>
              </button>
            ))}
          </div>

          <ul className={styles.heroProof} aria-label="Study abroad support highlights">
            <li><strong>21+</strong><span>Years guiding students</span></li>
            <li><strong>18+</strong><span>Countries supported</span></li>
            <li><strong>1:1</strong><span>Personal counselling</span></li>
          </ul>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageWrapper}>
            <Image
              src={selectedDestination.imageUrl}
              alt={selectedDestination.imageAlt}
              fill
              sizes="(max-width: 900px) 90vw, 45vw"
              className={styles.heroImage}
            />
            <div className={styles.heroImageShade} />
            <div className={styles.routeLine} aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className={styles.destinationTicket} aria-live="polite">
              <div>
                <span>Your selected destination</span>
                <strong>{selectedDestination.name}</strong>
              </div>
              <span className={styles.ticketArrow} aria-hidden="true">↗</span>
            </div>
            <div className={styles.heroCaption}>
              <span className={styles.statusDot} />
              Applications open for the 2026 intake
            </div>
          </div>
          <div className={styles.floatingNote}>
            <span>Next step</span>
            <strong>Free profile evaluation</strong>
          </div>
        </div>
      </div>

      <section className={styles.partnerSection}>
        <div className={styles.sectionHeading}>
          <div>
            <p className="section-label">Trusted credentials</p>
            <h2>Recognised guidance. Personal support.</h2>
          </div>
          <p>
            Trusted education and language partnerships, paired with advice that
            stays focused on your goals.
          </p>
        </div>
        <div className={styles.credentialsGrid}>
          {credentials.map((item, index) => (
            <article key={item.brand} className={styles.credentialCard}>
              <div className={styles.credentialTopline}>
                <span className={styles.credentialMark}>0{index + 1}</span>
                <span className={styles.credentialLabel}>{item.title}</span>
              </div>
              <strong className={styles.credentialBrand}>{item.brand}</strong>
              <p className={styles.credentialDescription}>{item.description}</p>
              <span className={styles.credentialArrow} aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processCopy}>
          <p className="section-label">Your guided journey</p>
          <h2>One clear path from shortlist to take-off.</h2>
          <p className={styles.processIntro}>
            Explore each stage. Hover or tap a step to see how our team supports you.
          </p>
          <div className={styles.processList}>
            {processSteps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                className={`${styles.processStep} ${selectedStep === index ? styles.processStepActive : ""}`}
                onClick={() => setSelectedStep(index)}
                onMouseEnter={() => setSelectedStep(index)}
                aria-pressed={selectedStep === index}
              >
                <span className={styles.processStepNumber}>0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
                <span className={styles.stepArrow} aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.processVideoCard}>
          <div className={styles.videoFrame}>
            <Image
              src={selectedDestination.imageUrl}
              alt={`${selectedDestination.name} study destination preview`}
              fill
              sizes="(max-width: 900px) 90vw, 40vw"
              className={styles.videoImage}
            />
            <div className={styles.videoOverlay}>
              <span className={styles.previewLabel}>Your journey · Step 0{selectedStep + 1}</span>
              <div className={styles.videoContent} aria-live="polite">
                <span className={styles.videoNumber}>0{selectedStep + 1}</span>
                <h3>{activeStep.title}</h3>
                <p>{activeStep.detail}</p>
                <Link href="/contact">{activeStep.cta} <span aria-hidden="true">↗</span></Link>
              </div>
              <div className={styles.progressTrack} aria-hidden="true">
                <span style={{ width: `${((selectedStep + 1) / processSteps.length) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.destinationsSection}>
        <div className={styles.sectionHeading}>
          <div>
            <p className="section-label">Top destinations</p>
            <h2>Where will your ambition take you?</h2>
          </div>
          <p>Compare popular study destinations and select one to personalise your enquiry.</p>
        </div>
        <div className={styles.countryGrid}>
          {destinations.map((destination, index) => (
            <button
              key={destination.name}
              type="button"
              className={`${styles.countryCard} ${selectedIndex === index ? styles.activeCard : ""}`}
              onClick={() => setSelectedIndex(index)}
              aria-pressed={selectedIndex === index}
            >
              <div className={styles.flagFrame}>
                <Image
                  className={styles.flagImage}
                  src={destination.imageUrl}
                  alt={destination.imageAlt}
                  fill
                  unoptimized
                  sizes="(max-width: 580px) 92vw, (max-width: 900px) 46vw, 220px"
                />
              </div>
              <div className={styles.countryContent}>
                <div className={styles.countryMeta}>
                  <p>Study destination</p>
                  <span>0{index + 1}</span>
                </div>
                <h3>Study in {destination.name}</h3>
                <p className={styles.countryDescription}>{destination.description}</p>
                <div className={styles.cardAction}>
                  <span>{selectedIndex === index ? "Selected destination" : "Explore destination"}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <div className={styles.supportNote}>
        <div>
          <span>Still exploring?</span>
          <strong>Let’s find the country that fits your profile.</strong>
        </div>
        <p>Share your budget, course and timeline. We’ll shortlist realistic global options for you.</p>
        <Link className="btn btn-accent" href="/contact">Book a free counselling call <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
