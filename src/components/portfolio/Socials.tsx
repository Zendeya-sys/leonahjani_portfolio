import { Linkedin, Facebook, Instagram, AtSign, Twitter, MessageCircle, Music2 } from "lucide-react";
import twitterAsset from "@/assets/twitter.png.asset.json";
import whatsappAsset from "@/assets/whatsapp.png.asset.json";
import tiktokAsset from "@/assets/tik-tok.png.asset.json";

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
      {socials.map(({ label, Icon }) => {
        const imageSrc =
          label === "X"
            ? twitterAsset.url
            : label === "WhatsApp"
              ? whatsappAsset.url
              : label === "TikTok"
                ? tiktokAsset.url
                : null;
        return (
          <li key={label}>
            <a href="#contact" aria-label={label} className="social-dot group">
              {imageSrc ? (
                <img src={imageSrc} alt={label} className="h-[17px] w-[17px] icon-lime group-hover:invert" />
              ) : (
                <Icon size={size} strokeWidth={2} />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
