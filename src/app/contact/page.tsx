import type { Metadata } from "next";
import { email, offices } from "@/lib/site-data";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shree Balaji Consultancy offices in Jamshedpur, Ranchi, and Bangalore for admission counselling and study abroad guidance.",
};

function locationQuery(address: readonly string[]) {
  return encodeURIComponent(address.join(", "));
}

export default function ContactPage() {
  return (
    <section>
      <div className={styles.intro}>
        <p className="section-label">Three offices, one guidance team</p>
        <h1>Get in touch with Shree Balaji Consultancy.</h1>
        <p>
          Visit or call our Jamshedpur, Ranchi, or Bangalore office for
          admission counselling, documentation, scholarships, and study abroad
          support.
        </p>
      </div>

      <div className={styles.officeGrid}>
        {offices.map((office) => {
          const query = locationQuery(office.address);

          return (
            <article className={styles.officeCard} key={office.city}>
              <div className={styles.mapFrame}>
                <iframe
                  title={`${office.city} office location on Google Maps`}
                  src={`https://www.google.com/maps?q=${query}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className={styles.officeBody}>
                <div className={styles.officeHeading}>
                  <div>
                    <p>{office.label}</p>
                    <h2>{office.city}</h2>
                  </div>
                  <span aria-hidden="true">↗</span>
                </div>

                <div className={styles.detailBlock}>
                  <p className={styles.detailLabel}>Address</p>
                  <address>
                    {office.address.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </div>

                <div className={styles.detailBlock}>
                  <p className={styles.detailLabel}>Phone</p>
                  <div className={styles.phoneList}>
                    {office.phones.map((phone) => (
                      <a href={`tel:${phone}`} key={phone}>
                        +91 {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className={styles.detailBlock}>
                  <p className={styles.detailLabel}>Email</p>
                  <a className={styles.email} href={`mailto:${email}`}>
                    {email}
                  </a>
                </div>

                <div className={styles.officeActions}>
                  <a
                    className="btn btn-primary"
                    href={`tel:${office.phones[0]}`}
                  >
                    Call office
                  </a>
                  <a
                    className="btn btn-secondary"
                    href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open map
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.contactBanner}>
        <div>
          <p className={styles.bannerLabel}>Prefer email?</p>
          <h2>Tell us what you are planning.</h2>
          <p>
            Share your qualification, preferred course, city, budget, and
            callback time so the right counsellor can respond with context.
          </p>
        </div>
        <a className="btn btn-accent" href={`mailto:${email}`}>
          Email our team
        </a>
      </div>
    </section>
  );
}
