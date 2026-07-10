import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scholarships",
  description:
    "Scholarship assistance and education loan guidance for students in India and overseas programs.",
};

export default function ScholarshipsPage() {
  return (
    <section>
      <h1>Scholarship & Education Loan Guidance</h1>
      <p>
        We help students identify scholarships, prepare supporting documents,
        and understand education loan options and timelines.
      </p>
    </section>
  );
}
