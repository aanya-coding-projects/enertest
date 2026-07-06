export type IESTProduct = {
  name: string;
  model: string;
  category: string;
  description: string;
  features: string[];
  applications: string[];
  carouselImages: string[];
  seoTitle: string;
  seoDescription: string;
};

export const IEST_PRODUCT_DATA: Record<string, IESTProduct> = {
  "bpd-series": {
    name: "Battery Pressure Distribution Mapping Sensor System",
    model: "BPD Series",
    category: "Peripheral Equipment",
    description:
      "The IEST Battery Pressure Mapping Sensor Measurement System delivers precise, real-time interface pressure mapping and temperature monitoring for cell and module-stack compression analysis. Using high-resolution sensor arrays and multi-channel synchronous acquisition, it maps and quantifies surface pressure distribution and produces synchronized force/time and temperature profiles. The system validates pressure uniformity, tracks pressure evolution during cycling, and enables rapid evaluation of cell flatness, lamination uniformity, and module-level swelling forces.",
    features: [
      "Real-time total force curves from all sensors versus time",
      "Flexible pressure-map selection and customizable sensing area to match coin cell, pouch cell, prismatic cell, and module layouts",
      "Real-time synchronization with charge/discharge data to correlate electrochemical events with mechanical stress",
      "Quantitative characterization of pressure distribution differences on the cell surface",
      "Ideal for EV battery R&D, quality control, failure analysis, and process optimization",
      "High-resolution sensor arrays with multi-channel synchronous acquisition",
    ],
    applications: [
      "Quantitative characterization of pressure distribution differences on cell surfaces for stress analysis and failure investigation",
      "Combined use with swelling equipment to output expansion force changes and distribution at each charge/discharge stage",
      "Module-level compression uniformity validation and lamination quality assessment",
      "Process optimization for cell flatness and stack pressure uniformity",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Battery-Pressure-Distrbution-Measure-System-BPD1000.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Battery-Pressure-Mapping-Sensors-Measure-System-BPD1000.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Battery-Pressure-Mapping-Sensors-Measure-System-GIF.gif",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Battery-Pressure-Mapping-Sensors-Measure-System-case-Swelling-force-distribution.webp",
    ],
    seoTitle: "Battery Pressure Distribution Mapping System | IEST BPD",
    seoDescription:
      "IEST BPD Series: real-time battery pressure distribution mapping with high-resolution sensor arrays. Ideal for cell & module compression analysis, R&D, and QC.",
  },

  "ews-series": {
    name: "Electrode Electrolyte Wetting Testing System",
    model: "EWS/ETS/CHT Series",
    category: "Peripheral Equipment",
    description:
      "The IEST Electrode Electrolyte Wetting Testing System evaluates electrolyte wetting differences of electrodes, electrolytes, separators, formulations, and processes by combining visual acquisition with electrolyte capillary action. It supports real-time wetting rate characterization, high-precision mechanical control, and stable, efficient testing for battery R&D and process optimization.",
    features: [
      "Based on the principle of capillary diffusion of electrolyte in electrodes and separators for quantitative wetting evaluation",
      "High-precision mechanical control and visual acquisition system for stable, efficient testing",
      "Suitable for evaluating infiltration differences of different electrodes, electrolytes, separator formulas, and processes",
      "Real-time characterization of electrolyte infiltration rate in the sample",
      "Integrated electrolyte tank level control system (syringe pump and height sensor) to reduce inter-group test errors from liquid level fluctuations",
    ],
    applications: [
      "Electrolyte performance evaluation across different formulations",
      "Electrode consistency assessment and wettability screening",
      "Material and electrode surface treatment comparison",
      "Separator wetting rate characterization and process optimization",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Electrolyte-Wetting-Measurement-System-EWS-3-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Electrode-Electrolyte-Heightlmmersion-System-CHT.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Electrolyte-Wetting-Measurement-System-EWS-3-2.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Electrolyte-Wetting-Measurement-System-EWS-3-3.webp",
    ],
    seoTitle: "Electrode Electrolyte Wetting Testing System | IEST EWS",
    seoDescription:
      "IEST EWS/ETS/CHT Series: quantitative electrolyte wetting evaluation for electrodes, separators, and formulations. Real-time infiltration rate measurement for battery R&D.",
  },

  "mcs1000": {
    name: "In-Situ Model Coin Cell Swelling Testing System",
    model: "MCS1000",
    category: "Products & Applications",
    description:
      "The In-Situ Model Coin Cell Swelling Testing System (MCS1000) uses high-precision displacement sensing and a high-stability structural system to measure in-situ swelling thickness change curves of model coin-cell batteries. It is designed for rapid analysis of active material swelling performance, glove box operation, and automatic correlation of thickness change with charge-discharge data to facilitate material development.",
    features: [
      "Compact instrument size (120 × 150 × 280 mm) suitable for glove box placement",
      "Compatible with various types of full coin cell assemblies",
      "High-precision thickness measurement with 0.1 µm resolution and ±1 µm accuracy",
      "In-situ full-cell swelling thickness curve testing",
      "Ionic conductivity measurement of solid electrolytes",
      "Automatic software correlation of thickness change with charge-discharge data",
      "Good sealing ensures long-term test stability and more reliable results",
    ],
    applications: [
      "In-situ swelling thickness measurement of graphite, silicon-based, and lithium-metal coin cells",
      "Rapid screening of active material swelling performance during lithium intercalation/deintercalation",
      "Solid electrolyte ionic conductivity measurement",
      "Material development support through automated thickness-electrochemistry correlation",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Model-Coin-Cell-In-Situ-Swelling-Testing-System-3-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Model-Coin-Cell-In-Situ-Swelling-Testing-System-3-3.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Model-Coin-Cell-In-Situ-Swelling-Testing-System-3-2.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-In-Situ-Model-Coin-Cell-Swelling-Testing-System-Details-5.webp",
    ],
    seoTitle: "In-Situ Coin Cell Swelling Testing System | IEST MCS1000",
    seoDescription:
      "IEST MCS1000: high-precision in-situ coin cell swelling tester with 0.1 µm resolution. Glove-box compatible, auto-correlates thickness with charge-discharge data.",
  },

  "rss1400": {
    name: "Silicon-Based Anode Swelling In-Situ Screening System",
    model: "RSS1400",
    category: "Products & Applications",
    description:
      "The IEST In-Situ Silicon-Based Anode Swelling Rapid Screening System (RSS1400) is designed for four-channel simultaneous in-situ swelling thickness testing of silicon-based or graphite-based pouch cells, laminates, and model coin cells during charge-discharge processes. It helps evaluate material and cell swelling performance with a visual operation interface and one-click data export.",
    features: [
      "In-situ characterization of expansion thickness changes of silicon-based battery cells under different pressures",
      "Four-channel simultaneous testing of multiple battery cells",
      "Supports various battery cell structures: model coin cells, stacked batteries, and pouch cells",
      "Visual operation interface with one-click data report export",
      "Enables rapid material and cell swelling screening to accelerate R&D workflows",
    ],
    applications: [
      "Pouch cell in-situ swelling thickness testing during charge-discharge",
      "Laminate and coin cell swelling characterization",
      "Silicon-based anode material evaluation and screening",
      "Comparative swelling studies across different anode formulations and binder materials",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Silicon-Based-Anode-Swelling-In-Situ-Screening-System.webp",
    ],
    seoTitle: "Silicon Anode Swelling Screening System | IEST RSS1400",
    seoDescription:
      "IEST RSS1400: 4-channel in-situ swelling screening for silicon-based and graphite anode pouch cells and coin cells. Visual interface with one-click data export.",
  },

  "sems-series": {
    name: "Multi-Dimensional Solid Electrolyte Testing System",
    model: "SEMS Series",
    category: "Raw Materials",
    description:
      "The Multi-Dimensional Solid Electrolyte Testing System (SEMS Series) is an integrated platform specifically developed for comprehensive evaluation of solid electrolyte materials. The system provides glovebox-level atmosphere protection and combines pressurization of solid-state mold/pellet cells, precise pressure monitoring, and thickness measurement with automatic pressure locking and synchronized electrochemical characterization. By completing the full workflow from powder pressing to performance testing, it minimizes errors introduced by sample transfer in conventional methods.",
    features: [
      "New methods for evaluating ionic conductivity, electronic conductivity, and electrochemical performance of solid-state electrolytes",
      "Glove box atmosphere control system for inert-environment testing",
      "Applicable to oxides, sulfides, and polymer electrolytes",
      "Automatic pressure locking with precise pressure monitoring and thickness measurement",
      "Full workflow from powder pressing to performance testing in a single platform",
      "Synchronized electrochemical characterization minimizes inter-step transfer errors",
    ],
    applications: [
      "Ionic conductivity measurement of oxide, sulfide, and polymer solid electrolytes",
      "Electronic conductivity and electrochemical window characterization",
      "Green pellet preparation and testing for oxide solid electrolytes",
      "Evaluation of flat contact surface requirements and uniform force application",
      "Solid-state battery electrolyte R&D and material screening",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Multi-dimensional-Solid-Electrolyte-Testing-SystemSEMS-Series.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Multi-dimensional-Solid-Electrolyte-Testing-SystemSEMS-Series-3.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Multi-dimensional-Solid-Electrolyte-Testing-SystemSEMS-Series-2.webp",
      "https://iestbattery.com/wp-content/uploads/2025/08/d766248c523727c0b19d615318beb69f_11zon-scaled.webp",
    ],
    seoTitle: "Solid Electrolyte Testing System | IEST SEMS Series",
    seoDescription:
      "IEST SEMS Series: integrated solid electrolyte testing platform with glove-box atmosphere control. Measures ionic conductivity, electronic conductivity, and electrochemical performance.",
  },

  "prcd3100": {
    name: "Powder Resistivity & Compaction Density Measurement System",
    model: "PRCD3100",
    category: "Raw Materials",
    description:
      "The Powder Compaction Density and Powder Resistivity Measurement System (PRCD3100) combines high-precision pressure control with a comprehensive thickness and resistance testing system, supporting free choice of four-probe and two-probe methods. It accurately measures powder resistivity and compaction density for battery material R&D and batch-to-batch stability monitoring.",
    features: [
      "Ultra-wide pressurization range up to 350 MPa and resistance measurement range up to 1200 MΩ",
      "Freely switchable two-probe and four-probe dual-principle measurement",
      "Fully automatic test software with free parameter setting and one-click start",
      "Real-time monitoring of pressure, temperature, humidity, thickness, resistance, resistivity, conductivity, and compaction density",
      "Multiple powder test modes: pressurization, single-point pressure relief, and steady-state pressure relief",
      "Automatic saving of test data and output of multi-parameter curves",
    ],
    applications: [
      "Battery electrode powder resistivity characterization for cathode and anode active materials",
      "Compaction density measurement to guide electrode calendering process optimization",
      "Batch-to-batch consistency monitoring for powder material quality control",
      "Material R&D screening of conductive additives and binder effects on electrode resistivity",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-PRCD3100.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/PRCD3100.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Powder-Resistivity-Compaction-Density-Measurement-System-details-15.webp",
    ],
    seoTitle: "Powder Resistivity & Compaction Density System | PRCD3100",
    seoDescription:
      "IEST PRCD3100: measures battery powder resistivity and compaction density up to 350 MPa. Two-probe/four-probe switchable, fully automatic software for material R&D and QC.",
  },

  "bsr2300": {
    name: "Battery Slurry Resistivity Tester",
    model: "BSR2300",
    category: "Raw Materials",
    description:
      "The IEST Lithium Battery Slurry Resistivity Tester (BSR2300) is designed to measure slurry resistivity at three vertical positions using upper, middle, and lower electrodes to evaluate the conductivity of different battery slurry formulations and sedimentation performance over standing time. It helps evaluate the conductivity and formulation stability of lithium-ion and sodium-ion battery slurries, conductive additive slurries, and mixing process consistency.",
    features: [
      "Applicable for conductivity evaluation and optimization of Li/Na battery slurry formulations and conductive additive slurries",
      "Independent voltage/current paths eliminate induction interference, enhancing resistivity detection accuracy",
      "10 mm diameter disk electrodes ensure maximum sample contact area to minimize measurement errors",
      "Triple-electrode configuration simultaneously measures resistivity and sedimentation behavior at three vertical positions",
      "Enables evaluation of slurry sedimentation stability and mixing process uniformity",
    ],
    applications: [
      "Battery slurry formulation conductivity evaluation for lithium-ion and sodium-ion batteries",
      "Conductive additive slurry resistivity and dispersion quality assessment",
      "Sedimentation behavior monitoring over standing time for formulation stability",
      "Mixing process consistency monitoring and optimization",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Lithium-Battery-Slurry-Resistance-Tester.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Lithium-Battery-Slurry-Resistivity-Tester-details-11-e1751870863615-273x300.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Lithium-Battery-Slurry-Resistance-Tester-details-9.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Lithium-Battery-Slurry-Resistance-Tester-details12.png",
    ],
    seoTitle: "Battery Slurry Resistivity Tester | IEST BSR2300",
    seoDescription:
      "IEST BSR2300: measures Li/Na battery slurry resistivity at three vertical positions. Evaluates formulation conductivity, sedimentation stability, and mixing process consistency.",
  },

  "ber-series": {
    name: "Battery Electrode Resistance & Thickness Tester",
    model: "BER Series",
    category: "Peripheral Equipment",
    description:
      "The BER Series Multifunctional Electrode Resistance Analyzer combines a high-precision pressure control system with integrated capabilities for electrode thickness measurement and resistance analysis. Using the double-sided controllable pressure disc electrode method, this analyzer directly measures the true through-thickness resistance of practical electrode samples — including coating resistance, coating-current collector contact resistance, and current collector resistance — making it suitable for electrode formulation development, process stability monitoring, and battery cell failure analysis.",
    features: [
      "Direct measurement of true through-thickness resistance of practical electrodes including coating, contact, and current collector components",
      "Separate voltage/current terminals eliminate inductive interference on voltage sensing for enhanced measurement accuracy",
      "Double-sided controllable pressure disc electrode method for repeatable and uniform sample contact",
      "Integrated electrode thickness measurement alongside resistance analysis",
      "Suitable for electrode formulation development, process stability monitoring, material evaluation, and failure analysis",
      "Enables detection of A-side versus B-side coating differences in double-sided electrode samples",
    ],
    applications: [
      "Electrode formulation development and conductive additive optimization",
      "Process stability monitoring across coating batches",
      "Material evaluation for cathode and anode active materials and binders",
      "Battery cell failure analysis through electrode resistance profiling",
      "A-side vs. B-side coating uniformity assessment on double-sided electrodes",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Lithium-Battery-Electrode-Resistance-Tester.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Lithium-Battery-Electrode-Resistance-Tester-Details-14-1-e1745293584769.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Lithium-Battery-Electrode-Resistance-Tester-Details-2.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-Lithium-Battery-Electrode-Resistance-Tester-Details-3.webp",
    ],
    seoTitle: "Battery Electrode Resistance & Thickness Tester | IEST BER",
    seoDescription:
      "IEST BER Series: measures true through-thickness electrode resistance including coating and contact resistance. High-precision pressure control with integrated thickness measurement.",
  },

  "swe-series": {
    name: "In-Situ Battery Cell Swelling Testing System",
    model: "SWE Series",
    category: "Products & Applications",
    description:
      "The In-Situ Battery Cell Swelling Testing System (SWE Series) uses a servo motor combined with a high-precision control system and multiple high-precision thickness-measuring sensors to accurately measure swelling thickness and swelling force during battery charge and discharge processes. It supports in-situ non-destructive lithium plating detection, multi-level swelling testing, multi-channel testing, and temperature-controlled swelling analysis for battery R&D and material evaluation.",
    features: [
      "In-situ non-destructive lithium plating detection using an innovative method",
      "Multi-level expansion testing covering electrodes, coin cells, pouch cells, prismatic cells, and short-blade cells",
      "Multi-channel swelling testing from single-channel to four-channel configurations",
      "Temperature control range from -20°C to 80°C for thermal swelling studies",
      "Wide force ranges from 5 kg to 10,000 kg to accommodate diverse cell types",
      "Quantitative swelling thickness and expansion force measurement synchronized with electrochemical data",
      "Compatible with in-situ impedance analysis for combined swelling and lithium plating characterization",
    ],
    applications: [
      "In-situ swelling characterization of electrodes, coin cells, pouch cells, prismatic cells, and short-blade cells",
      "Non-destructive lithium plating detection and monitoring during cycling",
      "Binder material evaluation and screening through swelling force comparison",
      "Temperature-dependent swelling analysis at high and low temperatures",
      "Process influence analysis on cell stress and strain behavior",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-In-Situ-Cell-Swelling-Testing-System.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-In-Situ-Cell-Swelling-Testing-System-Details-19.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-In-Situ-Cell-Swelling-Testing-System-Details-17.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/IEST-In-Situ-Cell-Swelling-Testing-System-Details-20.webp",
    ],
    seoTitle: "In-Situ Battery Cell Swelling Testing System | IEST SWE",
    seoDescription:
      "IEST SWE Series: in-situ swelling tester for coin, pouch, prismatic, and blade cells. Non-destructive lithium plating detection, -20°C to 80°C, forces up to 10,000 kg.",
  },

  "gvm-series": {
    name: "In-Situ Battery Gassing Volume Analyzer",
    model: "GVM Series",
    category: "Products & Applications",
    description:
      "The IEST In-Situ Battery Gassing Volume Analyzer (GVM Series) uses a high-precision simultaneous mechanical-electrochemical testing system to record battery cell volume changes throughout the charge-discharge process, obtaining accurate gassing volume and gassing rate at each stage. It supports multi-level gassing testing, multi-channel operation, temperature-controlled testing from room temperature to 85°C, and comprehensive analysis of gassing volume, pressure, and composition.",
    features: [
      "Multi-level gassing testing from material gassing through single-layer stacked cells, small pouch cells, and cylindrical and prismatic cell gassing",
      "Multi-channel gassing testing from single-channel to 8-channel configurations",
      "Temperature-controlled testing from room temperature to 85°C with water bath control",
      "Comprehensive gassing analysis covering volume, pressure, and composition",
      "Real-time in-situ volume change recording synchronized with electrochemical data",
      "Enables rapid evaluation of gassing behavior to shorten R&D cycle times",
    ],
    applications: [
      "Comparison of material modification methods through in-situ gas production monitoring during storage",
      "Real-time slurry gas production characterization",
      "Gassing behavior evaluation for electrolyte formulation optimization",
      "Formation and cycling gas generation analysis for pouch, prismatic, and cylindrical cells",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/04/In-Situ-Battery-Gassing-Volume-Analyzer-GVM2200.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/In-Situ-Battery-Gassing-Volume-Analyzer-GVM2200-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/In-Situ-Battery-Gassing-Volume-Analyzer-GVM2200-2.webp",
      "https://iestbattery.com/wp-content/uploads/2024/04/Single-Volume-Drainage-Method.webp",
    ],
    seoTitle: "In-Situ Battery Gassing Volume Analyzer | IEST GVM Series",
    seoDescription:
      "IEST GVM Series: in-situ battery gassing analyzer measuring volume, pressure, and composition. Multi-channel, room temp to 85°C, for pouch, prismatic, and cylindrical cells.",
  },

  "spft2000": {
    name: "Single Particle Force Properties Testing System",
    model: "SPFT2000",
    category: "Raw Materials",
    description:
      "The IEST Single Particle Property Testing System (SPFT Series) provides high-precision compression and fracture testing for 5–50 µm battery electrode particles, quantifying micro-scale mechanical properties and failure mechanisms under controlled pressure. It evaluates material pressure resistance and guides the calendering process, particle design, densification, and electrode process optimization.",
    features: [
      "High-precision testing with 0.1 mN force resolution and 10 nm displacement resolution",
      "Designed for single particle sizes from 5 to 50 µm for anode, cathode, and solid electrolyte materials",
      "Multifunctional testing modes: displacement, pressure, and fatigue",
      "Integrated software with real-time imaging and automated analysis",
      "Inverted optics for superior imaging and precise particle positioning",
      "Superior cost-effectiveness delivering lab-grade performance",
    ],
    applications: [
      "Crushing strength measurement of battery material particles for mechanical performance evaluation",
      "Intrinsic mechanical property characterization at the microscale for cathode material screening",
      "Guidance of calendering process and electrode densification optimization",
      "Surface modification strategy evaluation through quantitative micro-scale testing",
      "Polystyrene and other reference particle characterization for system validation",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Single-Particle-Force-Properties-Test-System-2-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Single-Particle-Force-Properties-Test-System-3-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Single-Particle-Force-Properties-Test-System-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Single-Particle-Force-Properties-Test-System-Details-2.webp",
    ],
    seoTitle: "Single Particle Force Testing System | IEST SPFT2000",
    seoDescription:
      "IEST SPFT2000: 0.1 mN / 10 nm precision compression and fracture testing for 5–50 µm battery electrode particles. Guides calendering, densification, and electrode optimization.",
  },

  "eic-series": {
    name: "Electrode Tortuosity & Separator Ion Conductivity Tester",
    model: "EIC Series",
    category: "Peripheral Equipment",
    description:
      "The IEST Electrode Tortuosity Tester and Separator Ion Conductivity Tester (EIC Series) is designed for electrode tortuosity measurement and separator ion conductivity testing based on EIS analysis of symmetric cells. It supports automated testing and analysis, four-channel synchronous measurement, high-purity argon atmosphere operation, and rapid EIS testing for battery electrode and separator characterization.",
    features: [
      "Electrode tortuosity calculated from electrochemical impedance spectroscopy (EIS) of symmetric cells",
      "Streamlined cell assembly with automated testing and analysis for simplified workflow and enhanced throughput",
      "Four-channel synchronous measurement for parallel sample testing",
      "High-purity argon gas atmosphere for inert-environment testing",
      "Rapid EIS testing module for efficient characterization",
      "Outputs McMullin Number and tortuosity directly from measurement data",
    ],
    applications: [
      "Electrode tortuosity measurement for R&D and process optimization",
      "Separator ion conductivity testing to evaluate coating effects on electrochemical performance",
      "Characterization of separator puncture resistance, thermal stability, and electrolyte wettability improvements from coating processes",
      "Comparative performance testing of coated vs. uncoated separators for safety and conductivity",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Electrode-Tortuosity-Tester-and-Separator-Ion-Conductivity-Tester-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Electrode-Tortuosity-Tester-and-Separator-Ion-Conductivity-Tester-2.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Electrode-Tortuosity-Tester-and-Separator-Ion-Conductivity-Tester-3.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Electrode-Tortuosity-TesterSeparator-Ion-Conductivity-Tester-Details-1.webp",
    ],
    seoTitle: "Electrode Tortuosity & Separator Ion Conductivity | IEST EIC",
    seoDescription:
      "IEST EIC Series: EIS-based electrode tortuosity and separator ion conductivity tester. 4-channel synchronous, argon atmosphere, automated analysis with McMullin Number output.",
  },

  "ert-series": {
    name: "High Precision Battery Cycler & Electrochemical Analyzer",
    model: "ERT Series",
    category: "Products & Applications",
    description:
      "The IEST Battery Cycle Tester Electrochemical Property Analyzer (ERT Series) is a high-precision battery testing system for comprehensive electrochemical characterization. It supports native EIS analysis, DCIR, CV, dQ/dV analysis, GITT, PITT, CA, and CP for lithium-ion batteries, coin cells, half-cells, three-electrode cells, and small-capacity testing.",
    features: [
      "Voltage and current precision of 0.01% for accurate benchmark data for lifespan prediction and self-discharge testing",
      "Supports coin cells, half-cells, three-electrode cells, capacitor materials, and small-capacity testing",
      "Triple protection (software, hardware, firmware) for safe operation of equipment and samples",
      "Electrochemical testing methods: multi-scan rate cyclic voltammetry, linear sweep voltammetry, GITT, PITT, CA, and CP",
      "Flexible auxiliary channel integration for temperature control, surface temperature monitoring, three-electrode setups, and pressure detection",
      "Online calibration with independent channel operation and private cloud data backup",
    ],
    applications: [
      "High-precision DCIR testing for accurate internal resistance characterization of coin cells",
      "dQ/dV analysis and accurate Coulombic efficiency measurements",
      "Electrochemical workstation functions including CV, EIS, GITT, and PITT",
      "Lifespan prediction data generation and inventory efficiency testing",
      "Charge/discharge testing comparison of impedance across different cell types",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Battery-Cycle-Tester-Electrochemical-Property-Analyzer-ERT-Series-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Battery-Cycle-Tester-Electrochemical-Property-Analyzer-ERT-Series-2.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Battery-Cycle-Tester-Electrochemical-Property-Analyzer-ERT-Series-4.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Battery-Cycle-Tester-Electrochemical-Property-Analyzer-ERT-Series-3.webp",
    ],
    seoTitle: "High Precision Battery Cycler & Electrochemical Analyzer | ERT",
    seoDescription:
      "IEST ERT Series: 0.01% precision battery cycler with native EIS, DCIR, CV, GITT, and dQ/dV. Supports coin cells, half-cells, three-electrode cells, and small-capacity testing.",
  },

  "caas-series": {
    name: "Automatic Coin Cell Assembly System",
    model: "CAAS Series",
    category: "Production Line",
    description:
      "The IEST Automatic Coin Cell Assembly System (CAAS Series) is designed for high-throughput, automated coin cell assembly to support electrolyte formulation verification and battery R&D. It incorporates a visual positioning system to avoid placement deviations caused by electrode curling, ensuring repeatable and consistent cell assembly for reliable electrochemical testing.",
    features: [
      "Automated coin cell assembly for high-throughput battery R&D workflows",
      "Visual positioning system prevents electrode placement deviations caused by curling",
      "Suitable for electrolyte formulation verification and comparative cell studies",
      "Ensures repeatable and consistent cell assembly for reliable electrochemical data",
      "Supports high-throughput screening of cathode, anode, and electrolyte materials",
    ],
    applications: [
      "Electrolyte formulation verification through high-throughput coin cell assembly",
      "High-throughput battery material screening for cathode and anode active materials",
      "Comparative coin cell studies requiring consistent assembly quality",
      "R&D lab automation to reduce manual assembly variability",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2026/04/IEST-Automatic-Coin-Cell-Assembly-SystemCAAS​-e1748397045278.webp",
      "https://iestbattery.com/wp-content/uploads/2026/04/Specific-Capacity-Range-Fluctuation-Plot-of-NCM-1-During-Charge-Discharge.webp",
      "https://iestbattery.com/wp-content/uploads/2026/04/Specific-Capacity-Range-Fluctuation-Plot-of-LFP-During-Charge-Discharge.webp",
      "https://iestbattery.com/wp-content/uploads/2026/04/Specific-Capacity-Range-Fluctuation-Plot-of-Graphite-During-Charge-Discharge.webp",
    ],
    seoTitle: "Automatic Coin Cell Assembly System | IEST CAAS Series",
    seoDescription:
      "IEST CAAS Series: automated coin cell assembly with visual positioning for high-throughput battery R&D. Eliminates electrode placement errors for consistent, repeatable results.",
  },

  "bit-series": {
    name: "Battery Impedance & Consistency Tester",
    model: "BIT Series",
    category: "Products & Applications",
    description:
      "The IEST Battery Impedance Tester (BIT Series) is a high-precision electrochemical testing system for lithium-ion battery consistency screening and impedance analysis. The system supports fast EIS sweep testing, OCV testing, DCR testing, and constant current charge-discharge testing for large-capacity cells, power batteries, energy storage batteries, and battery pack pre-assembly quality control.",
    features: [
      "Wide range of applicable cells from 1 Ah to 1000 Ah",
      "Fast EIS frequency sweep testing with a frequency range of 1500 Hz to 0.1 Hz",
      "Compatible with OCV testing, DCR testing, and constant current charge-discharge testing",
      "Dynamic fitting screening algorithm for batch consistency screening",
      "Rapid compartmentalization with multi-channel coupling for parallel testing",
      "Industrial-grade EIS capability suitable for production environments",
    ],
    applications: [
      "EIS testing for power batteries and energy storage batteries",
      "Industrial-grade EIS applications at the battery cell factory back-end",
      "Battery long-cycle EIS testing and health monitoring",
      "Module and pack pre-assembly quality control and consistency screening",
      "Impedance comparison across different cell batches for grading",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Battery-Impedance-Tester-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Battery-Impedance-Tester-3.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Battery-Impedance-Tester-4.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Battery-Impedance-Tester-2.webp",
    ],
    seoTitle: "Battery Impedance & Consistency Tester | IEST BIT Series",
    seoDescription:
      "IEST BIT Series: high-precision EIS, OCV, and DCR tester for 1–1000 Ah cells. Fast frequency sweep with dynamic fitting for battery consistency screening and pack QC.",
  },

  "ccs1100": {
    name: "Cylindrical Battery In-Situ Volume Swelling Testing System",
    model: "CCS1100",
    category: "Products & Applications",
    description:
      "The IEST Cylindrical Battery In-Situ Volume Swelling Testing System (CCS1100) is designed for non-contact, non-destructive, high-throughput in-situ volume swelling analysis of cylindrical batteries. It integrates optical imaging, 3D reconstruction, and real-time online monitoring to evaluate battery surface morphology, volume deformation, and health condition during charge and discharge processes.",
    features: [
      "Optical imaging combined with 3D reconstruction and real-time online monitoring",
      "Non-contact, non-destructive testing methodology",
      "High-throughput testing suitable for mass production environments",
      "Real-time reconstruction of battery surface morphology and volume deformation during cycling",
      "Combines voltage and current data to detect and predict battery health condition from a higher dimension",
    ],
    applications: [
      "Material evaluation through in-situ volume swelling characterization",
      "Structural evaluation of cylindrical cell swelling behavior",
      "Evaluation of different working conditions including temperature, rate, and storage",
      "High-throughput screening of cylindrical cells for mass production quality control",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Cylindrical-Battery-In-Situ-Volume-Swelling-Testing-System-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Cylindrical-Battery-In-Situ-Volume-Swelling-Testing-System-Details-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Cylindrical-Battery-In-Situ-Volume-Swelling-Testing-System-3.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-Cylindrical-Battery-In-Situ-Volume-Swelling-Testing-System-4.webp",
    ],
    seoTitle: "Cylindrical Battery In-Situ Volume Swelling System | CCS1100",
    seoDescription:
      "IEST CCS1100: non-contact, non-destructive in-situ volume swelling analysis for cylindrical batteries using optical imaging and 3D reconstruction. High-throughput mass production ready.",
  },

  "msg2000": {
    name: "In-Situ Multi-Channel Battery Storage Gassing System",
    model: "MSG2000",
    category: "Products & Applications",
    description:
      "The IEST In-Situ Multi-Channel Battery Storage Gassing System (MSG2000) enables in-situ storage gassing testing for pouch cells with up to 64 channels running simultaneously. It automatically records volume, voltage, and internal resistance data and supports access to external cyclers for integrated electrochemical testing.",
    features: [
      "In-situ storage gassing testing specifically designed for pouch cells",
      "Multi-channel testing with up to 64 simultaneous channels",
      "Automatic data recording of volume, voltage, and internal resistance",
      "Access to external cyclers for integrated charge-discharge and gassing analysis",
      "Enables long-term storage gassing studies for electrolyte and material evaluation",
    ],
    applications: [
      "Long-term storage gassing characterization for pouch cell formulation development",
      "Electrolyte additive evaluation through multi-channel parallel gassing studies",
      "Formation gassing monitoring integrated with charge-discharge cycling",
      "High-throughput gassing screening for battery material R&D",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2024/05/In-situ-Multi-channel-Storage-Gassing-Test-System-1.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/In-situ-Multi-channel-Storage-Gassing-Test-System-2.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/In-situ-Multi-channel-Storage-Gassing-Test-System-3.webp",
      "https://iestbattery.com/wp-content/uploads/2024/05/IEST-In-situ-Multi-channel-Battery-Storage-Gassing-System-Details-5.webp",
    ],
    seoTitle: "In-Situ Multi-Channel Battery Storage Gassing System | MSG2000",
    seoDescription:
      "IEST MSG2000: up to 64-channel in-situ storage gassing tester for pouch cells. Auto-records volume, voltage, and internal resistance. Compatible with external cyclers.",
  },

  "ect-series": {
    name: "Battery Cycler Electrochemical Property Analyzer",
    model: "ECT Series",
    category: "Products & Applications",
    description:
      "The IEST Battery Cycler Electrochemical Property Analyzer (ECT Series) delivers 0.01% voltage and current precision for comprehensive electrochemical analysis including GITT, PITT, CA, CP, and charge/discharge testing. It features triple protection (software, hardware, and firmware), flexible auxiliary channel integration, and private cloud data backup for secure, high-accuracy battery characterization.",
    features: [
      "Voltage and current precision of 0.01% for accurate benchmark data",
      "Supports GITT, PITT, CA, CP, and charge/discharge testing methods",
      "Triple protection (software, hardware, firmware) for safe equipment and sample operation",
      "Flexible auxiliary channel integration for temperature control, three-electrode setups, and pressure detection",
      "Online calibration with independent channel operation and no cross-channel interference",
      "Private cloud platform and cloud server backup ensure data security and confidentiality",
    ],
    applications: [
      "dQ/dV analysis and accurate gram capacity measurement",
      "Accurate Coulombic efficiency measurement and self-discharge characterization",
      "Electrochemical workstation applications including GITT and PITT",
      "Cell cycle impedance analysis and charge/discharge comparison across cell types",
      "Lifespan prediction and inventory efficiency testing with high benchmark accuracy",
    ],
    carouselImages: [
      "https://iestbattery.com/wp-content/uploads/2025/03/IEST-Electrochemical-Property-Analyzer-ECT-Series.webp",
      "https://iestbattery.com/wp-content/uploads/2025/03/IEST-Electrochemical-Property-Analyzer-ECT-Series-1-1.webp",
      "https://iestbattery.com/wp-content/uploads/2025/03/IEST-Electrochemical-Property-Analyzer-ECT-Series-1.webp",
      "https://iestbattery.com/wp-content/uploads/2025/03/IEST-Electrochemical-Property-Analyzer-ECT-Series-2.webp",
    ],
    seoTitle: "Battery Cycler Electrochemical Property Analyzer | IEST ECT",
    seoDescription:
      "IEST ECT Series: 0.01% precision battery cycler with GITT, PITT, CA, CP, and dQ/dV. Triple protection, auxiliary channel integration, private cloud backup for R&D and QC.",
  },
};
