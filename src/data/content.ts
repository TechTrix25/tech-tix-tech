/**
 * Shared editorial content — process phases, stats, tech stack, team,
 * testimonials, why-choose-us, and "about" copy. All carried over from the
 * original Tech Trix site; placeholders are flagged with TODO.
 */

/* ---------------- Process ---------------- */
export const processPhases = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and requirements.",
  },
  {
    step: "02",
    title: "Planning",
    description: "We develop a strategic roadmap and detailed project plan.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Our team builds your solution using agile methodologies.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support.",
  },
] as const;

/* ---------------- Stats (count-up) ---------------- */
/* Adjusted to be consistent with a 2025-founded studio. TODO: confirm numbers. */
export const stats = [
  { value: 25, suffix: "+", label: "Projects delivered" },
  { value: 18, suffix: "+", label: "Happy clients" },
  { value: 12, suffix: "+", label: "Technologies mastered" },
  { value: 100, suffix: "%", label: "Client-focused delivery" },
] as const;

/* ---------------- Tech stack chip cloud ---------------- */
export const techStack = [
  "Laravel",
  "PHP",
  "React",
  "Vue.js",
  "Node.js",
  "Flutter",
  "MySQL",
  "PostgreSQL",
  "AWS",
  "Firebase",
  "TypeScript",
  "Tailwind CSS",
  "Docker",
  "Next.js",
  "MongoDB",
  "Figma",
] as const;

/* ---------------- Why choose us ---------------- */
export const whyChooseUs = [
  "Expert team with diverse tech expertise",
  "Cutting-edge technologies and methodologies",
  "Client-focused approach and transparent communication",
  "Scalable solutions that grow with your business",
  "Commitment to deadlines and quality deliverables",
] as const;

/* ---------------- Values (About) ---------------- */
export const values = [
  {
    title: "Innovation",
    description:
      "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
    icon: "Lightbulb",
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards of quality in every project we undertake.",
    icon: "Star",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients, ensuring transparent communication throughout.",
    icon: "Handshake",
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty and ethical principles in all our business dealings.",
    icon: "ShieldCheck",
  },
  {
    title: "Growth",
    description:
      "We're committed to continuous learning and development, as individuals and a company.",
    icon: "TrendingUp",
  },
  {
    title: "Impact",
    description:
      "We measure our success by the positive difference we make for our clients.",
    icon: "Target",
  },
] as const;

/* ---------------- About story ---------------- */
export const aboutStory = [
  "Founded in 2025, Tech Trix Technologies began with a simple mission: to help businesses harness the power of technology to grow and thrive in an increasingly digital world.",
  "What started as a small team of four developers has grown into a full-service technology company with expertise spanning software development, web design, mobile applications, and digital marketing.",
  "We collaborate with clients across industries — from startups to established enterprises — delivering tailored solutions that address their unique challenges and help them achieve their goals.",
] as const;

/* ---------------- Team ---------------- */
/* TODO: replace names, roles, and avatars with the real leadership team. */
export const team = [
  { name: "TODO: Name", role: "CEO & Founder", avatar: "https://i.pravatar.cc/400?img=12" },
  { name: "TODO: Name", role: "CTO", avatar: "https://i.pravatar.cc/400?img=33" },
  { name: "TODO: Name", role: "Lead Developer", avatar: "https://i.pravatar.cc/400?img=15" },
  { name: "TODO: Name", role: "Design Director", avatar: "https://i.pravatar.cc/400?img=47" },
] as const;

/* ---------------- Testimonials ---------------- */
export const testimonials = [
  {
    quote:
      "Tech Trix transformed our outdated website into a modern, responsive platform that has significantly increased our customer engagement and sales.",
    author: "Sarah Johnson",
    company: "Retail Solutions Inc.",
    avatar: "https://i.pravatar.cc/200?img=5",
  },
  {
    quote:
      "The mobile app developed by Tech Trix exceeded our expectations. Their team was professional, responsive, and delivered a high-quality product on time and within budget.",
    author: "Michael Chen",
    company: "HealthTech Innovations",
    avatar: "https://i.pravatar.cc/200?img=8",
  },
  {
    quote:
      "Working with Tech Trix on our custom CRM was a game-changer. They truly understood our needs and delivered a solution that streamlined our operations.",
    author: "Jennifer Thompson",
    company: "Financial Services Group",
    avatar: "https://i.pravatar.cc/200?img=9",
  },
] as const;
