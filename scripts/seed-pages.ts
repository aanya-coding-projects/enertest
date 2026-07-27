/**
 * Seeds singleton page documents and case studies into Sanity.
 * Run with: npx tsx scripts/seed-pages.ts
 *
 * Safe to re-run — uses createOrReplace for singletons and createIfNotExists for case studies.
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_WRITE_TOKEN!,
  useCdn: false,
});

// ── Home Page ─────────────────────────────────────────────────────────────────

async function seedHomePage() {
  await client.createOrReplace({
    _id: "homePage",
    _type: "homePage",
    heroTitle: "Battery Testing & Manufacturing Solutions",
    heroSubtitle: "We provide installations",
    valuePropTag: "WHY ENERTEST",
    valuePropHeadline: "The U.S. battery industry\nhas a gap. We fill it.",
    valuePropSubtext:
      "Few U.S. suppliers combine real battery manufacturing experience with local engineering support. EnerTest does both.",
    valuePropSteps: [
      { _key: "vp1", _type: "step", highlight: "Industry-proven equipment", rest: " backed by mature battery manufacturing technology; not prototype-stage gear." },
      { _key: "vp2", _type: "step", highlight: "Local U.S. engineering", rest: " from concept through commissioning; no overseas support lag." },
      { _key: "vp3", _type: "step", highlight: "Faster ramp-up", rest: " through curated suppliers, system integration, and ROI-focused project management." },
      { _key: "vp4", _type: "step", highlight: "UL / NFPA / NEC compliance", rest: " built in; localization and safety standardization handled from day one." },
    ],
    capabilitiesTag: "CAPABILITIES",
    capabilitiesHeadline: "From Cells to Complete Energy Systems. Engineered, Installed, Optimized.",
    capabilitiesSubheadline: "Reliable engineering, automation, and integration.",
    solutions: [
      {
        _key: "sol1",
        _type: "solution",
        title: "Test System Solutions",
        description: "Raw Material Testing. Finished Product Testing (Cell / System Level).",
        image: { _type: "image", externalUrl: "/Images/product1.png" },
        isSpecial: false,
      },
      {
        _key: "sol2",
        _type: "solution",
        title: "Production & Automation",
        description: "Cell Manufacturing Lines. Sorting Systems. Module & Pack Assembly Lines.",
        image: { _type: "image", externalUrl: "/Images/products/Pro48.png" },
        isSpecial: false,
      },
      {
        _key: "sol3",
        _type: "solution",
        title: "Engineering Services",
        description:
          "Systems Engineering & Integration. Onsite & Remote Technical Support. Automation / Utility Software & Test Logic. Custom Test Tools & Fixtures. Localization & Compliance Support.",
        image: { _type: "image", externalUrl: "/Images/prod7.png" },
        isSpecial: false,
      },
      {
        _key: "sol4",
        _type: "solution",
        title: "Maintenance & Auxiliary Systems",
        description: "Balancers. Recharge Units. Other Equipment.",
        image: { _type: "image", externalUrl: "/Images/aftersales/hv-pack-test-cable.png" },
        isSpecial: true,
      },
    ],
  });
  console.log("✓ Home page seeded");
}

// ── About Page ────────────────────────────────────────────────────────────────

async function seedAboutPage() {
  await client.createOrReplace({
    _id: "aboutPage",
    _type: "aboutPage",
    heroTitle: "A trusted engineering partner for battery testing and production system integration.",
    heroSubtitle: "Based in the United States. Built for the U.S. battery industry.",
    heroVideoUrl: "/Videos/Aboutt.mp4",
    whoWeAreTitle: "We are not just an equipment seller.",
    whoWeAreBody: [
      "EnerTest Solutions is an engineering-focused team with solid experience in battery manufacturing and testing. We design and implement turnkey battery testing systems, acting as an extension of the customer engineering team throughout design, implementation, and optimization.",
      "We help customers build long-term, sustainable battery testing and manufacturing capability. Our U.S.-based team provides complete project delivery: technical sales, on-site installation and commissioning, after-sales service, and project management.",
      "Strategic access to leading battery manufacturing and test-equipment partners in Asia ensures advanced technology and competitive delivery timelines.",
    ],
    stats: [
      { _key: "s1", _type: "stat", num: "7", label: "Step Project Process" },
      { _key: "s2", _type: "stat", num: "5+", label: "Customer Segments Served" },
      { _key: "s3", _type: "stat", num: "10+", label: "Completed U.S. Projects" },
      { _key: "s4", _type: "stat", num: "100%", label: "U.S.-Based Engineering" },
    ],
    painPointsTitle: "What problems do we solve?",
    painPoints: [
      "Few U.S.-based suppliers with real battery cell, module, and pack production line experience.",
      "Local suppliers are often expensive and slow to deliver, making ramp-up difficult.",
      "Many overseas equipment makers lack stable local engineering support.",
      "Slow after-sales response affects uptime, maintenance, and line optimization.",
      "Some equipment is not fully prepared for U.S. safety requirements (UL, NFPA, NEC).",
    ],
    valuePropTitle: "How we fill the gap.",
    valuePoints: [
      "Industry-proven equipment backed by mature battery manufacturing resources.",
      "Carefully selected suppliers with system integration capability to improve ROI and shorten ramp-up.",
      "Local U.S. engineering from concept design through site implementation.",
      "Fast technical support and after-sales response to keep the line running.",
      "Localization and compliance engineering: HMI, UL/NFPA-oriented design support.",
      "System-level project management covering procurement, logistics, customs, and DDP delivery.",
    ],
    strengthsTitle: "What sets us apart.",
    strengths: [
      {
        _key: "str1",
        _type: "strengthCard",
        title: "Access to Leading Manufacturing Resources",
        items: [
          "Access to proven battery equipment makers in Asia",
          "Coverage from cell to module and pack level",
          "Competitive cost and lead time",
          "Support for customization and solution optimization",
        ],
      },
      {
        _key: "str2",
        _type: "strengthCard",
        title: "Battery Manufacturing Process Expertise",
        items: [
          "Deep understanding of key module and pack processes",
          "Equipment selection matched to process flow",
          "Design focused on consistency, takt time, and yield",
          "Problem-solving for real production scenarios",
        ],
      },
      {
        _key: "str3",
        _type: "strengthCard",
        title: "Compliance-Driven Engineering",
        items: [
          "UL / NFPA / NEC design understanding",
          "Localized HMI and electrical standards",
          "Safer implementation for U.S. projects",
          "Reduced downstream rework risk",
        ],
      },
      {
        _key: "str4",
        _type: "strengthCard",
        title: "Local Execution & Project Management",
        items: [
          "Local technical sales and engineering support",
          "On-site installation and commissioning",
          "FAT / SAT coordination",
          "After-sales response and closed-loop problem solving",
        ],
      },
    ],
    processTitle: "Project delivery from RFQ to long-term support.",
    processSteps: [
      { _key: "p1", _type: "processStep", num: "01", title: "Requirements & RFQ Alignment", desc: "We listen first. Our team works with you to define performance specs, site constraints, and project scope before anything is proposed." },
      { _key: "p2", _type: "processStep", num: "02", title: "Technical Review & System Design", desc: "Our engineers conduct a thorough review and design a system architecture tailored to your chemistry, throughput, and compliance requirements." },
      { _key: "p3", _type: "processStep", num: "03", title: "Proposal / Contract", desc: "You receive a detailed technical proposal with full scope of supply, delivery timeline, and commercial terms — no hidden scoping." },
      { _key: "p4", _type: "processStep", num: "04", title: "System Integration & FAT", desc: "Equipment is assembled and validated at the factory through a Factory Acceptance Test before any shipment." },
      { _key: "p5", _type: "processStep", num: "05", title: "Installation, Commissioning & SAT", desc: "Our team installs, configures, and validates the system at your site with a Site Acceptance Test to confirm full operational readiness." },
      { _key: "p6", _type: "processStep", num: "06", title: "Training & System Handover", desc: "We train your operators and engineers on the system until they are fully confident. Documentation is provided in full." },
      { _key: "p7", _type: "processStep", num: "07", title: "Technical Support & Long-Term Service", desc: "Ongoing technical support, calibration, and maintenance services ensure your line keeps running at peak performance." },
    ],
    ctaTitle: "Ready to build your battery testing capability?",
    ctaSub: "Let our engineering team help you scope the right system for your application.",
  });
  console.log("✓ About page seeded");
}

// ── Contact Page ──────────────────────────────────────────────────────────────

async function seedContactPage() {
  await client.createOrReplace({
    _id: "contactPage",
    _type: "contactPage",
    heroTitle: "Get in Touch",
    heroSubtitle: "Our engineering team typically responds within one business day.",
    addressLine1: "1741 McCoba Dr SE, Ste A",
    addressLine2: "Smyrna, GA 30080",
    email: "sales@enertestsolutions.com",
    phone: "+1 (248) 533-4587",
    expectSteps: [
      { _key: "e1", _type: "expectStep", step: "01", text: "Your inquiry reaches our engineering team directly." },
      { _key: "e2", _type: "expectStep", step: "02", text: "We review your requirements and prepare a technical response." },
      { _key: "e3", _type: "expectStep", step: "03", text: "You hear back within one business day." },
    ],
  });
  console.log("✓ Contact page seeded");
}

// ── Case Studies ──────────────────────────────────────────────────────────────

const caseStudiesData = [
  {
    slug: "catl",
    customer: "CATL",
    location: "Auburn Hills, Michigan",
    logo: "/Images/logo1.png",
    summary: "From cell to pack validation, EnerTest supplied integrated cyclers, climatic chambers, BMS HIL testing, and engineering support to help an EV battery development facility expand its testing capabilities.",
    storyTitle: "Supporting EV Battery Development from Cell to Pack",
    equipment: [
      "Battery Cell, Module, and Pack Cyclers",
      "Double-deck climatic chambers for cells and battery packs",
      "BMS Hardware-in-the-Loop (HIL) testing platform",
      "Customized instrumentation and supporting accessories",
    ],
    services: "System design, installation support, commissioning, and application engineering",
    story: [
      "When a leading battery development facility in Auburn Hills expanded its testing capabilities, they needed an integrated solution that could support every stage of battery validation—from individual cells to complete battery packs.",
      "EnerTest delivered a comprehensive testing platform that included Battery Cell, Module, and Pack Cyclers, double-deck climatic chambers for both cells and battery packs, and a Battery Management System (BMS) Hardware-in-the-Loop testing platform. To ensure the solution matched the customer's specific testing requirements, we also designed and supplied customized instrumentation and supporting accessories.",
      "Our engineering team worked closely with the customer throughout the project, providing system design, installation support, commissioning, and application engineering to ensure a smooth deployment and rapid production readiness.",
    ],
    highlights: [
      "Complete battery testing ecosystem from cell to pack",
      "Environmental testing under controlled climatic conditions",
      "BMS Hardware-in-the-Loop validation",
      "Customized instrumentation tailored to project requirements",
      "Engineering design, commissioning, and ongoing application support",
    ],
    order: 1,
  },
  {
    slug: "mercedes-benz-usa",
    customer: "Mercedes Benz USA",
    location: "Tuscaloosa, Alabama",
    logo: "/Images/logo6.png",
    summary: "EnerTest delivered an integrated battery testing solution featuring module and pack cyclers alongside a walk-in battery test chamber, providing engineering design, commissioning, and application support for reliable large-scale battery validation.",
    storyTitle: "Delivering Large-Scale Battery Testing in a Controlled Environment",
    equipment: ["Battery Module and Pack Cyclers", "Walk-In Battery Test Chamber"],
    services: "Engineering design, system commissioning, and application support",
    story: [
      "As battery systems continue to grow in size and complexity, manufacturers require testing environments capable of validating full battery modules and packs under realistic operating conditions. A customer in Tuscaloosa sought a solution that combined high-performance cycling with environmental testing to streamline development and qualification.",
      "EnerTest designed and delivered an integrated testing system featuring Battery Module and Pack Cyclers paired with a Walk-In Battery Test Chamber, enabling comprehensive electrical and environmental validation within a single workflow.",
      "Beyond supplying the equipment, EnerTest provided engineering design, system commissioning, and application support to ensure the testing platform was fully optimized for the customer's processes.",
    ],
    highlights: [
      "Integrated battery module and pack cycling system",
      "Walk-in environmental test chamber for large battery assemblies",
      "Combined electrical and climatic testing capabilities",
      "Engineering design tailored to customer requirements",
      "Commissioning and application support for seamless deployment",
    ],
    order: 2,
  },
  {
    slug: "briggs-stratton",
    customer: "Briggs & Stratton",
    location: "Stone Mountain, Georgia",
    logo: "/Images/logo7.png",
    summary: "EnerTest designed and delivered a complete battery manufacturing line, providing engineering design, machine integration, commissioning, and production support to help establish a reliable and efficient manufacturing operation.",
    storyTitle: "Building a Battery Manufacturing Line for Scalable Production",
    equipment: ["Complete Battery Manufacturing Line System"],
    services: "Engineering design, machine integration, commissioning, and production support",
    story: [
      "As battery manufacturing continues to expand, efficient production systems are essential for maintaining quality, consistency, and throughput. A customer in Stone Mountain partnered with EnerTest to develop a manufacturing solution capable of supporting reliable battery production from day one.",
      "EnerTest engineered and delivered a complete Battery Manufacturing Line System, integrating equipment and production processes into a streamlined manufacturing environment.",
      "Our involvement extended well beyond equipment delivery. EnerTest provided engineering design, machine integration, commissioning, and production support to ensure the manufacturing line was fully operational and optimized for long-term performance.",
    ],
    highlights: [
      "Complete battery manufacturing line system",
      "Machine integration and production line engineering",
      "System commissioning and operational startup",
      "Production support and process optimization",
      "Scalable manufacturing solution for future growth",
    ],
    order: 3,
  },
  {
    slug: "tesla",
    customer: "Tesla",
    location: "Reno, Nevada",
    logo: "/Images/logo5.png",
    summary: "EnerTest supplied QA laboratory equipment, IQC solutions, and battery testing accessories, helping strengthen quality control processes through commissioning and application support.",
    storyTitle: "Strengthening Quality Control Through Advanced Laboratory Solutions",
    equipment: [
      "QA Laboratory Equipment",
      "Incoming Quality Control (IQC) Equipment",
      "Battery Testing Accessories and Components",
    ],
    services: "Commissioning and application support",
    story: [
      "Maintaining consistent product quality begins with reliable inspection and testing. A battery manufacturing customer in Reno required laboratory equipment capable of supporting both incoming quality control and ongoing product validation throughout the manufacturing process.",
      "EnerTest delivered a comprehensive laboratory solution including Quality Assurance (QA) Laboratory Equipment, Incoming Quality Control (IQC) Equipment, and a range of Battery Testing Accessories and Components.",
      "To ensure a successful implementation, EnerTest provided commissioning and application support, assisting the customer in integrating the laboratory equipment into existing quality workflows.",
    ],
    highlights: [
      "QA laboratory equipment for battery manufacturing",
      "Incoming Quality Control (IQC) testing systems",
      "Battery testing accessories and supporting equipment",
      "Commissioning and application support",
      "Enhanced quality assurance and inspection capabilities",
    ],
    order: 4,
  },
  {
    slug: "re-teck",
    customer: "Re-Teck",
    location: "La Puente, California",
    logo: "/Images/logo11.png",
    summary: "EnerTest supplied a high-performance battery cell cycler and provided commissioning, operator training, and application support to help the customer quickly begin reliable battery testing operations.",
    storyTitle: "Delivering Precision Battery Cell Testing with Expert Support",
    equipment: ["5V300A8CH Battery Cell Cycler"],
    services: "Commissioning, operator training, and application support",
    story: [
      "Accurate battery cell testing is critical for evaluating performance, reliability, and product consistency. A customer in La Puente selected EnerTest to provide a testing solution capable of delivering dependable cycling performance while ensuring a smooth transition into daily operation.",
      "EnerTest supplied a 5V300A8CH Battery Cell Cycler, designed to provide precise charge and discharge testing for battery cell evaluation.",
      "To maximize the value of the installation, EnerTest provided commissioning, operator training, and application support, ensuring the customer's engineering team could confidently operate the system from the start.",
    ],
    highlights: [
      "High-performance battery cell cycling system",
      "Precision charge and discharge testing",
      "Professional commissioning and system startup",
      "Operator training for rapid adoption",
      "Ongoing application engineering support",
    ],
    order: 5,
  },
  {
    slug: "eurofins",
    customer: "Eurofins",
    location: "Sunnyvale, California",
    logo: "/Images/logo8.png",
    summary: "EnerTest delivered battery cell, module, and pack cyclers, complemented by commissioning, training, and application support to create a comprehensive battery testing environment.",
    storyTitle: "Supporting Comprehensive Battery Testing from Cell to Pack",
    equipment: ["Battery Cell Cyclers", "Battery Module and Pack Cyclers"],
    services: "Commissioning, operator training, and application support",
    story: [
      "As battery technologies evolve, development teams require flexible testing platforms capable of supporting every stage of validation. A customer in Sunnyvale partnered with EnerTest to implement a scalable testing solution covering both individual battery cells and larger module and pack assemblies.",
      "EnerTest delivered an integrated testing platform featuring Battery Cell Cyclers alongside Battery Module and Pack Cyclers, allowing the customer to perform consistent electrical performance testing across multiple stages of battery development.",
      "To ensure a seamless deployment, EnerTest provided commissioning, operator training, and application support.",
    ],
    highlights: [
      "Battery cell, module, and pack cycling systems",
      "Integrated testing across multiple battery formats",
      "Professional commissioning and system startup",
      "Operator training and knowledge transfer",
      "Ongoing engineering and application support",
    ],
    order: 6,
  },
  {
    slug: "farasis-energy",
    customer: "Farasis Energy",
    location: "North America",
    logo: "/Images/logo3.png",
    summary: "EnerTest partnered with a global battery manufacturer to provide battery testing solutions, engineering support, replacement components, and ongoing technical services as the customer expanded its North American operations.",
    storyTitle: "Supporting Battery Manufacturing Growth Through Long-Term Engineering Partnership",
    equipment: [
      "Battery Cell Charge and Discharge Testing Solutions",
      "Replacement Power Cables",
    ],
    services: "Engineering support, application assistance, and technical consulting",
    story: [
      "As battery manufacturers continue expanding production capacity in North America, reliable testing equipment and responsive engineering support become critical to maintaining operational efficiency. EnerTest partnered with a leading global battery manufacturer to provide ongoing technical expertise and testing solutions throughout multiple phases of their expansion.",
      "The collaboration included engineering support services, battery cell charge and discharge testing solutions, replacement power cables, and customized technical assistance to keep testing systems operating at peak performance.",
      "Beyond equipment delivery, EnerTest established a long-term service relationship by providing annual engineering support, application assistance, and technical consulting.",
    ],
    highlights: [
      "Battery cell charge and discharge testing solutions",
      "Engineering support and technical consulting",
      "Replacement testing components and accessories",
      "Long-term service partnership",
      "Application support for evolving manufacturing requirements",
      "Support for North American battery manufacturing expansion",
    ],
    order: 7,
  },
  {
    slug: "henry-ford-college",
    customer: "Henry Ford College",
    location: "Dearborn, Michigan",
    logo: "/Images/logo9.png",
    summary: "EnerTest partnered with Henry Ford College to design, equip, and commission a new battery testing laboratory, providing engineering expertise, equipment integration, and technical support from planning through deployment.",
    storyTitle: "Building the Next Generation of Battery Testing Education",
    equipment: [
      "Battery Cyclers",
      "Environmental Testing Equipment",
      "Chillers and Supporting Laboratory Systems",
    ],
    services: "Laboratory design, equipment procurement, commissioning, and application support",
    story: [
      "As demand for skilled battery engineers continues to grow, educational institutions require modern laboratories that provide students with hands-on experience using industry-standard equipment. Henry Ford College partnered with EnerTest to develop a comprehensive battery testing laboratory that would support both workforce development and advanced technical education.",
      "Working alongside the college, design consultants, and project stakeholders, EnerTest provided engineering guidance throughout the planning and implementation process. EnerTest supplied and coordinated the installation of battery cyclers, environmental testing equipment, chillers, and supporting laboratory systems.",
      "Following equipment delivery, our engineers provided commissioning, application support, and technical guidance to help prepare the laboratory for instructional and research activities. The completed facility provides Henry Ford College with a modern battery testing laboratory capable of supporting education, research, and workforce training.",
    ],
    highlights: [
      "Complete battery testing laboratory design and implementation",
      "Laboratory infrastructure planning and equipment integration",
      "Battery cyclers and environmental testing systems",
      "Equipment procurement and vendor coordination",
      "Commissioning, application engineering, and technical support",
      "Modern laboratory supporting battery education and workforce development",
    ],
    order: 8,
  },
  {
    slug: "ford-motor-company",
    customer: "Ford Motor Company",
    location: "United States",
    logo: "/Images/logo4.png",
    summary: "EnerTest has partnered with Ford on a range of battery manufacturing, laboratory, and validation initiatives, providing QA equipment, engineering support, HiL technologies, calibration services, and specialized production solutions across multiple programs.",
    storyTitle: "Supporting Battery Innovation Across Manufacturing, Testing, and Validation",
    equipment: [
      "Battery Manufacturing Quality Assurance Laboratory Equipment",
      "Hardware-in-the-Loop (HiL) and Battery Cell Simulation Technologies",
      "Production Tooling and Machine Vision Solutions",
    ],
    services: "Engineering design, equipment procurement, calibration, and long-term technical support",
    story: [
      "As electric vehicle programs continue to expand, automotive manufacturers require engineering partners capable of supporting every stage of battery development—from manufacturing and quality assurance to testing, validation, and production support.",
      "EnerTest has collaborated with Ford across multiple battery initiatives, providing engineering expertise and technical solutions for battery manufacturing facilities, quality assurance laboratories, and advanced validation programs.",
      "By combining equipment integration with responsive engineering support, EnerTest continues to help customers adapt to evolving battery technologies while providing dependable technical expertise throughout the project lifecycle.",
    ],
    highlights: [
      "Battery manufacturing quality assurance laboratory support",
      "Hardware-in-the-Loop (HiL) and battery simulation technologies",
      "Engineering design and technical consulting",
      "Equipment procurement and system integration",
      "Calibration and lifecycle support services",
      "Manufacturing tooling and production support",
      "Long-term engineering partnership across multiple battery programs",
    ],
    order: 9,
  },
];

async function seedCaseStudies() {
  for (const cs of caseStudiesData) {
    await client.createIfNotExists({
      _id: `caseStudy-${cs.slug}`,
      _type: "caseStudy",
      ...cs,
      slug: { _type: "slug", current: cs.slug },
      logo: { _type: "image", externalUrl: cs.logo },
    });
    console.log(`  ✓ ${cs.customer}`);
  }
  console.log("✓ Case studies seeded");
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function run() {
  console.log("Seeding page content...\n");
  await seedHomePage();
  await seedAboutPage();
  await seedContactPage();
  console.log("\nSeeding case studies...");
  await seedCaseStudies();
  console.log("\n✓ All done.");
}

run().catch((err) => { console.error(err); process.exit(1); });
