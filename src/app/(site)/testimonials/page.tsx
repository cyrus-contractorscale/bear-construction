import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Bear Construction Reviews",
  description:
    "Read the latest Bear Construction reviews. See why Wellington homeowners trust us to deliver architectural extensions, renovations, and leaky home repairs.",
  keywords: "Bear Construction reviews",
  alternates: {
    canonical: "https://www.bearconstruction.co.nz/testimonials",
  },
  openGraph: {
    title: "Client Testimonials | Bear Construction Reviews",
    description:
      "Read Bear Construction client reviews. Wellington homeowners share their experiences with our renovation, extension, and recladding projects.",
    url: "https://www.bearconstruction.co.nz/testimonials",
    siteName: "Bear Construction",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://www.bearconstruction.co.nz/Bear Construction Social Media.png",
        width: 1200,
        height: 630,
        alt: "Bear Construction Wellington — Client Testimonials",
      },
    ],
  },
};

const testimonials = [
  {
    quote:
      "From the initial consultation to the final walkthrough, the team at Bear Construction was professional and transparent. They made our renovation stress-free.",
    name: "Sarah Jenkins",
    project: "Major Renovation · Lower Hutt",
    initials: "SJ",
    tint: "bg-blue-100 text-blue-700",
    stars: 5,
  },
  {
    quote:
      "We hired Bear Construction for a major home extension. They stayed on budget, finished on time, and the quality of workmanship is absolutely top-notch. Couldn't be happier.",
    name: "Marcus Thorne",
    project: "Home Extension · Churton Park",
    initials: "MT",
    tint: "bg-emerald-100 text-emerald-700",
    stars: 5,
  },
  {
    quote:
      "The quantity surveying service was a lifesaver. It gave us a realistic budget upfront and prevented any nasty surprises down the line. Great team to work with.",
    name: "David Chen",
    project: "Exterior Reclad · Wellington City",
    initials: "DC",
    tint: "bg-orange-100 text-orange-700",
    stars: 5,
  },
  {
    quote:
      "Our new custom home is everything we dreamed of. Bear Construction listened to our needs and delivered a beautiful, functional space for our family.",
    name: "Sophie Clark",
    project: "Home Extension · Upper Hutt",
    initials: "SC",
    tint: "bg-pink-100 text-pink-700",
    stars: 5,
  },
  {
    quote:
      "Reliable, skilled, and honest. It's hard to find good builders, but Bear Construction ticks all the boxes. Their bathroom renovation is flawless.",
    name: "Liam O'Connor",
    project: "Bathroom Renovation · Porirua",
    initials: "LO",
    tint: "bg-cyan-100 text-cyan-700",
    stars: 5,
  },
  {
    quote:
      "Phil and his team were communicative throughout the entire reclad. Any issues they found were presented clearly with options. Exactly what you want from a builder.",
    name: "Elena Rodriguez",
    project: "Exterior Reclad · Churton Park",
    initials: "ER",
    tint: "bg-violet-100 text-violet-700",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-amber-400" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bear Construction",
  url: "https://www.bearconstruction.co.nz",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(testimonials.length),
    bestRating: "5",
    worstRating: "5",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: String(t.stars), bestRating: "5" },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
    name: t.project,
  })),
};

export default function TestimonialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />
      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 pt-44 pb-20 sm:pt-52 sm:pb-24 lg:pt-60 lg:pb-28">
        <Image
          src="/page-header-bg.webp"
          alt="Bear Construction Client Reviews Wellington"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent" />
        <Container className="relative z-10 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Client Reviews · Wellington
          </span>
          <h1 className="mt-6 font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold uppercase tracking-tight text-white">
            The Standard We Deliver: Client Reviews
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Discuss Your Project Today
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

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-[900px]">
          <AnimateOnScroll variant="fade-up" className="space-y-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1278ce]/50">
              Proof That Supports the Promise
            </p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[44px]">
              Hard Evidence, Not Marketing Filler
            </h2>
            <div className="space-y-5 text-left">
              <p className="text-[17px] leading-[1.7] text-[#4d6277]">
                A major renovation or reclad is not just judged by the final result. It is judged by how the experience felt while your biggest asset was under active construction.
              </p>
              <p className="text-[17px] leading-[1.7] text-[#4d6277]">
                Did the builder communicate? Did they hide unexpected structural issues, or did they solve problems proactively? Did they actually treat your home with respect, or did they treat it like just another job site?
              </p>
              <p className="text-[17px] leading-[1.7] text-[#4d6277]">
                At Bear Construction, we believe that testimonials are not just marketing filler. They are hard evidence. They prove that we don&apos;t just talk about honest communication and flawless execution — we actually deliver it on site, every single day, without the franchise runaround.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100} className="mt-10 rounded-2xl border border-[#eef2f6] bg-[#f9fafb] p-7 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1278ce]/50 mb-3">
              What You Will Find Below
            </p>
            <p className="text-[17px] leading-[1.65] text-[#4d6277]">
              Do not just take our word for it. Read the latest Bear Construction reviews below to see exactly how we operate when the pressure is on. You will find honest feedback from Wellington homeowners who trusted Phil Ashton and our team to protect their investments, manage complex leaky home repairs, and deliver stunning architectural extensions and renovations.
            </p>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── TESTIMONIALS GRID ────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20 border-t border-[#e8edf2]">
        <Container className="max-w-[1200px]">
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center space-y-3">
            <p className="section-tab mx-auto w-fit">Client Reviews</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.06] tracking-tight text-[#1278ce] sm:text-[46px]">
              What Our Clients Say
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <AnimateOnScroll key={item.name} variant="fade-up" delay={i * 70}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-[#e8edf2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#1278ce]/20 hover:shadow-lg hover:shadow-[#1278ce]/8 sm:p-7">
                  <div>
                    <StarRating count={item.stars} />
                    <p className="mt-4 text-[16px] leading-[1.6] text-[#3d5266]">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 border-t border-[#eef2f6] pt-5">
                    <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold ${item.tint}`}>
                      {item.initials}
                    </span>
                    <div>
                      <p className="text-[14px] font-bold text-[#1a2f48]">{item.name}</p>
                      <p className="text-[12px] text-[#8a9aab]">{item.project}</p>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        className="bg-cover bg-center py-20 sm:py-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,20,40,0.93), rgba(10,20,40,0.93)), url('/projects/churton-park/Churton-Park-1-scaled.webp')",
        }}
      >
        <Container className="max-w-[800px] text-center">
          <AnimateOnScroll variant="fade-up" className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Ready to Experience This Standard?
            </p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.06] tracking-tight !text-white sm:text-[50px]">
              Ready to Experience This Standard of Building?
            </h2>
            <p className="mx-auto max-w-xl text-[17px] leading-[1.65] text-white/70">
              If you want a building experience that feels highly organised, transparent, and flawlessly executed from the first conversation to the final handover, we are ready to talk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
              >
                Discuss Your Project Today
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                View Our Services
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
