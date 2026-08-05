import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./study-abroad.module.css";

export const metadata: Metadata = {
  title: "Study Abroad",
  description:
    "Study abroad consultancy for USA, UK, Canada, Australia, Germany with visa and SOP assistance.",
  keywords: [
    "Study Abroad Consultancy",
    "Overseas Education Consultant",
    "Study in USA",
    "Study in UK",
    "Study in Canada",
    "Study in Australia",
    "Study in Germany",
    "Student Visa Assistance",
    "SOP Writing",
    "Education Loan Guidance",
  ],
};

const countries = [
  {
    name: "USA",
    flag: "/flags/us.png",
    description: "Flexible programs, research pathways, and global campuses.",
  },
  {
    name: "UK",
    flag: "/flags/uk.png",
    description: "Focused degrees, strong universities, and shorter programs.",
  },
  {
    name: "Canada",
    flag: "/flags/canada.png",
    description: "Career-focused programs and a multicultural student experience.",
  },
  {
    name: "Australia",
    flag: "/flags/australia.png",
    description: "Globally recognized education with diverse study options.",
  },
  {
    name: "Germany",
    flag: "/flags/germany.png",
    description: "Technical excellence and high-value public education pathways.",
  },
];

export default function StudyAbroadPage() {
  return (
    <section>
      <div className={styles.intro}>
        <p className="section-label">Choose your destination</p>
        <h1>Study Abroad Consultancy</h1>
        <p>
          Get complete support for international admissions including university
          shortlisting, SOP review, visa documentation, and pre-departure guidance.
        </p>
      </div>

      <div className={styles.countryGrid}>
        {countries.map((country) => (
          <article className={styles.countryCard} key={country.name}>
            <Image
              className={styles.flagImage}
              src={country.flag}
              alt=""
              fill
              sizes="(max-width: 580px) 92vw, (max-width: 900px) 46vw, 220px"
            />
            <div className={styles.flagOverlay} />
            <div className={styles.countryContent}>
              <p>Study destination</p>
              <h2>Study in {country.name}</h2>
              <span>{country.description}</span>
              <Link href="/contact">
                Explore counselling <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.supportNote}>
        <strong>Not sure which country fits your profile?</strong>
        <p>
          Share your qualification, preferred course, timeline, and budget. Our
          counsellors can help you compare realistic options without making
          admission or visa guarantees.
        </p>
        <Link className="btn btn-primary" href="/contact">
          Request a counselling call
        </Link>
      </div>
    </section>
  );
}
