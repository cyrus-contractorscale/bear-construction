import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Home Extensions Wellington | Bear Construction",
  description:
    "Bear Construction specialises in home extensions and second-storey additions across Wellington. We manage structural work, consents, and construction.",
  keywords: "home extensions wellington",
};

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "We start by assessing your site and understanding your goals for the extra living space. You meet directly with Phil Ashton to discuss your expected investment level and confirm we are the right fit for the job.",
  },
  {
    step: "02",
    title: "Scope & Feasibility",
    body: "We walk through the property to assess the foundations and load-bearing walls. We give you practical advice on what it will actually take to structurally integrate a new addition into your existing home.",
  },
  {
    step: "03",
    title: "Design & Consenting",
    body: "We coordinate with architects to ensure the extension planning is both beautiful and buildable. We manage the details and secure the necessary council consent so your project meets all Wellington town planning rules.",
  },
  {
    step: "04",
    title: "Pricing & Contracts",
    body: "Before any major work begins, we provide transparent, fair pricing based on detailed quantity surveying. Expectations and budgets are firmly aligned before we even pick up a hammer.",
  },
  {
    step: "05",
    title: "The Build Phase",
    body: "The work is carried out by our trusted network of trades. We focus on tight project management — including weatherproofing your existing home — keeping the site clean, and making sure you are updated every step of the way.",
  },
  {
    step: "06",
    title: "Handover & Guarantee",
    body: "We bring the project through to completion, ensuring the new extension seamlessly matches your existing home. Following a meticulous final walkthrough, we hand over the space backed by our 10-Year Building Guarantee.",
  },
];

const trustPoints = [
  {
    title: "Direct Owner Involvement",
    body: "You deal directly with Phil Ashton, not a disconnected sales rep. Phil personally oversees every project from start to finish.",
  },
  {
    title: "Transparent & Fair Pricing",
    body: "We submit plans for detailed quantity surveying and provide transparent, fair pricing with no hidden surprises. Long-term relationships built on genuine value.",
  },
  {
    title: "Expert Coordination",
    body: "We stick to the schedule. We manage our trusted network of plumbers, electricians, and painters so your project never stalls.",
  },
  {
    title: "Master Builder Quality",
    body: "Phil is a Certified Building Surveyor (CBS) and a Licensed Building Practitioner. We prove our quality through flawless results.",
  },
];

const guaranteePoints = [
  "Total Weathertightness Protection: Ensuring your new extension is completely sealed against Wellington's harsh weather.",
  "Structural Integrity: Long-term protection for the structural soundness of our framing and foundations.",
  "Materials and Workmanship: Coverage for the premium, sustainable materials we use on your home.",
  "Direct Accountability: You deal directly with the owner if you ever have a question down the track.",
];

const faqs = [
  {
    q: "Do you offer clear pricing from the start?",
    a: "Yes. For extensions with a clearly defined scope, we submit plans for detailed quantity surveying to provide transparent, fair pricing upfront.",
  },
  {
    q: "Can I use my own architect?",
    a: "Absolutely. We collaborate with your chosen architect to ensure the house design matches your budget and is structurally practical.",
  },
  {
    q: "Can we live in the house during the extension?",
    a: "This depends entirely on the scope of the structural work. For some ground-floor additions, it is possible. For major second-storey additions, moving out is often safer and faster. We will discuss this with you upfront.",
  },
  {
    q: "How long does a major extension take?",
    a: "Timelines vary by complexity, but we provide a realistic schedule at the start and keep you updated throughout the entire build.",
  },
  {
    q: "Do you handle the council consent process?",
    a: "Yes. We have long-standing relationships with architects and can help coordinate the entire planning and consent process to keep your project moving.",
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
  name: "Home Extensions Wellington",
  description: "Wellington's trusted home extension builders. Seamless single-storey and second-storey additions, architecturally designed and precision-built by Bear Construction.",
  url: "https://www.bearconstruction.co.nz/services/home-extensions",
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

export default function HomeExtensionsPage() {
  return (
    <>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-zinc-950 pb-16 pt-44 sm:pb-20 sm:pt-52 lg:pt-60">
        <Image
          src="/Services/Home Extensions Services.png"
          alt="Home Extensions Wellington — Bear Construction"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Home Extensions · Wellington
            </span>
            <h1 className="font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold tracking-tight text-white">
              Home Extensions Wellington
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
                  "Worried about extension costs blowing out halfway through the build?",
                  "Concerned that adding extra living space will result in a disjointed, obvious add-on rather than a seamless integration?",
                  "Frustrated by builders who operate without clear communication or respect for your property?",
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
                Don&apos;t Start Your Project Without A Clear Plan
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                These are valid fears because most construction projects fail due to poor planning. You are investing significant capital into your biggest asset, and you deserve a builder who treats your money and your vision with absolute respect. Too often, the excitement of expanding a home is ruined by chaotic sites, missed deadlines, and vague promises from volume franchises.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Bear Construction operates differently. We bring a transparent and highly accountable approach to residential construction. Phil Ashton leads this company with over 20 years of local building experience, applying expert knowledge and rigorous project management to every site. We eliminate the guesswork and replace it with a clear, practical plan for execution.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                As expert extension builders Wellington homeowners trust, we execute your vision with precision. Whether it is a complex architectural addition or a bespoke family expansion, we manage every detail to ensure the result matches the plan.
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
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <Image
                src="/projects/Churton Park/Bear-Construction-Action-Photos-2024-1335861-scaled.webp"
                alt="Bear Construction home extension Wellington"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={120}>
            <div className="space-y-6">
              <div className="section-tab w-fit">Local Expertise</div>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[40px]">
                Understanding House Extensions Wellington and the Hutt Valley
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.65] text-[#4d6277]">
                <p>
                  Building a high-end extension in the Wellington region requires more than just good carpentry. It requires detailed logistical planning and deep local knowledge. The terrain across the region varies significantly, from tight hillside access in Wellington Central to variable soil conditions in the Hutt Valley. Understanding these structural realities before design begins is critical to avoiding expensive foundation redesigns later.
                </p>
                <p>
                  Navigating local regulations is another hurdle. Building room additions to Wellington properties often involves specific boundary rules or town-planning overlays. We understand these nuances. We ensure your architectural plans are not just beautiful but practical and compliant with the local council from day one.
                </p>
                <p>
                  Furthermore, the supply chain for premium materials requires strict management. We manage these logistics with a highly organised approach, ordering materials well in advance to ensure your project never has to wait for a delivery.
                </p>
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
              The Bear Construction Roadmap: Your Extension Process
            </h2>
            <p className="mx-auto max-w-2xl text-[17px] text-[#5f7286]">
              Adding to an existing home is highly disruptive. Without a clear plan, sites become chaotic and timelines vanish. We use a straightforward 6-step framework to maintain order, safety, and progress.
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
              By sticking rigidly to this framework, we remove the guesswork from building. You always know exactly where your project stands, what is happening next, and that the quality is being enforced daily.
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

      {/* ── WHY CLIENTS TRUST US ─────────────────────────────────── */}
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

      {/* ── ARCHITECTURAL COMPLEXITY + STANDARD ──────────────────── */}
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
                  We specialise in technically demanding work that scares other builders. From complex second-storey extensions to intricate leaky home remediation, our team thrives on difficult structural challenges.
                </p>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  We manage bespoke builds with a rigorous quality-control model that ensures flawless execution by every subcontractor. You get the efficiency of a dedicated project manager with the deep technical knowledge of a Certified Building Surveyor.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[38px]">
                  The Bear Construction Standard of Excellence
                </h2>
                <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                  Major construction projects often raise concerns about quality and completion. We operate under a strict internal policy that holds us accountable for every detail of your project from the ground up. We aim for zero defects at handover because we believe the best advertising is a happy client.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/projects/103-105 Victoria Street/103-105-Victoria-St-5-scaled.webp"
                  alt="Bear Construction extension Wellington"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mt-8">
                <Image
                  src="/projects/Churton Park/Churton-Park-4-scaled.webp"
                  alt="Bear Construction Wellington project"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── 10-YEAR GUARANTEE ────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20 border-t border-[#e8edf2]">
        <Container className="max-w-[1200px] grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-5">
              <div className="section-tab w-fit">Our Guarantee</div>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[42px]">
                The 10-Year Ironclad Guarantee
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                As a Registered Master Builder, we back our work with a comprehensive 10-Year Guarantee on all major projects.
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

          <AnimateOnScroll variant="fade-left" delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <Image
                src="/projects/Churton Park/Churton-Park-5-scaled.webp"
                alt="Bear Construction completed Wellington home extension"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
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
              Frequently Asked Questions about Home Extensions
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
                Expand Your Home With Absolute Certainty
              </h2>
              <p className="text-[17px] leading-[1.65] text-white/70">
                Adding to your footprint is a massive commitment, but it does not have to be a guessing game. Remove the risk of council delays and budget blowouts by partnering with an expert. Ensure your project starts with certainty — align your vision with a realistic budget and secure the outcome your home deserves.
              </p>
              <p className="text-[17px] font-semibold text-white">
                Let&apos;s build the space your family needs.
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
                To maintain strict quality control and ensure direct owner involvement on every site, Bear Construction operates within a dedicated 50-minute travel radius from Wellington CBD. We provide expert Home Extensions across the following primary locations:
              </p>
              <ul className="space-y-3">
                {serviceAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3 text-[16px] text-[#2d4560]">
                    <CheckIcon />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[16px] leading-relaxed text-[#4d6277]">
                If your property is located within our coverage area, contact us to arrange an initial consultation.
              </p>
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
