import type { Metadata } from "next";
import { phoneNumber, locations } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shree Balaji Consultancy for admission counselling and study abroad guidance.",
};

export default function ContactPage() {
  return (
    <section>
      <h1>Contact Shree Balaji Consultancy</h1>
      <p>
        Call us to discuss admissions, documentation, counselling, scholarship,
        and visa support.
      </p>
      <div className="card section-gap">
        <p>
          <strong>Phone:</strong> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </p>
      </div>
      <div className="section-gap">
        <h2>Location-Focused Pages</h2>
        <ul className="list">
          {locations.map((location) => (
            <li key={location}>{location}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
