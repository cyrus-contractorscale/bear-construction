import type { Metadata } from "next";
import Script from "next/script";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.bearconstruction.co.nz";

export const metadata: Metadata = {
  title: {
    default: "Wellington Home Renovation Builders | Bear Construction",
    template: "%s | Bear Construction",
  },
  description:
    "Looking for home renovation builders in Wellington? Bear Construction delivers quality renovations, extensions, and building services across Wellington, Upper Hutt, Lower Hutt, and Porirua.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/cropped-BC_Favicon-32x32.png",
    shortcut: "/cropped-BC_Favicon-32x32.png",
    apple: "/cropped-BC_Favicon-32x32.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: "Bear Construction",
    title: "Wellington Home Renovation Builders | Bear Construction",
    description:
      "Expert renovation and extension builders in Wellington. Bear Construction delivers architectural home extensions, full renovations, exterior cladding & leaky home repairs across Wellington, Lower Hutt, Upper Hutt and Porirua.",
    images: [
      {
        url: `${siteUrl}/Bear Construction Social Media.png`,
        width: 1200,
        height: 630,
        alt: "Bear Construction Wellington",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellington Home Renovation Builders | Bear Construction",
    description:
      "Expert renovation and extension builders in Wellington. Architectural home extensions, full renovations, exterior cladding & leaky home repairs.",
    images: [`${siteUrl}/Bear Construction Social Media.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.bearconstruction.co.nz/#business",
  name: "Bear Construction",
  description:
    "Bear Construction are Wellington's trusted renovation and extension builders. We deliver architectural home extensions, full renovations, exterior cladding, bathroom and kitchen upgrades, and leaky home repairs across the Wellington region.",
  url: "https://www.bearconstruction.co.nz",
  telephone: "+6421824419",
  email: "phil@bearconstruction.co.nz",
  image: "https://www.bearconstruction.co.nz/bear-logo-dark.png",
  logo: "https://www.bearconstruction.co.nz/bear-logo-dark.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "191 Thorndon Quay",
    addressLocality: "Wellington",
    addressRegion: "Wellington",
    postalCode: "6011",
    addressCountry: "NZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -41.271730171314815,
    longitude: 174.7791946760538,
  },
  areaServed: [
    { "@type": "City", name: "Wellington" },
    { "@type": "City", name: "Lower Hutt" },
    { "@type": "City", name: "Upper Hutt" },
    { "@type": "City", name: "Porirua" },
  ],
  serviceType: [
    "Home Extensions",
    "Home Renovations",
    "Bathroom Renovations",
    "Kitchen Renovations",
    "Exterior Cladding",
    "Leaky Home Repair",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:30",
    },
  ],
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        className={`${plusJakarta.variable} ${lora.variable} h-full scroll-smooth antialiased`}
      >
        <body className="min-h-full flex flex-col font-sans">
          {children}
          <Script src="https://link.contractorscale.com/js/form_embed.js" strategy="afterInteractive" />
          <Script
            src="https://link.contractorscale.com/js/external-tracking.js"
            data-tracking-id="tk_bf41288bda444b048916515a9ac962f3"
            strategy="afterInteractive"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
        </body>
      </html>
  );
}
