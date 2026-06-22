export interface Product {
  slug: string;
  name: string;
  description?: string;
  comingSoon?: boolean;
  image?: string;
  storeLink?: boolean;
  storeProductId?: string; // matches an id in storeProducts.ts
}

export interface Subcategory {
  name: string;
  products: Product[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  subcategories: Subcategory[];
}

export const categories: Category[] = [
  {
    id: "test-system-solutions",
    title: "Test System Solutions",
    description:
      "Industrial-scale battery test systems covering raw material characterization through finished cell, module, and pack validation. Engineered for production environments — not labs.",
    subcategories: [
      {
        name: "Battery Cell Test Systems",
        products: [
          { slug: "battery-cell-cycler",               name: "Battery Cell Cycler",               image: "/Images/prod1.png" },
          { slug: "cell-formation-power-electronics",  name: "Cell Formation Power Electronics",  image: "/Images/prod2.png" },
          { slug: "cell-expansion-test-kit",           name: "Cell Expansion Test Kit",           image: "/Images/prod3.png" },
          { slug: "cell-jigs-and-fixture",             name: "Cell Jigs and Fixtures",            image: "/Images/prod4.png", storeProductId: "cell-jigs-fixture-set" },
          { slug: "pressure-fixtures-daq",             name: "Pressure Fixtures & DAQ Systems",   image: "/Images/prod8.png" },
          { slug: "can-test-data-logging",             name: "CAN Test & Data Logging Systems",   image: "/Images/prod3.png" },
        ],
      },
      {
        name: "Battery Module & Pack Test Systems",
        products: [
          { slug: "battery-module-pack-cycler",   name: "Battery Module & Pack Cycler", image: "/Images/prod5.png" },
          { slug: "battery-emulator",             name: "Battery Emulator",             image: "/Images/prod6.png" },
          { slug: "simulation-based-testing",     name: "Simulation Based Testing",     image: "/Images/prod7.png" },
          { slug: "ngi-cell-simulators",          name: "NGI Cell Simulators",          image: "/Images/prod6.png" },
          { slug: "hil-test-platforms",           name: "HIL Test Platforms",           image: "/Images/prod7.png" },
        ],
      },
      {
        name: "Test Chamber & Chiller",
        products: [
          { slug: "cell-climatic-chamber",        name: "Cell Climatic Chamber",        image: "/Images/prod9.png"  },
          { slug: "module-pack-climatic-chamber", name: "Module/Pack Climatic Chamber", image: "/Images/prod10.png" },
          { slug: "battery-test-chiller",         name: "Battery Test Chiller",         image: "/Images/prod11.png", storeProductId: "battery-test-chiller-10kw" },
        ],
      },
      {
        name: "Raw Material Testing",
        products: [
          { slug: "powder-resistivity-compaction",  name: "Powder Resistivity & Compaction Density System", comingSoon: true },
          { slug: "flatness-inspection-system",     name: "Flatness Inspection System",                     comingSoon: true },
          { slug: "particle-magnetic-bed",          name: "Particle Magnetic Bed Equipment",                comingSoon: true },
          { slug: "casing-pressure-test",           name: "Casing Pressure Test Equipment",                 comingSoon: true },
        ],
      },
    ],
  },
  {
    id: "power-loads-simulation",
    title: "Power Loads & Battery Simulation",
    description:
      "DC power supplies, electronic loads, battery simulators, and wiring solutions for cell, module, and pack test applications. Flexible configurations for lab and production environments.",
    subcategories: [
      {
        name: "Power & Simulation Equipment",
        products: [
          { slug: "battery-simulators",   name: "Battery Simulators",   image: "/Images/prod6.png" },
          { slug: "dc-power-supplies",    name: "DC Power Supplies",    image: "/Images/prod1.png" },
          { slug: "dc-electronic-loads",  name: "DC Electronic Loads",  image: "/Images/prod5.png" },
          { slug: "cable-wire-harness",   name: "Cable & Wire Harness", image: "/Images/prod4.png" },
        ],
      },
    ],
  },
  {
    id: "production-automation",
    title: "Production & Automation",
    description:
      "Full-line manufacturing automation for cell production through module and pack assembly. From sorting systems to complete turnkey line integration.",
    subcategories: [
      {
        name: "Manufacturing Solutions",
        products: [
          { slug: "cell-sorting-system",           name: "Cell Sorting System",           image: "/Images/prod12.png" },
          { slug: "battery-end-of-line-tester",    name: "Battery End-of-Line Tester",    comingSoon: true },
          { slug: "battery-module-pack-assembling", name: "Battery Module/Pack Assembling", comingSoon: true },
          { slug: "battery-rework-repair",         name: "Battery Rework & Repair",        comingSoon: true },
          { slug: "cell-formation",                name: "Cell Formation",                 comingSoon: true },
          { slug: "slurring-mixing-system",        name: "Slurring and Mixing System",     comingSoon: true },
        ],
      },
    ],
  },
  {
    id: "engineering-services",
    title: "Engineering Services",
    description:
      "End-to-end technical support from system design through site commissioning. Our U.S.-based engineers work onsite and remotely to keep your line running.",
    subcategories: [
      {
        name: "Services",
        products: [
          {
            slug: "equipment-commissioning-training",
            name: "Equipment Commissioning & Training",
            description:
              "We provide onsite commissioning and training to ensure new equipment operates correctly and delivers maximum efficiency, safety, and long-term performance.",
          },
          {
            slug: "application-engineering-support",
            name: "Application Engineering Support",
            description:
              "Customized engineering support designed to help customers maximize product functionality and operational efficiency.",
          },
          {
            slug: "equipment-maintenance-calibration",
            name: "Equipment Maintenance & Calibration",
            description:
              "Preventive maintenance and calibration services to ensure tools and instruments operate accurately and reliably.",
          },
          {
            slug: "program-management-large-projects",
            name: "Program Management for Large Projects",
            description:
              "Professional project management for large-scale battery laboratories and manufacturing facilities throughout North America.",
          },
          {
            slug: "educational-opportunities",
            name: "Educational Opportunities",
            description:
              "Collaboration with industry and university partners to provide practical learning opportunities in EV and ESS battery testing and manufacturing.",
          },
        ],
      },
    ],
  },
  {
    id: "maintenance-auxiliary",
    title: "Maintenance & Auxiliary",
    description:
      "Auxiliary systems, balancers, relay testers, and force measurement tools to keep your battery test and production lines running reliably. Select items are available for direct purchase in our store.",
    subcategories: [
      {
        name: "Auxiliary Equipment",
        products: [
          { slug: "balancer-recharge-unit",            name: "Balancer Recharge Unit",             image: "/Images/prod5.png",  storeLink: true, storeProductId: "portable-battery-balancer-24ch" },
          { slug: "relay-tester",                     name: "Relay Tester",                       image: "/Images/prod7.png",  storeLink: true, storeProductId: "relay-tester" },
          { slug: "insertion-extraction-force-tester", name: "Insertion/Extraction Force Tester", image: "/Images/prod9.png",  storeLink: true, storeProductId: "insertion-extraction-force-tester" },
          { slug: "battery-test-cable-harness",       name: "Battery Test Cable Harness",         image: "/Images/prod12.png", storeLink: true, storeProductId: "battery-test-cable-harness" },
        ],
      },
      {
        name: "Other Test Instruments",
        products: [
          { slug: "portable-battery-cycler",  name: "Portable Battery Cycler (1000V100A)", comingSoon: true },
          { slug: "dc-power-load-module",     name: "DC Power Load Module",               comingSoon: true },
        ],
      },
    ],
  },
];

export function getProductBySlug(slug: string): { product: Product; category: Category; subcategory: Subcategory } | null {
  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      const product = subcategory.products.find(p => p.slug === slug);
      if (product) return { product, category, subcategory };
    }
  }
  return null;
}
