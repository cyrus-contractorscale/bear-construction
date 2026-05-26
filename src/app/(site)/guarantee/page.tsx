import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 10-Year Ironclad Building Guarantee | Bear Construction",
  description:
    "Bear Construction backs every renovation and extension with a 10-Year Ironclad Guarantee. Build with total peace of mind across the Wellington region.",
  keywords: "wellington building guarantee",
  alternates: {
    canonical: "https://www.bearconstruction.co.nz/guarantee",
  },
  openGraph: {
    title: "The 10-Year Ironclad Building Guarantee | Bear Construction",
    description:
      "Every Bear Construction renovation and extension is backed by a 10-Year Ironclad Guarantee — total weathertightness protection and workmanship warranty across Wellington.",
    url: "https://www.bearconstruction.co.nz/guarantee",
    siteName: "Bear Construction",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://www.bearconstruction.co.nz/Bear Construction Social Media.png",
        width: 1200,
        height: 630,
        alt: "Bear Construction 10-Year Ironclad Building Guarantee",
      },
    ],
  },
};

const guaranteePoints = [
  {
    title: "Total Weathertightness Protection",
    body: "Wellington weather requires specific expertise. We guarantee that our exterior cladding and structural work will keep your home warm, dry, and fully protected.",
    image: "/projects/churton-park/Churton-Park-3-scaled.webp",
  },
  {
    title: "Structural Integrity",
    body: "From second-storey additions to complete architectural renovations, we guarantee the structural soundness of our framing, foundations, and load-bearing work.",
    image: "/projects/churton-park/Bear-Construction-Action-Photos-2024-1335860-scaled.webp",
  },
  {
    title: "You Deal Directly With The Owner",
    body: "If you have a question years down the track, you will not be passed around a corporate office. You deal directly with Phil, the owner who ran your job.",
    image: "/projects/churton-park/Churton-Park-4-scaled.webp",
  },
];

const commitmentSteps = [
  {
    num: "01",
    title: "Transparent, Fair Pricing",
    body: "You know exactly what premium materials are going into your home before we ever break ground.",
  },
  {
    num: "02",
    title: "Rigorous Project Management",
    body: "Every stage is checked to ensure it meets our exact standards — not just the minimum required.",
  },
  {
    num: "03",
    title: "Sustainable, Proven Materials",
    body: "We use treated NZ Radiata pine and other proven materials selected specifically for Wellington's coastal and valley conditions.",
  },
  {
    num: "04",
    title: "Meticulous Handover",
    body: "Every detail is verified as flawless before we sign off and hand the keys back to you.",
  },
];

const guaranteeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The 10-Year Ironclad Building Guarantee | Bear Construction",
  description: "Bear Construction backs every renovation and extension with a 10-Year Ironclad Guarantee across Wellington.",
  url: "https://www.bearconstruction.co.nz/guarantee",
  mainEntity: {
    "@type": "Service",
    name: "10-Year Ironclad Building Guarantee",
    description: "Every Bear Construction renovation and extension is backed by a 10-year workmanship and weathertightness guarantee.",
    provider: { "@type": "LocalBusiness", name: "Bear Construction", url: "https://www.bearconstruction.co.nz" },
    areaServed: [
      { "@type": "City", name: "Wellington" },
      { "@type": "City", name: "Lower Hutt" },
      { "@type": "City", name: "Upper Hutt" },
      { "@type": "City", name: "Porirua" },
    ],
  },
};

export default function GuaranteePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guaranteeSchema) }} />
      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 pt-44 pb-20 sm:pt-52 sm:pb-24 lg:pt-60 lg:pb-28">
        <Image
          src="/page-header-bg.webp"
          alt="Bear Construction 10-Year Ironclad Guarantee"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent" />
        <Container className="relative z-10 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Our Guarantee · Wellington
          </span>
          <h1 className="mt-6 font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold uppercase tracking-tight text-white">
            Guarantee
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

      {/* ── BUILT TO LAST — image left, text right ───────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px] grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="relative h-[400px] w-full overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5 lg:h-[560px]">
              <Image
                src="/projects/churton-park/Churton-Park-5-scaled.webp"
                alt="Bear Construction quality workmanship Wellington"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>

          <div className="space-y-6">
            <AnimateOnScroll variant="fade-up">
              <div className="section-tab w-fit">Our Commitment</div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={80}>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[42px]">
                Built To Last. Guaranteed To Perform.
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" delay={160}>
              <div className="space-y-5 text-[17px] leading-[1.72] text-[#4d6277]">
                <p>
                  When you specialise in technically demanding work like architectural extensions and weathertightness remediation, precision is everything. Over the last 20 years, we have built a reputation for doing the job right the first time.
                </p>
                <p>
                  At Bear Construction, we do not build for the short term, and we do not compromise on materials just to win a quote. We build robust, healthy homes designed to perform flawlessly in Wellington&apos;s unique coastal and valley environments for decades to come.
                </p>
                <p>
                  We back every single major project with our 10-Year Ironclad Guarantee. This gives you absolute peace of mind that your investment is protected against structural defects and weathertightness issues for a full decade.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* ── WHAT THE GUARANTEE MEANS — 3 image cards ────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20 lg:py-24 border-t border-[#e8edf2]">
        <Container className="max-w-[1200px]">
          <AnimateOnScroll variant="fade-up" className="mb-12 max-w-[680px]">
            <div className="section-tab w-fit mb-5">What It Covers</div>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[42px]">
              What The Ironclad Guarantee Actually Means
            </h2>
            <div className="mt-5 space-y-4 text-[17px] leading-[1.72] text-[#4d6277]">
              <p>
                Many building franchises treat warranties like paperwork. If you have a question down the track, you end up calling a generic 0800 number and waiting weeks for a junior project manager to assess your home.
              </p>
              <p>
                As independent, licensed builders in Wellington, my personal reputation is attached to every single project we complete.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-6 sm:grid-cols-3">
            {guaranteePoints.map((point, i) => (
              <AnimateOnScroll key={point.title} variant="fade-up" delay={i * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8edf2] bg-white shadow-sm">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={point.image}
                      alt={point.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-[1.04]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1278ce]">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" aria-hidden="true">
                        <circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M8.3 12.2l2.2 2.2 5.1-5.1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-[17px] font-extrabold leading-snug text-[#1278ce]">
                      {point.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#5f7286]">
                      {point.body}
                    </p>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BACKED BY 20 YEARS — dark bg + image grid ────────── */}
      <section className="bg-black py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px] grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-6">
              <div className="section-tab w-fit !border-white/20 !bg-white/10 !text-white/70">
                20 Years of Expertise
              </div>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[42px]">
                Backed by 20 Years of Expertise
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.72] text-white/75">
                <p>
                  We believe that a guarantee is only as good as the builder standing behind it. Phil Ashton is not just a Licensed Building Practitioner; he is a Certified Building Surveyor (CBS) and a Registered Master Builder.
                </p>
                <p>
                  Our commitment to you starts with transparent, fair pricing, so you know exactly what premium materials are going into your home. It continues with rigorous project management to ensure every stage meets our exact standards. We use sustainable, proven materials, such as treated NZ Radiata pine, to ensure lasting durability. Finally, it finishes with a meticulous handover process, ensuring every detail is flawless before we sign off.
                </p>
                <p className="font-semibold text-white">
                  You are entrusting us with your most valuable asset. We take that seriously. We build it right, and we stand by it.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {commitmentSteps.map((step, i) => (
                  <AnimateOnScroll key={step.num} variant="fade-up" delay={i * 70}>
                    <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/30">{step.num}</span>
                      <h3 className="text-[14px] font-bold leading-snug !text-white">{step.title}</h3>
                      <p className="text-[13px] leading-relaxed text-white/55">{step.body}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>

              <AnimateOnScroll variant="fade-up" delay={320}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1278ce] transition hover:bg-zinc-100"
                >
                  Book Your Consultation <span aria-hidden="true">→</span>
                </Link>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>

          {/* Photo grid */}
          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/projects/103-105-victoria-street/103-105-Victoria-St-2-scaled.webp"
                  alt="Bear Construction project Wellington"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mt-6">
                <Image
                  src="/projects/esplanade/BC-take2-17-scaled.webp"
                  alt="Bear Construction project Wellington"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/projects/churton-park/Churton-Park-2-scaled.webp"
                  alt="Bear Construction Churton Park"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mt-6">
                <Image
                  src="/projects/103-105-victoria-street/103-105-Victoria-St-5-scaled.webp"
                  alt="Bear Construction Victoria Street"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
