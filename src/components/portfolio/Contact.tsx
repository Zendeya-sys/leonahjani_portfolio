import { useState } from "react";
import { MapPin, Mail, Send, Phone } from "lucide-react";
import { toast } from "sonner";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { socials } from "./Socials";
import { contactLocation, WHATSAPP_URL } from "./data";

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
  const mapsKey = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"];
  const mapUrl = mapsKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(mapsKey)}&q=${encodeURIComponent(contactLocation.label)}&zoom=13`
    : undefined;

  return (
    <section id="contact" className="bg-surface/70 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-8 rounded-3xl border border-border bg-card p-5 shadow-card sm:p-8 lg:grid-cols-12 lg:gap-6 lg:p-10 xl:gap-8">
          {/* Left column — intro, contact cards, socials */}
          <div className="min-w-0 lg:col-span-4 lg:col-start-4 lg:row-start-1">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary-dark">
              <span className="h-0.5 w-7 rounded-full bg-primary" aria-hidden="true" />
              Let's Build Something Together
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
              <span className="text-charcoal">Get</span>{" "}
              <span className="text-primary">In Touch</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ready to bring your next digital project to life? Drop me a line and let's build something together.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              {details.map((d) => {
                const Icon = d.icon;
                const body = (
                  <>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary-dark">
                      <Icon size={15} />
                    </span>
                    <span className="min-w-0 text-[0.8rem] font-bold text-charcoal sm:text-[0.85rem]">
                      {d.text}
                    </span>
                  </>
                );
                return d.href ? (
                  <a
                    key={d.id}
                    href={d.href}
                    aria-label={d.alt}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-0.5 sm:gap-4 sm:px-5"
                  >
                    {body}
                  </a>
                ) : (
                  <div
                    key={d.id}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)] sm:gap-4 sm:px-5"
                  >
                    {body}
                  </div>
                );
              })}
            </div>

            <ul className="mt-7 flex flex-wrap items-center gap-2.5">
              {socials.map(({ label, Icon, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    aria-label={label}
                    {...(url.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-primary-dark shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon size={16} strokeWidth={2} />
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
            className="flex min-w-0 flex-col rounded-2xl bg-primary/[0.06] p-6 shadow-[var(--shadow-card)] sm:p-8 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:p-6 xl:p-8"
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
                  rows={7}
                  required
                  placeholder="Tell me about your project, goals, and timeline…"
                  className="mt-2 w-full resize-none rounded-lg border border-primary/20 bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="mt-6 h-13 w-full gap-2.5 rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-[var(--shadow-lime)] hover:bg-primary-dark disabled:opacity-70"
            >
              {sending ? "Sending…" : "Send Message"} <Send size={16} />
            </Button>
          </form>

          <aside className="flex min-w-0 flex-col gap-7 lg:col-span-3 lg:col-start-1 lg:row-start-1" aria-label="WhatsApp and location">
            <div className="flex min-w-0 flex-col">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat with Leonah on WhatsApp" className="block w-full rounded-2xl border border-primary/20 bg-card p-3 shadow-[var(--shadow-card)]">
                <QRCodeSVG value={WHATSAPP_URL} size={168} level="M" marginSize={2} className="contact-qr mx-auto h-auto w-auto max-w-full" title="Leonah Jani WhatsApp QR code" />
              </a>
              <Button asChild variant="outline" className="mt-4 h-10 w-full rounded-full border-primary/25 text-primary-dark">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>

            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-3">
                <span className="location-beacon relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive" aria-hidden="true"><MapPin size={18} /></span>
                <div><h3 className="text-sm font-bold text-charcoal">Budiriro</h3><p className="text-xs text-muted-foreground">Harare, Zimbabwe</p></div>
              </div>
              <div className="h-56 overflow-hidden rounded-2xl border border-primary/20 bg-card">
                {mapUrl ? <iframe title="Budiriro location on Google Maps" src={mapUrl} width="100%" height="100%" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" className="border-0" /> : <div className="flex h-full items-center justify-center p-4 text-center text-sm text-muted-foreground">Map connection unavailable.</div>}
              </div>
              <Button asChild variant="link" className="mt-2 h-auto w-full whitespace-normal rounded-full px-0 text-xs text-primary-dark">
                <a href={contactLocation.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps ↗</a>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
