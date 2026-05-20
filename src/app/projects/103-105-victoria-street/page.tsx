import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ImageGallery } from "@/components/ui/ImageGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "103–105 Victoria Street | Bear Construction",
  description:
    "Earthquake-strengthening and full rebuild bringing new life to a historic Wellington CBD building, with a modern commercial ground floor and expanded upper apartment.",
};

const projectDetails = [
  { label: "Location", value: "Wellington CBD" },
  { label: "Timeframe", value: "2025" },
  { label: "Project Type", value: "Commercial & Residential Rebuild" },
  { label: "Client", value: "Confidential" },
];

const galleryImages = [
  "/projects/103-105 Victoria Street/103-105-Victoria-St-2-scaled.webp",
  "/projects/103-105 Victoria Street/103-105-Victoria-St-5-scaled.webp",
  "/projects/103-105 Victoria Street/103-105-Victoria-St-6-scaled.webp",
  "/projects/103-105 Victoria Street/103-105-Victoria-St-7-scaled.webp",
  "/projects/103-105 Victoria Street/103-105-Victoria-St-8-scaled.webp",
  "/projects/103-105 Victoria Street/103-105-Victoria-St-9-scaled.webp",
  "/projects/103-105 Victoria Street/103-105-Victoria-St-10-scaled.webp",
  "/projects/103-105 Victoria Street/103-105-Victoria-St-11-scaled.webp",
  "/projects/103-105 Victoria Street/Bear-Construction-July-2025-Photos-1414436-scaled.webp",
  "/projects/103-105 Victoria Street/Bear-Construction-July-2025-Photos-1414439-scaled.webp",
  "/projects/103-105 Victoria Street/Bear-Construction-July-2025-Photos-1414444-scaled.webp",
  "/projects/103-105 Victoria Street/Bear-Construction-July-2025-Photos-1414452-scaled.webp",
  "/projects/103-105 Victoria Street/Bear-Construction-July-2025-Photos-1414465-scaled.webp",
  "/projects/103-105 Victoria Street/Bear-Construction-July-2025-Photos-1414477-scaled.webp",
  "/projects/103-105 Victoria Street/Bear-Construction-July-2025-Photos-1414485-scaled.webp",
  "/projects/103-105 Victoria Street/Bear-Construction-July-2025-Photos-1414497-scaled.webp",
];

export default function VictoriaStreetPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Image
          src="/projects/103-105 Victoria Street/103-105-Victoria-St-2-scaled.webp"
          alt="103-105 Victoria Street Wellington"
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
            <span className="text-white/90">103–105 Victoria Street</span>
          </nav>
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Commercial & Residential Rebuild · Wellington CBD
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              103–105 Victoria Street
            </h1>
            <p className="max-w-xl text-[18px] leading-relaxed text-white/75">
              Bringing new life to a historic Wellington CBD building with earthquake strengthening, a modern commercial ground floor, and a fully rebuilt upper apartment.
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
                At 103–105 Victoria Street, we brought new life to a historic building while ensuring it stands strong for the future. The ground floor was transformed into a modern, earthquake-strengthened commercial space, designed to provide safety and functionality for businesses.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                On the top floor, we reimagined the layout, converting a one-bedroom apartment into a spacious two-bedroom living area. To achieve this, we started from scratch, demolishing the existing structure to create a blank canvas for a complete rebuild. A brand-new roof was added, ensuring absolute durability.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                This project is a testament to our commitment to innovation, quality, and strengthening Wellington&apos;s architectural legacy.
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
                On the ground floor, we completed full earthquake strengthening works alongside a comprehensive fitout to create a modern, code-compliant commercial space. The structural upgrades were carefully integrated to preserve the building&apos;s character while bringing it to current seismic standards.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                The upper floor was fully demolished and rebuilt from scratch. We converted the existing one-bedroom layout into a spacious two-bedroom apartment, installed a brand-new roof, and delivered a complete interior rebuild — from framing through to final finish.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="relative aspect-video w-full rounded-2xl bg-zinc-100 shadow-xl overflow-hidden">
              <Image
                src="/projects/103-105 Victoria Street/Bear-Construction-July-2025-Photos-1414444-scaled.webp"
                alt="103-105 Victoria Street rebuild"
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
          <ImageGallery images={galleryImages} title="103–105 Victoria Street" description="Images from the 103–105 Victoria Street rebuild project." />
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
