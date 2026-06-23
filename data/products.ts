export interface Product {
  slug: string;
  name: string;
  description?: string;
  comingSoon?: boolean;
  image?: string;
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
      "Industrial-scale battery test systems for raw material characterization through finished cell, module, and pack validation. Engineered for production environments — not labs.",
    subcategories: [
      {
        name: "Battery Cell Test Systems",
        products: [
          { slug: "battery-cell-cycler", name: "Battery Cell Cycler", image: "/Images/prod1.png" },
          { slug: "cell-formation-power-electronics", name: "Cell Formation Power Electronics", image: "/Images/prod2.png" },
          { slug: "cell-expansion-test-kit", name: "Cell Expansion Test Kit", image: "/Images/prod3.png" },
          { slug: "cell-jigs-and-fixture", name: "Cell Jigs and Fixtures", image: "/Images/prod4.png" },
        ],
      },
      {
        name: "Battery Module & Pack Test Systems",
        products: [
          { slug: "battery-module-pack-cycler", name: "Battery Module & Pack Cycler", image: "/Images/prod5.png" },
          { slug: "battery-emulator", name: "Battery Emulator", image: "/Images/prod6.png" },
          { slug: "simulation-based-testing", name: "Simulation Based Testing", image: "/Images/prod7.png" },
        ],
      },
      {
        name: "Test Chamber & Chiller",
        products: [
          { slug: "cell-climatic-chamber", name: "Cell Climatic Chamber", image: "/Images/prod9.png" },
          {
            slug: "chamber-with-integrated-cycler",
            name: "Chamber with Integrated Cycler",
            image: "/Images/products/Pro32.png",
            description:
              "Battery cell development and manufacturing requires large-scale testing and validation under controlled environments, which drives the demand for cost reduction and facility footprint optimization. The cell test chamber with integrated cycler addresses exactly these challenges; with up to 20% potential cost saving and around 30% facility space saving, it has become a popular choice among battery manufacturers for cell testing and validation featuring lengthy runtimes and large channel counts.",
          },
          { slug: "module-pack-climatic-chamber", name: "Module/Pack Climatic Chamber", image: "/Images/prod10.png" },
          { slug: "battery-test-chiller", name: "Battery Test Chiller", image: "/Images/prod11.png" },
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
          { slug: "cell-sorting-system", name: "Cell Sorting System", image: "/Images/prod12.png" },
          { slug: "battery-end-of-line-tester", name: "Battery End-of-Line Tester", comingSoon: true },
          { slug: "battery-module-pack-assembling", name: "Battery Module/Pack Assembling", comingSoon: true },
          { slug: "battery-rework-repair", name: "Battery Rework & Repair", comingSoon: true },
          { slug: "cell-formation", name: "Cell Formation", comingSoon: true },
          { slug: "slurring-mixing-system", name: "Slurring and Mixing System", comingSoon: true },
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
    id: "after-sales-equipment",
    title: "After-Sales Equipment",
    description:
      "Accessories, cables, harnesses, and auxiliary systems for battery testing and BMS validation. Available for direct purchase through our online store.",
    subcategories: [
      {
        name: "Accessories & Components",
        products: [
          { slug: "n9000-bms-simulator", name: "N9000 BMS Testing Modular Battery Simulator (8/12/16/20/24/28/32/36CH)", image: "/Images/prod7.png" },
          { slug: "hv-pack-test-cable", name: "HV Pack Test Cable", image: "/Images/prod4.png" },
          { slug: "module-data-acquisition-cable", name: "Module Data Acquisition Cable", image: "/Images/prod3.png" },
          { slug: "balancing-harness", name: "Balancing Harness", image: "/Images/prod5.png" },
          { slug: "lv-communication-harness", name: "LV Communication Harness", image: "/Images/prod6.png" },
          { slug: "portable-battery-immersion-tank", name: "Portable Battery Immersion Tank", image: "/Images/prod11.png" },
          { slug: "emergency-battery-pack-storage-box", name: "Emergency Battery Pack Storage Box", image: "/Images/prod10.png" },
          { slug: "explosion-proof-transport-box", name: "Explosion-proof Transport Box", image: "/Images/prod9.png" },
          { slug: "end-of-service-tester", name: "End-of-Service Tester", image: "/Images/prod2.png" },
          { slug: "comprehensive-battery-maintenance-system", name: "Comprehensive Battery Maintenance System (BRTS-100)", image: "/Images/prod1.png" },
          { slug: "portable-module-pack-cycler-pbm-b", name: "Portable Module/Pack Cycler (PBM-B Series)", image: "/Images/prod12.png" },
          { slug: "module-maintenance-device-pbm-cm", name: "Module Maintenance Device (PBM-CM Series)", image: "/Images/prod5.png" },
          { slug: "module-maintenance-device-pbm-m", name: "Module Maintenance Device (PBM-M Series)", image: "/Images/prod5.png" },
          { slug: "battery-balancer-64ch", name: "Battery Balancer 64CH (PBM-PW-B-6405)", image: "/Images/prod1.png" },
          { slug: "battery-balancer-48ch", name: "Battery Balancer 48CH (PBM-PW-B-4805)", image: "/Images/prod1.png" },
          { slug: "battery-balancer-36ch", name: "Battery Balancer 36CH (PBM-PW-B-3605)", image: "/Images/prod1.png" },
        ],
      },
    ],
  },
];

export function getProductBySlug(slug: string): { product: Product; category: Category; subcategory: Subcategory } | null {
  for (const category of categories) {
    for (const subcategory of category.subcategories) {
      const product = subcategory.products.find((p) => p.slug === slug);
      if (product) return { product, category, subcategory };
    }
  }
  return null;
}