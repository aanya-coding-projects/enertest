export interface CustomerRef {
  slug: string;
  customer: string;
  location: string;
  logo: string; // path under /public
  summary: string; // card-level teaser copy
  storyTitle: string;
  equipment: string[];
  services: string;
  story: string[]; // full case study body, one entry per paragraph
  highlights: string[];
}

export const customerRefs: CustomerRef[] = [
  {
    slug: "catl",
    customer: "CATL",
    location: "Auburn Hills, Michigan",
    logo: "/Images/logo1.png",
    summary:
      "From cell to pack validation, EnerTest supplied integrated cyclers, climatic chambers, BMS HIL testing, and engineering support to help an EV battery development facility expand its testing capabilities.",
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
  },
  {
    slug: "mercedes-benz-usa",
    customer: "Mercedes Benz USA",
    location: "Tuscaloosa, Alabama",
    logo: "/Images/logo6.png",
    summary:
      "EnerTest delivered an integrated battery testing solution featuring module and pack cyclers alongside a walk-in battery test chamber, providing engineering design, commissioning, and application support for reliable large-scale battery validation.",
    storyTitle: "Delivering Large-Scale Battery Testing in a Controlled Environment",
    equipment: [
      "Battery Module and Pack Cyclers",
      "Walk-In Battery Test Chamber",
    ],
    services: "Engineering design, system commissioning, and application support",
    story: [
      "As battery systems continue to grow in size and complexity, manufacturers require testing environments capable of validating full battery modules and packs under realistic operating conditions. A customer in Tuscaloosa sought a solution that combined high-performance cycling with environmental testing to streamline development and qualification.",
      "EnerTest designed and delivered an integrated testing system featuring Battery Module and Pack Cyclers paired with a Walk-In Battery Test Chamber, enabling comprehensive electrical and environmental validation within a single workflow. This configuration allows engineers to evaluate battery performance, reliability, and safety across a wide range of operating conditions while accommodating larger battery assemblies.",
      "Beyond supplying the equipment, EnerTest provided engineering design, system commissioning, and application support to ensure the testing platform was fully optimized for the customer's processes. Working closely with the project team, we helped deliver a reliable solution ready for long-term testing and future development needs.",
    ],
    highlights: [
      "Integrated battery module and pack cycling system",
      "Walk-in environmental test chamber for large battery assemblies",
      "Combined electrical and climatic testing capabilities",
      "Engineering design tailored to customer requirements",
      "Commissioning and application support for seamless deployment",
    ],
  },
  {
    slug: "briggs-stratton",
    customer: "Briggs & Stratton",
    location: "Stone Mountain, Georgia",
    logo: "/Images/logo7.png",
    summary:
      "EnerTest designed and delivered a complete battery manufacturing line, providing engineering design, machine integration, commissioning, and production support to help establish a reliable and efficient manufacturing operation.",
    storyTitle: "Building a Battery Manufacturing Line for Scalable Production",
    equipment: ["Complete Battery Manufacturing Line System"],
    services: "Engineering design, machine integration, commissioning, and production support",
    story: [
      "As battery manufacturing continues to expand, efficient production systems are essential for maintaining quality, consistency, and throughput. A customer in Stone Mountain partnered with EnerTest to develop a manufacturing solution capable of supporting reliable battery production from day one.",
      "EnerTest engineered and delivered a complete Battery Manufacturing Line System, integrating equipment and production processes into a streamlined manufacturing environment. Every aspect of the system was designed to support efficient operation while maintaining the flexibility required for evolving production demands.",
      "Our involvement extended well beyond equipment delivery. EnerTest provided engineering design, machine integration, commissioning, and production support to ensure the manufacturing line was fully operational and optimized for long-term performance. By working closely with the customer's production team, we helped establish a stable foundation for scalable battery manufacturing.",
    ],
    highlights: [
      "Complete battery manufacturing line system",
      "Machine integration and production line engineering",
      "System commissioning and operational startup",
      "Production support and process optimization",
      "Scalable manufacturing solution for future growth",
    ],
  },
  {
    slug: "tesla",
    customer: "Tesla",
    location: "Reno, Nevada",
    logo: "/Images/logo5.png",
    summary:
      "EnerTest supplied QA laboratory equipment, IQC solutions, and battery testing accessories, helping strengthen quality control processes through commissioning and application support.",
    storyTitle: "Strengthening Quality Control Through Advanced Laboratory Solutions",
    equipment: [
      "QA Laboratory Equipment",
      "Incoming Quality Control (IQC) Equipment",
      "Battery Testing Accessories and Components",
    ],
    services: "Commissioning and application support",
    story: [
      "Maintaining consistent product quality begins with reliable inspection and testing. A battery manufacturing customer in Reno required laboratory equipment capable of supporting both incoming quality control and ongoing product validation throughout the manufacturing process.",
      "EnerTest delivered a comprehensive laboratory solution including Quality Assurance (QA) Laboratory Equipment, Incoming Quality Control (IQC) Equipment, and a range of Battery Testing Accessories and Components. Together, these systems provided the customer with the tools needed to improve inspection efficiency, verify product quality, and support continuous manufacturing operations.",
      "To ensure a successful implementation, EnerTest provided commissioning and application support, assisting the customer in integrating the laboratory equipment into existing quality workflows. The result was a dependable testing environment capable of supporting consistent product verification and operational excellence.",
    ],
    highlights: [
      "QA laboratory equipment for battery manufacturing",
      "Incoming Quality Control (IQC) testing systems",
      "Battery testing accessories and supporting equipment",
      "Commissioning and application support",
      "Enhanced quality assurance and inspection capabilities",
    ],
  },
  {
    slug: "re-teck",
    customer: "Re-Teck",
    location: "La Puente, California",
    logo: "/Images/logo11.png",
    summary:
      "EnerTest supplied a high-performance battery cell cycler and provided commissioning, operator training, and application support to help the customer quickly begin reliable battery testing operations.",
    storyTitle: "Delivering Precision Battery Cell Testing with Expert Support",
    equipment: ["5V300A8CH Battery Cell Cycler"],
    services: "Commissioning, operator training, and application support",
    story: [
      "Accurate battery cell testing is critical for evaluating performance, reliability, and product consistency. A customer in La Puente selected EnerTest to provide a testing solution capable of delivering dependable cycling performance while ensuring a smooth transition into daily operation.",
      "EnerTest supplied a 5V300A8CH Battery Cell Cycler, designed to provide precise charge and discharge testing for battery cell evaluation. The system enables engineers to generate reliable performance data while supporting a wide variety of testing applications throughout product development and validation.",
      "To maximize the value of the installation, EnerTest provided commissioning, operator training, and application support, ensuring the customer's engineering team could confidently operate the system from the start. Our collaborative approach helped accelerate implementation while laying the foundation for long-term testing success.",
    ],
    highlights: [
      "High-performance battery cell cycling system",
      "Precision charge and discharge testing",
      "Professional commissioning and system startup",
      "Operator training for rapid adoption",
      "Ongoing application engineering support",
    ],
  },
  {
    slug: "eurofins",
    customer: "Eurofins",
    location: "Sunnyvale, California",
    logo: "/Images/logo8.png",
    summary:
      "EnerTest delivered battery cell, module, and pack cyclers, complemented by commissioning, training, and application support to create a comprehensive battery testing environment.",
    storyTitle: "Supporting Comprehensive Battery Testing from Cell to Pack",
    equipment: [
      "Battery Cell Cyclers",
      "Battery Module and Pack Cyclers",
    ],
    services: "Commissioning, operator training, and application support",
    story: [
      "As battery technologies evolve, development teams require flexible testing platforms capable of supporting every stage of validation. A customer in Sunnyvale partnered with EnerTest to implement a scalable testing solution covering both individual battery cells and larger module and pack assemblies.",
      "EnerTest delivered an integrated testing platform featuring Battery Cell Cyclers alongside Battery Module and Pack Cyclers, allowing the customer to perform consistent electrical performance testing across multiple stages of battery development. The combined solution provides the flexibility needed to support research, product validation, and ongoing testing programs.",
      "To ensure a seamless deployment, EnerTest provided commissioning, operator training, and application support. Working closely with the customer's engineering team, we helped establish an efficient testing environment capable of supporting both current projects and future development initiatives.",
    ],
    highlights: [
      "Battery cell, module, and pack cycling systems",
      "Integrated testing across multiple battery formats",
      "Professional commissioning and system startup",
      "Operator training and knowledge transfer",
      "Ongoing engineering and application support",
    ],
  },
];