import { Download, ArrowUpRight, Check } from "lucide-react";
import aboutAvatar from "@/assets/about-avatar.png";

const roles = [
  {
    title: "Digital Marketing Strategist",
    copy: "Social media strategy, content calendars, email funnels and campaign development that move real numbers.",
  },
  {
    title: "Graphic Designer",
    copy: "Brand development, identity systems and editorial layouts with a strong typographic point of view.",
  },
  {
    title: "Creative Problem Solver",
    copy: "UI/UX and digital experiences shaped by research, clear hierarchy and a bias toward clarity.",
  },
];

const skills = [
  "Digital marketing",
  "Social media strategy",
  "Content creation",
  "Brand development",
  "Campaign development",
  "Creative strategy",
];

export function About() {
  return (
    <section id="about" className="bg-surface/70 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow">About</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
          Know About Me In Details
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative">
            <div className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-10">
              <img
                src={aboutAvatar}
                alt="3D illustration of Leonah Jani working at a minimalist creative desk"
                width={1024}
                height={1024}
                loading="lazy"
                className="mx-auto w-full max-w-md object-contain"
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-xl bg-primary px-5 py-3 text-primary-foreground shadow-[var(--shadow-lime)] sm:left-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                Marketing · Design · UX
              </p>
            </div>
          </div>

          <div>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I work at the intersection of marketing and design — building brands that look
              considered and campaigns that perform. From strategy and content creation to the final
              interface, I keep every touchpoint consistent, intentional and easy to act on.
            </p>

            <ul className="mt-8 grid gap-4">
              {roles.map((r) => (
                <li key={r.title} className="card-surface p-5">
                  <h3 className="text-base font-bold tracking-tight sm:text-lg">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
                </li>
              ))}
            </ul>

            <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {skills.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#works" className="btn-base btn-lime">
                More About Me <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-base btn-outline">
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
