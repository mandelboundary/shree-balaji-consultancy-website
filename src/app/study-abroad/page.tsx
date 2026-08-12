import type { Metadata } from "next";
import StudyAbroadClient from "./StudyAbroadClient";

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

export default function StudyAbroadPage() {
  return <StudyAbroadClient />;
}
