import { businessCards } from "./data";

export function BusinessCards() {
  return (
    <section id="cards" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="eyebrow">Print &amp; stationery</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
              <span className="text-charcoal">Business</span> Cards
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Card layouts that carry the same identity into the real world — legible, balanced and
            ready for print.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessCards.map((c) => (
            <li key={c.title} className="card-surface group overflow-hidden">
              <img
                src={c.image}
                alt={`${c.title} business card preview`}
                width={1050}
                height={700}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full border-b border-border object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary-dark">
                  {c.category}
                </p>
                <h3 className="mt-2 text-base font-bold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
