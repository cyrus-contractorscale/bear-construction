import { Inter, Montserrat, Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Get Your Free Estimate | Bear Construction",
    template: "%s | Bear Construction",
  },
  description:
    "Answer a few quick questions and get an instant project estimate range from Bear Construction — Wellington's trusted renovation builders.",
  robots: { index: false, follow: false },
};

export default function EstimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${montserrat.variable} ${poppins.variable}`}>
      {/* Minimal branded header */}
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-8">
          <Link href="/" aria-label="Bear Construction home">
            <Image
              src="/bear-logo-dark.png"
              alt="Bear Construction"
              width={160}
              height={66}
              style={{ height: "auto" }}
              className="w-[130px] sm:w-[160px]"
              priority
            />
          </Link>
          <a
            href="tel:+6448873529"
            className="text-sm font-semibold text-[#1278ce] hover:underline"
          >
            +64 4 887 3529
          </a>
        </div>
      </header>

      {children}
    </div>
  );
}
