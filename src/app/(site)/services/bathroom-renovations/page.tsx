import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Bathroom Renovations Wellington | Bear Construction",
  description:
    "Bear Construction delivers high-end bathroom renovations across Wellington. We manage the design, waterproofing, plumbing, and complete build process.",
  keywords: "bathroom renovations wellington",
  alternates: {
    canonical: "https://www.bearconstruction.co.nz/services/bathroom-renovations",
  },
  openGraph: {
    title: "Expert Bathroom Renovations Wellington | Bear Construction",
    description:
      "Bear Construction delivers high-end bathroom renovations across Wellington — design, waterproofing, plumbing, and complete build managed end to end.",
    url: "https://www.bearconstruction.co.nz/services/bathroom-renovations",
    siteName: "Bear Construction",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://www.bearconstruction.co.nz/Bear Construction Social Media.png",
        width: 1200,
        height: 630,
        alt: "Bathroom Renovations Wellington — Bear Construction",
      },
    ],
  },
};

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "We start by assessing your current space and understanding your vision for the new bathroom. You meet directly with Phil Ashton to discuss your expected investment and confirm we are the right team for the job.",
  },
  {
    step: "02",
    title: "Scope & Feasibility",
    body: "We inspect the existing plumbing lines and structural framing. This allows us to identify any underlying moisture issues early and advise you on what layout changes are genuinely viable.",
  },
  {
    step: "03",
    title: "Design & Detailing",
    body: "We help refine your chosen layout and confirm the specifications for your fixtures and tiling. We manage the technical details to ensure the design is ready for a seamless installation.",
  },
  {
    step: "04",
    title: "Pricing & Contracts",
    body: "We provide transparent, fair pricing based on a detailed assessment of the required work. Your budget is firmly aligned before any demolition takes place.",
  },
  {
    step: "05",
    title: "The Build Phase",
    body: "Our trusted network of specialist trades takes over. We manage the demolition, the critical waterproofing stages, and the high-end finishing, keeping the site clean and constantly updating you on our progress.",
  },
  {
    step: "06",
    title: "Handover & Guarantee",
    body: "We conduct a rigorous final inspection, ensuring the tiling, sealant, and fixtures meet our exacting standards. We hand back your flawless new bathroom, fully backed by our 10-Year Building Guarantee.",
  },
];

const trustPoints = [
  {
    title: "Direct Owner Involvement",
    body: "You deal directly with Phil Ashton. We provide direct access to the owner to ensure your project runs smoothly.",
  },
  {
    title: "Diagnostic Precision",
    body: "We identify structural or moisture risks before they become expensive variations.",
  },
  {
    title: "Relentless Site Control",
    body: "We respect your property and heavily manage our plumbers, waterproofers, and tilers to ensure steady, reliable progress.",
  },
  {
    title: "Master Builder Backing",
    body: "We are proud members of Registered Master Builders. Our reputation is built on delivering a finish that speaks for itself.",
  },
];

const guaranteePoints = [
  "Total Weathertightness Protection: Ensuring your new wet areas are completely sealed and waterproofed to the highest industry standards.",
  "Structural Integrity: Long-term protection for any flooring or framing modifications we complete.",
  "Materials and Workmanship: Coverage for the premium materials installed in your home.",
  "Direct Accountability: You deal directly with the owner if you ever need support in the future.",
];

const faqs = [
  {
    q: "How long does it take to complete a bathroom?",
    a: "Timelines vary based on the complexity of the tiling and whether we are moving plumbing lines. However, because we tightly schedule our plumbers, waterproofers, and tilers, we maintain steady momentum and provide a highly realistic schedule upfront.",
  },
  {
    q: "Do you handle all the different trades required?",
    a: "Yes. You do not need to hire a separate plumber, electrician, or tiler. We manage our trusted network of specialist tradesmen to ensure the quality remains flawless across the entire build.",
  },
  {
    q: "What happens if you find water damage or rot after demolition?",
    a: "This is where our diagnostic experience as a Certified Building Surveyor matters. We conduct a thorough feasibility check early on. If we do uncover hidden damage, we pause, present you with clear repair options, and agree on the cost before proceeding.",
  },
  {
    q: "Can you help with the design and layout?",
    a: "Absolutely. We provide practical advice on bathroom layouts to maximise space, improve flow, and ensure your chosen fixtures will function perfectly within the room's footprint.",
  },
  {
    q: "Is your waterproofing guaranteed?",
    a: "Yes. We strictly adhere to the highest industry standards for wet area protection, and our workmanship is backed by our 10-Year Ironclad Guarantee.",
  },
];

const serviceAreas = [
  "Wellington City & Suburbs (including Churton Park and central suburbs)",
  "Lower Hutt & The Valley (including Belmont)",
  "Upper Hutt",
  "Porirua & Northern Extent (including Pauatahanui and Paekākāriki)",
];


function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-400 text-[11px] text-emerald-400">
      ✓
    </span>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-[#eef2f6] bg-[#f9fafb] transition-all duration-300 open:border-[#1278ce] open:bg-[#1278ce] open:shadow-lg open:shadow-[#1278ce]/15">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 sm:px-7 sm:py-6">
        <span className="text-[16px] font-semibold leading-snug text-black group-open:text-white sm:text-[17px]">
          {q}
        </span>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef2f6] text-xl font-light text-black transition-all duration-300 group-open:rotate-45 group-open:bg-white/15 group-open:text-white">
          +
        </span>
      </summary>
      <div className="border-t border-white/10 px-6 pb-6 pt-4 sm:px-7">
        <p className="text-[15px] leading-[1.65] text-white/80 sm:text-[16px]">{a}</p>
      </div>
    </details>
  );
}


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bathroom Renovations Wellington",
  description: "Premium bathroom renovation builders in Wellington. Bear Construction transforms dated, cramped bathrooms into high-performance, architect-quality spaces.",
  url: "https://www.bearconstruction.co.nz/services/bathroom-renovations",
  provider: {
    "@type": "LocalBusiness",
    name: "Bear Construction",
    url: "https://www.bearconstruction.co.nz",
    telephone: "+6421824419",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wellington",
      addressCountry: "NZ",
    },
  },
  areaServed: [
    { "@type": "City", name: "Wellington" },
    { "@type": "City", name: "Lower Hutt" },
    { "@type": "City", name: "Upper Hutt" },
    { "@type": "City", name: "Porirua" },
  ],
};

export default function BathroomRenovationsPage() {
  return (
    <>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-44 sm:pb-20 sm:pt-52 lg:pt-60">
        <Image
          src="/Services/Bathroom Renovations Services.png"
          alt="Bathroom Renovations Wellington — Bear Construction"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Bathroom Renovations · Wellington
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold tracking-tight text-white">
              Bathroom Renovations Wellington
            </h1>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="https://go.bearconstruction.co.nz/book"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
              >
                Book Your Project Consultation
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Our Process
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PAIN POINTS + INTRO ──────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1278ce]/50">Sound Familiar?</p>
              <ul className="space-y-4">
                {[
                  "Tired of fighting for space in an outdated, poorly designed bathroom that barely functions for your family?",
                  "Dreading the idea of your house being turned upside down and left without a working shower for weeks on end?",
                  "Worried that cheap sealant or rushed waterproofing will lead to massive rot and repair bills just a few years down the line?",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-[#eef2f6] bg-[#f9fafb] px-5 py-4"
                  >
                    <span className="mt-0.5 text-[#1278ce]">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-[16px] font-medium text-[#2d4560]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={150}>
            <div className="space-y-5">
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[42px]">
                Stop Guessing. Start Planning.
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Bathrooms are the most heavily utilised, high-risk spaces in your home. They do not fail because of poor design choices; they fail because of compromised waterproofing, poor sequencing, and contractors who do not understand the technical demands of a wet area. You are investing in a premium space, and you deserve a builder who guarantees that what lies behind the walls is just as flawless as the exterior finish.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Bear Construction brings technical precision to every project. Led by Phil Ashton, a Certified Building Surveyor and Registered Master Builder, we eliminate the risks associated with wet-area construction. We provide a highly disciplined approach, managing demolition, plumbing, and final fit-out so you do not have to.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                When you are looking for bathroom renovation builders Wellington families trust, you need a team that executes with absolute control. Whether it is a luxury master ensuite or a highly functional family space, we deliver a flawless result, on time, and built to last.
              </p>
              <Link
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-full bg-[#1278ce] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book Your Consultation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── LOCAL EXPERTISE ──────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20 border-t border-[#e8edf2]">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center max-w-[1200px]">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-6">
              <div className="section-tab w-fit">Local Expertise</div>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[40px]">
                Executing Premium Bathroom Upgrades in Wellington
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.65] text-[#4d6277]">
                <p>
                  Delivering high-end bathroom renovations Wellington-wide requires far more than just installing new tiles. It requires a deep understanding of structural integrity and moisture management. Older homes in the capital often hide decades of slow leaks, compromised subfloors, and inadequate ventilation. If a builder simply covers up these issues with new plasterboard, the new bathroom will inevitably fail.
                </p>
                <p>
                  As a Certified Building Surveyor, Phil Ashton brings a diagnostic edge to our bathroom upgrades and Wellington projects. We assess the existing plumbing framework, the joists, and the airflow requirements before we finalise the design. This ensures that when we install high-end features like custom tiled showers or heavy freestanding baths, the structure is fully prepared to support them safely and permanently.
                </p>
                <p>
                  A truly successful bathroom also requires flawless layouts. Space is often at a premium, meaning the placement of every pipe, socket, and fixture must be calculated perfectly. We manage our trusted network of local plumbers, electricians, and waterproofers with military precision.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={120}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/projects/Churton Park/Churton-Park-2-scaled.webp"
                  alt="Bear Construction bathroom renovation Wellington"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[3/4] mt-8 overflow-hidden rounded-2xl">
                <Image
                  src="/projects/Churton Park/Churton-Park-3-scaled.webp"
                  alt="Bear Construction premium bathroom finish Wellington"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── 6-STEP PROCESS ───────────────────────────────────────── */}
      <section id="process" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container className="space-y-14 max-w-[1200px]">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-4">
            <p className="section-tab mx-auto w-fit">How It Works</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.04] tracking-tight text-[#1278ce] sm:text-[50px]">
              The Bear Construction Roadmap: Your Bathroom Process
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              Remodelling a wet area requires strict sequencing. We use a disciplined 6-step framework to ensure every trade arrives at exactly the right time, keeping your project moving efficiently.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <AnimateOnScroll key={s.step} variant="fade-up" delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-[#e8edf2] bg-[#f9fafb] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1278ce]/20 hover:shadow-lg hover:shadow-[#1278ce]/8">
                  <span className="mb-4 text-[13px] font-bold uppercase tracking-[0.18em] text-[#1278ce]/30">{s.step}</span>
                  <h3 className="mb-2 text-[18px] font-bold text-[#1278ce]">{s.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-[#5f7286]">{s.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" className="text-center">
            <p className="mx-auto max-w-2xl text-[17px] leading-[1.65] text-[#4d6277]">
              By maintaining strict control over this process, we ensure your bathroom is built correctly from the subfloor to the ceiling.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1278ce] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Get a Realistic Project Assessment <span aria-hidden="true">→</span>
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────── */}
      <section
        className="bg-cover bg-center py-16 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,20,40,0.93), rgba(10,20,40,0.93)), url('/projects/Churton%20Park/Churton-Park-1-scaled.webp')",
        }}
      >
        <Container className="max-w-[1200px]">
          <AnimateOnScroll variant="fade-up" className="mb-12 text-center">
            <p className="section-tab mx-auto w-fit mb-4 !border-white/20 !bg-white/10 !text-white/70">Why Choose Bear</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.04] tracking-tight !text-white sm:text-[48px]">
              Why Wellington Clients Trust Bear Construction
            </h2>
          </AnimateOnScroll>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((pt, i) => (
              <AnimateOnScroll key={pt.title} variant="fade-up" delay={i * 80}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1278ce]">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" aria-hidden="true">
                      <circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M8.3 12.2l2.2 2.2 5.1-5.1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-[16px] font-bold !text-white">{pt.title}</h3>
                  <p className="text-[14px] leading-relaxed text-white/65">{pt.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── COMPLEXITY + STANDARD ────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center max-w-[1200px]">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="section-tab w-fit">Our Expertise</div>
                <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[38px]">
                  Wet Area Complexity Handled With Precision
                </h2>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  We specialise in the technical demands of modern bathroom renovations. Whether your project involves relocating major plumbing lines, pouring custom shower bases, or executing intricate tiling patterns, our team excels under pressure.
                </p>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  We apply a rigorous quality control system across every critical phase, especially the waterproofing. You receive the efficiency of a dedicated project manager combined with the deep technical insight of a Certified Building Surveyor.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[38px]">
                  The Bear Construction Standard of Excellence
                </h2>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  Rebuilding the most critical room in your house requires total trust in your contractor. We operate under a strict internal policy that demands absolute accountability for the safety, cleanliness, and sequencing of your site. We refuse to accept &ldquo;good enough.&rdquo;
                </p>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  We aim for zero defects at handover because we know true quality lies in the meticulous application of every seal and tile.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <Image
                src="/projects/Churton Park/Churton-Park-5-scaled.webp"
                alt="Bear Construction bathroom quality Wellington"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── 10-YEAR GUARANTEE ────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20 border-t border-[#e8edf2]">
        <Container className="max-w-[1200px] grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <Image
                src="/projects/Churton Park/Churton-Park-6-scaled.webp"
                alt="Bear Construction 10-year guarantee Wellington bathroom"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="space-y-5">
              <div className="section-tab w-fit">Our Guarantee</div>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[42px]">
                The 10-Year Ironclad Guarantee
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                As a Registered Master Builder, we back our major projects with a comprehensive 10-Year Guarantee.
              </p>
              <ul className="space-y-4">
                {guaranteePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[16px] text-[#2d4560]">
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/guarantee"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-[#1278ce] transition hover:gap-3"
              >
                Learn more about our Guarantee <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl space-y-8">
          <AnimateOnScroll variant="fade-up" className="text-center space-y-3">
            <p className="section-tab mx-auto w-fit">FAQs</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-tight tracking-tight text-zinc-900">
              Frequently Asked Questions about Bathroom Renovations
            </h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={faq.q} variant="fade-up" delay={i * 80}>
                <FaqItem q={faq.q} a={faq.a} />
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CONSULTATION CTA + FORM ───────────────────────────────── */}
      <section
        id="consultation"
        className="scroll-mt-24 bg-cover bg-center py-16 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,20,40,0.93), rgba(10,20,40,0.93)), url('/projects/Churton%20Park/Churton-Park-1-scaled.webp')",
        }}
      >
        <Container className="max-w-[1200px] grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                Plan for Success From Day One
              </p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight !text-white sm:text-[46px]">
                Build A Premium Space You Can Rely On
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                Do not leave the most critical room in your house to chance. Secure your investment against water damage and poor finishing by choosing a builder who understands the demands of a modern wet area.
              </p>
              <p className="text-[17px] font-semibold text-white">
                Your daily routine deserves a premium space. Book a Project Consultation to align your vision with a realistic budget and secure the high-quality finish you expect.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+6421824419"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                  021 824 419
                </a>
                <a
                  href="mailto:phil@bearconstruction.co.nz"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  phil@bearconstruction.co.nz
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={200}>
            <div className="w-full overflow-hidden rounded-2xl bg-white">
              <iframe
                src="https://link.contractorscale.com/widget/form/JUmWw969pNoKIq9jDbMf"
                style={{ width: "100%", height: "815px", border: "none", borderRadius: "7px" }}
                id="inline-JUmWw969pNoKIq9jDbMf"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="New Lead - Short"
                data-height="815"
                data-layout-iframe-id="inline-JUmWw969pNoKIq9jDbMf"
                data-form-id="JUmWw969pNoKIq9jDbMf"
                title="New Lead - Short"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── AREAS WE SERVICE ─────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20 border-t border-[#e8edf2]">
        <Container className="max-w-[1200px] grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <div className="section-tab w-fit">Service Area</div>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[40px]">
                Areas We Service
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                To maintain strict quality control and ensure direct owner involvement on every site, Bear Construction operates within a dedicated 50-minute travel radius from Wellington CBD.
              </p>
              <ul className="space-y-3">
                {serviceAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3 text-[16px] text-[#2d4560]">
                    <CheckIcon />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <Image
                src="/projects/Esplanade/BC-take2-42-scaled.webp"
                alt="Bear Construction Wellington service area"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
