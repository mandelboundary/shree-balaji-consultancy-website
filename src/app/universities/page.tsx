import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universities",
  description:
    "University admission landing content for institutions where admissions guidance is available.",
};

const universities = [
  "Lovely Professional University",
  "Chandigarh University",
  "Amity University",
  "Manipal University",
  "SRM University",
  "VIT",
  "KIIT",
  "Jain University",
  "Sharda University",
];

export default function UniversitiesPage() {
  return (
    <section>
      <h1>University Admission Guidance</h1>
      <p>
        Explore admissions support for top private and deemed institutions.
        Pages should only be published for institutions where your team is
        authorized to assist.
      </p>
      <div className="card-grid section-gap">
        {universities.map((name) => (
          <article className="card" key={name}>
            <h3>Admission in {name}</h3>
            <p>
              Course shortlisting, eligibility checks, and application guidance.
            </p>
          </article>
        ))}
      </div>
      <p className="seo-note section-gap">
        Disclaimer: Listing a university does not imply official affiliation.
      </p>
    </section>
  );
}
