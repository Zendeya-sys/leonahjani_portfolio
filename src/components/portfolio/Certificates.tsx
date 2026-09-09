import { Award, ArrowRight } from "lucide-react";
import { certificates } from "./data";

export function Certificates() {
  return (
    <section id="certificates" className="bg-surface/70 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="eyebrow">Qualifications</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
              <span className="text-charcoal">View My</span> Certificates
            </h2>
          </div>
          <a href="#contact" className="btn-base btn-outline shrink-0">
            View All Certificates
          </a>
        </div>

        <ul className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:mx-0 lg:px-0">
          {certificates.map((c) => (
            <li
              key={c.title}
              className="card-surface w-[280px] shrink-0 snap-start overflow-hidden sm:w-[320px]"
            >
              <div
                className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${c.tint} border-b border-border`}
              >
                <div className="rounded-lg border border-border bg-card px-5 py-4 text-center shadow-[var(--shadow-card)]">
                  <Award className="mx-auto text-primary" size={22} />
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Certificate
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-dark">
                  {c.platform}
                </p>
                <h3 className="mt-2 text-base font-bold leading-snug tracking-tight">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.meta}</p>
                <a href="#contact" className="btn-base btn-lime mt-4 w-full text-sm">
                  View Certificate <ArrowRight size={14} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
