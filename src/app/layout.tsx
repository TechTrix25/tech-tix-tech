import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tech Trix Technologies | Innovative Software & Digital Solutions",
    template: "%s | Tech Trix Technologies",
  },
  description: site.description,
  authors: [{ name: site.name }],
  keywords: [
    "Tech Trix",
    "software company India",
    "web development",
    "mobile app development",
    "digital transformation",
    "IT consulting",
    "custom software",
    "Laravel",
    "React",
    "Vue.js",
    "ERP software",
    "CRM development",
    "progressive web apps",
    "business software",
  ],
  robots: { index: true, follow: true },
  verification: { google: "teTKqXJyoPQD05iytXjxUqz_JgK5KDdPg8SO3mTYRp4" },
  // Icons resolved by file convention: src/app/icon.svg + src/app/apple-icon.png
  openGraph: {
    title: "Tech Trix Technologies – Now Live",
    description:
      "Tech Trix Technologies is now officially live. Explore our powerful digital solutions for the modern business world.",
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    site: site.social.twitter,
    title: "Tech Trix Technologies – Now Live",
    description:
      "Discover next-gen software development from Tech Trix Technologies – now officially launched!",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0D17",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
      description: site.description,
      foundingDate: String(site.founded),
      email: site.contact.email,
      telephone: site.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.contact.address.line1,
        addressLocality: site.contact.address.city,
        postalCode: site.contact.address.pincode,
        addressRegion: site.contact.address.region,
        addressCountry: site.contact.address.country,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
