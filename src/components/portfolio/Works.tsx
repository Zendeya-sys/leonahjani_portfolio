import { ArrowUpRight } from "lucide-react";
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
            <li
              key={w.title}
              className="card-surface group flex w-full flex-col overflow-hidden"
            >
              <div className="aspect-[3/2] overflow-hidden border-b border-border bg-surface">

                <img
                  src={w.image}
                  alt={`${w.title} project preview`}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-dark">
                  {w.category}
                </p>
                <h3 className="mt-2 text-base font-bold tracking-tight">{w.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {w.description}
                </p>
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-primary-dark transition-colors hover:text-primary"
                >
                  View Project <ArrowUpRight size={16} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
