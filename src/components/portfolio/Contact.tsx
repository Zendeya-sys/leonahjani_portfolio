import { useState } from "react";
import { MapPin, Mail, ArrowRight, Send, Phone } from "lucide-react";
import { toast } from "sonner";

const fields = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
  { id: "email", label: "Email Address", type: "email", placeholder: "you@email.com" },
  { id: "subject", label: "Subject", type: "text", placeholder: "What is this about?" },
];

const details = [
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    text: "+263 78 499 9655",
    href: "tel:+263784999655",
    alt: "Call Leonah on +263 78 499 9655",
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
    id: "address",
    icon: MapPin,
    label: "Address",
    text: "Harare, Zimbabwe",
    href: undefined,
    alt: "Based in Harare, Zimbabwe",
  },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="bg-surface/70 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow">Get in touch</p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
          <span className="text-charcoal">Let's Build</span> Something Together
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-xl bg-primary p-7 shadow-[var(--shadow-lime)] sm:p-10">
              <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                Contact Info
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
                Interested in working together or just want to say hi? Feel free to reach out for
                collaborations, projects, or even just a friendly hello!
              </p>
              <a href="#contact-form" className="btn-base btn-dark mt-7">
                Let's Work Together <ArrowRight size={16} />
              </a>
            </div>

            {details.map((d) => {
              const Icon = d.icon;
              const body = (
                <>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary-dark">
                    <Icon size={19} />
                  </span>
                  <h4 className="mt-4 text-sm font-bold uppercase tracking-[0.14em]">{d.label}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d.text}</p>
                </>
              );
              return d.href ? (
                <a key={d.id} href={d.href} aria-label={d.alt} className="card-surface block p-6">
                  {body}
                </a>
              ) : (
                <div key={d.id} className="card-surface p-6">
                  {body}
                </div>
              );
            })}
          </div>

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
            className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8 lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f, i) => (
                <div key={f.id} className={i === 2 ? "sm:col-span-2" : ""}>
                  <label
                    htmlFor={f.id}
                    className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required
                    placeholder={f.placeholder}
                    className="mt-2 w-full rounded-lg border border-primary/25 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={12}
                  required
                  placeholder="Tell me about your project…"
                  className="mt-2 w-full resize-none rounded-lg border border-primary/25 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <button type="submit" disabled={sending} className="btn-base btn-lime mt-6 w-full">
              {sending ? "Sending…" : "Send Message"} <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
