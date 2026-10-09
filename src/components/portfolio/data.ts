import workEmail from "@/assets/work-email-marketing.webp";
import workBrandBook from "@/assets/work-brand-book.webp";

export const CV_URL = "/Leonah-M-Jani-CV.pdf";
export const CV_FILENAME = "Leonah-M-Jani-CV.pdf";

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
    image: workEmail,
    title: "Email Marketing Campaign",
    category: "Email Marketing · Strategy",
    description:
      "Campaign goals, strategy and expected results for a 50% off email promotion, presented in Canva.",
    url: "https://canva.link/fss2txtzhpgk6v4",
  },
  {
    image: workBrandBook,
    title: "WalkTall — Red Heels for Her",
    category: "Brand Book · Fashion & Lifestyle",
    description:
      "An editorial brand book for WalkTall — modern fashion lookbook, trend forecast and lifestyle identity, presented in Canva.",
    url: "https://canva.link/3brsmg04nr7nwd0",
  },
];
