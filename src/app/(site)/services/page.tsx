import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Building Services Wellington | Bear Construction",
  description:
    "Wellington building services by Bear Construction — home extensions, renovations, bathroom & kitchen upgrades, exterior cladding, and leaky home repairs.",
  keywords: [
    "building services wellington",
    "home extensions wellington",
    "renovation builders wellington",
    "exterior cladding wellington",
    "bear construction services",
  ],
  alternates: {
    canonical: "https://www.bearconstruction.co.nz/services",
  },
  openGraph: {
    title: "Building Services Wellington | Bear Construction",
    description:
      "Wellington building services by Bear Construction — home extensions, renovations, bathroom & kitchen upgrades, exterior cladding, and leaky home repairs.",
    url: "https://www.bearconstruction.co.nz/services",
    siteName: "Bear Construction",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://www.bearconstruction.co.nz/Bear Construction Social Media.png",
        width: 1200,
        height: 630,
        alt: "Bear Construction Wellington Building Services",
      },
    ],
  },
};

const services = [
  {
    title: "Home Extensions",
    body: "Need more space but love where you live? We build seamless home extensions and second-storey additions that grow your footprint without the disruption of moving.",
    image: "/Services/Home Extensions Services.png",
    href: "/services/home-extensions",
  },
  {
    title: "Home Renovations",
    body: "For homeowners planning structural changes, layout upgrades, or full-home transformations. We manage the entire project so the process stays organised and on track.",
    image: "/Services/Home Renovations Services.png",
    href: "/services/home-renovations",
  },
  {
    title: "Recladding",
    body: "Worried about a leaky home? Protect your biggest asset. We specialise in recladding and leaky home remediation, permanently resolving weathertightness issues and upgrading your home's street appeal.",
    image: "/Services/Exterior Cladding Services.png",
    href: "/services/recladding",
  },
  {
    title: "Kitchen Renovations",
    body: "Turn an outdated, cramped kitchen into a practical, hardworking space with better flow, better storage, and modern durability.",
    image: "/Services/Kitchen Renovations Services.png",
    href: "/services/kitchen-renovations",
  },
  {
    title: "Bathroom Renovations",
    body: "We build high-quality, functional bathrooms designed for long-term performance and everyday use.",
    image: "/Services/Bathroom Renovations Services.png",
    href: "/services/bathroom-renovations",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-zinc-950 pt-44 pb-20 sm:pt-52 sm:pb-24 lg:pt-60 lg:pb-28">
        <Image
          src="/page-header-bg.webp"
          alt="Bear Construction Wellington building services"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent" />
        <Container className="relative z-10 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Wellington Building Services
          </span>
          <h1 className="mt-6 font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold uppercase tracking-tight text-white">
            Our Services
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Book Your Consultation
            </Link>
            <Link
              href="#services-list"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section id="services-list" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px]">
          <AnimateOnScroll variant="fade-up" className="text-center mb-12">
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-[#1278ce] sm:text-5xl">
              Building Solutions for Wellington Homeowners
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#4d6277] max-w-2xl mx-auto">
              From adding a second storey to completely transforming your layout, we are the home improvement builders Wellington relies on for projects that fundamentally improve how a home functions.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.title} variant="fade-up" delay={index * 65}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e8edf2] bg-white shadow-[0_4px_24px_rgba(15,39,68,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,39,68,0.12)]">
                  <div className="relative block aspect-[5/3] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.06]"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                    <h3 className="text-[1.1rem] font-bold leading-snug text-[#1278ce] sm:text-[1.2rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-relaxed text-[#5f7286]">
                      {service.body}
                    </p>
                    <Link
                      href={service.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-bold text-[#1278ce] transition hover:gap-3"
                    >
                      View Service
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
