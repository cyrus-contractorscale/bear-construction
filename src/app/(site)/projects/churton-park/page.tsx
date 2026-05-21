import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ImageGallery } from "@/components/ui/ImageGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Churton Park Home Reclad | Bear Construction",
  description:
    "Complex two-stage recladding in Churton Park, Wellington — expert diagnostics and compliant workmanship to permanently rectify failing, non-compliant cladding.",
  keywords: ["exterior cladding wellington", "leaky home repair wellington", "recladding wellington", "renovation builders wellington"],
  alternates: {
    canonical: "https://www.bearconstruction.co.nz/projects/churton-park",
  },
  openGraph: {
    title: "Churton Park Home Reclad | Bear Construction",
    description:
      "Complex two-stage recladding project in Churton Park, Wellington — Bear Construction diagnosed and remediated non-compliant cladding, managing full consent and certification.",
    url: "https://www.bearconstruction.co.nz/projects/churton-park",
    siteName: "Bear Construction",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://www.bearconstruction.co.nz/projects/Churton Park/Churton-Park--scaled.webp",
        width: 1200,
        height: 800,
        alt: "Churton Park Home Reclad — Bear Construction Wellington",
      },
    ],
  },
};

const projectDetails = [
  { label: "Location", value: "Churton Park, Wellington" },
  { label: "Timeframe", value: "2023" },
  { label: "Project Type", value: "Exterior Recladding" },
  { label: "Client", value: "Confidential" },
];

const galleryImages = [
  "/projects/Churton Park/Churton-Park--scaled.webp",
  "/projects/Churton Park/Churton-Park-1-scaled.webp",
  "/projects/Churton Park/Churton-Park-2-scaled.webp",
  "/projects/Churton Park/Churton-Park-3-scaled.webp",
  "/projects/Churton Park/Churton-Park-4-scaled.webp",
  "/projects/Churton Park/Churton-Park-5-scaled.webp",
  "/projects/Churton Park/Churton-Park-6-scaled.webp",
  "/projects/Churton Park/Bear-Construction-Action-Photos-2024-1335838-scaled.webp",
  "/projects/Churton Park/Bear-Construction-Action-Photos-2024-1335860-scaled.webp",
  "/projects/Churton Park/Bear-Construction-Action-Photos-2024-1335861-scaled.webp",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bearconstruction.co.nz/" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://www.bearconstruction.co.nz/projects" },
    { "@type": "ListItem", position: 3, name: "Churton Park Home Reclad", item: "https://www.bearconstruction.co.nz/projects/churton-park" },
  ],
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Churton Park Home Reclad",
  description: "Complex two-stage recladding project in Churton Park, Wellington — Bear Construction diagnosed and remediated non-compliant cladding, managing full consent and certification.",
  image: "https://www.bearconstruction.co.nz/projects/Churton Park/Churton-Park--scaled.webp",
  author: { "@type": "Organization", name: "Bear Construction", url: "https://www.bearconstruction.co.nz" },
  publisher: { "@type": "Organization", name: "Bear Construction", logo: { "@type": "ImageObject", url: "https://www.bearconstruction.co.nz/bear-logo-dark.png" } },
  datePublished: "2023-01-01",
  url: "https://www.bearconstruction.co.nz/projects/churton-park",
};

export default function ChurtonParkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/Churton Park/Churton-Park--scaled.webp"
          alt="Churton Park Home Reclad"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />
        <Container className="relative z-10">
          <nav className="mb-6 flex items-center gap-2 text-[13px] text-white/50">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/projects" className="transition hover:text-white">Projects</Link>
            <span>/</span>
            <span className="text-white/90">Churton Park Home Reclad</span>
          </nav>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Exterior Recladding · Churton Park, Wellington
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold tracking-tight text-white">
              Churton Park Home Reclad
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              A complex two-stage recladding project, bringing expert diagnostics and compliant workmanship to rectify non-compliant cladding from a previous builder.
            </p>
          </div>
        </Container>
      </section>

      {/* ── PROJECT OVERVIEW & DETAILS ───────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1278ce]/50">Project Details</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#1278ce] sm:text-[42px]">
                Project Overview
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                This was a complex two-stage project involving the recladding of a family home following poor workmanship and advice from a previous builder. The architect approached Bear Construction to bring our diagnostic expertise and fix the reclad mid-project.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Unfortunately for the client, the original reclad had been started without consents, and work was carried out that did not comply with the Building Code. Our role was to remove the non-compliant cladding, manage the appropriate consent and certification process, and complete the reclad to ensure the project complied with all legal requirements.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                We were proud to bring our knowledge, expertise, and professional workmanship to successfully rectify the cladding issues for this homeowner.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-4 rounded-2xl border border-[#eef2f6] bg-[#f9fafb] p-6 shadow-sm">
              <h3 className="text-[18px] font-bold text-[#1278ce]">Key Information</h3>
              <ul className="space-y-3">
                {projectDetails.map((item) => (
                  <li key={item.label} className="flex justify-between gap-4 text-[15px] leading-relaxed text-[#5f7286]">
                    <span className="font-medium text-[#1278ce]">{item.label}:</span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── WHAT WE DID ──────────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1278ce]/50">Our Work</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.1] tracking-tight text-[#1278ce] sm:text-[42px]">
                What We Did
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                We removed all non-compliant cladding installed by the previous builder, then managed the full consent and certification process with local council. Once approvals were in place, we completed the exterior reclad to full Building Code compliance.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Throughout the project we coordinated directly with the architect and the homeowner, keeping communication clear and the process as stress-free as possible given the complex remediation circumstances.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl overflow-hidden">
              <Image
                src="/projects/Churton Park/Churton-Park-3-scaled.webp"
                alt="Churton Park recladding work"
                fill
                className="object-cover rounded-2xl"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── IMAGE GALLERY ────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center space-y-4">
            <p className="section-tab mx-auto w-fit">Gallery</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[48px]">
              Project Showcase
            </h2>
          </AnimateOnScroll>
          <ImageGallery images={galleryImages} title="Churton Park Home Reclad" description="Images from the Churton Park recladding project." />
        </Container>
      </section>

      {/* ── BACK TO PROJECTS ─────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-10">
        <Container className="text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#1278ce] transition hover:gap-4">
            <span aria-hidden="true">←</span> Back to All Projects
          </Link>
        </Container>
      </section>
    </>
  );
}
