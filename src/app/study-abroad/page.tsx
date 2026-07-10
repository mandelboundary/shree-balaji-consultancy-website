import type { Metadata } from "next";

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

const countries = ["USA", "UK", "Canada", "Australia", "Germany"];

export default function StudyAbroadPage() {
  return (
    <section>
      <h1>Study Abroad Consultancy</h1>
      <p>
        Get complete support for international admissions including university
        shortlisting, SOP review, visa documentation, and pre-departure guidance.
      </p>
      <div className="card-grid section-gap">
        {countries.map((country) => (
          <article className="card" key={country}>
            <h3>Study in {country}</h3>
            <p>
              Country-specific counselling for course selection, applications,
              and student visa process.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
