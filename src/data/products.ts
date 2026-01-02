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
  {
  id: "unitube-unarmoured-fiber",
  title: "Unitube Unarmoured Optical Fiber Cable",
  category: "fiber",
  description: "Lightweight unitube optical fiber cable designed for indoor and outdoor network applications.",
  fullDescription: "Our Unitube Unarmoured Optical Fiber Cable features a central loose tube design filled with thixotropic jelly compound to protect optical fibers from moisture and environmental stresses. The lightweight, unarmoured construction makes it ideal for both indoor and outdoor installations where flexibility and ease of handling are required. Designed for Local Area Network (LAN) and CATV applications, this cable ensures excellent optical performance and long-term reliability.",
  image: fiberImage,
  icon: Wifi,
  features: [
    "Central loose tube design",
    "Thixotropic jelly filled for moisture protection",
    "Lightweight unarmoured construction",
    "Suitable for indoor and outdoor installation",
    "Excellent optical performance"
  ],
  specifications: [
    { label: "Cable Type", value: "Unitube Unarmoured" },
    { label: "Fiber Type", value: "Single Mode / Multi Mode" },
    { label: "Fiber Count", value: "2 to 24 fibers" },
    { label: "Tube Filling", value: "Thixotropic jelly compound" },
    { label: "Installation", value: "Indoor / Outdoor" },
    { label: "Application Standard", value: "LAN / CATV" }
  ],
  applications: [
    "Local Area Networks (LAN)",
    "CATV Networks",
    "Indoor Backbone Cabling",
    "Outdoor Campus Networks",
    "Telecommunication Networks"
  ]
},
{
  id: "unitube-armoured-fiber",
  title: "Unitube Armoured Optical Fiber Cable",
  category: "fiber",
  description: "Rugged unitube armoured optical fiber cable designed for reliable outdoor network installations.",
  fullDescription: "Our Unitube Armoured Optical Fiber Cable features a central loose tube filled with jelly compound for superior fiber protection and moisture resistance. The cable is reinforced with high-quality Electro Chromium Coated Corrugated Steel (ECCS) tape, providing excellent crush resistance and mechanical strength while maintaining a lightweight and compact structure. Designed specifically for outdoor network systems, this export-quality cable ensures long-term durability and consistent optical performance in demanding environments.",
  image: fiberImage,
  icon: Radio,
  features: [
    "Central loose tube with jelly compound",
    "ECCS corrugated steel tape armouring",
    "Excellent crush resistance",
    "Lightweight and compact structure",
    "Export quality design"
  ],
  specifications: [
    { label: "Cable Type", value: "Unitube Armoured" },
    { label: "Fiber Type", value: "Single Mode / Multi Mode" },
    { label: "Fiber Count", value: "2 to 24 fibers" },
    { label: "Armour Type", value: "ECCS Corrugated Steel Tape" },
    { label: "Installation", value: "Outdoor" },
    { label: "Mechanical Protection", value: "High crush resistance" }
  ],
  applications: [
    "Outdoor Telecom Networks",
    "Campus Backbone Networks",
    "Underground Duct Installation",
    "Metropolitan Area Networks",
    "Export Projects"
  ]
},
{
  id: "mt-unarmoured-fiber",
  title: "MT Unarmoured Optical Fiber Cable",
  category: "fiber",
  description: "Multitube unarmoured optical fiber cable designed for efficient and flexible network installations.",
  fullDescription: "Our MT Unarmoured Optical Fiber Cable is a multitube, single sheath, wet core design that provides reliable optical performance with an all-dielectric construction. The unarmoured structure allows for simple and fast installation while ensuring ease of termination. This cable is ideal for applications where flexibility, lightweight design, and quick deployment are required.",
  image: fiberImage,
  icon: Wifi,
  features: [
    "Multitube unarmoured wet core design",
    "All dielectric construction",
    "Simple and fast installation",
    "Lightweight and flexible",
    "Easy termination"
  ],
  specifications: [
    { label: "Cable Type", value: "MT Unarmoured" },
    { label: "Fiber Type", value: "Single Mode / Multi Mode" },
    { label: "Fiber Count", value: "Up to 144 fibers" },
    { label: "Core Design", value: "Wet core" },
    { label: "Sheath Type", value: "Single sheath" },
    { label: "Installation", value: "Indoor / Outdoor" }
  ],
  applications: [
    "Telecommunication Networks",
    "Campus Networks",
    "Indoor Backbone Cabling",
    "Outdoor Duct Installation"
  ]
},
{
  id: "mt-armoured-fiber",
  title: "MT Armoured Optical Fiber Cable",
  category: "fiber",
  description: "Multitube armoured optical fiber cable for rugged outdoor and direct burial applications.",
  fullDescription: "The MT Armoured Optical Fiber Cable is a multitube, single sheath, wet core optical fiber cable designed for outdoor and direct burial installations. The armoured construction provides excellent crush resistance and mechanical protection, ensuring long-term reliability in harsh environmental conditions.",
  image: fiberImage,
  icon: Radio,
  features: [
    "Multitube armoured wet core design",
    "Excellent crush resistance",
    "Suitable for direct burial",
    "Outdoor rated construction",
    "High mechanical strength"
  ],
  specifications: [
    { label: "Cable Type", value: "MT Armoured" },
    { label: "Fiber Type", value: "Single Mode / Multi Mode" },
    { label: "Fiber Count", value: "Up to 144 fibers" },
    { label: "Core Design", value: "Wet core" },
    { label: "Installation", value: "Outdoor / Direct Burial" },
    { label: "Mechanical Protection", value: "High crush resistance" }
  ],
  applications: [
    "Direct Burial Networks",
    "Outdoor Telecom Networks",
    "Metropolitan Area Networks",
    "Underground Infrastructure"
  ]
},

{
  id: "ribbon-optical-fiber-cable",
  title: "Ribbon Optical Fiber Cable",
  category: "fiber",
  description: "High-density ribbon optical fiber cable designed for large-scale network deployments.",
  fullDescription: "Our Ribbon Optical Fiber Cable features a multitube ribbon design capable of accommodating up to 576 fibers within a compact diameter. This high fiber density solution enables rapid mass splicing and easy termination, making it ideal for backbone and high-capacity network installations.",
  image: fiberImage,
  icon: Server,
  features: [
    "High-density ribbon fiber design",
    "Supports up to 576 fibers",
    "Compact cable diameter",
    "Easy splicing and termination",
    "Ideal for high-capacity networks"
  ],
  specifications: [
    { label: "Cable Type", value: "Ribbon Optical Fiber Cable" },
    { label: "Fiber Configuration", value: "Ribbon" },
    { label: "Maximum Fiber Count", value: "Up to 576 fibers" },
    { label: "Design", value: "Multitube ribbon" },
    { label: "Installation", value: "Indoor / Outdoor" }
  ],
  applications: [
    "Telecom Backbone Networks",
    "Data Center Interconnects",
    "Metro Networks",
    "High-Capacity Fiber Routes"
  ]
},

{
  id: "ftth-fiber-cable",
  title: "FTTH Optical Fiber Cable",
  category: "fiber",
  description: "Flexible and lightweight fiber cable optimized for FTTH indoor applications.",
  fullDescription: "Our FTTH Optical Fiber Cable features 1 or 2 bend-insensitive fibers housed in an LSZH or PVC sheath and reinforced with FRP or ARP rods for added strength. The all-dielectric, lightweight design ensures easy installation, low bend radius, and reliable performance for indoor FTTH network deployments.",
  image: fiberImage,
  icon: Home,
  features: [
    "Bend-insensitive optical fibers",
    "All dielectric construction",
    "Low bend radius",
    "Lightweight and flexible",
    "Easy installation and termination"
  ],
  specifications: [
    { label: "Cable Type", value: "FTTH Drop Cable" },
    { label: "Fiber Count", value: "1 or 2 fibers" },
    { label: "Sheath Material", value: "LSZH / PVC" },
    { label: "Strength Member", value: "FRP / ARP rods" },
    { label: "Installation", value: "Indoor" }
  ],
  applications: [
    "FTTH Networks",
    "Indoor Fiber Distribution",
    "Residential Broadband",
    "Last-Mile Connectivity"
  ]
},
{
  id: "simplex-fiber-cable",
  title: "Simplex Optical Fiber Cable",
  category: "fiber",
  description: "Single fiber simplex cable for indoor networking and FTTH applications.",
  fullDescription: "The Simplex Optical Fiber Cable consists of a single tight-buffered, bend-insensitive fiber reinforced with aramid yarn and protected by an LSZH outer sheath. Designed for indoor networking and FTTH applications, it offers excellent flexibility, low smoke characteristics, and easy termination.",
  image: fiberImage,
  icon: Wifi,
  features: [
    "Single tight-buffered fiber",
    "Bend-insensitive performance",
    "LSZH outer sheath",
    "Lightweight and flexible",
    "Easy termination"
  ],
  specifications: [
    { label: "Cable Type", value: "Simplex Fiber Cable" },
    { label: "Fiber Count", value: "1 fiber" },
    { label: "Buffer Type", value: "Tight buffered" },
    { label: "Outer Sheath", value: "LSZH / PVC" },
    { label: "Installation", value: "Indoor" }
  ],
  applications: [
    "Indoor Networking",
    "FTTH Distribution",
    "Patch Cords",
    "Office Networks"
  ]
},

{
  id: "tube-drop-fiber-cable",
  title: "Tube Drop Optical Fiber Cable",
  category: "fiber",
  description: "Self-supporting tube drop fiber cable for easy and fast outdoor installations.",
  fullDescription: "Our Tube Drop Optical Fiber Cable features fibers housed in a loose tube positioned between two FRP rods and protected by an HDPE sheath. Using G652D or G657A1 fibers, this all-dielectric, lightweight cable is designed for simple, fast installation and self-supporting outdoor applications.",
  image: fiberImage,
  icon: Radio,
  features: [
    "Loose tube fiber design",
    "All dielectric construction",
    "Lightweight and self-supporting",
    "Easy fiber access",
    "Fast installation"
  ],
  specifications: [
    { label: "Cable Type", value: "Tube Drop Cable" },
    { label: "Fiber Type", value: "G652D / G657A1" },
    { label: "Tube Type", value: "Loose tube" },
    { label: "Sheath Material", value: "HDPE" },
    { label: "Installation", value: "Outdoor / Aerial" }
  ],
  applications: [
    "FTTH Outdoor Drops",
    "Aerial Installations",
    "Last-Mile Connectivity",
    "Access Networks"
  ]
},

{
  id: "spiral-armoured-fiber",
  title: "Spiral Armoured Optical Fiber Cable",
  category: "fiber",
  description: "Highly flexible spiral armoured fiber cable with superior rodent protection.",
  fullDescription: "The Spiral Armoured Optical Fiber Cable consists of 1 or 2 tight-buffered fibers housed within a spiral steel armour tube, reinforced with aramid yarn and protected by an LSZH or HDPE outer sheath. Designed for high flexibility, low bend radius, and excellent rodent resistance, this cable is ideal for demanding indoor and outdoor installations.",
  image: fiberImage,
  icon: Radio,
  features: [
    "Spiral steel armoured construction",
    "Anti-rodent protection",
    "Highly flexible design",
    "Low bend radius",
    "Easy installation and termination"
  ],
  specifications: [
    { label: "Cable Type", value: "Spiral Armoured Fiber Cable" },
    { label: "Fiber Count", value: "1 or 2 fibers" },
    { label: "Armor Type", value: "Spiral steel tube" },
    { label: "Outer Sheath", value: "LSZH / HDPE" },
    { label: "Installation", value: "Indoor / Outdoor" }
  ],
  applications: [
    "FTTH Networks",
    "Industrial Networking",
    "Rodent-Prone Areas",
    "Indoor and Outdoor Cabling"
  ]
},












  // Electrical Products

  {
  id: "lv-control-cable",
  title: "LV Control Cable",
  category: "electrical",
  description: "Low voltage control cables designed for reliable control and instrumentation circuits.",
  fullDescription: "Our LV Control Cables are engineered for control, signaling, and instrumentation applications in industrial and commercial installations. Rated up to 1.1 kV and manufactured in compliance with IS 7098 (Part 1): 2011 and IS 1554 (Part 1), these cables feature high-quality copper conductors with superior insulation and sheathing options. They offer excellent current carrying capacity, enhanced short-circuit performance, and energy-efficient operation, making them ideal for demanding control systems.",
  image: electricalImage,
  icon: Factory,
  features: [
    "1.1 kV rated control cable",
    "Multi-core construction up to 61 cores",
    "High short circuit rating",
    "FR / FRLSH / LSZH sheath options",
    "Energy efficient design"
  ],
  specifications: [
    { label: "Voltage Rating", value: "1.1 kV" },
    { label: "Conductor", value: "Stranded / Solid copper" },
    { label: "Core Size", value: "1.5 & 2.5 mm²" },
    { label: "Number of Cores", value: "2 to 61 Cores" },
    { label: "Insulation Type", value: "PVC / XLPE" },
    { label: "Sheath Type", value: "FR / FRLSH / LSZH" },
    { label: "Standards", value: "IS 7098 (I):2011, IS 1554 (I)" }
  ],
  applications: [
    "Industrial Control Panels",
    "Automation Systems",
    "Power Plants",
    "Process Industries",
    "Instrumentation Circuits"
  ]
},

{
  id: "lv-power-cable",
  title: "LV Power Cable",
  category: "electrical",
  description: "Low voltage power cables designed for efficient and reliable power distribution.",
  fullDescription: "Our LV Power Cables are designed for safe and efficient power transmission in industrial, commercial, and infrastructure projects. Rated up to 1.1 kV and manufactured as per IS 7098 (Part 1): 2011 and IS 1554 (Part 1), these cables feature high-purity copper conductors with advanced insulation and sheath options. With excellent current carrying capacity, high short-circuit strength, and energy-efficient performance, they are ideal for demanding power distribution environments.",
  image: electricalImage,
  icon: Zap,
  features: [
    "1.1 kV rated low voltage power cable",
    "Wide conductor size range",
    "High short circuit and current rating",
    "FR / FRLSH / LSZH sheath options",
    "Energy efficient and durable"
  ],
  specifications: [
    { label: "Voltage Rating", value: "1.1 kV" },
    { label: "Conductor", value: "Stranded copper" },
    { label: "Cable Construction", value: "Single core / Multicore" },
    { label: "Conductor Size", value: "2.5 mm² to 400 mm² (Multicore), up to 1000 mm² (Single core)" },
    { label: "Insulation Type", value: "PVC / XLPE" },
    { label: "Sheath Type", value: "FR / FRLSH / LSZH" },
    { label: "Standards", value: "IS 7098 (I):2011, IS 1554 (I)" }
  ],
  applications: [
    "Industrial Plants",
    "Construction Projects",
    "Airports",
    "Ports",
    "Steel Plants",
    "Cement Plants",
    "Power Distribution Networks"
  ]
},
{
  id: "mv-power-cable",
  title: "MV Power Cable",
  category: "electrical",
  description: "Medium voltage power cables designed for reliable and high-performance power transmission.",
  fullDescription: "Our MV Power Cables are engineered for medium voltage power distribution applications ranging from 3.3 kV to 33 kV. Manufactured as per IS 7098 (Part II): 1988 on advanced CCV lines, these cables ensure superior electrical performance with partial discharge values less than 1 pC, making them virtually discharge-free. Equipped with Sikora X-ray monitoring and contamination-controlled insulation handling systems, these cables deliver high reliability, long service life, and excellent operational safety in both earthed and unearthed systems.",
  image: electricalImage,
  icon: Zap,
  features: [
    "Rated from 3.3 kV to 33 kV",
    "Discharge-free insulation (PD < 1 pC)",
    "Manufactured on CCV line",
    "Sikora X-ray insulation monitoring",
    "Suitable for earthed and unearthed systems"
  ],
  specifications: [
    { label: "Voltage Rating", value: "3.3 kV to 33 kV" },
    { label: "Conductor", value: "Stranded copper / aluminum" },
    { label: "Cable Construction", value: "Single core / Multicore" },
    { label: "Conductor Size", value: "35 mm² to 400 mm² (Multicore), up to 1000 mm² (Single core)" },
    { label: "Insulation", value: "XLPE" },
    { label: "Partial Discharge", value: "< 1 pC" },
    { label: "Manufacturing Standard", value: "IS 7098 (II):1988" }
  ],
  applications: [
    "Power Utilities",
    "Solar Power Projects",
    "Wind Power Plants",
    "Industrial Power Distribution",
    "Infrastructure Projects"
  ]
},



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