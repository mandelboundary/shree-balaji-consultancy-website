import type { Metadata } from "next";
import Link from "next/link";
import { admissionPrograms } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Explore admission guidance for engineering, medical, MBA, law, pharmacy, nursing, and direct admission pathways.",
};

export default function AdmissionsPage() {
  return (
    <section>
      <h1>Admissions Guidance</h1>
      <p>
        We provide end-to-end support for applications, eligibility checks,
        documentation, and counselling across major academic streams.
      </p>
      <div className="card-grid section-gap">
        {Object.entries(admissionPrograms).map(([slug, program]) => (
          <article key={slug} className="card">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <p>
              <strong>Keywords:</strong> {program.keywords}
            </p>
            <Link className="btn btn-secondary" href={`/admissions/${slug}`}>
              View details
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
