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
    id: "n9000-bms-simulator",
    name: "N9000 BMS Testing Modular Battery Simulator (8/12/16/20/24/28/32/36CH)",
    price: 500,
    category: "Test Equipment",
    description:
      "The N9000 is a modular battery simulator designed for BMS hardware-in-the-loop (HIL) testing. Available in 8, 12, 16, 20, 24, 28, 32, and 36 channel configurations, it accurately simulates individual battery cell voltages to validate BMS logic, protection circuits, and communication protocols without requiring real cells.",
    shortDesc: "Modular BMS HIL simulator available in 8–36 channel configurations.",
    image: "/Images/prod7.png",
    specs: [
      "Channel options: 8 / 12 / 16 / 20 / 24 / 28 / 32 / 36CH",
      "Simulates individual cell voltage per channel",
      "Supports BMS communication: CAN, RS-485",
      "High-precision voltage output for accurate cell simulation",
      "Modular design for scalable test configurations",
    ],
    inStock: true,
    leadTime: "2–4 weeks",
  },
  {
    id: "hv-pack-test-cable",
    name: "HV Pack Test Cable",
    price: 500,
    category: "Test Accessories",
    description:
      "High-voltage pack test cable for connecting battery packs to cyclers and test equipment. Rated for high-current, high-voltage applications typical in EV pack testing environments. Supplied with appropriate connector ends for direct compatibility with EnerTest test systems.",
    shortDesc: "High-voltage cable for connecting battery packs to test equipment.",
    image: "/Images/prod4.png",
    specs: [
      "Rated for high-voltage EV pack test environments",
      "High-current capacity with low-resistance conductors",
      "Insulation rated for thermal and electrical durability",
      "Compatible with standard EnerTest cycler connections",
      "Available in custom lengths upon request",
    ],
    inStock: true,
    leadTime: "1–2 weeks",
  },
  {
    id: "module-data-acquisition-cable",
    name: "Module Data Acquisition Cable",
    price: 500,
    category: "Test Accessories",
    description:
      "Data acquisition cable for battery module testing. Connects module cell-tap points to data acquisition systems for voltage monitoring, temperature logging, and SOC tracking during charge/discharge cycles. Designed for compatibility with standard module test setups.",
    shortDesc: "Cell-tap data acquisition cable for battery module monitoring.",
    image: "/Images/prod3.png",
    specs: [
      "Multi-tap connector for cell voltage monitoring across a module",
      "Compatible with standard DAQ and BMS test systems",
      "Low-noise shielded construction for accurate signal acquisition",
      "Supports temperature sensor integration",
      "Durable strain-relief connector housing",
    ],
    inStock: true,
    leadTime: "1–2 weeks",
  },
  {
    id: "balancing-harness",
    name: "Balancing Harness",
    price: 500,
    category: "Test Accessories",
    description:
      "Balancing harness for connecting battery cells or modules to a balancer during maintenance, incoming quality control, and pre-assembly operations. Designed to handle multi-cell configurations with safe, reliable contact for active or passive balancing workflows.",
    shortDesc: "Multi-cell harness for balancing operations and IQC workflows.",
    image: "/Images/prod5.png",
    specs: [
      "Multi-cell tap connection for balancer compatibility",
      "Suitable for active and passive balancing workflows",
      "Safe connector housing with polarity protection",
      "Compatible with standard cell and module form factors",
      "Rated for repeated connect/disconnect cycles",
    ],
    inStock: true,
    leadTime: "1–2 weeks",
  },
];

export function getStoreProductById(id: string): StoreProduct | null {
  return storeProducts.find(p => p.id === id) ?? null;
}
