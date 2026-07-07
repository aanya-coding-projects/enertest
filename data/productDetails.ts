// ─── Shared types ───────────────────────────────────────────────────────────

export type Supplement = {
  label: string;
  src: string;
  description?: string;
};

export type StandardProductEntry = {
  layout?: "standard"; // default — existing products don't need to set this
  applications: string[];
  features: string[];
  carouselImages: string[];
  supplements: Supplement[];
  supplementLayout?: "stacked" | "row4";
  gallery?: { label: string; src: string }[];
};

export type IntroBlock = {
  heading: string;
  body?: string;
  list?: string[];
  image: string;
  reverse?: boolean; // image on the left instead of right
};

export type ApplicationCard = {
  title: string;
  description: string;
  image: string;
};

export type AdvancedProductEntry = {
  layout: "advanced";
  carouselImages: string[];
  intro: IntroBlock[];
  features: string[];
  applicationCards: ApplicationCard[];
  videoEmbedUrl?: string;
  specsImage?: string;
  downloadUrl?: string;
};

export type ProductEntry = StandardProductEntry | AdvancedProductEntry;

// ─── Product data ─────────────────────────────────────────────────────────────

export const PRODUCT_DATA: Record<string, ProductEntry> = {
  "battery-cell-cycler": {
    carouselImages: [
      "/Images/products/Pro1.png",
      "/Images/products/Pro2.png",
      "/Images/products/Pro3.png",
      "/Images/products/Pro4.png",
    ],
    applications: [
      "Cell formation and capacity sorting",
      "DCIR testing",
      "Electrochemical and physical material research",
      "Laboratory testing of battery cells",
      "Quality assurance & failure analysis",
      "EV simulation working condition testing",
      "Battery repurposing and recycling",
    ],
    features: [
      "Intuitive automation control software with powerful test-run editing capabilities",
      "NTC or K-type thermocouple associated with each test channel",
      "Control modes: CC, CV, CP, CR, Pulse, and simulated working conditions",
      "I/O ports for integration of external equipment",
      "Data security against power outage",
      "High-frequency between-channel isolation",
      "Integration of cell expansion test system possible",
      "Customizable power cable length",
      "Battery racks, fixtures, and automated calibration instruments available upon request",
    ],
    supplements: [
      { label: "System Overview", src: "/Images/products/Pro5.png" },
      { label: "Channel Detail", src: "/Images/products/Pro6.png" },
    ],
    supplementLayout: "stacked",
  },

  "cell-formation-power-electronics": {
    carouselImages: [
      "/Images/products/Pro7.png",
      "/Images/products/Pro8.png",
      "/Images/products/Pro9.png",
      "/Images/products/Pro10.png",
    ],
    applications: [
      "Cell formation and grading",
      "Power electronics validation testing",
      "High-efficiency energy conversion systems",
      "Battery production line integration",
      "Industrial-scale formation equipment",
    ],
    features: [
      "Innovative 2-Stage DC Busbar Architecture",
      "Highest energy conversion efficiency (>80%)",
      "Cost-effective cell testing channel design",
      "Modular hardware design for easy maintenance and scalability",
      "Compact footprint for optimized factory space utilization",
    ],
    supplements: [
      { label: "System Overview", src: "/Images/products/Pro11.png" },
      { label: "Architecture Detail", src: "/Images/products/Pro12.png" },
    ],
    supplementLayout: "stacked",
  },

  "powder-resistivity-compaction-density-system": {
    layout: "advanced",
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-PRCD3100.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/PRCD3100.webp",
    ],
    intro: [
      {
        heading: "Introduction",
        body: "Accurate evaluation of electronic resistance in battery materials and electrodes is critical for predicting final cell internal resistance. The PRCD3100 enables direct powder resistivity measurement and compaction density testing under controlled pressure — at conditions that reflect actual electrode manufacturing, not just tapped density. This closes the gap between material characterization and production-scale performance.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-details-15.webp",
      },
      {
        heading: "Testing Capabilities",
        list: [
          "Powder resistivity under variable compaction pressure (up to 350 MPa)",
          "Compaction density at production-relevant pressures",
          "Two-probe and four-probe resistance measurement modes, freely switchable",
          "Real-time parameter curves: pressure, thickness, resistance, resistivity, conductivity",
          "Batch-to-batch stability monitoring for incoming material QC",
        ],
        image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-details-16.webp",
        reverse: true,
      },
      {
        heading: "Why Compaction Density Matters",
        body: "When testing powder conductivity, the compaction density should reflect the actual electrode compaction — not tapped density. Using LCO as an example: below 3.87 g/cm³ (pressure <75 MPa), a modified powder sample is less conductive than unmodified. Above 3.87 g/cm³, it outperforms — and the gap grows with pressure. Testing at the wrong pressure produces the wrong conclusion.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/Compaction-Densitygcm%C2%B3.webp",
      },
      {
        heading: "System Design",
        list: [
          "Servo-motor driven pressure system, up to 350 MPa",
          "High-precision displacement sensor for real-time thickness measurement",
          "Purpose-built clamp simplifies powder loading and cleaning",
          "One-stop data collection: pressure, resistance, thickness, temperature, humidity",
          "Integrated control and measurement — no external instruments required",
          "Automatic report generation with resistivity and compaction density values",
        ],
        image: "https://iestbattery.com/wp-content/uploads/2024/04/PRCD3100.webp",
        reverse: true,
      },
    ],
    features: [
      "Ultra-wide pressurization range (maximum 350 MPa) and resistance range (1200 MΩ)",
      "Two-probe and four-probe dual measurement modes, freely switchable",
      "Fully automatic test software with one-click start and free parameter setting",
      "Real-time monitoring of pressure, temperature, humidity, thickness, resistance, resistivity, conductivity, and compaction density",
      "Multiple test modes: pressurization, single-point pressure relief, steady-state pressure relief",
      "Standard thickness blocks and resistance blocks calibrated by a third-party metrology institute",
    ],
    applicationCards: [
      {
        title: "High-Nickel Cathode Materials",
        description: "Quantitative characterization of conductive network improvement via surface coating on NMC/NCA powders, demonstrating how modification promotes electron transport.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-details-19.webp",
      },
      {
        title: "Lithium-rich Materials",
        description: "Analysis of modification approaches for lithium-rich cathode materials, showing how surface structure regulation reduces powder resistivity.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-details-20.webp",
      },
      {
        title: "Silicon-based Anode Materials",
        description: "Comparison of Si/graphite composites under varying Si content (3%, 6%, 10%) and sintering temperatures to optimize anode formulation resistivity.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-details-28.webp",
      },
      {
        title: "Anode Materials & Conductive Agents",
        description: "Statistically significant differentiation of powder resistivity and compaction density across anode active materials and conductive additives.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-details-29.webp",
      },
      {
        title: "Elastic Modulus: LCO",
        description: "Plastic and elastic deformation analysis during LCO compaction under steady-state mode, revealing how particle size influences rebound behavior.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-details-22.webp",
      },
      {
        title: "Carbon Material Compression",
        description: "Comparison of graphite vs. hard carbon compressive resilience, attributed to differences in their microstructural architecture.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-details-23.webp",
      },
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/93ccxnX7MpU",
    specsImage: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-details-26-e1745223957228.webp",
    downloadUrl: "https://iestbattery.com/wp-content/uploads/2026/04/IEST-PRCD-Series.pdf",
  },

  "in-situ-anode-swelling-screening-system": {
    layout: "advanced",
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Silicon-Based-Anode-Swelling-In-Situ-Screening-System.webp",
    ],
    intro: [
      {
        heading: "Introduction",
        body: "Silicon anodes offer 4200 mAh/g theoretical capacity but undergo >300% volume expansion during lithiation, continuously breaking the SEI film and causing rapid capacity fade. Silicon-carbon composites are the most industrially promising solution — but quantifying their volume expansion during charge/discharge is essential for material screening, composite design, and cell qualification.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/%E8%B5%84%E6%BA%90-3_12.webp",
      },
      {
        heading: "Measurement Principle",
        body: "The RSS1400 applies controlled pressure to four cell channels simultaneously while measuring thickness change in real time via high-precision displacement sensors. Expansion data is automatically synchronized with the charge/discharge curve, enabling direct correlation between electrochemical events and mechanical swelling behavior.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/%E8%B5%84%E6%BA%90-5_13-e1721370554825.webp",
        reverse: true,
      },
      {
        heading: "System Design",
        list: [
          "Four-channel simultaneous testing with independent pressure control per channel",
          "Servo-motor pressure control (RSS1400) up to 100 kg with 0.1 kg / ±0.3% F.S. accuracy",
          "0.01 μm displacement resolution for sub-micron thickness detection",
          "Compatible with model coin cells, multi-layer laminates, and pouch cells up to 60×90×4 mm",
          "Visual operation interface with one-click data export",
          "Synchronized recording of expansion thickness and charge/discharge data",
        ],
        image: "https://iestbattery.com/wp-content/uploads/2024/04/%E8%B5%84%E6%BA%90-6_14.webp",
      },
    ],
    features: [
      "In-situ characterization of silicon-based cell expansion under variable controlled pressure",
      "Four-channel simultaneous testing for high-throughput parallel screening",
      "Compatible with model coin cells, multi-layer laminates, and pouch cells",
      "Servo-motor pressure control up to 100 kg with 0.1 kg resolution",
      "0.01 μm thickness detection resolution (RSS1400 model)",
      "Visual operation interface with one-click data export",
    ],
    applicationCards: [
      {
        title: "Model Coin Cell Swelling",
        description: "In-situ swelling test of NCM811/SiC full coin cells (~3 mAh) over 3 charge/discharge cycles. Expansion thickness COV of only 0.6%, confirming system repeatability for material screening.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/%E8%B5%84%E6%BA%90-7_15.webp",
      },
      {
        title: "Multi-layer Laminate Swelling",
        description: "Testing of NCM811/SiC stacked cells (~400 mAh) at constant 0.1 MPa. Maximum expansion ratio ~12.5%; COV between three parallel samples = 1.4%.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/%E8%B5%84%E6%BA%90-8_16.webp",
      },
      {
        title: "Pouch Cell Swelling",
        description: "In-situ testing of wound pouch cells (~400 mAh) at constant 0.1 MPa. Maximum expansion ratio when fully charged ~4.3%; COV = 1.9% across three parallel samples.",
        image: "https://iestbattery.com/wp-content/uploads/2024/04/%E8%B5%84%E6%BA%90-9_17.webp",
      },
    ],
    downloadUrl: "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Silicon-Based-Anode-Swelling-In-Situ-Screening-System.pdf",
  },

  "cell-expansion-test-kit": {
    carouselImages: [
      "/Images/products/Pro13.png",
      "/Images/products/Pro14.png",
      "/Images/products/Pro15.png",
      "/Images/products/Pro15.png",
    ],
    applications: [
      "Measurement of battery cell swelling during charge and discharge cycles",
      "Simulation of real-world operating conditions",
      "Research and development of lithium-ion cells",
      "Cell performance characterization and validation",
      "Quality control and reliability analysis",
    ],
    features: [
      "High-precision servo motor control system",
      "Integrated thickness and expansion force measurement sensors",
      "Multi-channel data logging system",
      "Accurate quantification of cell swelling behavior",
      "Real-time monitoring throughout charge and discharge cycles",
      "Offline software tool for reviewing and analyzing recorded data",
      "Designed to replicate practical battery operating conditions",
    ],
    supplements: [],
    supplementLayout: "stacked",
  },

  "battery-module-pack-cycler": {
    carouselImages: [
      "/Images/products/Pro16.png",
      "/Images/products/Pro17.png",
      "/Images/products/Pro16.png",
      "/Images/products/Pro17.png",
    ],
    applications: [
      "Life cycle testing",
      "Capacity measurement",
      "Performance evaluation under different conditions",
      "Quality control",
      "Battery Management System (BMS) validation",
      "Electric vehicle battery module testing",
      "Energy storage system applications",
    ],
    features: [
      "Repeated charge and discharge cycling for module characterization",
      "Comprehensive analysis of battery performance, capacity, and lifespan",
      "Identification of degradation, safety concerns, and efficiency issues",
      "Supports quality assurance and reliability assessment",
      "Ideal for electric vehicles, energy storage systems, and rechargeable battery applications",
      "Enables validation and optimization of Battery Management Systems (BMS)",
    ],
    supplements: [
      { label: "System Overview", src: "/Images/products/Pro18.png" },
      { label: "Module Architecture", src: "/Images/products/Pro19.png" },
    ],
    supplementLayout: "stacked",
  },

  "cell-climatic-chamber": {
    carouselImages: [
      "/Images/products/Pro28.png",
      "/Images/products/Pro29.png",
      "/Images/products/Pro30.png",
    ],
    applications: [
      "High and low temperature testing of battery cells",
      "Humidity and damp heat environmental simulation",
      "Reliability testing under extreme conditions",
      "R&D validation for electrochemical performance",
      "Quality assurance for battery lifecycle durability",
    ],
    features: [
      "Simulates wide temperature and humidity environments",
      "Supports high and low temperature cycling tests",
      "Damp heat testing for environmental durability validation",
      "High precision temperature and humidity control",
      "Advanced cold balance control mode for energy efficiency",
      "PID control technology for stable environmental regulation",
      "Automatic return-to-normal temperature after test completion for DUT protection",
      "Unique air circulation design reduces dew formation under extreme conditions",
      "Long-term stable operation (1000+ hours) with anti-frost performance",
      "Intelligent compressor control to reduce start/stop frequency and extend lifespan",
      "High sealing performance for long-duration testing stability",
    ],
    supplements: [
      { label: "System Overview", src: "/Images/products/Pro31.png" },
    ],
    supplementLayout: "stacked",
  },

  "battery-emulator": {
    carouselImages: ["/Images/products/Pro20.png"],
    applications: [
      "Research and development testing of battery systems",
      "Production testing for OEMs and auto-parts suppliers",
      "Motor controller validation",
      "Drive motor testing",
      "Vehicle assembly verification",
      "Simulation of battery charge and discharge characteristics",
      "Testing under different battery types and SOC conditions",
    ],
    features: [
      "DC source mode",
      "Battery output characteristic simulation",
      "Customizable battery models",
      "Output simulation based on Simulink battery models (Optional)",
      "Voltage compensation",
      "Energy measurement",
      "Wide output range of voltage and current",
      "High precision output with high resolution",
      "Fast dynamic response in 3–6 ms",
      "Multiple filtering solutions to eliminate load impact",
      "Ripple superposition (Optional)",
      "Fast CAN communication (1 ms)",
      "Standard communication interfaces: RS485 / CAN / LAN / EtherCAT (Optional)",
    ],
    supplements: [
      { label: "Technical Specifications", src: "/Images/products/Pro21.png" },
    ],
    supplementLayout: "stacked",
  },

  "cell-sorting-system": {
    carouselImages: ["/Images/products/Pro48.png"],
    applications: [
      "Sorting 21700 cylindrical cells by voltage and internal resistance",
      "Battery pack assembly quality assurance",
      "OEM cell processing with direct packaging compatibility",
      "High-speed production line cell grading",
      "Factory safety-compliant cell handling and sorting",
    ],
    features: [
      "Specifically designed for 21700 cylindrical cells with or without insulation sleeve",
      "Compatible with direct OEM packaging — simplifies preparation steps",
      "OCV measurement via Kelvin Four-terminal Sensing for highest accuracy and reliability",
      "High-precision PLC controlled gantry robots for consistent throughput",
      "Configurable to factory desired production speed",
      "Highest standard operational safety features supporting factory safety compliance",
      "Highly automated end-to-end sorting process",
    ],
    supplements: [
      {
        label: "System in Operation",
        src: "/Videos/CellSort.mp4",
        description: "ET 21700 sorting machine running at production speed.",
      },
      {
        label: "See Full Video →",
        src: "https://www.youtube.com/watch?v=vSeebkoyhn8",
      },
    ],
    supplementLayout: "stacked",
  },

  "chamber-with-integrated-cycler": {
    carouselImages: ["/Images/products/Pro32.png"],
    applications: [
      "Battery cell development and validation under controlled environments",
      "Large-scale cell testing with cost and space optimization",
      "Lengthy runtime testing with high channel count",
      "Cell formation and grading in temperature-controlled conditions",
      "Quality assurance for battery manufacturers",
    ],
    features: [
      "Initial capital investment 10–15% lower than conventional setup",
      "Balanced charge/discharge channels — more channels, more saving",
      "Potential energy saving of 20–35%",
      "Cell test fixtures customizable to customer specification as part of turn-key solution",
      "Up to 20% cost saving potential",
      "Around 30% facility space saving",
    ],
    supplements: [
      {
        label: "Cell Test Fixture Demo",
        src: "/Videos/CellTest.mp4",
        description: "Customizable cell test fixtures as part of a turn-key solution.",
      },
      { label: "System Specs", src: "/Images/products/Pro33.png" },
    ],
    supplementLayout: "stacked",
  },

  "module-pack-climatic-chamber": {
    carouselImages: [
      "/Images/products/Pro34.png",
      "/Images/products/Pro35.png",
      "/Images/products/Pro36.png",
    ],
    applications: [
      "EV battery pack testing under controlled temperature and humidity",
      "ESS battery cluster environmental validation",
      "Full vehicle testing under extreme climate conditions",
      "Constant high and low temperature endurance testing",
      "Constant humidity and damp heat simulation",
      "Temperature and humidity alternating cycle testing",
    ],
    features: [
      "Designed for large-format DUTs including EV packs, ESS clusters, and full vehicles",
      "Interior and exterior chamber size fully customizable to customer requirements",
      "Highest standard fire suppression system for safe operation in challenging test cases",
      "Constant temperature and humidity control",
      "Temperature and humidity alternating change simulation",
      "Turn-key customization available",
    ],
    supplements: [
      { label: "System Specs", src: "/Images/products/Pro37.png" },
      {
        label: "Chamber Overview",
        src: "/Videos/Module1.mp4",
        description: "Walk-in chamber configuration and interior layout.",
      },
      {
        label: "System in Operation",
        src: "/Videos/Module2.mp4",
        description: "TOF Series chamber operating under test conditions.",
      },
    ],
    supplementLayout: "stacked",
  },

  "battery-test-chiller": {
    carouselImages: [
      "/Images/products/Pro38.png",
      "/Images/products/Pro39.png",
      "/Images/products/Pro40.png",
      "/Images/products/Pro41.png",
      "/Images/products/Pro42.png",
    ],
    applications: [
      "EV and ESS battery pack charge/discharge testing",
      "Battery thermal performance and characteristics testing",
      "Battery cooling system validation",
      "Battery pack reliability testing",
      "Precise temperature control during battery evaluation",
      "Thermal condition simulation for electric vehicle applications",
    ],
    features: [
      "Operating temperature range: -30°C to 85°C",
      "Precise temperature control throughout the test process",
      "Designed for EV and ESS battery pack testing environments",
      "Maintains consistent thermal conditions across charge/discharge cycles",
      "Supports battery cooling system validation workflows",
      "Compatible with battery pack reliability test programs",
    ],
    supplements: [
      { label: "System Specs", src: "/Images/products/Pro43.png" },
      {
        label: "Watch Product Video →",
        src: "https://www.youtube.com/watch?v=f4ddg4skPxk",
      },
    ],
    supplementLayout: "stacked",
  },

  "cell-jigs-and-fixture": {
    carouselImages: [],
    applications: [],
    features: [],
    supplements: [],
    supplementLayout: "stacked",
    gallery: [
      { label: "Prismatic Cell Fixture", src: "/Images/products/Pro44.png" },
      { label: "Multi-Channel Fixture Rack", src: "/Images/products/Pro45.png" },
      { label: "Empty Battery Rack", src: "/Images/products/Pro46.png" },
      { label: "Cell Expansion Test Fixture", src: "/Images/products/Pro47.png" },
    ],
  },

  "simulation-based-testing": {
    carouselImages: [
      "/Images/products/Pro22.png",
      "/Images/products/Pro23.png",
      "/Images/products/Pro22.png",
      "/Images/products/Pro23.png",
    ],
    applications: [
      "Development of xCU systems for electric vehicles",
      "Hardware-in-the-loop (HIL) test systems",
      "Automotive communication and I/O testing",
      "Diagnosis and calibration workflows",
      "Rapid test bench deployment",
    ],
    features: [
      "Communication boards for CAN FD, CAN, Automotive Ethernet, FlexRay, and LIN",
      "Digital I/O board",
      "Analog I/O boards",
      "Relays and fault insertion boards",
      "Sensor simulation resistors",
      "Minimum wiring effort for test setup",
      "Automotive-grade voltage range",
      "Seamless integration into TSMaster",
    ],
    supplementLayout: "row4",
    supplements: [
      {
        label: "TTS9015",
        src: "/Images/products/Pro24.png",
        description:
          "8-channel analog I/O board with CAN bus communication. Each channel supports voltage acquisition, voltage output, current acquisition, and current output. Designed to be embedded in the TTS chassis and integrated into other devices or software systems.",
      },
      {
        label: "TTS9021",
        src: "/Images/products/Pro25.png",
        description:
          "Fault injection board with 6 channels capable of injecting 4 different fault types. Controlled via CAN message commands for precise, repeatable fault simulation.",
      },
      {
        label: "TTS9015 — Analog Acquisition",
        src: "/Images/products/Pro26.png",
        description:
          "Multifunctional analog acquisition board with 8 independent input/output channels. Supports voltage output mode with full voltage function output, embedded in the TTS chassis.",
      },
      {
        label: "TTS System Integration",
        src: "/Images/products/Pro27.png",
        description:
          "Full TTS system integration overview showing chassis layout, board slots, and wiring architecture for rapid test bench deployment.",
      },
    ],
  },

  // ─── Advanced layout example: BER2500 ─────────────────────────────────────
  "battery-electrode-resistance-system": {
    layout: "advanced",
    carouselImages: ["/Images/elec.png"],
    intro: [
      {
        heading: "Introduction",
        body: "The BER Series is a high-precision electrode resistance analyzer designed for advanced battery research and production quality control. It enables direct measurement of true through-thickness resistance, capturing coating resistance, interface contact resistance, and current collector effects in a single unified system.",
        image: "/Images/products/IEST/Pro1.png",
      },
      {
        heading: "Testing Capabilities",
        list: [
          "Slurry homogeneity evaluation",
          "Conductive agent dispersion detection",
          "Electrode formulation comparison",
          "Failure analysis of conductive networks",
        ],
        image: "/Images/products/IEST/Pro2.png",
        reverse: true,
      },
      {
        heading: "Traditional Limitations",
        body: "Existing probe methods struggle with heterogeneous battery electrodes due to surface roughness and composite structures.",
        image: "/Images/products/IEST/Pro3.png",
      },
      {
        heading: "IEST Solution",
        body: "Dual pressure-controlled probes measure true through-thickness resistance with higher accuracy and repeatability.",
        image: "/Images/products/IEST/Pro4.png",
        reverse: true,
      },
    ],
    features: [
      "Direct measurement of true through-thickness electrode resistance",
      "Separate voltage and current sensing terminals for high-accuracy four-wire measurement",
      "Dual pressure-controlled probes for consistent contact and repeatable results",
      "Reference resistance blocks calibrated by a third-party metrology institute",
      "Automated test sequencing with one-click data export",
      "Compatible with coated and uncoated electrode sheets",
    ],
    applicationCards: [
      {
        title: "Active Material Evaluation",
        description: "Material evaluation of active materials for electrode formulation and performance benchmarking.",
        image: "/Images/products/IEST/App/Pro1.png",
      },
      {
        title: "Conductive Agent Analysis",
        description: "Process evaluation of conductive agent dispersion within the electrode coating.",
        image: "/Images/products/IEST/App/Pro2.png",
      },
      {
        title: "Primer Coating Evaluation",
        description: "Assessment of primer coating layers and their contribution to overall electrode conductivity.",
        image: "/Images/products/IEST/App/Pro3.png",
      },
      {
        title: "Batch Stability Monitoring",
        description: "Batch-to-batch stability monitoring to catch process drift before it reaches the line.",
        image: "/Images/products/IEST/App/Pro4.png",
      },
      {
        title: "Electrode Conductivity Trends",
        description: "Tracking of electrode conductivity trends across production runs and formulations.",
        image: "/Images/products/IEST/App/Pro5.png",
      },
      {
        title: "Failure Analysis",
        description: "Battery cell failure analysis to isolate conductive-network defects at the electrode level.",
        image: "/Images/products/IEST/App/Pro6.png",
      },
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/SCX0MA1rSng",
    specsImage: "/Images/products/IEST/Spec.png",
    downloadUrl:
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Lithium-Battery-Electrode-Resistance-Tester.pdf",
  },
};