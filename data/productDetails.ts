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
    carouselImages: ["/Images/powerres.png"],
    applications: [
      "Lithium (sodium) cathode and anode electrode powders (LCO/NCM/LFP/Graphite, etc.)",
      "Conductive agents",
      "Solid electrolyte powders",
      "Other micron-sized powder materials, etc.",
    ],
    features: [
      "Ultra-wide pressurization range (maximum 350MPa) and ultra-wide resistance measurement range (1200MΩ)",
      "When measuring resistance, two-probe and four-probe dual principles can be switched freely",
      "Fully automatic test software, free parameter setting, one-click start",
      "Real-time monitoring and output of pressure, ambient temperature, ambient humidity, thickness, resistance, resistivity, conductivity, compaction density and other parameter curves, with automatic saving of test data",
      "Multiple powder test modes: pressurization, single-point pressure relief, steady-state pressure relief",
      "Equipped with standard thickness blocks and resistance blocks calibrated by a third-party metrology institute",
    ],
    supplements: [],
    supplementLayout: "stacked",
  },

  "in-situ-anode-swelling-screening-system": {
    carouselImages: ["/Images/in-situ.png"],
    applications: [
      "Pouch cell",
      "Laminates and coin cell",
      "In-situ swelling thickness testing",
    ],
    features: [
      "In-situ characterization of the expansion thickness change of silicon-based battery cells under different pressures",
      "Four-channel simultaneous testing of multiple battery cells",
      "Adapts to in-situ testing of various battery cell structures: model buckle battery, stacked battery, soft pack battery, etc.",
      "Visual operation interface with one-click export of data reports",
    ],
    supplements: [],
    supplementLayout: "stacked",
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