"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";

const projects = [
  {
    title: "Churton Park Home Reclad",
    body: "A complex two-stage recladding project, bringing expert diagnosis and compliant workmanship to fix a previous builder's non-compliant cladding.",
    image: "/projects/Churton Park/Churton-Park--scaled.webp",
    href: "/projects/churton-park",
  },
  {
    title: "Esplanade Warehouse Rebuild",
    body: "Comprehensive building services dividing a large commercial premises into distinct warehouse and office spaces at 81 The Esplanade, Petone.",
    image: "/projects/Esplanade/BC-take2-3-scaled.webp",
    href: "/projects/esplanade",
  },
  {
    title: "103–105 Victoria Street",
    body: "Earthquake-strengthening and full rebuild bringing new life to a historic Wellington CBD building, with a modern commercial ground floor and expanded upper apartment.",
    image: "/projects/103-105 Victoria Street/103-105-Victoria-St-2-scaled.webp",
    href: "/projects/103-105-victoria-street",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-zinc-950 py-24 sm:py-32 lg:py-40">
        <Image
          src="/page-header-bg.webp"
          alt="Projects banner background"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
        <Container className="relative z-10 text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[13px] text-white/50">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white/90">Projects</span>
          </nav>
          <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-white/70">
            Explore our portfolio of exceptional construction projects, where vision meets precision and quality lasts.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Start Your Project
            </Link>
            <Link
              href="#projects-list"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Browse Projects
            </Link>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section id="projects-list" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px]">
          <AnimateOnScroll variant="fade-up" className="text-center mb-12">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-[#1278ce] sm:text-5xl">
              Our Latest Projects
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#4d6277] max-w-2xl mx-auto">
              Discover the quality and craftsmanship we bring to every home build and renovation.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <AnimateOnScroll key={project.title} variant="fade-up" delay={index * 65}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e8edf2] bg-white shadow-[0_4px_24px_rgba(15,39,68,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,39,68,0.12)]">
                  <div className="relative block aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.06]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-[#1278ce] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                      View Project →
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                    <h3 className="text-[1.1rem] font-bold leading-snug text-[#1278ce] sm:text-[1.2rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-relaxed text-[#5f7286]">
                      {project.body}
                    </p>
                    <Link
                      href={project.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-bold text-[#1278ce] transition hover:gap-3"
                    >
                      View Project
                      <span aria-hidden="true" className="text-lg leading-none">→</span>
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
