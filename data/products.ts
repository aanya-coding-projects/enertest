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
      "Industrial-scale battery test systems for raw material characterization through finished cell, module, and pack validation. Engineered for production environments, not labs.",
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
        {
          name: "Material & Electrode Characterization",
          products: [
            {
              slug: "powder-resistivity-compaction-density-system",
              name: "IEST Powder Resistivity & Compaction Density Measurement System (PRCD3100)",
              image: "/Images/powerres.png",
              description:
                "Powder Compaction Density & Powder Resistivity Measurement System combined with high-precision pressure control, thickness and resistance testing system, free choice of four-probe and two-probe method. Accurately powder resistivity tests and compaction density measurements for materials R&D and for monitoring batch-to-batch stability of battery powder materials.",
            },
            {
              slug: "battery-electrode-resistance-system",
              name: "Battery Electrode Resistance System",
              image: "/Images/elec.png",
              description:
                "IEST Lithium Battery Electrode Sheet Resistance Tester(BER2500)",
            },
            
            {
              slug: "in-situ-anode-swelling-screening-system",
              name: "IEST In-Situ Silicon-Based Anode Swelling Rapid Screening System (RSS1400)",
              image: "/Images/in-situ.png",
              description:
                "The IEST In-Situ Silicon-Based Anode Swelling Rapid Screening System (RSS1400) is designed for four-channel simultaneous in-situ swelling thickness testing of silicon-based or graphite-based pouch cells, laminates, and model buttons during charge-discharge processes. It helps evaluate material and cell swelling performance with visual operation and one-click data export.",
            },
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
    id: "iest-products",
    title: "IEST Characterization & Testing Instruments",
    description:
      "Authorized distribution of IEST's precision battery characterization instruments — covering material analysis, electrode testing, in-situ cell characterization, and electrochemical analysis for R&D and production QC.",
    subcategories: [
      {
        name: "Raw Materials",
        products: [
          {
            slug: "prcd3100",
            name: "Powder Resistivity & Compaction Density Measurement System",
            image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-PRCD3100.webp",
          },
          {
            slug: "bsr2300",
            name: "Battery Slurry Resistivity Tester",
            image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Lithium-Battery-Slurry-Resistance-Tester.webp",
          },
          {
            slug: "sems-series",
            name: "Multi-Dimensional Solid Electrolyte Testing System",
            image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Multi-dimensional-Solid-Electrolyte-Testing-SystemSEMS-Series.webp",
          },
          {
            slug: "spft2000",
            name: "Single Particle Force Properties Testing System",
            image: "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Single-Particle-Force-Properties-Test-System-2-1.webp",
          },
          {
            slug: "leps-series",
            name: "Automated Electrode Powder Sampling System",
            image: "https://iestbattery.com/wp-content/uploads/2026/05/IEST-Automated-Electrode-Powder-Sampling-System-1.webp",
          },
          {
            slug: "spec-series",
            name: "Single Particle Electrochemical Performance Testing System",
            image: "https://iestbattery.com/wp-content/uploads/2026/06/IEST-Single-Particle-Electrochemical-Performance-Testing-SystemSPEC-1.webp",
          },
        ],
      },
      {
        name: "Peripheral Equipment",
        products: [
          {
            slug: "ber-series",
            name: "Battery Electrode Resistance & Thickness Tester",
            image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Lithium-Battery-Electrode-Resistance-Tester.webp",
          },
          {
            slug: "ews-series",
            name: "Electrode Electrolyte Wetting Testing System",
            image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Electrolyte-Wetting-Measurement-System-EWS-3-1.webp",
          },
          {
            slug: "eic-series",
            name: "Electrode Tortuosity & Separator Ion Conductivity Tester",
            image: "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Electrode-Tortuosity-Tester-and-Separator-Ion-Conductivity-Tester-1.webp",
          },
          {
            slug: "bpd-series",
            name: "Battery Pressure Distribution Mapping Sensor System",
            image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Battery-Pressure-Distrbution-Measure-System-BPD1000.webp",
          },
          {
            slug: "bef1000",
            name: "Battery Electrode Flexibility Testing System",
            image: "https://iestbattery.com/wp-content/uploads/2025/07/IEST-Battery-Electrode-Flexibility-Testing-System-2.webp",
          },
        ],
      },
      {
        name: "Products & Applications",
        products: [
          {
            slug: "swe-series",
            name: "In-Situ Battery Cell Swelling Testing System",
            image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-In-Situ-Cell-Swelling-Testing-System.webp",
          },
          {
            slug: "mcs1000",
            name: "In-Situ Model Coin Cell Swelling Testing System",
            image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Model-Coin-Cell-In-Situ-Swelling-Testing-System-3-1.webp",
          },
          {
            slug: "rss1400",
            name: "Silicon-Based Anode Swelling In-Situ Screening System",
            image: "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Silicon-Based-Anode-Swelling-In-Situ-Screening-System.webp",
          },
          {
            slug: "ccs1100",
            name: "Cylindrical Battery In-Situ Volume Swelling Testing System",
            image: "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Cylindrical-Battery-In-Situ-Volume-Swelling-Testing-System-1.webp",
          },
          {
            slug: "gvm-series",
            name: "In-Situ Battery Gassing Volume Analyzer",
            image: "https://iestbattery.com/wp-content/uploads/2024/04/In-Situ-Battery-Gassing-Volume-Analyzer-GVM2200.webp",
          },
          {
            slug: "msg2000",
            name: "In-Situ Multi-Channel Battery Storage Gassing System",
            image: "https://iestbattery.com/wp-content/uploads/2024/05/In-situ-Multi-channel-Storage-Gassing-Test-System-1.webp",
          },
          {
            slug: "ert-series",
            name: "High Precision Battery Cycler & Electrochemical Analyzer",
            image: "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Battery-Cycle-Tester-Electrochemical-Property-Analyzer-ERT-Series-1.webp",
          },
          {
            slug: "ect-series",
            name: "Battery Cycler Electrochemical Property Analyzer",
            image: "https://iestbattery.com/wp-content/uploads/2025/03/IEST-Electrochemical-Property-Analyzer-ECT-Series.webp",
          },
          {
            slug: "bit-series",
            name: "Battery Impedance & Consistency Tester",
            image: "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Battery-Impedance-Tester-1.webp",
          },
        ],
      },
      {
        name: "Production Line",
        products: [
          {
            slug: "caas-series",
            name: "Automatic Coin Cell Assembly System",
            image: "https://iestbattery.com/wp-content/uploads/2026/04/IEST-Automatic-Coin-Cell-Assembly-SystemCAAS​-e1748397045278.webp",
          },
          {
            slug: "caas1000",
            name: "Lab-scale Automatic Coin Cell Assembly Machine",
            image: "https://iestbattery.com/wp-content/uploads/2025/11/IEST-Lab-scale-Automatic-Coin-Cell-Assembly-MachineCAAS1000-1-1.webp",
          },
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

export const featuredProductSlugs = [
  "powder-resistivity-compaction-density-system",
  "battery-electrode-resistance-system",
  "in-situ-anode-swelling-screening-system",
];
 
export function getFeaturedProducts(): Product[] {
  return featuredProductSlugs
    .map((slug) => getProductBySlug(slug)?.product)
    .filter((p): p is Product => Boolean(p));
}