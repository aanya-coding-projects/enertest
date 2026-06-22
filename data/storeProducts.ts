export interface StoreProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  shortDesc: string;
  image: string;
  specs: string[];
  inStock: boolean;
  leadTime: string;
}

export const storeProducts: StoreProduct[] = [
  {
    id: "portable-battery-balancer-24ch",
    name: "Portable Battery Balancer (24CH)",
    price: 2499,
    category: "Maintenance & Auxiliary",
    description:
      "A compact, portable balancing unit supporting up to 24 channels simultaneously. Ideal for field maintenance, lab environments, and incoming quality control workflows. Compatible with NMC, LFP, and NCA chemistries.",
    shortDesc: "24-channel portable balancer for cell and module maintenance.",
    image: "/Images/prod5.png",
    specs: [
      "24 independent balancing channels",
      "Compatible with NMC, LFP, NCA chemistries",
      "Balance current: up to 2A per channel",
      "Input voltage: 100–240V AC",
      "Dimensions: 480 × 400 × 180 mm",
    ],
    inStock: true,
    leadTime: "2–3 weeks",
  },
  {
    id: "relay-tester",
    name: "Battery Relay Tester",
    price: 1799,
    category: "Maintenance & Auxiliary",
    description:
      "Specialized tester for verifying relay actuation, contact resistance, and isolation performance in battery management and protection circuits. Provides pass/fail output with full data logging.",
    shortDesc: "Precision relay verification for BMS and protection circuits.",
    image: "/Images/prod7.png",
    specs: [
      "Contact resistance measurement < 1 mΩ",
      "Isolation test voltage up to 1000V DC",
      "Pass/fail indicator with buzzer alert",
      "USB data export and logging",
      "Compact handheld form factor",
    ],
    inStock: true,
    leadTime: "1–2 weeks",
  },
  {
    id: "cell-jigs-fixture-set",
    name: "Cell Jigs & Fixture Set",
    price: 3299,
    category: "Test Accessories",
    description:
      "Precision cell jigs and fixtures engineered for consistent electrical contact during charge/discharge cycling. Supports cylindrical 18650, 21700, 26650 and standard pouch cell formats.",
    shortDesc: "Precision fixtures for cylindrical and pouch cell cycling.",
    image: "/Images/prod4.png",
    specs: [
      "Supports 18650, 21700, 26650 cylindrical formats",
      "Pouch cell adapter fixture included",
      "Gold-plated contacts for minimal contact resistance",
      "Adjustable clamping force via thumb screw",
      "Rated to 5V / 50A per cell position",
    ],
    inStock: true,
    leadTime: "1–2 weeks",
  },
  {
    id: "insertion-extraction-force-tester",
    name: "Insertion/Extraction Force Tester",
    price: 2899,
    category: "Maintenance & Auxiliary",
    description:
      "Measures the mechanical insertion and extraction force of battery connectors, module tabs, and busbars. Ensures consistent assembly quality and connector integrity on production lines.",
    shortDesc: "Connector force measurement for assembly quality assurance.",
    image: "/Images/prod9.png",
    specs: [
      "Force range: 0–500N with 0.1N resolution",
      "Motorized vertical test stand included",
      "PC interface with real-time force curve display",
      "Stores up to 10,000 test records internally",
      "Compatible with standard and custom connector types",
    ],
    inStock: true,
    leadTime: "3–4 weeks",
  },
  {
    id: "battery-test-cable-harness",
    name: "Battery Test Cable Harness Kit",
    price: 449,
    category: "Test Accessories",
    description:
      "High-current cable harness set for connecting battery cells, modules, and packs to test equipment. Includes multiple connector types and adapter ends for maximum compatibility.",
    shortDesc: "Universal high-current cable set for battery test setups.",
    image: "/Images/prod6.png",
    specs: [
      "Max continuous current: 300A",
      "Cable cross-section: 35 mm²",
      "Length options: 0.5m, 1m, and 2m included",
      "Banana plug, ring terminal, and custom adapter ends",
      "Temperature rated to 105°C insulation",
    ],
    inStock: true,
    leadTime: "1 week",
  },
  {
    id: "battery-test-chiller-10kw",
    name: "Battery Test Chiller (10kW)",
    price: 9499,
    category: "Test Equipment",
    description:
      "A 10kW liquid cooling system designed for battery module and pack testing. Maintains precise temperature control during cycling, formation, and abuse testing with RS-485 / CAN interface for full automation.",
    shortDesc: "10kW precision cooling for module and pack test applications.",
    image: "/Images/prod11.png",
    specs: [
      "Cooling capacity: 10kW",
      "Temperature range: −20°C to +60°C",
      "Temperature stability: ±0.5°C",
      "Coolant flow rate: 10–30 L/min adjustable",
      "RS-485 and CAN interface for test automation",
    ],
    inStock: false,
    leadTime: "6–8 weeks",
  },
];

export function getStoreProductById(id: string): StoreProduct | null {
  return storeProducts.find(p => p.id === id) ?? null;
}
