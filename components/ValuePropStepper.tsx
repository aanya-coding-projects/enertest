"use client";
import { useState, useEffect } from "react";

type Step = { highlight: string; rest: string };

const DEFAULT_STEPS: Step[] = [
  { highlight: "Industry-proven equipment", rest: " backed by mature battery manufacturing technology; not prototype-stage gear." },
  { highlight: "Local U.S. engineering", rest: " from concept through commissioning; no overseas support lag." },
  { highlight: "Faster ramp-up", rest: " through curated suppliers, system integration, and ROI-focused project management." },
  { highlight: "UL / NFPA / NEC compliance", rest: " built in; localization and safety standardization handled from day one." },
];

export default function ValuePropStepper({ steps }: { steps?: Step[] }) {
  const items = steps?.length ? steps : DEFAULT_STEPS;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % items.length), 2800);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <div className="vp-stepper">
      {items.map((step, i) => (
        <div
          key={i}
          className={`vp-step ${active === i ? "vp-step-active" : ""}`}
          onClick={() => setActive(i)}
        >
          <div className="vp-step-icon">
            <div className="vp-step-dot" />
          </div>
          <p className="vp-step-text">
            <span className="vp-step-highlight">{step.highlight}</span>
            {step.rest}
          </p>
        </div>
      ))}
    </div>
  );
}
