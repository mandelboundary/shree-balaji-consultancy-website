import type { Metadata } from "next";
import Link from "next/link";
import { phoneNumber, trustStats } from "@/lib/site-data";
import styles from "./career-counselling.module.css";

const guidanceAreas = [
  {
    number: "01",
    title: "Career discovery",
    description:
      "Understand your interests, strengths, learning style, and the work environments where you are most likely to thrive.",
    detail: "Interest and aptitude mapping",
  },
  {
    number: "02",
    title: "Course selection",
    description:
      "Compare streams, degrees, specialisations, and alternate routes before committing time and money to a programme.",
    detail: "Course-to-career alignment",
  },
  {
    number: "03",
    title: "College shortlisting",
    description:
      "Build a realistic shortlist based on eligibility, entrance scores, location, budget, placements, and student priorities.",
    detail: "Ambitious, target, and safe options",
  },
  {
    number: "04",
    title: "Admission strategy",
    description:
      "Turn every deadline, entrance test, document, and counselling round into one clear plan with expert follow-through.",
    detail: "A practical application roadmap",
  },
];

const studentStages = [
  {
    stage: "After Class 10",
    title: "Choose a stream with confidence",
    copy: "Explore Science, Commerce, Humanities, diploma, and skill-led routes through your interests—not outside pressure.",
    tags: ["Stream selection", "Subject planning", "Future pathways"],
  },
  {
    stage: "After Class 12",
    title: "Connect courses to real careers",
    copy: "Compare professional degrees, entrance routes, specialisations, and realistic college options before applications begin.",
    tags: ["Course selection", "Entrance strategy", "College shortlist"],
  },
  {
    stage: "After Graduation",
    title: "Plan your strongest next move",
    copy: "Evaluate postgraduate study, MBA, professional programmes, study abroad, or job-first routes with a long-term lens.",
    tags: ["PG planning", "Profile review", "India or abroad"],
  },
];

const journey = [
  {
    step: "Discover",
    title: "Tell us where you are now",
    copy: "We begin with your academic history, ambitions, concerns, budget, and family expectations.",
  },
  {
    step: "Assess",
    title: "Map strengths and possibilities",
    copy: "Your counsellor identifies suitable fields and explains what each path will actually require.",
  },
  {
    step: "Decide",
    title: "Compare your best-fit routes",
    copy: "Together, we narrow the options using clear trade-offs—not rankings and trends alone.",
  },
  {
    step: "Act",
    title: "Follow one practical roadmap",
    copy: "You leave with priorities, next actions, application milestones, and ongoing counsellor support.",
  },
];

const outcomes = [
  "A personalised career direction report",
  "Best-fit course and specialisation options",
  "College shortlist matched to budget and profile",
  "Entrance test and application timeline",
  "A one-to-one discussion with parents",
  "Follow-up support as decisions evolve",
];

export const metadata: Metadata = {
  title: "Career Counselling",
  description:
    "Personalised career counselling after Class 10, Class 12, and graduation with course, college, and admission planning.",
};

export default function CareerCounsellingPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Career counselling · One-to-one guidance</p>
          <h1>
            Find the path that fits <em>you.</em>
          </h1>
          <p className={styles.heroText}>
            Move from “What should I choose?” to a clear course, college, and
            career plan—built around your strengths, profile, and goals.
          </p>
          <div className={styles.actions}>
            <Link className="btn btn-primary" href="/contact">
              Book a counselling session <span aria-hidden="true">↗</span>
            </Link>
            <a className={styles.textLink} href={`tel:${phoneNumber}`}>
              Talk to a counsellor <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className={styles.assurances}>
            <li>Personalised, not templated</li>
            <li>Parent-inclusive planning</li>
            <li>India and abroad pathways</li>
          </ul>
        </div>

        <div className={styles.directionCard} aria-label="Your personalised guidance path">
          <div className={styles.directionTopline}>
            <span>Guidance map</span>
            <span>01 — 04</span>
          </div>
          <div className={styles.directionCore}>
            <span className={styles.pulse} aria-hidden="true" />
            <p>Your best-fit path</p>
            <strong>Strengths + options + strategy</strong>
          </div>
          <div className={styles.directionSteps}>
            <span>Discover</span>
            <span>Assess</span>
            <span>Decide</span>
            <span>Act</span>
          </div>
          <p className={styles.directionNote}>
            One clear direction, with the flexibility to grow as your goals do.
          </p>
        </div>
      </section>

      <section className={styles.stats} aria-label="Our counselling impact">
        {trustStats.map((item, index) => (
          <article key={item.label} className={styles.statCard}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.sectionHeadingLight}>
          <p className={styles.eyebrow}>What we help you decide</p>
          <h2>Guidance for every decision between “maybe” and “this is my plan.”</h2>
          <p>
            A complete counselling process that connects self-discovery to an
            achievable admission strategy.
          </p>
        </div>

        <div className={styles.serviceStrip} aria-hidden="true">
          <span>Career direction</span>
          <span>Course fit</span>
          <span>College shortlist</span>
          <span>Admission plan</span>
        </div>

        <div className={styles.guidanceGrid}>
          {guidanceAreas.map((area) => (
            <article key={area.number} className={styles.guidanceCard}>
              <div className={styles.guidanceNumber}>{area.number}</div>
              <div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
              <span className={styles.guidanceDetail}>{area.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.stageSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Guidance at the right time</p>
          <h2>Built around your stage—not a one-size-fits-all checklist.</h2>
        </div>
        <div className={styles.stageGrid}>
          {studentStages.map((item, index) => (
            <article key={item.stage} className={styles.stageCard}>
              <div className={styles.stageImage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item.stage}</p>
              </div>
              <div className={styles.stageBody}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ul>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.journeyIntro}>
          <p className={styles.eyebrow}>Your counselling journey</p>
          <h2>From uncertainty to an action plan in four thoughtful steps.</h2>
          <p>
            No rushed recommendations. We give each decision context, compare
            the trade-offs with you, and make the next step feel manageable.
          </p>
          <Link className={styles.outlineButton} href="/contact">
            Start with a free conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ol className={styles.journeyList}>
          {journey.map((item, index) => (
            <li key={item.step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.outcomesSection}>
        <div className={styles.outcomesCopy}>
          <p className={styles.eyebrow}>What you leave with</p>
          <h2>Useful answers you can act on—not another personality quiz.</h2>
        </div>
        <ul className={styles.outcomesList}>
          {outcomes.map((outcome, index) => (
            <li key={outcome}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {outcome}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>Your next step</p>
          <h2>A clearer future can begin with one honest conversation.</h2>
        </div>
        <div className={styles.ctaActions}>
          <Link className="btn btn-primary" href="/contact">
            Book free consultation <span aria-hidden="true">↗</span>
          </Link>
          <a href={`tel:${phoneNumber}`}>Call +91 {phoneNumber}</a>
        </div>
      </section>
    </div>
  );
}
