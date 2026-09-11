import { ArrowRight } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.png.asset.json";
import { SocialRow } from "./Socials";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            Digital Marketing · Design · Strategy
          </p>
          <h1 className="font-display mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            Hi, I am <span className="text-primary">Leonah Jani</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Digital Marketer &amp; Designer creating meaningful digital experiences, strategic
            campaigns, and visually engaging brands.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#works" className="btn-base btn-lime">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-base btn-outline">
              Contact Me
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              ["5+", "Years creating"],
              ["40+", "Projects delivered"],
              ["12", "Tools mastered"],
            ].map(([value, label]) => (
              <div key={label} className="min-w-0">
                <dt className="text-2xl font-extrabold tracking-tight sm:text-3xl">{value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <div className="relative mx-auto flex max-w-md flex-col items-center lg:max-w-none">
            <div
              className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[85%] -translate-x-1/2 -translate-y-[52%] rounded-full bg-surface"
              aria-hidden
            />
            <img
              src={heroAvatar.url}
              alt="3D illustration of Leonah Jani in a cream suit holding an open laptop"
              width={512}
              height={512}
              className="relative w-full max-w-sm object-contain lg:max-w-md"
            />
            <div className="mt-2 w-full rounded-xl border border-border bg-card/80 px-4 py-3 backdrop-blur-sm">
              <SocialRow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
