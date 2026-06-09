/**
 * Services — maps onto Tech Trix's real offerings. Copy + feature lists carried
 * over from the original site; service set expanded to the six core practices.
 * `icon` is a lucide-react icon name resolved in the Services UI.
 */

export type Service = {
  id: string;
  number: string;
  icon: string; // lucide-react icon key
  title: string;
  description: string;
  features: string[];
  tags: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "web",
    number: "01",
    icon: "Globe",
    title: "Web Development",
    description:
      "Responsive, fast, and user-friendly websites and web applications that deliver exceptional experiences — from simple pages to dynamic platforms.",
    features: [
      "Responsive website design",
      "E-commerce platforms",
      "Content management systems",
      "Web application development",
      "Performance optimization",
    ],
    tags: ["React", "Vue.js", "Laravel", "Node"],
    image:
      "/img/services/web.jpg",
  },
  {
    id: "mobile",
    number: "02",
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications designed to engage users and drive results, built for iOS and Android.",
    features: [
      "iOS & Android development",
      "Cross-platform solutions",
      "Mobile UI/UX design",
      "App maintenance & support",
      "App Store optimization",
    ],
    tags: ["Flutter", "React Native", "Firebase"],
    image:
      "/img/services/mobile.jpg",
  },
  {
    id: "software",
    number: "03",
    icon: "Code2",
    title: "Enterprise Software",
    description:
      "Custom software solutions built to address your unique business challenges, modernize legacy systems, and streamline operations.",
    features: [
      "Custom business applications",
      "Legacy system modernization",
      "Database design & management",
      "API development & integration",
      "Cloud-based solutions",
    ],
    tags: ["Laravel", "PHP", "MySQL", "AWS"],
    image:
      "/img/services/enterprise.jpg",
  },
  {
    id: "erp-crm",
    number: "04",
    icon: "Database",
    title: "ERP & CRM",
    description:
      "Tailored ERP and CRM platforms that unify your data, streamline client management, and give teams a single source of truth.",
    features: [
      "Custom CRM development",
      "ERP implementation",
      "Workflow automation",
      "Reporting & analytics dashboards",
      "Third-party integrations",
    ],
    tags: ["Laravel", "Vue.js", "MySQL"],
    image:
      "/img/services/erp-crm.jpg",
  },
  {
    id: "pwa",
    number: "05",
    icon: "Layers",
    title: "Progressive Web Apps",
    description:
      "Installable, offline-capable web experiences that feel native, load instantly, and reach users on any device.",
    features: [
      "Offline-first architecture",
      "Push notifications",
      "Installable experiences",
      "Lighthouse-grade performance",
      "Cross-device sync",
    ],
    tags: ["React", "Vue.js", "Service Workers"],
    image:
      "/img/services/pwa.jpg",
  },
  {
    id: "consulting",
    number: "06",
    icon: "Compass",
    title: "IT Consulting",
    description:
      "Strategic guidance to help you choose the right technologies, architect scalable systems, and accelerate digital transformation.",
    features: [
      "Technology strategy & audits",
      "Architecture & scalability planning",
      "Cloud migration",
      "Security & performance reviews",
      "Team augmentation",
    ],
    tags: ["AWS", "DevOps", "Architecture"],
    image:
      "/img/services/consulting.jpg",
  },
];
