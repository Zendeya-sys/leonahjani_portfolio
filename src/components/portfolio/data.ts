import workEmail from "@/assets/work-email-marketing.webp";
import workBrandBook from "@/assets/work-brand-book.webp";
import workInfluencerBrief from "@/assets/work-influencer-brief.webp";
import workSocialStrategy from "@/assets/work-social-media-strategy.webp";
import courseraCover from "@/assets/coursera-cover.webp";
import flyer01 from "@/assets/flyer-01.webp";
import flyer02 from "@/assets/flyer-02.webp";
import flyer03 from "@/assets/flyer-03.webp";
import flyer04 from "@/assets/flyer-04.webp";
import card01 from "@/assets/card-01.webp";
import card02 from "@/assets/card-02.webp";
import card03 from "@/assets/card-03.webp";
import card04 from "@/assets/card-04.webp";

export const CV_URL = "/Leonah-M-Jani-CV.pdf";
export const CV_FILENAME = "Leonah-M-Jani-CV.pdf";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills & Tools", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Works", href: "#works" },
  { label: "Designs", href: "#flyers" },
  { label: "Business Cards", href: "#cards" },
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
    platform: "Coursera · EDUCBA",
    title: "Copywriting for Digital Marketing & SEO",
    meta: "Completed · 3 July 2026",
    image: courseraCover,
    url: "/certificates/copywriting-digital-marketing-seo.pdf",
  },
  {
    platform: "Coursera · EDUCBA",
    title: "Digital Branding and Brand Strategy",
    meta: "Completed · 30 June 2026",
    image: courseraCover,
    url: "/certificates/digital-branding-brand-strategy.pdf",
  },
  {
    platform: "Coursera",
    title: "Google Ads for Beginners",
    meta: "Completed · 13 July 2026",
    image: courseraCover,
    url: "/certificates/google-ads-for-beginners.pdf",
  },
  {
    platform: "Coursera · Google",
    title: "AI Fundamentals",
    meta: "Completed · 7 July 2026",
    image: courseraCover,
    url: "/certificates/ai-fundamentals.pdf",
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
  {
    image: workInfluencerBrief,
    title: "Influencer Marketing Campaign Brief",
    category: "Influencer Marketing · Campaign Brief",
    description:
      "An influencer campaign brief with a two-week content calendar for a creator-led promotion, presented in Canva.",
    url: "https://canva.link/osdjj2wwx5au52m",
  },
  {
    image: workSocialStrategy,
    title: "WalkTall — Social Media Content Strategy",
    category: "Social Media Strategy · Fashion & Lifestyle",
    description:
      "A social media content strategy for WalkTall — editorial direction, red-carpet visual identity and platform plan, presented in Canva.",
    url: "https://canva.link/3we18vwytz709fe",
  },
];

export const flyers = [
  {
    image: flyer01,
    title: "FIVO Beverages — Three Flavours",
    category: "Flyer Design · Beverage Brand",
    description:
      "A three-band promotional flyer for FIVO's matcha, strawberry and chocolate shakes — bold flavour blocking, playful type and a clear call to order.",
    url: "https://canva.link/tlt9a2th6k2w0z9",
    ratio: "864/1080",
  },
  {
    image: flyer02,
    title: "Oreos Chocolate Shake",
    category: "Flyer Design · Milkshake Promo",
    description:
      "A promo flyer for an Oreo chocolate shake — splash-driven product art, a hand-drawn price badge and a clear order-now call to action.",
    url: "https://canva.link/tlt9a2th6k2w0z9",
    ratio: "864/1080",
  },
  {
    image: flyer03,
    title: "Walktall — Heels",
    category: "Flyer Design · Footwear Promo",
    description:
      "A product flyer for Walktall heels — warm neutral styling, a bold price badge and a 'wear it with' guide that pairs the shoe with four outfits.",
    url: "https://canva.link/tlt9a2th6k2w0z9",
    ratio: "864/1222",
  },
  {
    image: flyer04,
    title: "FIVO Beverages — Pure Matcha",
    category: "Poster Design · Beverage Brand",
    description:
      "A matcha poster for FIVO Beverages — deep forest-green styling, a splashing cup of ceremonial-grade matcha and a benefits strip along the bottom.",
    url: "",
    ratio: "736/1307",
  },
];

export const businessCards = [
  {
    image: card01,
    title: "Business Card 01",
    category: "Business Card",
    description: "Placeholder layout — send your card design and I'll swap it in.",
  },
  {
    image: card02,
    title: "Business Card 02",
    category: "Business Card",
    description: "Placeholder layout — send your card design and I'll swap it in.",
  },
  {
    image: card03,
    title: "Business Card 03",
    category: "Business Card",
    description: "Placeholder layout — send your card design and I'll swap it in.",
  },
  {
    image: card04,
    title: "Business Card 04",
    category: "Business Card",
    description: "Placeholder layout — send your card design and I'll swap it in.",
  },
];
