import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { customerRefs } from "@/data/customerRefs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return customerRefs.map((ref) => ({
    slug: ref.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const ref = customerRefs.find((r) => r.slug === slug);

  if (!ref) return {};

  return {
    title: `${ref.customer} Case Study | EnerTest`,
    description: ref.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  const ref = customerRefs.find((r) => r.slug === slug);

  if (!ref) {
    notFound();
  }

  return (
    <article className="case-study-page">
      <div className="case-study-hero">
        <Link href="/#refs-section" className="case-study-back">
          ← Back to all customers
        </Link>

        <div className="case-study-hero-top">
          <Image
            src={ref.logo}
            alt={`${ref.customer} logo`}
            width={160}
            height={54}
            className="case-study-logo"
          />

          <span className="refs-card-location">
            <span className="refs-pin">⊙</span>
            {ref.location}
          </span>
        </div>

        <h1 className="case-study-title">{ref.customer}</h1>
        <h2 className="case-study-subtitle">{ref.storyTitle}</h2>
      </div>

      <div className="case-study-body">
        {ref.story.map((paragraph, i) => (
          <p key={i} className="case-study-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="case-study-highlights">
        <p className="refs-card-label">PROJECT HIGHLIGHTS</p>

        <ul className="refs-card-list">
          {ref.highlights.map((h, i) => (
            <li key={i} className="refs-card-item">
              <span className="refs-bullet" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}