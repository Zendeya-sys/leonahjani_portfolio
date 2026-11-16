import { ArrowUpRight, Download, Check } from "lucide-react";
import { CV_URL, CV_FILENAME } from "./data";

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
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
          <div className="min-w-0">
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              <span className="text-charcoal">Know About</span>{" "}
              <span className="text-primary">Me In Details</span>
            </h2>
          </div>
          <p className="min-w-0 text-sm leading-relaxed text-muted-foreground sm:text-base lg:pb-1">
            I work at the intersection of marketing and design — building brands that look
            considered and campaigns that perform. From strategy and content creation to the final
            interface, I keep every touchpoint consistent, intentional and easy to act on.
          </p>
        </div>

        <ul className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
          {roles.map((r) => (
            <li key={r.title} className="card-surface flex min-w-0 flex-col p-4">
              <h3 className="text-sm font-bold tracking-tight sm:text-base">{r.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{r.copy}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-6 border-t border-border pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="min-w-0">
            <span className="inline-flex rounded-full bg-primary px-4 py-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
              Marketing · Design · UX
            </span>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((s) => (
                <li key={s} className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="truncate">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <a href="#works" className="btn-base btn-lime">
              More About Me <ArrowUpRight size={16} />
            </a>
            <a
              href={CV_URL}
              download={CV_FILENAME}
              className="btn-base btn-outline"
              aria-label={`Download Leonah Jani's CV as a PDF (${CV_FILENAME})`}
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
