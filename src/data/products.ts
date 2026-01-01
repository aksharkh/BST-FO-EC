import { Wifi, Zap, Cable, Server, Building2, Home, Factory, Radio } from "lucide-react";
import fiberImage from "../assets/product-fiber.jpg";
import electricalImage from "../assets/product-electrical.jpg";
import hybridImage from "../assets/product-hybrid.jpg";

export type ProductCategory = "fiber" | "electrical" | "hybrid";

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  description: string;
  fullDescription: string;
  image: string;
  icon: typeof Wifi;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  price?: string;
}

export const products: Product[] = [
  // Fiber Optic Products
  {
    id: "single-mode-fiber",
    title: "Single Mode Fiber Cable",
    category: "fiber",
    description: "High-performance single mode fiber for long-distance data transmission.",
    fullDescription: "Our Single Mode Fiber Cable is engineered for maximum performance in telecommunications and data center applications. With minimal signal attenuation and dispersion, it's the ideal choice for long-haul networks requiring reliable, high-speed data transmission over distances up to 100km.",
    image: fiberImage,
    icon: Wifi,
    features: ["100 Gbps capacity", "Low attenuation", "9/125 μm core", "Up to 100km range"],
    specifications: [
      { label: "Core Diameter", value: "9 μm" },
      { label: "Cladding Diameter", value: "125 μm" },
      { label: "Attenuation", value: "≤0.35 dB/km @1310nm" },
      { label: "Bandwidth", value: "Up to 100 Gbps" },
      { label: "Operating Temperature", value: "-40°C to +70°C" },
      { label: "Jacket Material", value: "LSZH/PVC" },
    ],
    applications: ["Telecommunications", "Data Centers", "Long-haul Networks", "FTTH"],
  },
  {
    id: "multi-mode-fiber",
    title: "Multi Mode Fiber Cable",
    category: "fiber",
    description: "Versatile multi-mode fiber perfect for short-distance, high-bandwidth needs.",
    fullDescription: "The Multi Mode Fiber Cable delivers exceptional performance for enterprise LANs, data centers, and campus networks. With larger core diameter allowing multiple light modes, it provides cost-effective high-speed connectivity for distances up to 550 meters.",
    image: fiberImage,
    icon: Server,
    features: ["OM4 rated", "40/100G ready", "50/125 μm core", "550m range @10G"],
    specifications: [
      { label: "Core Diameter", value: "50 μm" },
      { label: "Cladding Diameter", value: "125 μm" },
      { label: "Bandwidth", value: "4700 MHz·km @850nm" },
      { label: "Max Speed", value: "100 Gbps" },
      { label: "Operating Temperature", value: "-20°C to +60°C" },
      { label: "Jacket Material", value: "LSZH" },
    ],
    applications: ["Enterprise LANs", "Data Centers", "Campus Networks", "SAN Storage"],
  },
  {
    id: "armored-fiber",
    title: "Armored Fiber Cable",
    category: "fiber",
    description: "Rugged fiber optic cable with steel armor for harsh environments.",
    fullDescription: "Designed for demanding outdoor and industrial environments, our Armored Fiber Cable features a corrugated steel armor layer that provides exceptional protection against crushing, rodents, and environmental hazards while maintaining superior optical performance.",
    image: fiberImage,
    icon: Radio,
    features: ["Steel armored", "Rodent resistant", "UV protected", "Direct burial rated"],
    specifications: [
      { label: "Armor Type", value: "Corrugated Steel" },
      { label: "Fiber Count", value: "2-144 fibers" },
      { label: "Tensile Strength", value: "3000N" },
      { label: "Crush Resistance", value: "3000N/100mm" },
      { label: "Operating Temperature", value: "-40°C to +70°C" },
      { label: "Installation", value: "Direct burial/Aerial" },
    ],
    applications: ["Outdoor Networks", "Industrial Sites", "Underground Installation", "Mining Operations"],
  },

  // Electrical Products
  {
    id: "industrial-power-cable",
    title: "Industrial Power Cable",
    category: "electrical",
    description: "Heavy-duty power cables for industrial machinery and equipment.",
    fullDescription: "Our Industrial Power Cable is built to handle the most demanding power transmission requirements. Featuring high-grade copper conductors and advanced insulation technology, these cables deliver reliable power distribution for factories, plants, and heavy industrial applications.",
    image: electricalImage,
    icon: Factory,
    features: ["1000V rated", "Flame retardant", "Oil resistant", "High flexibility"],
    specifications: [
      { label: "Voltage Rating", value: "600/1000V" },
      { label: "Conductor", value: "Class 2 stranded copper" },
      { label: "Insulation", value: "XLPE" },
      { label: "Cross Section", value: "1.5 - 630 mm²" },
      { label: "Operating Temperature", value: "-40°C to +90°C" },
      { label: "Standards", value: "IEC 60502-1" },
    ],
    applications: ["Manufacturing Plants", "Heavy Machinery", "Power Distribution", "Industrial Automation"],
  },
  {
    id: "building-wire",
    title: "Building Wire & Cable",
    category: "electrical",
    description: "Safe and reliable electrical wiring for residential and commercial buildings.",
    fullDescription: "Premium Building Wire designed for permanent electrical installations in residential, commercial, and institutional buildings. Our cables meet stringent safety standards with superior fire resistance and long-term durability for peace of mind.",
    image: electricalImage,
    icon: Building2,
    features: ["Fire resistant", "Low smoke", "Easy installation", "Long lifespan"],
    specifications: [
      { label: "Voltage Rating", value: "450/750V" },
      { label: "Conductor", value: "Solid/Stranded copper" },
      { label: "Insulation", value: "PVC/LSZH" },
      { label: "Cross Section", value: "1.5 - 400 mm²" },
      { label: "Fire Rating", value: "IEC 60332-1" },
      { label: "Standards", value: "BS 6004/IEC 60227" },
    ],
    applications: ["Residential Buildings", "Commercial Complexes", "Office Buildings", "Institutional Facilities"],
  },
  {
    id: "solar-cable",
    title: "Solar PV Cable",
    category: "electrical",
    description: "UV-resistant cables specifically designed for solar power installations.",
    fullDescription: "Purpose-built for photovoltaic systems, our Solar PV Cables are engineered to withstand extreme weather conditions, UV exposure, and temperature variations. These cables ensure maximum efficiency and safety for solar power generation systems.",
    image: electricalImage,
    icon: Home,
    features: ["UV resistant", "Weather proof", "High temperature", "25-year lifespan"],
    specifications: [
      { label: "Voltage Rating", value: "1.8kV DC" },
      { label: "Conductor", value: "Tinned copper" },
      { label: "Insulation", value: "XLPE" },
      { label: "Cross Section", value: "2.5 - 16 mm²" },
      { label: "Operating Temperature", value: "-40°C to +120°C" },
      { label: "Standards", value: "EN 50618/TUV 2PfG" },
    ],
    applications: ["Solar Farms", "Rooftop Systems", "Solar Parks", "Off-grid Systems"],
  },

  // Hybrid Products
  {
    id: "hybrid-composite",
    title: "Hybrid Composite Cable",
    category: "hybrid",
    description: "Combined fiber optic and power in one integrated cable solution.",
    fullDescription: "The ultimate space-saving solution combining high-speed fiber optic data transmission with power delivery in a single cable. Ideal for modern smart buildings, industrial automation, and IoT deployments where both power and data connectivity are required.",
    image: hybridImage,
    icon: Cable,
    features: ["Dual purpose", "Space efficient", "Single installation", "Cost effective"],
    specifications: [
      { label: "Fiber Count", value: "2-24 fibers" },
      { label: "Power Cores", value: "2-4 copper cores" },
      { label: "Voltage Rating", value: "600/1000V" },
      { label: "Data Rate", value: "Up to 100 Gbps" },
      { label: "Operating Temperature", value: "-30°C to +70°C" },
      { label: "Outer Diameter", value: "12-25mm" },
    ],
    applications: ["Smart Buildings", "Industrial IoT", "Surveillance Systems", "Telecom Towers"],
  },
  {
    id: "opgw-cable",
    title: "OPGW Cable",
    category: "hybrid",
    description: "Optical ground wire combining fiber optics with overhead power line protection.",
    fullDescription: "Optical Ground Wire (OPGW) serves the dual purpose of grounding overhead power transmission lines while providing a pathway for fiber optic communications. This innovative solution maximizes infrastructure utilization for power utilities.",
    image: hybridImage,
    icon: Zap,
    features: ["Lightning protection", "Fiber integrated", "High tensile", "Low sag"],
    specifications: [
      { label: "Fiber Count", value: "12-96 fibers" },
      { label: "Aluminum Area", value: "30-200 mm²" },
      { label: "Tensile Strength", value: "40-180 kN" },
      { label: "Short Circuit Rating", value: "Up to 80 kA" },
      { label: "Operating Temperature", value: "-40°C to +70°C" },
      { label: "Standards", value: "IEEE 1138" },
    ],
    applications: ["Power Transmission", "Utility Networks", "Smart Grid", "Rural Electrification"],
  },
];

export const categories = [
  { id: "all", name: "All Products", icon: Cable },
  { id: "fiber", name: "Fiber Optics", icon: Wifi },
  { id: "electrical", name: "Electrical Cables", icon: Zap },
  { id: "hybrid", name: "Hybrid Solutions", icon: Cable },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: ProductCategory | "all"): Product[] => {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
};