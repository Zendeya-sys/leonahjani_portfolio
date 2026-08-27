import workDashboard from "@/assets/work-dashboard.jpg";
import workSocial from "@/assets/work-social.jpg";
import workBrand from "@/assets/work-brand.jpg";
import workLanding from "@/assets/work-landing.jpg";
import workUiux from "@/assets/work-uiux.jpg";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills & Tools", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export const tools = [
  { name: "Adobe Illustrator", label: "Vector & logo design", abbr: "Ai" },
  { name: "Figma", label: "UI/UX & prototyping", abbr: "Fi" },
  { name: "Adobe Photoshop", label: "Retouching & composites", abbr: "Ps" },
  { name: "CapCut", label: "Short-form video edits", abbr: "Cc" },
  { name: "Adobe After Effects", label: "Motion graphics", abbr: "Ae" },
  { name: "Canva", label: "Fast social templates", abbr: "Ca" },
  { name: "Affinity", label: "Print & layout design", abbr: "Af" },
  { name: "Adobe Lightroom", label: "Photo colour grading", abbr: "Lr" },
  { name: "PageSpeed Insights", label: "Web performance audits", abbr: "Ps" },
  { name: "HubSpot", label: "Inbound & CRM", abbr: "Hs" },
  { name: "Mailchimp", label: "Email campaigns", abbr: "Mc" },
  { name: "MailerLite", label: "Automation & funnels", abbr: "Ml" },
];

export const certificates = [
  {
    platform: "HubSpot Academy",
    title: "Digital Marketing Certification",
    meta: "Certification · Completed",
    tint: "from-primary/15 to-primary/5",
  },
  {
    platform: "HubSpot Academy",
    title: "Social Media Marketing",
    meta: "Certification · Completed",
    tint: "from-charcoal/10 to-charcoal/5",
  },
  {
    platform: "Coursera",
    title: "Graphic Design Fundamentals",
    meta: "Course · Completed",
    tint: "from-primary/20 to-primary/5",
  },
  {
    platform: "Coursera",
    title: "UI / UX Design Foundations",
    meta: "Course · Completed",
    tint: "from-charcoal/10 to-primary/10",
  },
  {
    platform: "HubSpot Academy",
    title: "Email Marketing",
    meta: "Certification · Completed",
    tint: "from-primary/15 to-charcoal/5",
  },
];

export const works = [
  {
    image: workDashboard,
    title: "Growth Analytics Dashboard",
    category: "Marketing · Data Design",
    description:
      "A reporting surface that turns paid and organic channel data into one weekly decision view.",
  },
  {
    image: workSocial,
    title: "Social Campaign System",
    category: "Social Media · Art Direction",
    description:
      "A modular grid system of templates that keeps a month of content on-brand in minutes.",
  },
  {
    image: workBrand,
    title: "Brand Identity Suite",
    category: "Branding · Graphic Design",
    description:
      "Logo mark, stationery and usage rules built for a young consultancy entering a new market.",
  },
  {
    image: workLanding,
    title: "Conversion Landing Page",
    category: "Web · Copy & Design",
    description:
      "A single-scroll launch page with clear hierarchy, strong CTA rhythm and fast load targets.",
  },
  {
    image: workUiux,
    title: "Mobile Product Interface",
    category: "Product · UI/UX",
    description:
      "End-to-end flows, component library and prototype for a mobile-first service product.",
  },
];
