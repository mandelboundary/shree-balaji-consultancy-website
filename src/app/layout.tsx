import type { Metadata } from "next";
import Link from "next/link";
import { address, email, footerLinks, phoneNumber, phoneNumbers } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shreebalajiconsultancy.com"),
  title: {
    default: "Shree Balaji Consultancy | Direct College Admissions & Study Abroad",
    template: "%s | Shree Balaji Consultancy",
  },
  description:
    "Get expert admission guidance for private and deemed universities in India. Shree Balaji Consultancy offers study abroad counseling, career guidance, scholarships, and visa assistance.",
  keywords: [
    "Shree Balaji Consultancy",
    "Education Consultancy",
    "Admission Consultancy",
    "Direct Admission",
    "Management Quota Admission",
    "Study Abroad Consultancy",
    "Career Counselling",
  ],
  openGraph: {
    type: "website",
    url: "https://www.shreebalajiconsultancy.com",
    siteName: "Shree Balaji Consultancy",
    title: "Shree Balaji Consultancy | Admissions & Study Abroad",
    description:
      "Admissions in India and study abroad guidance backed by 21+ years of student support.",
    images: [
      {
        url: "https://www.shreebalajiconsultancy.com/og.png",
        width: 1731,
        height: 909,
        alt: "Shree Balaji Consultancy — admissions in India and study abroad worldwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Balaji Consultancy | Admissions & Study Abroad",
    description:
      "Admissions in India and study abroad guidance backed by 21+ years of student support.",
    images: ["https://www.shreebalajiconsultancy.com/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="top-strip">
          <div className="container top-strip-inner">
            <p>
              Trusted admission guidance for private and deemed universities.
            </p>
            <a href={`tel:${phoneNumber}`}>Helpline: +91 {phoneNumber}</a>
          </div>
        </div>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/" className="brand">
              Shree Balaji Consultancy
            </Link>
            <nav className="nav">
              <Link href="/about-us">About Us</Link>
              <Link href="/admissions">Admissions</Link>
              <Link href="/study-abroad">Study Abroad</Link>
              <Link href="/universities">Universities</Link>
              <Link href="/scholarships">Scholarships</Link>
              <Link href="/career-counselling">Career Counselling</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div className="header-actions">
              <Link className="btn btn-secondary btn-sm" href="/contact">
                Brochure
              </Link>
              <Link className="btn btn-primary btn-sm" href="/contact">
                Enquire Now
              </Link>
            </div>
          </div>
        </header>
        <main className="container page-section">{children}</main>
        <footer className="site-footer">
          <div className="container footer-main">
            <div className="footer-brand">
              <p className="footer-tagline">
                Give us the Responsibility to find an excellent career for you.
              </p>
              <div className="social-links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  ig
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  yt
                </a>
              </div>
            </div>
            <div>
              <p className="footer-heading">Explore</p>
              <ul className="footer-list">
                {footerLinks.explore.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer-heading">Visit</p>
              <ul className="footer-list">
                {footerLinks.visit.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer-heading">Links</p>
              <ul className="footer-list">
                {footerLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer-heading">Address</p>
              <address className="footer-address">
                {address.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </div>
            <div>
              <p className="footer-heading">Contact Us</p>
              <p className="footer-contact-label">Phone:</p>
              <ul className="footer-list">
                {phoneNumbers.map((num) => (
                  <li key={num}>
                    <a href={`tel:${num}`}>(+91) {num}</a>
                  </li>
                ))}
              </ul>
              <p className="footer-contact-label">Email:</p>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
          <div className="container footer-bottom">
            <p>
              <strong>Shree Balaji Consultancy</strong> — Your Gateway to Higher
              Education
            </p>
            <p className="footer-compliance">
              We provide guidance and documentation support. Admissions are
              subject to eligibility and institution rules.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
