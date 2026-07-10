import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { admissionPrograms } from "@/lib/site-data";

type ProgramKey = keyof typeof admissionPrograms;

export function generateStaticParams() {
  return Object.keys(admissionPrograms).map((program) => ({ program }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ program: string }>;
}): Promise<Metadata> {
  const { program } = await params;
  const details = admissionPrograms[program as ProgramKey];

  if (!details) {
    return {};
  }

  return {
    title: details.title,
    description: details.description,
    keywords: details.keywords,
  };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ program: string }>;
}) {
  const { program } = await params;
  const details = admissionPrograms[program as ProgramKey];

  if (!details) {
    notFound();
  }

  return (
    <section>
      <h1>{details.title}</h1>
      <p>{details.description}</p>
      <div className="card section-gap">
        <p>
          <strong>SEO Keywords:</strong> {details.keywords}
        </p>
        <p>
          We support profile review, course selection, application strategy,
          document verification, and admission timeline tracking.
        </p>
      </div>
      <p className="seo-note section-gap">
        Compliance note: We provide expert admission guidance and documentation
        support. We do not use unverified claims such as guaranteed admission.
      </p>
    </section>
  );
}
