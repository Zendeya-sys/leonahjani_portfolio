import { useState } from "react";
import { MapPin, Mail, Send, Phone } from "lucide-react";
import { toast } from "sonner";
import { socials } from "./Socials";

const fields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
  { id: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  { id: "subject", label: "Subject", type: "text", placeholder: "How can I help you?" },
];

const details = [
  {
    id: "address",
    icon: MapPin,
    label: "Address",
    text: "Harare, Zimbabwe",
    href: undefined,
    alt: "Based in Harare, Zimbabwe",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    text: "leonahjani@gmail.com",
    href: "mailto:leonahjani@gmail.com",
    alt: "Email Leonah at leonahjani@gmail.com",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    text: "+263 78 499 9655",
    href: "tel:+263784999655",
    alt: "Call Leonah on +263 78 499 9655",
  },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="bg-surface/70 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left column — intro, contact cards, socials */}
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-dark">
              <span className="h-0.5 w-7 rounded-full bg-primary" aria-hidden="true" />
              Let's Build Something Together
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              <span className="text-charcoal">Get</span>{" "}
              <span className="text-primary">In Touch</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ready to bring your next digital project to life? Drop me a line and I'll respond to
              all enquiries within 24 hours.
            </p>

            <div className="mt-9 flex flex-col gap-4">
              {details.map((d) => {
                const Icon = d.icon;
                const body = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary-dark">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0 text-sm font-bold text-charcoal sm:text-[0.95rem]">
                      {d.text}
                    </span>
                  </>
                );
                return d.href ? (
                  <a
                    key={d.id}
                    href={d.href}
                    aria-label={d.alt}
                    className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-0.5 sm:gap-5 sm:px-6"
                  >
                    {body}
                  </a>
                ) : (
                  <div
                    key={d.id}
                    className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] sm:gap-5 sm:px-6"
                  >
                    {body}
                  </div>
                );
              })}
            </div>

            <ul className="mt-9 flex flex-wrap items-center gap-3">
              {socials.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#contact"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-xl bg-card text-primary-dark shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon size={18} strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — message form */}
          <form
            id="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                toast.success("Message sent — I'll be in touch soon.");
                (e.target as HTMLFormElement).reset();
              }, 600);
            }}
            className="flex flex-col rounded-2xl bg-primary/[0.06] p-6 shadow-[var(--shadow-card)] sm:p-8 lg:col-span-7"
          >
            <div className="grid content-start gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.id} className={f.id === "subject" ? "sm:col-span-2" : ""}>
                  <label
                    htmlFor={f.id}
                    className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/70"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    className="mt-2 w-full rounded-lg border border-primary/20 bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  required
                  placeholder="Tell me about your project, goals, and timeline…"
                  className="mt-2 w-full resize-none rounded-lg border border-primary/20 bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-auto flex w-full items-center justify-center gap-2.5 rounded-lg bg-primary py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-lime)] transition-colors hover:bg-primary-dark disabled:opacity-70"
            >
              {sending ? "Sending…" : "Send Message"} <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
