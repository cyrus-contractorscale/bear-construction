import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Independent Builders Wellington | About Bear Construction",
  description:
    "Phil Ashton leads Bear Construction, a team of independent, licensed building practitioners in Wellington backed by 20+ years of experience and Registered license builders.",
  keywords: "independent builders wellington",
  alternates: {
    canonical: "https://www.bearconstruction.co.nz/about",
  },
  openGraph: {
    title: "Independent Builders Wellington | About Bear Construction",
    description:
      "Phil Ashton leads Bear Construction, Wellington's trusted independent builders — 20+ years experience, Licensed Building Practitioners, and Registered license builders.",
    url: "https://www.bearconstruction.co.nz/about",
    siteName: "Bear Construction",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://www.bearconstruction.co.nz/bear-construction-social-media.png",
        width: 1200,
        height: 630,
        alt: "Bear Construction Wellington — About Us",
      },
    ],
  },
};

// --- Icon Components ---
function IconLBP() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 2L3 7v10l9 5 9-5V7z"></path>
      <path d="M12 7v10"></path>
      <path d="M16.5 9.5L12 12l-4.5-2.5"></path>
    </svg>
  );
}

function IconCBS() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
    </svg>
  );
}

function IconRMB() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}

function IconYearsExp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

const credentials = [
  { label: "Licensed Building Practitioner", icon: <IconLBP /> },
  { label: "Weltec Graduate", icon: <IconCBS /> },
  { label: "Registered license builders", icon: <IconRMB /> },
  { label: "20+ Years Local Experience", icon: <IconYearsExp /> },
];

const specialisms = [
  "Architectural extensions",
  "Exterior recladding",
  "Leaky home remediation",
  "Home renovations",
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Bear Construction",
  description: "Phil Ashton leads Bear Construction, a team of independent, licensed building practitioners in Wellington backed by 20+ years of experience and Registered license builders.",
  url: "https://www.bearconstruction.co.nz/about",
  mainEntity: {
    "@type": "Person",
    name: "Phil Ashton",
    jobTitle: "Owner & Licensed Building Practitioner",
    worksFor: { "@type": "Organization", name: "Bear Construction", url: "https://www.bearconstruction.co.nz" },
    address: { "@type": "PostalAddress", addressLocality: "Wellington", addressCountry: "NZ" },
  },
};

export default function AboutUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 pt-44 pb-20 sm:pt-52 sm:pb-24 lg:pt-60 lg:pb-28">
        <Image
          src="/page-header-bg.webp"
          alt="About Bear Construction"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent" />
        <Container className="relative z-10 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Independent Builders · Wellington
          </span>
          <h1 className="mt-6 font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold uppercase tracking-tight text-white">
            About Us
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Book Your Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </Container>
      </section>

      {/* ── MAIN CONTENT: INTRO + PHOTO ─────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px] grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Text column */}
          <div className="space-y-6">
            <AnimateOnScroll variant="fade-up" delay={0}>
              <div className="section-tab w-fit">About Phil Ashton</div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={80}>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[42px]">
                Built on Local Experience, Clear Communication, and Flawless Execution
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={160}>
              <div className="space-y-5 text-[17px] leading-[1.65] text-[#4d6277]">
                <p>
                  Hi, I am Phil Ashton, the owner and operator of Bear Construction.
                </p>
                <p>
                  I started this company to give homeowners a clear, confident path to transforming their properties. Born and raised right here in the capital, I have spent over 20 years in the Wellington building trade. I am a Weltec graduate, a fully Licensed Building Practitioner (LBP), and a Registered license builder.
                </p>
                <p>
                  Over the last two decades, I have learned that a truly successful build comes down to proactive planning, open communication, and absolute accountability. My team and I are dedicated to guiding homeowners through the building and renovation process with ease, delivering a premium finish you can be proud of.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Credential badges */}
            <AnimateOnScroll variant="fade-up" delay={240}>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-3 rounded-xl border border-[#e8edf2] bg-[#f9fafb] px-4 py-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1278ce] text-white">
                      {c.icon}
                    </span>
                    <span className="text-[13px] font-semibold leading-snug text-[#2d4560]">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Image column */}
          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="relative h-[460px] w-full overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5 lg:h-[620px]">
              <Image
                src="/Phil-scaled.webp"
                alt="Phil Ashton – Owner & Operator, Bear Construction Wellington"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── BODY COPY ────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="max-w-[780px] space-y-8 text-[17px] leading-[1.72] text-[#4d6277]">
          <AnimateOnScroll variant="fade-up">
            <p>
              As an independent building company, we offer a highly personalised approach. When you work with Bear Construction, you deal directly with me from start to finish. We are the local renovation specialists who believe in providing transparent, fair pricing and realistic timeframes from day one. Our business is built on strong relationships, repeat work, and local referrals. It is incredibly important to me that you feel completely confident and informed about your investment before we ever pick up a hammer.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={80}>
            <p>
              While we handle comprehensive home renovations, our true expertise lies in technically demanding work: architectural extensions, exterior recladding, and seamless leaky home remediation. We build homes designed to thrive in Wellington&apos;s unique environment. As a proud member of Registered license builders, we use sustainable, premium materials to ensure your home remains safe, healthy, and beautiful for decades to come. We pride ourselves on getting the right result, every single time.
            </p>
          </AnimateOnScroll>

          {/* Specialism callout */}
          <AnimateOnScroll variant="fade-up" delay={140}>
            <div className="rounded-2xl border border-[#dfe7ef] bg-white p-6 sm:p-8">
              <p className="mb-5 text-[13px] font-bold uppercase tracking-[0.18em] text-[#1278ce]/60">
                Our Core Specialisms
              </p>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {specialisms.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[15px] font-semibold text-[#1278ce]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
                      <circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M8.3 12.2l2.2 2.2 5.1-5.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={200}>
            <p>
              I do not view your home as a simple transaction. My goal is to ensure the job is done flawlessly and that you feel completely looked after throughout the entire journey. And when I am not onsite tightly managing our trusted network of architects, plumbers, and electricians, you will usually find me coaching my son&apos;s cricket team or fitting in a session at the local CrossFit gym.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={260}>
            <p className="text-[18px] font-medium leading-[1.65] text-[#2d4560]">
              If you want renovation builders Wellington locals trust for honesty, practical planning, and true quality workmanship, I would love to hear from you. Let&apos;s talk about bringing your vision to life.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={320}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#1278ce] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Book Your Consultation <span aria-hidden="true">→</span>
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
