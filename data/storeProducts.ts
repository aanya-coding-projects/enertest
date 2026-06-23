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
  // ── After-Sales Equipment (from aftersales-equipment page) ──────────────────
  {
    id: "n9000-bms-simulator",
    name: "N9000 BMS Testing Modular Battery Simulator (8/12/16/20/24/28/32/36CH)",
    price: 500,
    category: "Test Equipment",
    description:
      "The N9000 is a modular battery simulator designed for BMS hardware-in-the-loop (HIL) testing. Available in 8, 12, 16, 20, 24, 28, 32, and 36 channel configurations, it accurately simulates individual battery cell voltages to validate BMS logic, protection circuits, and communication protocols without requiring real cells.",
    shortDesc: "Modular BMS HIL simulator available in 8–36 channel configurations.",
    image: "/Images/aftersales/n9000.png",
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
      "High-voltage pack test cable for connecting battery packs to cyclers and test equipment. Rated for high-current, high-voltage applications typical in EV pack testing environments.",
    shortDesc: "High-voltage cable for connecting battery packs to test equipment.",
    image: "/Images/aftersales/hv-pack-test-cable.png",
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
      "Data acquisition cable for battery module testing. Connects module cell-tap points to data acquisition systems for voltage monitoring, temperature logging, and SOC tracking during charge/discharge cycles.",
    shortDesc: "Cell-tap data acquisition cable for battery module monitoring.",
    image: "/Images/aftersales/module-data-acquisition-cable.png",
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
      "Balancing harness for connecting battery cells or modules to a balancer during maintenance, incoming quality control, and pre-assembly operations.",
    shortDesc: "Multi-cell harness for balancing operations and IQC workflows.",
    image: "/Images/aftersales/balancing-harness.png",
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
  {
    id: "lv-communication-harness",
    name: "LV Communication Harness",
    price: 500,
    category: "Test Accessories",
    description:
      "Low-voltage communication harness for interfacing BMS and test equipment. Enables reliable signal transmission between battery management systems and test platforms.",
    shortDesc: "Low-voltage harness for BMS and test system communication.",
    image: "/Images/aftersales/lv-communication-harness.png",
    specs: [
      "Low-voltage rated communication cable",
      "Compatible with CAN, RS-485, and LIN protocols",
      "Multi-pin connector for BMS interface",
      "Shielded for noise-free signal transmission",
      "Available in custom pin configurations",
    ],
    inStock: true,
    leadTime: "1–2 weeks",
  },
  {
    id: "portable-battery-immersion-tank",
    name: "Portable Battery Immersion Tank",
    price: 5000,
    category: "Maintenance & Auxiliary",
    description:
      "Portable immersion tank for battery thermal testing and safe discharge of damaged or end-of-life battery cells and modules. Provides a controlled environment for handling batteries requiring immersion-based safety procedures.",
    shortDesc: "Portable tank for safe battery immersion and thermal containment.",
    image: "/Images/aftersales/portable-battery-immersion-tank.png",
    specs: [
      "Portable design for flexible deployment",
      "Compatible with cells, modules, and small packs",
      "Corrosion-resistant construction",
      "Safe handling of end-of-life and damaged batteries",
      "Meets battery safety handling standards",
    ],
    inStock: true,
    leadTime: "3–5 weeks",
  },
  {
    id: "emergency-battery-pack-storage-box",
    name: "Emergency Battery Pack Storage Box",
    price: 8000,
    category: "Maintenance & Auxiliary",
    description:
      "Emergency storage box for damaged or thermally compromised battery packs. Provides fire-resistant, vented containment for safe storage and transport of hazardous battery packs pending disposal or inspection.",
    shortDesc: "Fire-resistant emergency containment for damaged battery packs.",
    image: "/Images/aftersales/emergency-battery-pack-storage-box.jpg",
    specs: [
      "Fire-resistant enclosure construction",
      "Vented design for off-gas management",
      "Accommodates standard EV battery pack sizes",
      "Handles and locking mechanism for safe transport",
      "Compliant with hazardous materials storage guidelines",
    ],
    inStock: true,
    leadTime: "4–6 weeks",
  },
  {
    id: "explosion-proof-transport-box",
    name: "Explosion-proof Transport Box",
    price: 9800,
    category: "Maintenance & Auxiliary",
    description:
      "Explosion-proof transport box for the safe movement of high-risk or damaged battery cells and modules. Engineered to contain thermal runaway events and prevent propagation during transit.",
    shortDesc: "Explosion-proof containment for high-risk battery transport.",
    image: "/Images/aftersales/explosion-proof-transport-box.png",
    specs: [
      "Explosion-proof rated enclosure",
      "Thermal runaway containment design",
      "Pressure relief venting system",
      "Heavy-duty locking and sealing mechanism",
      "Compliant with transport regulations for hazardous batteries",
    ],
    inStock: true,
    leadTime: "4–6 weeks",
  },
  {
    id: "end-of-service-tester",
    name: "End-of-Service Tester",
    price: 15000,
    category: "Test Equipment",
    description:
      "End-of-service tester for evaluating battery cells and modules at the conclusion of their operational life. Provides capacity, impedance, and health state measurements to support battery repurposing, recycling, and retirement decisions.",
    shortDesc: "Battery end-of-life evaluation system for capacity and health assessment.",
    image: "/Images/aftersales/end-of-service-tester.png",
    specs: [
      "Capacity and impedance measurement",
      "State-of-health (SOH) calculation",
      "Supports cells, modules, and small packs",
      "Data logging and export for lifecycle records",
      "Compatible with NMC, LFP, and NCA chemistries",
    ],
    inStock: true,
    leadTime: "6–8 weeks",
  },
  {
    id: "comprehensive-battery-maintenance-system",
    name: "Comprehensive Battery Maintenance System (BRTS-100)",
    price: 15000,
    category: "Maintenance & Auxiliary",
    description:
      "The BRTS-100 is an all-in-one battery maintenance system for comprehensive cell and module servicing. Integrates balancing, cycling, and diagnostics into a single platform for incoming quality control, field maintenance, and repurposing workflows.",
    shortDesc: "All-in-one maintenance system combining balancing, cycling, and diagnostics.",
    image: "/Images/aftersales/brts-100.png",
    specs: [
      "Integrated balancing and cycling functionality",
      "Diagnostic suite: capacity, SOH, impedance",
      "Supports cell, module, and pack formats",
      "Touchscreen interface with guided workflows",
      "Data export via USB and network interface",
    ],
    inStock: true,
    leadTime: "6–8 weeks",
  },
  {
    id: "portable-module-pack-cycler-pbm-b",
    name: "Portable Module/Pack Cycler (PBM-B Series)",
    price: 12000,
    category: "Test Equipment",
    description:
      "The PBM-B Series is a portable charge/discharge cycler for battery module and pack testing. Designed for field maintenance, service center use, and lab applications requiring a mobile testing solution.",
    shortDesc: "Portable cycler for field and service-center module/pack testing.",
    image: "/Images/aftersales/portable-module-pack-cycler.png",
    specs: [
      "Portable form factor for field deployment",
      "Supports module and pack test configurations",
      "CC/CV charge and discharge modes",
      "Integrated data logging with PC interface",
      "Compatible with NMC, LFP, NCA chemistries",
    ],
    inStock: true,
    leadTime: "4–6 weeks",
  },
  {
    id: "module-maintenance-device-pbm-cm",
    name: "Module Maintenance Device (PBM-CM Series)",
    price: 12000,
    category: "Maintenance & Auxiliary",
    description:
      "The PBM-CM Series module maintenance device provides comprehensive care for battery modules including balancing, capacity testing, and health diagnostics. Suited for service centers and field maintenance teams.",
    shortDesc: "Module maintenance device for balancing, testing, and health diagnostics.",
    image: "/Images/aftersales/module-maintenance-device-pbm-cm.jpg",
    specs: [
      "Active balancing and capacity restoration",
      "SOH and impedance diagnostics",
      "Supports standard module connector interfaces",
      "Guided maintenance workflows via display",
      "USB and network data export",
    ],
    inStock: true,
    leadTime: "4–6 weeks",
  },
  {
    id: "module-maintenance-device-pbm-m",
    name: "Module Maintenance Device (PBM-M Series)",
    price: 9800,
    category: "Maintenance & Auxiliary",
    description:
      "The PBM-M Series is a compact module maintenance device for battery module servicing. Provides balancing and basic diagnostic functions in a smaller, cost-effective form factor.",
    shortDesc: "Compact module maintenance device for balancing and basic diagnostics.",
    image: "/Images/aftersales/module-maintenance-device-pbm-m.png",
    specs: [
      "Passive and active balancing capability",
      "Basic capacity and voltage diagnostics",
      "Compact design for bench or field use",
      "Compatible with standard module form factors",
      "Simple interface for efficient workflow",
    ],
    inStock: true,
    leadTime: "3–5 weeks",
  },
  {
    id: "battery-balancer-64ch",
    name: "Battery Balancer 64CH (PBM-PW-B-6405)",
    price: 10200,
    category: "Maintenance & Auxiliary",
    description:
      "64-channel battery balancer for simultaneous cell balancing across large battery packs or multiple modules. Designed for high-throughput incoming quality control and manufacturing line balancing.",
    shortDesc: "64-channel balancer for high-throughput cell and module balancing.",
    image: "/Images/aftersales/battery-balancer-64ch.png",
    specs: [
      "64 independent balancing channels",
      "Compatible with NMC, LFP, NCA chemistries",
      "Balance current: configurable per channel",
      "High-throughput design for production environments",
      "PC interface with channel status monitoring",
    ],
    inStock: true,
    leadTime: "4–6 weeks",
  },
  {
    id: "battery-balancer-48ch",
    name: "Battery Balancer 48CH (PBM-PW-B-4805)",
    price: 8500,
    category: "Maintenance & Auxiliary",
    description:
      "48-channel battery balancer for simultaneous cell balancing across battery packs and modules. Suitable for mid-scale production and service center applications.",
    shortDesc: "48-channel balancer for mid-scale production and service center use.",
    image: "/Images/aftersales/battery-balancer-48ch.png",
    specs: [
      "48 independent balancing channels",
      "Compatible with NMC, LFP, NCA chemistries",
      "Balance current: configurable per channel",
      "Rack-mount or bench-top deployment",
      "PC interface with channel status monitoring",
    ],
    inStock: true,
    leadTime: "3–5 weeks",
  },
  {
    id: "battery-balancer-36ch",
    name: "Battery Balancer 36CH (PBM-PW-B-3605)",
    price: 7100,
    category: "Maintenance & Auxiliary",
    description:
      "36-channel battery balancer for cell and module balancing in lab and service environments. A cost-effective solution for lower-volume balancing needs.",
    shortDesc: "36-channel balancer for lab and service-center balancing operations.",
    image: "/Images/aftersales/battery-balancer-36ch.png",
    specs: [
      "36 independent balancing channels",
      "Compatible with NMC, LFP, NCA chemistries",
      "Balance current: configurable per channel",
      "Compact bench-top form factor",
      "PC interface with channel status monitoring",
    ],
    inStock: true,
    leadTime: "3–4 weeks",
  },

];

export function getStoreProductById(id: string): StoreProduct | null {
  return storeProducts.find(p => p.id === id) ?? null;
}
