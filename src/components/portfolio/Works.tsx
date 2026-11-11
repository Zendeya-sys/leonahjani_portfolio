import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { works } from "./data";

export function Works() {
  return (
    <section id="works" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
              <span className="text-charcoal">Some Of</span> My Works
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Campaigns, identities and interfaces — a look at how strategy turns into something people
            can actually use.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((w) => (
            <li key={w.title} className="card-surface group flex w-full flex-col overflow-hidden">
              <div className="aspect-[3/2] overflow-hidden border-b border-border bg-surface">
                <img
                  src={w.image}
                  alt={`${w.title} project preview`}
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-dark">
                  {w.category}
                </p>
                <h3 className="mt-2 min-h-12 text-base font-bold leading-snug">{w.title}</h3>
                <p
                  className="mt-1 line-clamp-1 text-xs text-muted-foreground"
                  title={w.description}
                >
                  {w.description}
                </p>
                <Button asChild className="btn-base btn-lime mt-4 w-full rounded-full text-sm">
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${w.title} project (opens in a new tab)`}
                  >
                    View Project <ArrowUpRight size={14} />
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
