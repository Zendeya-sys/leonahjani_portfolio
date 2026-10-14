import { logos } from "./data";

export function Logos() {
  return (
    <section id="logos" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="eyebrow">Brand identity</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
              <span className="text-charcoal">Logo</span> Designs
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Marks built to be recognisable at any size — from a website header down to a social
            profile circle.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((l) => (
            <li key={l.title} className="card-surface group overflow-hidden">
              <img
                src={l.image}
                alt={`${l.title} logo preview`}
                width={900}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full border-b border-border object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-dark">
                  {l.category}
                </p>
                <h3 className="mt-2 text-base font-bold tracking-tight">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {l.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
