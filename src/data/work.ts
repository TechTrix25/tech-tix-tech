/**
 * Portfolio / case studies. Projects + tech stacks carried over from the
 * original site. `metric` headlines are illustrative — TODO: replace with the
 * real outcome numbers for each engagement.
 */

export type Project = {
  id: number;
  title: string;
  category: "web" | "mobile" | "software";
  categoryLabel: string;
  image: string;
  description: string;
  technologies: string[];
  metric: string; // TODO: replace with verified outcome metric
  metricLabel: string;
};

export const workCategories = [
  { id: "all", label: "All Work" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "software", label: "Software" },
] as const;

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    categoryLabel: "Web",
    image:
      "/img/work/ecommerce.jpg",
    description:
      "A fully-featured e-commerce platform with integrated payment processing and inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    metric: "+38%", // TODO: replace with real metric
    metricLabel: "conversion uplift",
  },
  {
    id: 3,
    title: "CRM System",
    category: "software",
    categoryLabel: "Software",
    image:
      "/img/work/crm.jpg",
    description:
      "Custom CRM solution for a financial services company, streamlining client management and reporting.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Azure"],
    metric: "5k+", // TODO: replace with real metric
    metricLabel: "accounts managed",
  },
  {
    id: 4,
    title: "Real Estate Marketplace",
    category: "web",
    categoryLabel: "Web",
    image:
      "/img/work/realestate.jpg",
    description:
      "Property listing platform with advanced search, virtual tours, and agent management.",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    metric: "2.1s", // TODO: replace with real metric
    metricLabel: "median load time",
  },
  {
    id: 5,
    title: "Food Delivery App",
    category: "mobile",
    categoryLabel: "Mobile",
    image:
      "/img/work/food.jpg",
    description:
      "Mobile app connecting local restaurants with customers for seamless ordering and delivery.",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    metric: "4.8★", // TODO: replace with real metric
    metricLabel: "app store rating",
  },
  {
    id: 6,
    title: "Inventory Management",
    category: "software",
    categoryLabel: "Software",
    image:
      "/img/work/inventory.jpg",
    description:
      "Enterprise inventory system with barcode scanning, analytics, and supplier integration.",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    metric: "-27%", // TODO: replace with real metric
    metricLabel: "stockouts reduced",
  },
  {
    id: 7,
    title: "Event Management System",
    category: "web",
    categoryLabel: "Web",
    image:
      "/img/work/events.jpg",
    description:
      "Platform for organizing events — ticketing, scheduling, and attendee registration.",
    technologies: ["React", "Express", "MongoDB", "Cloudinary"],
    metric: "12k", // TODO: replace with real metric
    metricLabel: "tickets processed",
  },
];
