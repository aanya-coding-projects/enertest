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
      {/* Header: back link, logo, title, subtitle, location */}
      <section className="cs-header">
        <div className="cs-header-inner">
          <div className="cs-hero-top-row">
            <Link href="/#refs-section" className="cs-back">
              ← Back to all customers
            </Link>
          </div>

          <span className="cs-tag">CASE STUDY</span>
          <h1 className="cs-title">{ref.customer}</h1>
          <h2 className="cs-subtitle">{ref.storyTitle}</h2>

          <div className="cs-meta-row">
            <span className="cs-meta-item">
              <span className="cs-meta-icon">⊙</span>
              <span>
                <span className="cs-meta-label">LOCATION</span>
                <span className="cs-meta-value">{ref.location}</span>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Content: story timeline + glance card, side by side */}
      <section className="cs-content">
        <div className="cs-content-inner cs-content-grid">
          <div className="cs-content-left">
            <ul className="cs-timeline">
              {ref.story.map((paragraph, i) => (
                <li key={i} className="cs-timeline-item">
                  <span className="cs-timeline-dot" />
                  <p className="cs-paragraph">{paragraph}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="cs-glance-card">
            <p className="cs-glance-title">PROJECT AT A GLANCE</p>

            <div className="cs-glance-section">
              <p className="cs-glance-label">DELIVERED EQUIPMENT</p>
              <ul className="cs-glance-list">
                {ref.equipment.map((e, i) => (
                  <li key={i} className="cs-glance-item">
                    <span className="cs-glance-dot" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cs-glance-section">
              <p className="cs-glance-label">SERVICES</p>
              <p className="cs-glance-text">{ref.services}</p>
            </div>

            <div className="cs-glance-section cs-glance-section-last">
              <p className="cs-glance-label">PROJECT HIGHLIGHTS</p>
              <ul className="cs-glance-list">
                {ref.highlights.map((h, i) => (
                  <li key={i} className="cs-glance-item">
                    <span className="cs-glance-dot" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA back to all customers */}
      <section className="cs-cta">
        <Link href="/#refs-section" className="cs-cta-link">
          See more customer stories <span className="cs-arrow">→</span>
        </Link>
      </section>
    </article>
  );
}