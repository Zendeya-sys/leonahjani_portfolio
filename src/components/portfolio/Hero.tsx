import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, User } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.webp";
import { works, tools, CV_URL, CV_FILENAME } from "./data";

const YEARS_EXPERIENCE = 1;

const d = (ms: number) => ({ animationDelay: `${ms}ms` });

function StatRing({ value, label, color, delay }: { value: number; label: string; color: string; delay: number }) {
  const ringRef = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const [p, setP] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const element = ringRef.current;
    if (!element) return;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const dur = 1600;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      timer = setTimeout(() => {
        setStarted(true);
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setN(value);
          setP(1);
          return;
        }
        const start = performance.now();
        const tick = (t: number) => {
          const k = Math.min(1, (t - start) / dur);
          const e = 1 - Math.pow(1 - k, 3);
          setP(e);
          setN(Math.floor(e * value));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }, delay);
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => { observer.disconnect(); clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [value, delay]);
  const r = 34, c = 2 * Math.PI * r;
  return (
    <div ref={ringRef} className="hero-anim in-up flex flex-col items-center text-center" style={d(delay - 300)}>
      <div className="relative h-20 w-20 sm:h-24 sm:w-24">
        <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="40" cy="40" r={r} fill="var(--background)" stroke="var(--border)" strokeWidth="5" />
          <circle cx="40" cy="40" r={r} fill="none" stroke={color} strokeOpacity="0.55" strokeWidth="5" strokeLinecap="round"
            strokeDasharray={c} strokeDashoffset={c * (1 - p)} />
        </svg>
        <svg viewBox="0 0 80 80" className={`${started ? "ring-spin" : ""} absolute inset-0 h-full w-full`} aria-hidden="true">
          <circle cx="40" cy="40" r={r} fill="none" stroke={color} strokeOpacity={started ? 1 : 0} strokeWidth="5"
            strokeDasharray={`30 ${c - 30}`} strokeLinecap="round" />
        </svg>
        <span className="absolute inset-0 grid place-items-center text-2xl font-extrabold text-charcoal sm:text-3xl">{n}</span>
      </div>
      <span className="mt-2 text-xs text-muted-foreground sm:text-sm">{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="hero-glow" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">

        {/* Left column — intro */}
        <div className="max-w-2xl">
          <h1 style={d(100)} className="hero-anim in-left font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-charcoal">Hi, I&rsquo;m</span>
            <br />
            <span className="text-primary">Leonah Jani.</span>
          </h1>

          <p style={d(350)} className="hero-anim in-left mt-6 text-sm font-bold leading-snug text-charcoal sm:text-base">
            Digital Marketer &amp; Designer
            <br />
            based in <span className="text-primary">Harare, Zimbabwe.</span>
          </p>

          <p style={d(550)} className="hero-anim in-up mt-5 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
            I help brands and creative businesses build meaningful digital experiences, strategic
            campaigns, and visually engaging identities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#works" style={d(750)} className="hero-anim in-left btn-base btn-lime">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="#about" style={d(850)} className="hero-anim in-right btn-base btn-outline">
              About Me <User size={16} />
            </a>
          </div>

          <div className="mt-12 flex max-w-lg flex-wrap gap-6 sm:gap-10">
            <StatRing value={YEARS_EXPERIENCE} label="Year creating" color="var(--primary)" delay={1100} />
            <StatRing value={works.length} label="Projects delivered" color="var(--stat-blue)" delay={1250} />
            <StatRing value={tools.length} label="Tools mastered" color="var(--stat-red)" delay={1400} />
          </div>
        </div>

        {/* Right column — circular portrait with floating availability card */}
        <div className="relative">
          <div className="relative mx-auto flex max-w-md flex-col items-center lg:max-w-none">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div
                style={d(200)} className="hero-anim in-zoom hero-circle relative grid aspect-square w-full place-items-center overflow-hidden rounded-full"
                aria-hidden={false}
              >
                <img
                  src={heroPortrait}
                  alt="3D illustration of Leonah Jani sitting cross-legged with a tablet and stylus, wearing a black sweatshirt reading Design, Create, Inspire"
                  width={559}
                  height={766}
                  fetchPriority="high"
                  decoding="async"
                  style={d(500)} className="hero-anim in-down absolute inset-0 h-full w-full object-contain p-[9%] drop-shadow-sm"
                />
              </div>

              <div style={d(1000)} className="hero-anim in-right glass-card absolute -bottom-6 right-0 w-60 p-5 sm:w-64 sm:-right-2 lg:-right-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  Available for work
                </span>
                <p className="mt-3 text-xs leading-relaxed text-foreground">
                  I&rsquo;m currently accepting{" "}
                  <span className="font-bold text-charcoal">new projects</span> worldwide.
                </p>
                <a
                  href={CV_URL}
                  download={CV_FILENAME}
                  aria-label={`Download Leonah Jani's CV as a PDF (${CV_FILENAME})`}
                  className="mt-5 flex items-center gap-2 text-sm font-bold text-charcoal transition-colors hover:text-primary-dark"
                >
                  <ArrowUpRight size={16} className="text-primary-dark" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
