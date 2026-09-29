import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function TikTokIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M16.6 5.82A4.9 4.9 0 0 1 15.4 2h-3.3v13.2a2.6 2.6 0 1 1-1.86-2.5V9.3a5.94 5.94 0 1 0 5.16 5.9V9.01a8.2 8.2 0 0 0 4.6 1.4V7.1a4.85 4.85 0 0 1-3.4-1.28Z" />
    </svg>
  );
}
