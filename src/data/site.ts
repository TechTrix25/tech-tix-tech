/**
 * Global site configuration — company info, contact details, nav, social.
 * Carried over verbatim from the original Tech Trix site. Edit here to update
 * the header, footer, contact page, and structured data in one place.
 */

export const site = {
  name: "Tech Trix Technologies",
  shortName: "Tech Trix",
  tagline: "Smart & Innovative Tech Solutions",
  description:
    "Tech Trix Technologies delivers innovative web, mobile, and enterprise software solutions tailored for businesses of all sizes.",
  // Used for absolute OG/canonical URLs. Update if the production domain changes.
  url: "https://techtrixtechnologies.com",
  founded: 2025,
  locale: "en_US",

  contact: {
    email: "techtrixtechnologies25@gmail.com",
    // TODO: replace with a real published phone number if one exists.
    phone: "+91 98765 43210",
    address: {
      line1: "Saravanampatti",
      city: "Coimbatore",
      pincode: "641035",
      region: "Tamil Nadu",
      country: "India",
    },
    // Carried over verbatim — Google Apps Script webhook backing the contact form.
    formWebhook:
      "https://script.google.com/macros/s/AKfycbzz_9nYMxFr2ghHkVyYf2SRhhqBhN4Kxtjyqd1L4ZY_XFUKOmr1JqMLCI_ivlGm8HRMhA/exec",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.5351626570123!2d76.99840587485834!3d11.08091558909959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582c3f6170b1%3A0xa967bc5b5a03d161!2sSaravanampatti%2C%20Coimbatore%2C%20Tamil%20Nadu%20641035%2C%20India!5e0!3m2!1sen!2sin!4v1714489609371!5m2!1sen!2sin",
  },

  social: {
    twitter: "@TechTrixHQ",
    // TODO: replace '#' with real profile URLs when available.
    twitterUrl: "#",
    linkedinUrl: "#",
    githubUrl: "#",
  },
} as const;

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
] as const;
