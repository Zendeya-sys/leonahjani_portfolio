import { useState } from "react";
import { MapPin, Mail, ArrowRight, Send } from "lucide-react";
import { toast } from "sonner";
import contactAvatar from "@/assets/contact-avatar.png";

const fields = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
  { id: "email", label: "Email Address", type: "email", placeholder: "you@email.com" },
  { id: "subject", label: "Subject", type: "text", placeholder: "What is this about?" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="bg-surface/70 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="eyebrow">Get in touch</p>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-4xl lg:text-5xl">
          <span className="text-charcoal">Let&apos;s Build</span> Something Together
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="rounded-xl bg-primary p-7 shadow-[var(--shadow-lime)] sm:p-10 lg:col-span-7">
            <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Contact Info
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
              Interested in working together or just want to say hi? Feel free to reach out for
              collaborations, projects, or even just a friendly hello!
            </p>
            <a href="#contact-form" className="btn-base btn-dark mt-7">
              Let&apos;s Work Together <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-6 lg:col-span-5">
            <div className="card-surface p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary-dark">
                <MapPin size={19} />
              </span>
              <h4 className="mt-4 text-sm font-bold uppercase tracking-[0.14em]">Address</h4>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Johannesburg, South Africa — available for remote work worldwide.
              </p>
            </div>
            <div className="card-surface p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary-dark">
                <Mail size={19} />
              </span>
              <h4 className="mt-4 text-sm font-bold uppercase tracking-[0.14em]">Email</h4>
              <p className="mt-1.5 text-sm text-muted-foreground">hello@leonahjani.com</p>
            </div>
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
                  rows={5}
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

          <div className="grid gap-6 lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div
                className="absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface"
                aria-hidden
              />
              <img
                src={contactAvatar}
                alt="3D illustration of Leonah Jani beside a modern workstation with floating design tool icons"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative mx-auto w-full max-w-xs object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
