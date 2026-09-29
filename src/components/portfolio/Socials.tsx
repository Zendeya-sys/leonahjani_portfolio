import { Linkedin, Facebook, Instagram } from "lucide-react";
import { TikTokIcon } from "./BrandIcons";

export const socials = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "Facebook", Icon: Facebook },
  { label: "Instagram", Icon: Instagram },
  { label: "TikTok", Icon: TikTokIcon },
];

export function SocialRow({ size = 18 }: { size?: number }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {socials.map(({ label, Icon }) => (
        <li key={label}>
          <a href="#contact" aria-label={label} className="social-dot group">
            <Icon size={size} strokeWidth={2} />
          </a>
        </li>
      ))}
    </ul>
  );
}
