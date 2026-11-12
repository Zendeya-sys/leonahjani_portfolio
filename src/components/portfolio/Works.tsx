import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { works } from "./data";

export function Works() {
  return (
    <section id="works" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="min-w-0">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
            <span className="text-charcoal">Some Of</span> My Works
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((w) => (
            <li
              key={w.title}
              className="card-surface group flex w-full flex-col overflow-hidden lg:h-[376px]"
            >
              <div className="aspect-video overflow-hidden border-b border-border bg-surface">
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
              <div className="flex flex-1 flex-col px-5 py-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-dark">
                  {w.category}
                </p>
                <h3 className="mt-2 min-h-12 text-base font-bold leading-snug">{w.title}</h3>
                <p
                  className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground"
                  title={w.description}
                >
                  {w.description}
                </p>
                <Button
                  asChild
                  className="btn-base btn-lime mt-auto w-full rounded-full text-sm"
                >
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
