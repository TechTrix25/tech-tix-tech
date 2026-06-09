import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "@/components/brand/Logo";

const serviceLinks = [
  { label: "Web Development", href: "/services" },
  { label: "Mobile App Development", href: "/services" },
  { label: "Enterprise Software", href: "/services" },
  { label: "ERP & CRM", href: "/services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Work", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  { label: "Twitter", href: site.social.twitterUrl, Icon: Twitter },
  { label: "LinkedIn", href: site.social.linkedinUrl, Icon: Linkedin },
  { label: "GitHub", href: site.social.githubUrl, Icon: Github },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo href={null} />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Innovation through technology. We build digital solutions that
              transform businesses.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="grid h-9 w-9 place-items-center rounded-full border border-hairline text-muted transition-colors hover:border-iris/50 hover:text-ink"
                  aria-label={label}
                  target={href === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="eyebrow mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow mb-4">Contact</h3>
            <address className="space-y-2 text-sm not-italic text-muted">
              <p>{site.contact.address.line1}</p>
              <p>
                {site.contact.address.city}, {site.contact.address.pincode}
              </p>
              <p>{site.contact.address.region}</p>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-2 inline-flex items-center gap-2 text-ink transition-colors hover:text-amber"
              >
                <Mail className="h-4 w-4" />
                {site.contact.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 text-sm text-muted sm:flex-row">
          <p>
            &copy; {site.founded}
            {new Date().getFullYear() > site.founded
              ? `–${new Date().getFullYear()}`
              : ""}{" "}
            {site.name}. All rights reserved.
          </p>
          <p className="eyebrow">Coimbatore · Tamil Nadu · India</p>
        </div>
      </div>
    </footer>
  );
}
