import { ArrowRight, ArrowUpRight, User } from "lucide-react";
import heroMarketing from "@/assets/hero-marketing-transparent.webp";
import { works, tools, CV_URL, CV_FILENAME } from "./data";
import { SocialRow } from "./Socials";

const YEARS_EXPERIENCE = "1";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="hero-glow" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">

        {/* Left column — intro */}
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-charcoal">Hi, I&rsquo;m</span>
            <br />
            <span className="text-primary">Leonah Jani.</span>
          </h1>

          <p className="mt-6 text-base font-bold leading-snug text-charcoal sm:text-lg">
            Digital Marketer &amp; Designer
            <br />
            based in <span className="text-primary">Harare, Zimbabwe.</span>
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            I help brands and creative businesses build meaningful digital experiences, strategic
            campaigns, and visually engaging identities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#works" className="btn-base btn-lime">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="#about" className="btn-base btn-outline">
              About Me <User size={16} />
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              [YEARS_EXPERIENCE, "Year creating"],
              [String(works.length), "Projects delivered"],
              [String(tools.length), "Tools mastered"],
            ].map(([value, label]) => (
              <div key={label} className="min-w-0">
                <dt className="text-2xl font-extrabold tracking-tight sm:text-3xl">{value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right column — circular portrait with floating availability card */}
        <div className="relative">
          <div className="relative mx-auto flex max-w-md flex-col items-center lg:max-w-none">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div
                className="hero-circle grid aspect-square w-full place-items-center overflow-hidden rounded-full"
                aria-hidden={false}
              >
                <img
                  src={heroMarketing}
                  alt="Illustration of two marketing professionals connecting across a global network"
                  width={1000}
                  height={848}
                  fetchPriority="high"
                  decoding="async"
                  className="w-[78%] object-contain drop-shadow-sm"
                />
              </div>

              <div className="absolute -bottom-6 right-0 w-60 rounded-2xl border border-border/60 bg-card/85 p-5 shadow-[var(--shadow-lift)] backdrop-blur-sm sm:w-64 sm:-right-2 lg:-right-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  Available for work
                </span>
                <p className="mt-3 text-sm leading-relaxed text-foreground">
                  I&rsquo;m currently accepting{" "}
                  <span className="font-bold text-charcoal">new projects</span> worldwide.
                </p>
                <a
                  href={CV_URL}
                  download={CV_FILENAME}
                  aria-label={`Download Leonah Jani's CV as a PDF (${CV_FILENAME})`}
                  className="mt-4 flex items-center gap-2 border-t border-border pt-3 text-sm font-bold text-charcoal transition-colors hover:text-primary-dark"
                >
                  <ArrowUpRight size={16} className="text-primary-dark" />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="mt-14 w-full rounded-xl border border-border bg-card/80 px-4 py-3 backdrop-blur-sm">
              <SocialRow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
