import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have questions or ready to start your project? Reach out to the Tech Trix team in Coimbatore, Tamil Nadu.",
};

export default function ContactPage() {
  const { contact } = site;

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's build something"
        highlight="together"
        subtitle="Have questions or ready to start your project? Reach out to our team today."
      />

      <section className="relative z-10 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* Details */}
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 max-w-md text-muted">
                We&apos;d love to hear from you. Fill out the form and our team
                will get back to you as soon as possible.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-hairline bg-surface/50 p-5 transition-colors hover:border-iris/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-iris/15 text-iris">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink">Email</span>
                    <span className="text-sm text-muted">{contact.email}</span>
                  </span>
                </a>

                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 rounded-2xl border border-hairline bg-surface/50 p-5 transition-colors hover:border-iris/40"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber/15 text-amber">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink">Phone</span>
                    {/* TODO: replace with a real published number */}
                    <span className="text-sm text-muted">{contact.phone}</span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface/50 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint/15 text-mint">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink">Address</span>
                    <address className="text-sm not-italic text-muted">
                      {contact.address.line1}
                      <br />
                      {contact.address.city}, {contact.address.pincode}
                      <br />
                      {contact.address.region}
                    </address>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08}>
            <div className="rounded-[var(--radius-card)] border border-hairline bg-surface/50 p-7 sm:p-9">
              <h2 className="mb-6 font-display text-xl font-semibold text-ink">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="relative z-10 px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[var(--radius-card)] border border-hairline">
          <iframe
            src={contact.mapEmbed}
            title="Tech Trix office location"
            className="aspect-[16/9] w-full"
            style={{ border: 0, filter: "grayscale(0.3) invert(0.9) hue-rotate(180deg)" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
