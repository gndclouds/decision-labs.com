const projects = [
  {
    className: "product",
    summary: "Full-stack geospatial backend-as-a-service.",
    description:
      "Geobase is a Supabase fork with PostGIS, vector/raster tile servers, and STAC integration. It provides developers with cloud-native geospatial infrastructure to build scalable applications.",
    links: { website: "https://geobase.app" },
    slug: "geobase",
    title: "Geobase",
    cover: require("./geobase.png"),
    theme: { background: "#f4f5fa", light: true }
  },
  {
    className: "product",
    summary: "Natural-language EO analytics assistant.",
    description:
      "EarthGPT enables policy analysts, journalists, and researchers to query satellite data and climate models using natural language, backed by ViTs, LLMs, and RAG pipelines.",
    links: { website: "https://earthgpt.ai" },
    slug: "earthgpt",
    title: "EarthGPT",
    cover: require("./earthgpt.png"),
    theme: { background: "#d4f0ff", light: true }
  },
  {
    className: "product",
    summary: "Satellite image authenticity verification.",
    description:
      "Verisat.ai detects fake or manipulated satellite imagery by analyzing noise patterns, FFT fingerprints, and patch-level inconsistencies. Built to support journalists and analysts.",
    links: { website: "https://verisat.ai" },
    slug: "verisat",
    title: "Verisat.ai",
    cover: require("./verisat.png"),
    theme: { background: "#fef3c7", light: true }
  },
  {
    className: "product",
    summary: "JavaScript-native GeoAI toolkit.",
    description:
      "GeoAI.js brings HuggingFace transformers.js models to the browser and Node.js, enabling client-side geospatial AI. Includes live demos and docs for developers.",
    links: { website: "https://docs.geobase.app/geoai-live" },
    slug: "geoai-js",
    title: "GeoAI.js",
    cover: require("./geoai.png"),
    theme: { background: "#e0f2fe", light: true }
  },
  {
    className: "consulting",
    summary: "Local government expenditure analytics.",
    description:
      "Spendmapp helps councils in Australia track and analyze community expenditure patterns using anonymized EFTPOS transaction data, improving local economic planning.",
    links: { website: "https://decision-labs.com/spendmapp" },
    slug: "spendmapp",
    title: "Spendmapp",
    cover: require("./spendmapp.png"),
    theme: { background: "#bdf1ff", light: true }
  },
  {
    className: "consulting",
    summary: "Agriculture Statistics Platform (ADB-funded).",
    description:
      "KP-ASIS integrates satellite data, surveys, and mobile workflows to improve agricultural statistics for Pakistan's Khyber Pakhtunkhwa province.",
    links: { website: "https://decision-labs.com/kp-asis" },
    slug: "kp-asis",
    title: "KP-ASIS",
    cover: require("./kpas.png"),
    theme: { background: "#f7f7f7", light: true }
  },
  {
    className: "consulting",
    summary: "Drone/ERP–GIS integration for construction.",
    description:
      "NCC Drone Services in the Middle East integrates drones with ERP and GIS systems to streamline construction monitoring and reporting.",
    links: { website: "https://decision-labs.com/ncc-drone" },
    slug: "ncc-drone",
    title: "NCC Drone Services",
    cover: require("./ncc.png"),
    theme: { background: "#fff7ed", light: true }
  },
  {
    className: "consulting",
    summary: "Community-driven urban data platform.",
    description:
      "Know Your City Academy (KYCA) builds civic data commons in collaboration with SDI, supporting participatory mapping and policy advocacy.",
    links: { website: "https://decision-labs.com/kyca" },
    slug: "kyca",
    title: "KYCA Data Commons",
    cover: require("./kyca.png"),
    theme: { background: "#e0e7ff", light: true }
  },
  {
    className: "research",
    summary: "EO deepfake detection research.",
    description:
      "In collaboration with ESA Φ-Lab, Decision Labs develops methods to detect manipulated satellite imagery and benchmark models for authenticity verification.",
    links: { website: "https://esa.int" },
    slug: "esa-philab",
    title: "ESA Φ-Lab Collaboration",
    cover: require("./esa.png"),
    theme: { background: "#eef2ff", light: true }
  },
  {
    className: "research",
    summary: "On-orbit satellite data applications.",
    description:
      "Partnerships with Kuva Space (Finland) and SITAEL (Italy) to explore satellite data applications and in-orbit processing workflows.",
    links: { website: "https://decision-labs.com/research" },
    slug: "kuva-sitael",
    title: "Kuva Space & SITAEL",
    cover: require("./kuva.png"),
    theme: { background: "#dcfce7", light: true }
  },
  {
    className: "domain",
    summary: "Urban greening for climate resilience.",
    description:
      "At Earthna Summit 2025 (Doha), Decision Labs showcased EarthGPT simulations of surface temperature reduction from urban greening interventions.",
    links: { website: "https://earthna.qa" },
    slug: "earthna",
    title: "Urban Greening (Earthna Summit)",
    cover: require("./earthna.png"),
    theme: { background: "#ecfccb", light: true }
  },
  {
    className: "domain",
    summary: "Global mangrove monitoring for dMRV.",
    description:
      "Decision Labs contributes to global mangrove ecosystem monitoring, supporting conservation and carbon markets via digital MRV (measurement, reporting, verification).",
    links: { website: "https://mangrovealliance.org" },
    slug: "mangrove",
    title: "Mangrove Monitoring",
    cover: require("./mangrove.png"),
    theme: { background: "#bbf7d0", light: true }
  }
];

export default projects;
