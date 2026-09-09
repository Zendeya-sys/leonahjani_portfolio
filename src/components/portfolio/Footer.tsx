import { navLinks } from "./data";
import { socials } from "./Socials";
import twitterAsset from "@/assets/twitter.png.asset.json";
import whatsappAsset from "@/assets/whatsapp.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-sm font-extrabold text-primary-foreground">
                LJ
              </span>
              <span className="truncate text-lg font-bold tracking-tight">Leonah Jani</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-foreground/65">
              Creating digital experiences that connect, engage, and inspire.
            </p>
          </div>

          <nav>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Navigate</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-charcoal-foreground/70 transition-colors hover:text-primary"
                  >
                    {l.label === "Skills & Tools" ? "Skills" : l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Follow</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map(({ label, Icon }) => {
                const imageSrc = label === "X" ? twitterAsset.url : label === "WhatsApp" ? whatsappAsset.url : null;
                return (
                  <li key={label}>
                    <a
                      href="#contact"
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-charcoal-foreground/15 text-charcoal-foreground/75 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {imageSrc ? (
                        <img src={imageSrc} alt={label} className="h-[17px] w-[17px] invert" />
                      ) : (
                        <Icon size={17} />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal-foreground/10 pt-6 text-xs text-charcoal-foreground/55">
          © 2026 Leonah Jani. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
