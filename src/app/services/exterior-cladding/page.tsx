import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Exterior Cladding Wellington | Bear Construction",
  description:
    "Bear Construction specialises in exterior cladding replacement and leaky home remediation in Wellington. We manage timber repairs, consents, and construction.",
  keywords: "exterior cladding wellington",
};

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "Our relationship begins with a frank conversation about your property's exterior. We sit down with you to discuss your concerns, review your expected investment, and determine if our team is the right match to secure your home.",
  },
  {
    step: "02",
    title: "Scope & Feasibility",
    body: "Before you pay for expensive architectural details, we assess the building envelope's physical realities. With Phil's background as a Certified Building Surveyor, we identify potential moisture risks early, giving you a clear picture of what is structurally required.",
  },
  {
    step: "03",
    title: "Design & Consenting",
    body: "We work alongside architects to refine your vision into buildable, compliant plans. Because recladding requires strict council oversight, we handle the documentation to ensure your project meets all current Building Code regulations.",
  },
  {
    step: "04",
    title: "Pricing & Contracts",
    body: "Financial surprises ruin great projects. We use detailed quantity surveying to provide a transparent, comprehensive breakdown of your remediation costs, including sensible allowances for hidden timber damage.",
  },
  {
    step: "05",
    title: "The Build Phase",
    body: "This is where our site leadership shines. We manage the scaffolding, shrink-wrapping, and the careful removal of the old materials. We schedule our trusted network of builders and painters with military precision, keeping your site safe and completely dry.",
  },
  {
    step: "06",
    title: "Handover & Guarantee",
    body: "We do not walk away until the exterior is perfect and the final council inspections are passed. After a rigorous walkthrough to ensure every detail meets our standards, we return your newly secured home to you, fully backed by our 10-Year Building Guarantee.",
  },
];

const trustPoints = [
  {
    title: "No Middlemen",
    body: "You communicate directly with Phil Ashton. We provide direct access to the owner to ensure your questions are answered immediately.",
  },
  {
    title: "Diagnostic Precision",
    body: "We identify rot and moisture risks before they escalate. Our deep understanding of local building failures prevents nasty surprises behind the walls.",
  },
  {
    title: "Relentless Site Control",
    body: "A secure site is a productive site. We respect your property and heavily manage our safety systems and weatherproofing to ensure steady progress.",
  },
  {
    title: "Master Builder Backing",
    body: "We are proud members of Registered Master Builders. Our reputation is built on delivering a secure, durable finish that speaks for itself.",
  },
];

const guaranteePoints = [
  "Total Weathertightness Protection: Ensuring your new cladding system is completely sealed against Wellington's driving rain and harsh winds.",
  "Structural Integrity: Long-term protection for any timber remediation, beam installations, and reframing we complete.",
  "Materials and Workmanship: Coverage for the premium, sustainable materials installed on your home, such as treated NZ Radiata pine.",
  "Direct Accountability: You deal directly with the owner if you ever need support in the future.",
];

const faqs = [
  {
    q: "How do you handle unexpected rot found in the framing?",
    a: "This is where our diagnostic experience matters. We conduct a thorough feasibility check early on. If we do uncover hidden timber damage after the old cladding is removed, we pause, present you with clear remediation options, and agree on the scope of the repair before proceeding.",
  },
  {
    q: "Can we live in the house while you reclad it?",
    a: "This depends entirely on the scale of the project. If we are updating a single wall or a small extension, you can often stay. If we are executing a full-house reclad that requires extensive structural timber replacement, moving out is significantly safer, less stressful for your family, and allows us to work much faster.",
  },
  {
    q: "Do you shrink-wrap the house during construction?",
    a: "For full reclads, yes. We coordinate professional scaffolding and shrink-wrapping to ensure your exposed framing is completely protected from the weather while we work. This keeps the site dry and ensures the project maintains momentum regardless of the forecast.",
  },
  {
    q: "What cladding materials do you recommend?",
    a: "We recommend systems that have proven performance in New Zealand. Treated timber weatherboards remain an excellent, sustainable choice, but we also work with premium modern systems. We will guide you on the best material for your specific aesthetic and maintenance goals.",
  },
  {
    q: "Do you handle the council consent process?",
    a: "Yes. Recladding requires strict council oversight and often involves a new Code Compliance Certificate (CCC). We coordinate the planning, inspections, and consent process to ensure your project is fully compliant with local regulations.",
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

export default function ExteriorCladdingPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-44 sm:pb-20 sm:pt-52 lg:pt-60">
        <Image
          src="/Services/Exterior Cladding Services.png"
          alt="Exterior Cladding Wellington — Bear Construction"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Exterior Cladding · Wellington
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Exterior Cladding Wellington
            </h1>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#consultation"
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
                  "Seeing signs of moisture damage or failing plaster and knowing it is time to secure the structural safety of your biggest asset?",
                  "Dreading the financial risk of a leaky home and needing an absolute expert to diagnose and permanently resolve the underlying issues?",
                  "Looking to modernise the street appeal of an ageing property while simultaneously upgrading its thermal performance?",
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
                Securing the envelope of a house is a high-stakes operation. Defending a property against the elements requires a deep understanding of moisture control, airflow, and structural framing. When a building envelope fails, it threatens the entire framework of the home. Remediating these issues requires a high level of diagnostic skill to uncover exactly what lies beneath the surface and ensure the damage is permanently eradicated.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Bear Construction brings unparalleled technical precision to every exterior project. Led by Phil Ashton, a Certified Building Surveyor and Registered Master Builder, we eliminate the uncertainty of major structural repairs. We manage the scaffolding, the timber testing, and the precise installation of your new exterior, ensuring your property is permanently secured.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                When you need exterior cladding Wellington locals trust to protect their homes, you need a team that executes with absolute control. Whether it is targeted remediation or a complete architectural facelift, we deliver a robust, beautiful result built to handle the harshest local weather.
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
                Upgrading and Protecting Wellington&apos;s Housing Stock
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.65] text-[#4d6277]">
                <p>
                  Executing a flawless exterior renovation Wellington-wide requires a delicate balance of modern engineering and strict compliance. Homes built during the late 1980s to mid-2000s often face systemic vulnerabilities. Resolving these issues means establishing absolute weathertightness — a highly technical process demanding expert assessment, comprehensive timber remediation, and precise flashing integration.
                </p>
                <p>
                  The capital&apos;s unpredictable coastal weather presents unique logistical challenges for recladding Wellington properties. High winds and driving rain mean your home needs the ultimate exterior protection. If a contractor applies a standard approach without considering wind zones or specific exposure levels, the new system will eventually fail.
                </p>
                <p>
                  As dedicated specialists in house cladding Wellington, we know how to secure a building for the long term. By selecting premium cladding materials and upgrading your insulation, we significantly improve the house&apos;s thermal efficiency — from modern brick veneer to traditional weatherboard replacement Wellington families love.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={120}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/projects/Esplanade/BC-take2-28-scaled.webp"
                  alt="Bear Construction exterior cladding Wellington"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[3/4] mt-8 overflow-hidden rounded-2xl">
                <Image
                  src="/projects/Esplanade/BC-take2-33-scaled.webp"
                  alt="Bear Construction recladding Wellington project"
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
              The Bear Construction Roadmap: Your Recladding Process
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              Stripping the exterior off a house requires absolute site control. We utilise a disciplined 6-step method to maintain safety, weatherproofing, and constant progress on site.
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
                  We actively take on heavy exterior transformations that overwhelm standard contractors. Whether your project involves stripping a leaky home back to the framing, replacing major structural beams, or executing highly intricate architectural facades, our team excels under pressure.
                </p>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  We apply a rigorous quality control system throughout every phase of the rebuild, with a strong focus on flashing and cavity systems. You receive the efficiency of a dedicated project manager combined with the deep technical insight of a Certified Building Surveyor.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[38px]">
                  The Bear Construction Standard of Excellence
                </h2>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  Removing the protective layer of your biggest asset requires total trust in your contractor. We operate under a strict internal policy that demands absolute accountability for the safety, weatherproofing, and progress of your site. We refuse to accept &ldquo;good enough.&rdquo;
                </p>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  We aim for zero defects at handover because we know that true quality lives in the invisible details that keep water out.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <Image
                src="/projects/Esplanade/BC-take2-42-scaled.webp"
                alt="Bear Construction exterior cladding precision Wellington"
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
                src="/projects/Esplanade/BC-take2-57-scaled.webp"
                alt="Bear Construction 10-year guarantee exterior cladding Wellington"
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
                As a Registered Master Builder, we back our major exterior projects with a comprehensive 10-Year Guarantee.
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
              Frequently Asked Questions about Exterior Cladding
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
                Secure Your Home Against The Elements
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                Your property deserves a disciplined approach. Remove the risk of a poorly managed reclad and start your exterior transformation with total confidence.
              </p>
              <p className="text-[17px] font-semibold text-white">
                Book a Project Consultation to align your vision with a realistic budget and secure the premium protection your home deserves.
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
                src="/projects/Esplanade/BC-take2-66-scaled.webp"
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
