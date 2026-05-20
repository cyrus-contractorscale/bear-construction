import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Home Renovations Wellington | Bear Construction",
  description:
    "Bear Construction delivers high-end home renovations and structural upgrades across Wellington. We manage the design, planning, and complete build process.",
  keywords: "home renovations wellington",
};

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "Our relationship begins with a frank conversation about your property. We sit down with you to discuss what is not working in your current layout, review your expected investment, and determine if our team is the right match for the job.",
  },
  {
    step: "02",
    title: "Scope & Feasibility",
    body: "Before you pay for expensive concept drawings, we inspect the physical realities of the building. With Phil's background as a Certified Building Surveyor, we identify potential structural roadblocks early, giving you a clear picture of what is actually achievable.",
  },
  {
    step: "03",
    title: "Design & Consenting",
    body: "We work alongside architects to refine your vision into buildable plans. If your upgrades require load-bearing changes or major plumbing shifts, we handle the documentation to ensure full compliance with local council regulations.",
  },
  {
    step: "04",
    title: "Pricing & Contracts",
    body: "Financial surprises ruin great projects. We use detailed quantity surveying to provide a transparent, comprehensive breakdown of your renovation costs. You will know exactly where your budget is going before demolition begins.",
  },
  {
    step: "05",
    title: "The Build Phase",
    body: "This is where our site leadership shines. We manage the mess, control the dust, and schedule every plumber, sparky, and painter with military precision. We keep you informed weekly so you never have to wonder what is happening on site.",
  },
  {
    step: "06",
    title: "Handover & Guarantee",
    body: "We do not walk away until the paint is perfect and the site is spotless. After a rigorous final inspection to ensure every detail meets our standards, we return your home to you, fully backed by our 10-Year Building Guarantee.",
  },
];

const trustPoints = [
  {
    title: "No Middlemen",
    body: "You communicate directly with Phil Ashton. We provide direct access to the owner to ensure your questions are answered immediately.",
  },
  {
    title: "Diagnostic Precision",
    body: "We identify risks before they become expensive variations. Our deep understanding of local building methods prevents nasty surprises behind the walls.",
  },
  {
    title: "Relentless Site Control",
    body: "A clean site is a productive site. We respect your property and heavily manage our trades to ensure steady, reliable progress.",
  },
  {
    title: "Master Builder Backing",
    body: "We are proud members of Registered Master Builders. Our reputation is built on delivering a finish that speaks for itself.",
  },
];

const guaranteePoints = [
  "Structural Integrity: Long-term protection for any structural modifications, beam installations, and reframing we complete.",
  "Total Weathertightness Protection: Ensuring any exterior alterations made during the renovation are completely sealed against Wellington's weather.",
  "Materials and Workmanship: Coverage for the premium, sustainable materials installed in your home.",
  "Direct Accountability: You deal directly with the owner if you ever need support in the future.",
];

const faqs = [
  {
    q: "How do you handle unexpected issues found behind the walls?",
    a: "This is where our diagnostic experience matters. We conduct a thorough feasibility check early on to predict likely issues. If we do uncover hidden damage (like old rot or faulty wiring), we pause, present you with clear options, and agree on the cost before proceeding.",
  },
  {
    q: "Can we live in the house while you renovate?",
    a: "This depends entirely on the scale of the project. If we are updating a single wing, you can often stay. If we are executing full home renovations, moving out is significantly safer, less stressful for your family, and allows us to work much faster.",
  },
  {
    q: "Do you manage the subcontractors, or do I need to?",
    a: "We manage everything. From plumbers and electricians to plasterers and painters, we schedule and oversee our trusted network of tradespeople to ensure flawless quality.",
  },
  {
    q: "How long does a major internal renovation take?",
    a: "Renovation timelines vary based on the structural complexity and the specific finishes chosen. We provide a highly realistic schedule before we start and keep you updated on progress weekly.",
  },
  {
    q: "Do you handle the council consent process?",
    a: "Yes. If your renovation requires structural changes or major plumbing work, we coordinate the planning and consent process to ensure your project is fully compliant with local regulations.",
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
  name: "Home Renovations Wellington",
  description: "Expert home renovation builders in Wellington. We deliver structural upgrades, full-home renovations and architectural transformations across Wellington, Lower Hutt, Upper Hutt and Porirua.",
  url: "https://www.bearconstruction.co.nz/services/home-renovations",
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

export default function HomeRenovationsPage() {
  return (
    <>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-44 sm:pb-20 sm:pt-52 lg:pt-60">
        <Image
          src="/Services/Home Renovations Services.png"
          alt="Home Renovations Wellington — Bear Construction"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Home Renovations · Wellington
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold tracking-tight text-white">
              Home Renovations Wellington
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
                  "Putting off updating your home because you dread living in a dusty, disorganised construction zone?",
                  "Worried about tearing down walls only to discover hidden issues that derail your budget?",
                  "Want a modern finish but fear losing your property's original character and charm?",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-xl border border-[#eef2f6] bg-[#f9fafb] px-5 py-4">
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
                Gutting and rebuilding the interior of a house is a high-stakes operation. Unlike building from scratch, altering an existing structure requires the ability to anticipate what hides behind the gib. It takes a high level of diagnostic skill and rigorous renovation planning to navigate uneven floors, outdated wiring, and complex structural changes without losing momentum.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Bear Construction brings absolute accountability to every site we step onto. With over 20 years of experience upgrading local properties, Phil Ashton and his team treat your home with total respect. We do not guess. We assess, we plan, and we execute.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                When you need full home renovations Wellington locals recommend, you need a builder who actively manages the process. We take complete ownership of the site, coordinate every trade, and deliver a flawless, modernised finish that justifies your investment.
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

      {/* ── LOCAL KNOWLEDGE ──────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20 border-t border-[#e8edf2]">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center max-w-[1200px]">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-6">
              <div className="section-tab w-fit">Local Expertise</div>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[40px]">
                Upgrading and Modernising Wellington&apos;s Housing Stock
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.65] text-[#4d6277]">
                <p>
                  Executing premium house renovations Wellington wide requires a delicate balance of modern engineering and respect for original craftsmanship. Homes built decades ago were not designed for the way we live today. Creating seamless open plan living spaces often means removing critical load-bearing walls — demanding expert structural upgrades, heavy steel integration, and precise finishing.
                </p>
                <p>
                  The capital&apos;s varied housing stock also presents unique logistical challenges. A villa in Lower Hutt requires a completely different approach to insulation, wiring, and framing than a 1980s property in Porirua. Every property requires a bespoke strategy to ensure the final result feels cohesive and structurally sound.
                </p>
                <p>
                  As dedicated residential renovations Wellington specialists, we know how to merge the old with the new. By keeping a tight grip on our network of premium sub-trades, we ensure that the plastering, electrical, and finishing work all align perfectly.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={120}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/projects/103-105 Victoria Street/103-105-Victoria-St-6-scaled.webp"
                  alt="Bear Construction Wellington renovation"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mt-8">
                <Image
                  src="/projects/103-105 Victoria Street/103-105-Victoria-St-7-scaled.webp"
                  alt="Bear Construction Wellington renovation interior"
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
              The Bear Construction Roadmap: Your Renovation Process
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              Taking a house back to its framing can be overwhelming. We utilise a disciplined 6-step method to maintain absolute control over the site, ensuring your project moves forward safely and efficiently.
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
              By adhering to this strict roadmap, we protect your property and your peace of mind from start to finish.
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
              Why Serious Clients Choose Bear Construction
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
                  Architectural Complexity Handled With Precision
                </h2>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  We actively undertake extensive structural transformations to deliver the premium results that renovation builders in Wellington families expect. Whether your project involves stripping a house back to the studs, re-levelling sunken floors, or executing highly intricate architectural detailing, our team excels under pressure.
                </p>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  We apply a rigorous quality control system across every phase of the rebuild. You receive the efficiency of a dedicated project manager combined with the deep technical insight of a Certified Building Surveyor.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[38px]">
                  The Bear Construction Standard of Excellence
                </h2>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  Ripping apart your biggest asset requires total trust in your contractor. We operate under a strict internal policy that demands absolute accountability for the safety, cleanliness, and progress of your site. We refuse to accept &ldquo;good enough.&rdquo;
                </p>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  We aim for zero defects at handover because we know that true quality lives in the final five percent of the finish.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <Image
                src="/projects/103-105 Victoria Street/103-105-Victoria-St-8-scaled.webp"
                alt="Bear Construction Wellington renovation quality"
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
                src="/projects/103-105 Victoria Street/103-105-Victoria-St-9-scaled.webp"
                alt="Bear Construction 10-year guarantee Wellington"
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
                As a Registered Master Builder, we back our major renovations with a comprehensive 10-Year Guarantee.
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
              Frequently Asked Questions about Home Renovations
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Plan for Success From Day One</p>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[38px] font-extrabold leading-[1.08] tracking-tight !text-white sm:text-[46px]">
                Modernise Your Property With Total Control
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                Tearing apart your biggest asset requires a highly disciplined approach. Stop living with a layout that does not work for you and start your transformation with a team that guarantees a flawless finish. Transforming your home should be exciting, not exhausting.
              </p>
              <p className="text-[17px] font-semibold text-white">
                Book a Project Consultation to align your vision with a realistic budget and secure the premium finish you expect.
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
                src="/projects/Esplanade/BC-take2-57-scaled.webp"
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
