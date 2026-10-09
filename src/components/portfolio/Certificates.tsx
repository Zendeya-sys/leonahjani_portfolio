import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        </div>

        <ul className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:mx-0 lg:px-0">
          {certificates.map((c) => (
            <li
              key={c.title}
              className="card-surface w-[280px] shrink-0 snap-start overflow-hidden sm:w-[320px]"
            >
              <img
                src={c.image}
                alt="Coursera"
                width={447}
                height={447}
                loading="lazy"
                decoding="async"
                className="aspect-[2/1] w-full border-b border-border object-cover"
              />
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-dark">
                  {c.platform}
                </p>
                <h3 className="mt-2 min-h-12 text-base font-bold leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.meta}</p>
                <Button asChild className="btn-base btn-lime mt-4 w-full text-sm">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${c.title} certificate (PDF, opens in a new tab)`}>
                    View Certificate <ArrowUpRight size={14} />
                  </a>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
