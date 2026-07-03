import Image from "next/image";
import Link from "next/link";
import { customerRefs } from "@/data/customerRefs";

export default function CustomerReferencesMarquee() {
  return (
    <section id="refs-section" className="refs-section">
      <div className="refs-header">
        <span className="cap-tag">Trusted by industry leaders.</span>
      </div>

      <div className="refs-marquee-wrapper">
        <div className="refs-marquee-track">
          {[...customerRefs, ...customerRefs].map((ref, i) => (
            <Link
              key={`${ref.slug}-${i}`}
              href={`/case-studies/${ref.slug}`}
              className="refs-card"
            >
                <h3 className="refs-card-title">
                    {ref.customer}
                </h3>

                <Image
                    src={ref.logo}
                    alt={ref.customer}
                    width={140}
                    height={70}
                    className="refs-card-logo"
                />

                <p className="refs-card-summary">
                    {ref.summary}
                </p>

                <span className="refs-card-cta">
                    Read Case Study →
                </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}