import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Bear Construction Wellington",
  description:
    "Have questions about building in Wellington? Read our FAQs on renovation costs, leaky home repairs, council consents, and our 10-Year Building Guarantee.",
  keywords: "renovation process",
  alternates: {
    canonical: "https://www.bearconstruction.co.nz/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Bear Construction Wellington",
    description:
      "Answers to common questions about Wellington home renovations, extensions, leaky home repairs, council consents, and the Bear Construction 10-Year Building Guarantee.",
    url: "https://www.bearconstruction.co.nz/faq",
    siteName: "Bear Construction",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://www.bearconstruction.co.nz/Bear Construction Social Media.png",
        width: 1200,
        height: 630,
        alt: "Bear Construction Wellington — FAQ",
      },
    ],
  },
};

const faqs = [
  {
    number: "01",
    question: "What areas do you service?",
    answer:
      "We operate within a strict 50-minute travel radius from the Wellington CBD. This allows us to maintain tight quality control and ensures Phil Ashton can personally oversee every site. Our primary service areas include Wellington City, Lower Hutt, Upper Hutt, and Porirua.",
  },
  {
    number: "02",
    question: "Do you handle leaky home repairs and recladding?",
    answer:
      "Yes. While we execute high-end architectural extensions and full home renovations, leaky home remediation is our true specialty. As a Registered license builder, Phil Ashton has the diagnostic expertise to identify the root cause of the moisture, replace damaged timber, and install premium cladding systems that are permanently weathertight.",
  },
  {
    number: "03",
    question: "Will you manage the council consent process?",
    answer:
      "Absolutely. We have long-standing relationships with architects across the region. If your project involves structural upgrades, major plumbing work, or recladding, we will coordinate the architectural planning and manage the council consent process to ensure your project complies strictly with the Building Code.",
  },
  {
    number: "04",
    question: "Can I use my own architect?",
    answer:
      "Yes. While we have trusted architectural partners we can recommend, we frequently collaborate with architects our clients choose. We work closely with them during the design phase to ensure the plans are practical, buildable, and aligned with your expected budget.",
  },
  {
    number: "05",
    question: "How do you price your projects?",
    answer:
      "We do not believe in guessing or providing vague estimates that lead to budget blowouts. Once your plans are drawn, we submit them for detailed quantity surveying. This allows us to provide a transparent, comprehensive breakdown of your renovation costs. You will know exactly what your investment covers before we start demolition.",
  },
  {
    number: "06",
    question: "How long will my project take?",
    answer:
      "Renovation timelines vary depending on the structural complexity of the job. For example, a major home extension or a complete exterior reclad can take between 4 to 5 months. We provide a highly realistic schedule before we start, and we update you weekly so you always know exactly where the project stands.",
  },
  {
    number: "07",
    question: "Can we live in the house while you build?",
    answer:
      "This depends entirely on the scope of the work. If we are executing a targeted ground-floor extension, it is often possible to remain on site. However, for full home renovations, major second-storey additions, or extensive reclads, moving out is significantly safer, less stressful for your family, and allows our tradesmen to work much faster. We will assess this with you during our initial consultation.",
  },
  {
    number: "08",
    question: "What kind of guarantee do you offer?",
    answer:
      "We stand by our quality workmanship with the Bear Construction 10-Year Ironclad Guarantee. Furthermore, as we are Registered license builders, your eligible project is also backed by the Master Build 10-Year Guarantee. This covers loss of deposit, non-completion, materials, workmanship, and structural defects, providing you with total financial protection.",
  },
  {
    number: "09",
    question: "Will I be dealing with a project manager or the owner?",
    answer:
      "You will deal directly with the owner. Because we are an independent company, you will not be passed around between sales reps or junior supervisors. Phil Ashton manages the client relationship and oversees our trusted network of tradesmen to ensure your project stays completely on track.",
  },
  {
    number: "10",
    question: "Do you take on small repair jobs or bathroom-only renovations?",
    answer:
      "While we do build premium kitchens and bathrooms, these are typically executed as part of a larger architectural extension, a full home renovation, or a major weathertightness remediation project. We focus our resources on complex structural builds rather than small, stand-alone handyman repairs or volume new-home builds.",
  },
];

function FaqItem({ number, question, answer }: { number: string; question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-[#eef2f6] bg-[#f9fafb] transition-all duration-300 open:border-[#1278ce] open:bg-[#1278ce] open:shadow-lg open:shadow-[#1278ce]/15">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 sm:px-7 sm:py-6">
        <div className="flex items-start gap-4">
          <span className="mt-0.5 shrink-0 text-[13px] font-bold uppercase tracking-[0.18em] text-[#1278ce]/40 group-open:text-white/50">
            {number}
          </span>
          <span className="text-[16px] font-semibold leading-snug text-black group-open:text-white sm:text-[17px]">
            {question}
          </span>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef2f6] text-xl font-light text-black transition-all duration-300 group-open:rotate-45 group-open:bg-white/15 group-open:text-white">
          +
        </span>
      </summary>
      <div className="border-t border-white/10 px-6 pb-6 pt-4 sm:px-7">
        <p className="pl-9 text-[15px] leading-[1.65] text-white/80 sm:text-[16px]">{answer}</p>
      </div>
    </details>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 pt-44 pb-20 sm:pt-52 sm:pb-24 lg:pt-60 lg:pb-28">
        <Image
          src="/page-header-bg.webp"
          alt="Bear Construction Wellington FAQ"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent" />
        <Container className="relative z-10 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Your Questions Answered · Wellington
          </span>
          <h1 className="mt-6 font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold uppercase tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://go.bearconstruction.co.nz/book"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Book Your Project Consultation
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
            <div className="space-y-5">
              <div className="section-tab w-fit">Straight Honest Answers</div>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[42px]">
                Common Questions About Our Building Services
              </h2>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Taking on a major building project is a significant commitment. We know that homeowners enter the renovation process with many questions about costs, timelines, and exactly how the site will be managed. As expert residential builders Wellington families trust, we believe in providing straight, honest answers from day one.
              </p>
              <p className="text-[17px] leading-[1.65] text-[#4d6277]">
                Below are the most common questions we receive about working with Bear Construction.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:+6421824419"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-950 px-5 py-2.5 text-[14px] font-semibold text-white transition hover:bg-zinc-900 hover:border-zinc-900"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                  021 824 419
                </a>
                <a
                  href="mailto:phil@bearconstruction.co.nz"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-950 px-5 py-2.5 text-[14px] font-semibold text-white transition hover:bg-zinc-900 hover:border-zinc-900"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  phil@bearconstruction.co.nz
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <Image
                src="/projects/esplanade/BC-take2-42-scaled.webp"
                alt="Bear Construction team on site Wellington"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── FAQ ACCORDION ────────────────────────────────────── */}
      <section className="bg-[#f9fafb] py-16 sm:py-20 border-t border-[#e8edf2]">
        <Container className="max-w-[860px]">
          <AnimateOnScroll variant="fade-up" className="mb-10 text-center space-y-3">
            <p className="section-tab mx-auto w-fit">10 Common Questions</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-tight tracking-tight text-[#1278ce] sm:text-[44px]">
              Everything You Need to Know
            </h2>
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={faq.number} variant="fade-up" delay={i * 50}>
                <FaqItem number={faq.number} question={faq.question} answer={faq.answer} />
              </AnimateOnScroll>
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
        <Container className="max-w-[800px] text-center">
          <AnimateOnScroll variant="fade-up" className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Still Have Questions?
            </p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.06] tracking-tight !text-white sm:text-[50px]">
              Still have questions about your specific property?
            </h2>
            <p className="mx-auto max-w-xl text-[17px] leading-[1.65] text-white/70">
              Every house is different, and the best way to get accurate answers is to have an expert assess your site. Book an initial consultation and we will discuss your specific goals, assess the structural realities of your home, and provide you with a clear, practical roadmap to success.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="https://go.bearconstruction.co.nz/book"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
              >
                Book Your Project Consultation
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
