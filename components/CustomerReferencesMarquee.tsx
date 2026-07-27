import Image from "next/image";
import Link from "next/link";
import { customerRefs } from "@/data/customerRefs";
import type { SanityCaseStudy } from "@/sanity/lib/types";

type MarqueeRef = {
  slug: string;
  customer: string;
  logo?: string | null;
  summary?: string | null;
};

type Props = {
  refs?: (SanityCaseStudy | MarqueeRef)[];
};

export default function CustomerReferencesMarquee({ refs }: Props) {
  const items: MarqueeRef[] = refs?.length
    ? refs
    : customerRefs.map((r) => ({
        slug: r.slug,
        customer: r.customer,
        logo: r.logo,
        summary: r.summary,
      }));

  return (
    <section id="refs-section" className="refs-section">
      <div className="refs-header">
        <span className="cap-tag">Trusted by industry leaders.</span>
      </div>

      <div className="refs-marquee-wrapper">
        <div className="refs-marquee-track">
          {[...items, ...items].map((ref, i) => (
            <Link
              key={`${ref.slug}-${i}`}
              href={`/case-studies/${ref.slug}`}
              className="refs-card"
            >
              <h3 className="refs-card-title">{ref.customer}</h3>

              {ref.logo && (
                <Image
                  src={ref.logo}
                  alt={ref.customer}
                  width={140}
                  height={70}
                  className="refs-card-logo"
                  unoptimized={ref.logo.startsWith("http")}
                />
              )}

              <p className="refs-card-summary">{ref.summary}</p>

              <span className="refs-card-cta">Read Case Study →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
