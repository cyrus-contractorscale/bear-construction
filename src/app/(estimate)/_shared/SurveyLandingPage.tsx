import Image from "next/image";
import Link from "next/link";
import { EstimateSidebar } from "@/components/survey/EstimateSidebar";
import { SurveyFlow } from "@/components/survey/SurveyFlow";
import { FaqAccordion, type FaqItem } from "./FaqAccordion";
import type { ProjectType } from "@/lib/types";

const navLinks = [
  { label: "Get Estimate", href: "#estimate" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Answer a few questions",
    desc: "Tell us your project type, size, finish level, and timeline. Under 3 minutes — no plans needed.",
  },
  {
    number: "02",
    title: "Get your range instantly",
    desc: "We calculate a realistic price range using current Wellington market rates and your inputs.",
  },
  {
    number: "03",
    title: "Book your free consult",
    desc: "Phil reaches out within one business day to walk through the numbers and plan next steps.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    desc: "We meet on-site or virtually to understand your vision, budget, and timeline. No pressure — just a genuine conversation about what is possible.",
    detail: "On-site or virtual · No obligation",
  },
  {
    number: "02",
    title: "Design & Planning",
    desc: "We work alongside your architect or designer — or connect you with trusted professionals — to produce fully consented, build-ready plans.",
    detail: "Council consent · Architectural coordination",
  },
  {
    number: "03",
    title: "Consent & Approval",
    desc: "We manage the council consent process from start to finish, liaising with inspectors and ensuring every requirement is met before breaking ground.",
    detail: "Council liaison · Permit management",
  },
  {
    number: "04",
    title: "Fixed-Price Proposal",
    desc: "You receive a clear, itemised quote with zero hidden costs. We walk you through every line before you sign a single thing.",
    detail: "No surprises · Full line-item breakdown",
  },
  {
    number: "05",
    title: "Build & Communication",
    desc: "Weekly site updates, a dedicated site manager on every project, and strict quality control enforced at every stage of the build.",
    detail: "Weekly updates · Dedicated site manager",
  },
  {
    number: "06",
    title: "Handover & Aftercare",
    desc: "We walk through the completed project with you, hand over all documentation and warranties, and remain available long after the build is done.",
    detail: "Full documentation · Ongoing support",
  },
];

interface Props {
  projectType: ProjectType;
  faqs: FaqItem[];
}

export function SurveyLandingPage({ projectType, faqs }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f2f4f7]">

      {/* ── Sticky nav ── */}
      <nav className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-8 lg:px-12">
          <Link href="/" className="flex-shrink-0">
            <Image src="/bear-logo-dark.png" alt="Bear Construction" width={130} height={36} style={{ height: "auto" }} />
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-150 ${
                  l.href === "#estimate"
                    ? "bg-[#1278ce] text-white hover:bg-[#0d65b5]"
                    : "text-zinc-500 hover:text-[#1278ce]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a href="tel:+6448873529" className="text-xs font-semibold text-[#1278ce] md:hidden">
            +64 4 887 3529
          </a>
        </div>
      </nav>

      <main className="flex-1">

        {/* ── Survey + How It Works — fills the viewport ── */}
        <section id="estimate" className="relative overflow-hidden bg-[#f2f4f7] flex flex-col" style={{ minHeight: "calc(100dvh - 49px)" }}>
          <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full opacity-40" style={{ background: "radial-gradient(circle, #d8dce4 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div aria-hidden className="pointer-events-none absolute bottom-0 -left-40 h-[480px] w-[480px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, #cdd2dc 0%, transparent 70%)", filter: "blur(70px)" }} />

          {/* Survey form */}
          <div className="relative flex-1 mx-auto w-full max-w-[1440px] px-4 pt-8 pb-10 sm:px-8 lg:px-12 lg:pt-10">
            <div className="mb-4">
              <Link href="/estimate" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                Back to Estimate
              </Link>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
              <div className="min-w-0 flex-1">
                <SurveyFlow projectType={projectType} backHref="/estimate" />
              </div>
              <EstimateSidebar />
            </div>
          </div>

          {/* How It Works strip — pinned to bottom of viewport */}
          <div id="how-it-works" className="relative border-t border-zinc-200/60 bg-white">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
              <div className="grid divide-y divide-zinc-100 sm:divide-y-0 sm:divide-x sm:grid-cols-3">
                {howItWorksSteps.map((step, i) => (
                  <div key={step.number} className="group flex items-start gap-4 py-6 sm:px-8 sm:py-8 first:pl-0 last:pr-0">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1278ce]/10 text-[#1278ce] text-sm font-black transition-colors duration-200 group-hover:bg-[#1278ce] group-hover:text-white">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-zinc-900">{step.title}</h3>
                      <p className="text-xs leading-relaxed text-zinc-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── About Us ── */}
        <section id="about" className="relative overflow-hidden bg-zinc-900 py-20 sm:py-28">
          <div aria-hidden className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none text-[200px] font-black leading-none text-white/[0.025] lg:text-[280px]">
            BEAR
          </div>
          <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(18,120,206,0.12) 0%, transparent 70%)" }} />

          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
              <div className="relative w-full max-w-[260px] flex-shrink-0 self-center lg:max-w-[300px]">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image src="/Phil-scaled.webp" alt="Phil Ashton" fill className="object-cover object-top" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl border border-white/10 bg-[#1278ce] px-4 py-3">
                  <p className="text-2xl font-black text-white">15+</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">Years building</p>
                </div>
              </div>

              <div className="flex-1">
                <span className="mb-4 inline-block rounded-full border border-[#1278ce]/30 bg-[#1278ce]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#1278ce]">
                  Who We Are
                </span>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Wellington&apos;s builders<br />who show up and deliver.
                </h2>
                <p className="mb-4 text-base leading-relaxed text-white/65">
                  Bear Construction is founded and run by Phil Ashton — a Registered Licensed Building Practitioner with over 15 years of hands-on site experience. Every project is managed personally by Phil, from the first meeting to the final walk-through.
                </p>
                <p className="mb-8 text-base leading-relaxed text-white/65">
                  We do not subcontract our management or disappear once work starts. You get direct communication, honest answers, and a build that reflects the quality we are proud to put our name on.
                </p>
                <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                  {[
                    { value: "15+", label: "Years experience" },
                    { value: "100%", label: "LBP supervised" },
                    { value: "5★", label: "Client rating" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-black text-white">{s.value}</p>
                      <p className="mt-0.5 text-[11px] text-white/40">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Process — 3×2 grid ── */}
        <section id="process" className="relative overflow-hidden bg-[#f2f4f7] py-20 sm:py-28">
          <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-[#1278ce]" />

          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-lg">
                <span className="mb-3 inline-block rounded-full border border-[#1278ce]/20 bg-[#1278ce]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#1278ce]">
                  From Start to Finish
                </span>
                <h2 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                  Our proven process.<br />No surprises, ever.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-zinc-500 lg:text-right">
                Every Bear Construction project follows the same framework — so you always know what comes next, what it costs, and why.
              </p>
            </div>

            <div className="grid gap-px bg-zinc-200 overflow-hidden rounded-2xl sm:grid-cols-3">
              {processSteps.map((step) => (
                <div key={step.number} className="group relative flex flex-col justify-between bg-white p-7 transition-colors duration-200 hover:bg-[#1278ce]">
                  <div className="mb-6">
                    <span className="text-5xl font-black text-zinc-100 transition-colors duration-200 group-hover:text-white/15">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-zinc-900 transition-colors duration-200 group-hover:text-white">
                      {step.title}
                    </h3>
                    <p className="mb-4 text-xs leading-relaxed text-zinc-500 transition-colors duration-200 group-hover:text-white/70">
                      {step.desc}
                    </p>
                    <span className="inline-block rounded-full border border-zinc-200 px-2.5 py-1 text-[10px] font-semibold text-zinc-400 transition-all duration-200 group-hover:border-white/20 group-hover:text-white/50">
                      {step.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="relative overflow-hidden bg-zinc-900 py-20 sm:py-28">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #1278ce 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div aria-hidden className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(18,120,206,0.15) 0%, transparent 70%)" }} />

          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
              <div className="lg:w-[38%] lg:flex-shrink-0 lg:pt-2">
                <span className="mb-4 inline-block rounded-full border border-[#1278ce]/30 bg-[#1278ce]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#1278ce]">
                  Common Questions
                </span>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Questions?<br />We have<br />answers.
                </h2>
                <p className="mb-8 text-base leading-relaxed text-white/50">
                  Still not sure? Call Phil directly or submit the form and he will get back to you within one business day.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="#estimate" className="inline-flex items-center gap-2 rounded-sm bg-[#1278ce] px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-[#0d65b5]">
                    Get Free Estimate
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                  <a href="tel:+6448873529" className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-white/70 transition hover:border-white/40 hover:text-white">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                    +64 4 887 3529
                  </a>
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <FaqAccordion items={faqs} />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="bg-black">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-2 px-4 py-5 text-[14px] text-white/60 sm:flex-row sm:px-8 lg:px-12">
          <span>© Copyright 2026 | Bear Construction | All Rights Reserved</span>
          <span>
            Website &amp; Advertising by{" "}
            <a href="https://contractorscale.com/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              ContractorScale.com
            </a>
          </span>
        </div>
      </footer>

    </div>
  );
}
