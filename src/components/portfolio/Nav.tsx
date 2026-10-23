import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./data";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl rounded-2xl border border-border/60 bg-background/90 shadow-[0_8px_30px_-12px_color-mix(in_oklab,var(--foreground)_18%,transparent)] backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
              LJ
            </span>
            <span className="truncate text-sm font-bold tracking-tight">Leonah Jani</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(0, 7).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary xl:px-3.5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-base btn-lime hidden rounded-xl px-6 sm:inline-flex">
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border text-foreground lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border px-4 pb-4 pt-2 lg:hidden">
            <ul className="grid gap-1">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-base btn-lime mt-3 w-full sm:hidden"
            >
              Hire Me
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
