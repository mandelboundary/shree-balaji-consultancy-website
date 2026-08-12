import type { Metadata } from "next";
import UniversityFinder, { type University } from "./university-finder";

export const metadata: Metadata = {
  title: "Universities",
  description:
    "Find universities by course, study level, location, and preferred annual budget.",
};

const universities: University[] = [
  {
    name: "Lovely Professional University",
    location: "Punjab",
    fields: ["Engineering", "Management", "Computer Applications"],
    levels: ["Undergraduate", "Postgraduate"],
    budget: "₹2–5 lakh",
  },
  {
    name: "Chandigarh University",
    location: "Punjab",
    fields: ["Engineering", "Management", "Computer Applications"],
    levels: ["Undergraduate", "Postgraduate"],
    budget: "₹2–5 lakh",
  },
  {
    name: "Amity University",
    location: "Uttar Pradesh",
    fields: ["Engineering", "Management", "Law"],
    levels: ["Undergraduate", "Postgraduate"],
    budget: "₹2–5 lakh",
  },
  {
    name: "Manipal University",
    location: "Karnataka",
    fields: ["Engineering", "Management", "Medical & Allied"],
    levels: ["Undergraduate", "Postgraduate"],
    budget: "₹5 lakh+",
  },
  {
    name: "SRM University",
    location: "Tamil Nadu",
    fields: ["Engineering", "Management", "Medical & Allied"],
    levels: ["Undergraduate", "Postgraduate"],
    budget: "₹2–5 lakh",
  },
  {
    name: "Amity Medical School",
    location: "Uttar Pradesh",
    fields: ["MBBS", "Medical & Allied"],
    levels: ["Undergraduate"],
    budget: "₹5 lakh+",
  },
  {
    name: "Karnataka Institute of Medical Sciences",
    location: "Karnataka",
    fields: ["MBBS", "Medical & Allied"],
    levels: ["Undergraduate"],
    budget: "₹2–5 lakh",
  },
  {
    name: "Apollo Medical College",
    location: "Telangana",
    fields: ["MBBS", "Medical & Allied"],
    levels: ["Undergraduate"],
    budget: "₹5 lakh+",
  },
  {
    name: "IMS & SUM Hospital",
    location: "Odisha",
    fields: ["MBBS", "Medical & Allied"],
    levels: ["Undergraduate"],
    budget: "₹2–5 lakh",
  },
  {
    name: "VIT",
    location: "Tamil Nadu",
    fields: ["Engineering", "Computer Applications"],
    levels: ["Undergraduate", "Postgraduate"],
    budget: "Up to ₹2 lakh",
  },
  {
    name: "KIIT",
    location: "Odisha",
    fields: ["Engineering", "Management", "Law"],
    levels: ["Undergraduate", "Postgraduate"],
    budget: "₹2–5 lakh",
  },
  {
    name: "Jain University",
    location: "Karnataka",
    fields: ["Management", "Computer Applications"],
    levels: ["Undergraduate", "Postgraduate"],
    budget: "₹2–5 lakh",
  },
  {
    name: "Sharda University",
    location: "Uttar Pradesh",
    fields: ["Engineering", "Management", "Medical & Allied"],
    levels: ["Undergraduate", "Postgraduate"],
    budget: "₹2–5 lakh",
  },
];

export default function UniversitiesPage() {
  return (
    <section>
      <div className="page-intro">
        <p className="section-label">University shortlisting</p>
        <h1>University Admission Guidance</h1>
        <p>
          Compare institutions by course, study level, preferred location, and
          budget. Use the finder to create a practical shortlist for a
          counsellor discussion.
        </p>
      </div>

      <UniversityFinder universities={universities} />

      <p className="seo-note section-gap">
        Disclaimer: Listing a university does not imply official affiliation.
        Budget bands are indicative for shortlisting only; program fees and
        eligibility must be verified with the institution.
      </p>
    </section>
  );
}
