import { Linkedin, Facebook, Instagram, AtSign, Twitter, MessageCircle, Music2 } from "lucide-react";

export const socials = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "Threads", Icon: AtSign },
  { label: "X", Icon: Twitter },
  { label: "WhatsApp", Icon: MessageCircle },
  { label: "TikTok", Icon: Music2 },
];

export function SocialRow({ size = 18 }: { size?: number }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {socials.map(({ label, Icon }) => (
        <li key={label}>
          <a href="#contact" aria-label={label} className="social-dot">
            <Icon size={size} strokeWidth={2} />
          </a>
        </li>
      ))}
    </ul>
  );
}
