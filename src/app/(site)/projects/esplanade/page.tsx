import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ImageGallery } from "@/components/ui/ImageGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esplanade Warehouse Rebuild | Bear Construction",
  description:
    "Comprehensive building services dividing a large commercial premises into distinct warehouse and office spaces at 81 The Esplanade, Petone.",
  keywords: ["commercial builders wellington", "warehouse rebuild wellington", "commercial renovation petone", "renovation builders wellington"],
  alternates: {
    canonical: "https://www.bearconstruction.co.nz/projects/esplanade",
  },
  openGraph: {
    title: "Esplanade Warehouse Rebuild | Bear Construction",
    description:
      "Bear Construction delivered comprehensive building services at 81 The Esplanade, Petone — converting a large printing premises into modern warehouse and office tenancies.",
    url: "https://www.bearconstruction.co.nz/projects/esplanade",
    siteName: "Bear Construction",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://www.bearconstruction.co.nz/projects/Esplanade/BC-take2-3-scaled.webp",
        width: 1200,
        height: 800,
        alt: "Esplanade Warehouse Rebuild Petone — Bear Construction",
      },
    ],
  },
};

const projectDetails = [
  { label: "Location", value: "81 The Esplanade, Petone" },
  { label: "Timeframe", value: "10 Months (2023)" },
  { label: "Project Type", value: "Commercial Rebuild" },
  { label: "Client", value: "Confidential" },
];

const galleryImages = [
  "/projects/Esplanade/BC-take2-3-scaled.webp",
  "/projects/Esplanade/BC-take2-17-scaled.webp",
  "/projects/Esplanade/BC-take2-27-scaled.webp",
  "/projects/Esplanade/BC-take2-28-scaled.webp",
  "/projects/Esplanade/BC-take2-33-scaled.webp",
  "/projects/Esplanade/BC-take2-42-scaled.webp",
  "/projects/Esplanade/BC-take2-57-scaled.webp",
  "/projects/Esplanade/BC-take2-66-scaled.webp",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bearconstruction.co.nz/" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://www.bearconstruction.co.nz/projects" },
    { "@type": "ListItem", position: 3, name: "Esplanade Warehouse Rebuild", item: "https://www.bearconstruction.co.nz/projects/esplanade" },
  ],
};

const projectSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Esplanade Warehouse Rebuild",
  description: "Bear Construction delivered comprehensive building services at 81 The Esplanade, Petone — converting a large printing premises into modern warehouse and office tenancies.",
  image: "https://www.bearconstruction.co.nz/projects/Esplanade/BC-take2-3-scaled.webp",
  author: { "@type": "Organization", name: "Bear Construction", url: "https://www.bearconstruction.co.nz" },
  publisher: { "@type": "Organization", name: "Bear Construction", logo: { "@type": "ImageObject", url: "https://www.bearconstruction.co.nz/bear-logo-dark.png" } },
  datePublished: "2023-01-01",
  url: "https://www.bearconstruction.co.nz/projects/esplanade",
};

export default function EsplanadePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/Esplanade/BC-take2-3-scaled.webp"
          alt="Esplanade Warehouse Rebuild"
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
            <span className="text-white/90">Esplanade Warehouse Rebuild</span>
          </nav>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Commercial Rebuild · Petone, Wellington
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold tracking-tight text-white">
              Esplanade Warehouse Rebuild
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              Comprehensive commercial building services transforming a large former printing premises into modern warehouse and office tenancies.
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
                We provided comprehensive building services to divide what was previously a large printing business premises into distinct spaces for future tenancies. The front of the property was converted into two 800 sqm warehouse spaces on the ground and first levels, while the back was converted into a 1,600 sqm warehouse with office spaces.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                We were contracted by the main building contractor to gut the previous fit-out and rebuild the exterior walls. We managed our phase of the build seamlessly, working alongside many sub-trades onsite to deliver exactly to the design brief.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                We are proud of the value and high-quality finish we delivered on this massive commercial project.
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
                Our scope included gutting the entire previous commercial fit-out and rebuilding the exterior walls to create two distinct warehouse zones. The front section was divided into two 800 sqm ground and first-floor warehouse spaces, while the rear 1,600 sqm area was rebuilt as a large warehouse with integrated office spaces.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Working as a contracted building partner to the main contractor, we coordinated tightly with multiple sub-trades on site throughout the 10-month programme, maintaining quality and schedule throughout.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl overflow-hidden">
              <Image
                src="/projects/Esplanade/BC-take2-42-scaled.webp"
                alt="Esplanade warehouse rebuild in progress"
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
          <ImageGallery images={galleryImages} title="Esplanade Warehouse Rebuild" description="Images from the Esplanade warehouse rebuild project." />
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
