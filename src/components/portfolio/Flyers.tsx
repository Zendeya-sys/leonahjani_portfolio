import { ArrowUpRight } from "lucide-react";
import { flyers } from "./data";

export function Flyers() {
  return (
    <section id="flyers" className="bg-surface/70 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="eyebrow">Graphic design</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
              <span className="text-charcoal">The</span> Designs
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Promotional flyers and event posters — bold layouts, clear hierarchy and a consistent
            lime-green identity.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-6">
          {flyers.map((f) => (
            <li
              key={f.title}
              className="card-surface group flex w-full flex-col overflow-hidden sm:w-[calc(50%-0.75rem)] lg:w-[286px]"
            >
              <img
                src={f.image}
                alt={`${f.title} flyer design`}
                width={864}
                height={1080}
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: f.ratio }}
                className="w-full border-b border-border object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-dark">
                  {f.category}
                </p>
                <h3 className="mt-2 text-base font-bold leading-snug">{f.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
                {f.url ? (
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-primary-dark transition-colors hover:text-primary"
                  >
                    View Design <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
