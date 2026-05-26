import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | Local Renovation Specialists Wellington",
  description:
    "Bear Construction serves Wellington City, Lower Hutt, Upper Hutt and Porirua. Expert leaky home repairs and architectural renovations within a 50-minute radius.",
  keywords: "local renovation specialists wellington",
  alternates: {
    canonical: "https://www.bearconstruction.co.nz/service-areas",
  },
  openGraph: {
    title: "Service Areas | Bear Construction Wellington Region",
    description:
      "Bear Construction services Wellington City, Lower Hutt, Upper Hutt, and Porirua. Expert renovations, extensions, and leaky home repairs across the Wellington region.",
    url: "https://www.bearconstruction.co.nz/service-areas",
    siteName: "Bear Construction",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://www.bearconstruction.co.nz/Bear Construction Social Media.png",
        width: 1200,
        height: 630,
        alt: "Bear Construction Wellington Region Service Areas",
      },
    ],
  },
};

const areas = [
  {
    region: "Wellington City & Suburbs",
    icon: "🏙️",
    locations: ["Wellington CBD (Central City)", "Churton Park"],
  },
  {
    region: "Lower Hutt & The Valley",
    icon: "🏡",
    locations: ["Lower Hutt Central", "Belmont", "Surrounding Lower Hutt valley areas"],
  },
  {
    region: "Upper Hutt",
    icon: "🌿",
    locations: ["Upper Hutt Central", "Surrounding valley areas"],
  },
  {
    region: "Porirua & Northern Extent",
    icon: "🌊",
    locations: ["Porirua Central", "Pauatahanui", "Judgeford (Border area)", "Paekākāriki (Northern extent)"],
  },
];

const consultationPoints = [
  "Your project goals and the specific upgrades you are looking for",
  "Realistic budget ranges for architectural extensions and remediation",
  "Timeline expectations and our process for keeping things running smoothly",
  "Whether your project is a good fit for our team",
];

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-400">
      ✓
    </span>
  );
}

const serviceAreasSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Service Areas | Bear Construction Wellington Region",
  description: "Bear Construction serves Wellington City, Lower Hutt, Upper Hutt and Porirua.",
  url: "https://www.bearconstruction.co.nz/service-areas",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Bear Construction",
    url: "https://www.bearconstruction.co.nz",
    areaServed: [
      { "@type": "City", name: "Wellington City", containedInPlace: { "@type": "State", name: "Wellington" } },
      { "@type": "City", name: "Lower Hutt", containedInPlace: { "@type": "State", name: "Wellington" } },
      { "@type": "City", name: "Upper Hutt", containedInPlace: { "@type": "State", name: "Wellington" } },
      { "@type": "City", name: "Porirua", containedInPlace: { "@type": "State", name: "Wellington" } },
    ],
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }} />
      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 pt-44 pb-20 sm:pt-52 sm:pb-24 lg:pt-60 lg:pb-28">
        <Image
          src="/page-header-bg.webp"
          alt="Bear Construction Wellington service area"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent" />
        <Container className="relative z-10 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Wellington Region · 50-Minute Radius
          </span>
          <h1 className="mt-6 font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold uppercase tracking-tight text-white">
            Service Areas
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

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-[1200px] grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-6">
              <div className="section-tab w-fit">Expert Local Builders</div>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[42px]">
                Providing Expert Building Services Across the Wellington Region
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.65] text-[#4d6277]">
                <p>
                  When you are undertaking a major architectural extension or repairing a leaky home, you need a builder who understands the local environment. Wellington&apos;s varied housing stock, steep hillside sections, and unforgiving coastal weather require very specific construction expertise.
                </p>
                <p>
                  As licensed builders in the Wellington region, we focus our operations strictly where we can maintain absolute quality control. To ensure every project receives the tight project management and direct communication we are known for, we limit our primary service area to a <strong className="font-semibold text-[#1278ce]">50-minute travel radius from Wellington CBD.</strong>
                </p>
                <p>
                  This operational discipline means we spend less time sitting in traffic and more time actively managing your site, coordinating our trusted network of local trades, and ensuring your project stays on schedule.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <Image
                src="/projects/churton-park/Churton-Park-2-scaled.webp"
                alt="Bear Construction Wellington project"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── MAP + SERVICE AREAS ──────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20 border-t border-[#e8edf2]">
        <Container className="max-w-[1200px]">
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center space-y-3">
            <p className="section-tab mx-auto w-fit">Coverage Area</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.06] tracking-tight text-[#1278ce] sm:text-[46px]">
              Our Primary Service Areas
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              We proudly serve an 814-square-kilometre coverage area across the region, encompassing the following main districts and their surrounding suburbs.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
            {/* Area cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {areas.map((area, i) => (
                <AnimateOnScroll key={area.region} variant="fade-up" delay={i * 80}>
                  <div className="flex h-full flex-col rounded-2xl border border-[#e8edf2] bg-white p-6 shadow-sm">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-2xl">{area.icon}</span>
                      <h3 className="text-[16px] font-bold text-[#1278ce]">{area.region}</h3>
                    </div>
                    <ul className="space-y-2">
                      {area.locations.map((loc) => (
                        <li key={loc} className="flex items-start gap-2 text-[14px] text-[#4d6277]">
                          <CheckIcon />
                          <span>{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Google Map embed */}
            <AnimateOnScroll variant="fade-left" delay={100}>
              <div className="overflow-hidden rounded-[20px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5 aspect-[4/3] w-full">
                <iframe
                  title="Bear Construction Wellington service area map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96872.42!2d174.9!3d-41.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1716000000000!5m2!1sen!2snz&q=Wellington+New+Zealand"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: "360px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-center text-[13px] text-[#8a9aab]">
                Our service area spans approximately 60–80 km from Wellington CBD, bounded by Belmont Regional Park, Akatarawa Forest, and Kaitoke Regional Park.
              </p>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* ── WHY WE STAY LOCAL ────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 border-t border-[#e8edf2]">
        <Container className="max-w-[1200px] grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <Image
                src="/projects/esplanade/BC-take2-57-scaled.webp"
                alt="Bear Construction local Wellington builders"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="space-y-6">
              <div className="section-tab w-fit">Why We Stay Local</div>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[42px]">
                Why We Stay Local
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.65] text-[#4d6277]">
                <p>
                  We do not try to be everywhere at once. By focusing exclusively on Wellington, Lower Hutt, Upper Hutt, and Porirua, we ensure that Phil Ashton, our owner and operator, can personally oversee every single project.
                </p>
                <p>
                  Volume builders stretch themselves thin across the lower North Island, which leads to chaotic sites and poor communication. Whether we are recladding a home in Churton Park, building an architectural extension in Belmont, or executing a complex interior renovation in Porirua, staying local means we maintain the high standards our clients expect.
                </p>
                <p>
                  We understand the specific local council requirements, we know the soil conditions, and we employ the best local tradesmen.
                </p>
              </div>
              <div className="rounded-xl border border-[#eef2f6] bg-[#f9fafb] px-6 py-5">
                <p className="text-[16px] font-semibold text-[#1278ce]">
                  We build right in our own backyard, and we back it with our{" "}
                  <Link href="/guarantee" className="underline underline-offset-2 hover:opacity-80">
                    10-Year Ironclad Guarantee
                  </Link>
                  .
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── PROJECT IMAGES STRIP ─────────────────────────────── */}
      <section className="bg-[#f9fafb] py-12 sm:py-14 border-t border-[#e8edf2]">
        <Container className="max-w-[1200px]">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: "/projects/esplanade/BC-take2-3-scaled.webp", alt: "Bear Construction Wellington exterior cladding" },
              { src: "/projects/103-105-victoria-street/103-105-Victoria-St-2-scaled.webp", alt: "Bear Construction Wellington renovation" },
              { src: "/projects/churton-park/Churton-Park-5-scaled.webp", alt: "Bear Construction Churton Park project" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="bg-cover bg-center py-20 sm:py-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,20,40,0.93), rgba(10,20,40,0.93)), url('/projects/churton-park/Churton-Park-1-scaled.webp')",
        }}
      >
        <Container className="max-w-[1200px] grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                Start Your Build With Absolute Certainty
              </p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight !text-white sm:text-[46px]">
                Is Your Property In Our Service Area?
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                A successful build starts with a realistic conversation. If your property is located within our service area, book a Project Consultation to get clarity on your goals, the likely scope of work, and the right next step for your home.
              </p>
              <p className="text-[15px] font-semibold text-white/90">In this consultation, we cover:</p>
              <ul className="space-y-3">
                {consultationPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[16px] text-white/80">
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="https://go.bearconstruction.co.nz/book"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
                >
                  Book Your Project Consultation
                </Link>
                <a
                  href="tel:+6421824419"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                  021 824 419
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="overflow-hidden rounded-[20px] bg-white shadow-xl shadow-zinc-900/20">
              <iframe
                title="Bear Construction service area detailed map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193744.84!2d174.9!3d-41.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1716000000001!5m2!1sen!2snz"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
