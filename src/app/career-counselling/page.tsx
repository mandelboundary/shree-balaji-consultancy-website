import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Counselling",
  description:
    "Career counselling for students after Class 10, 12, and graduation with program and university fit analysis.",
};

export default function CareerCounsellingPage() {
  return (
    <section>
      <h1>Career Counselling</h1>
      <p>
        Personalized counselling sessions to match student interests, aptitude,
        and budget with the right course and institution.
      </p>
    </section>
  );
}
