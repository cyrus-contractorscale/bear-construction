import type { Metadata } from "next";
import Script from "next/script";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/sections/Footer";

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

export const metadata: Metadata = {
  title: "Wellington Home Renovation Builders | Bear Construction",
  description:
    "Looking for home renovation builders in Wellington? Bear Construction delivers quality renovations, extensions, and building services across Wellington, Upper Hutt, Lower Hutt, and Porirua.",
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
          <MainNav />
          {children}
          <Footer />
          <Script src="https://link.contractorscale.com/js/form_embed.js" strategy="afterInteractive" />
        </body>
      </html>
  );
}
