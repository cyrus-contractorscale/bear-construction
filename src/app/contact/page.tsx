import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Bear Construction Wellington",
  description:
    "Get in touch with Bear Construction. We are independent builders servicing Wellington, Lower Hutt, Upper Hutt, and Porirua. Call 021 824 419 today.",
  keywords: "residential builders wellington",
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 pt-44 pb-20 sm:pt-52 sm:pb-24 lg:pt-60 lg:pb-28">
        <Image
          src="/page-header-bg.webp"
          alt="Contact Bear Construction Wellington"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent" />
        <Container className="relative z-10 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Wellington Region · Independent Builders
          </span>
          <h1 className="mt-6 font-[ui-sans-serif,system-ui,sans-serif] text-5xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Contact Us
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#form-section"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Book Your Project Consultation
            </Link>
            <a
              href="tel:+6421824419"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              021 824 419
            </a>
          </div>
        </Container>
      </section>

      {/* ── CONTACT DETAILS STRIP ────────────────────────────── */}
      <section className="bg-[#1278ce]">
        <Container className="max-w-[1200px]">
          <div className="grid grid-cols-2 divide-x divide-white/20 lg:grid-cols-4 divide-y lg:divide-y-0">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
                label: "Phone",
                value: "021 824 419",
                href: "tel:+6421824419",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "Email",
                value: "phil@bearconstruction.co.nz",
                href: "mailto:phil@bearconstruction.co.nz",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                label: "Operating Hours",
                value: "Mon – Fri, 7:30 AM – 5:00 PM",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                ),
                label: "Service Area",
                value: "Wellington · Hutt Valley · Porirua",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 px-6 py-5">
                <span className="shrink-0 text-white/70">{item.icon}</span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/50">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[14px] font-semibold text-white hover:text-white/80 transition">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[14px] font-semibold text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── INTRO + FORM ─────────────────────────────────────── */}
      <section id="form-section" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1200px] grid gap-12 lg:grid-cols-[1fr_520px] lg:items-start lg:gap-16">
          <AnimateOnScroll variant="fade-right">
            <div className="space-y-7">
              <div className="section-tab w-fit">Get In Touch</div>
              <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[34px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[42px]">
                We Are Ready to Help
              </h2>
              <div className="space-y-5 text-[17px] leading-[1.65] text-[#4d6277]">
                <p>
                  Whether you have a general question about our building services or you are looking for a trusted partner for an upcoming project, we are here to help.
                </p>
                <p>
                  As independent <strong className="font-semibold text-[#1278ce]">residential builders Wellington</strong> families trust, we pride ourselves on straightforward, honest communication. We service the wider Wellington region, including Lower Hutt, Upper Hutt, and Porirua, operating strictly within a 50-minute travel radius of the CBD.
                </p>
                <p>
                  If you need to reach out, use the details above or fill out our enquiry form. Phil will get back to you as soon as possible.
                </p>
              </div>

              <div className="rounded-2xl border border-[#eef2f6] bg-[#f9fafb] p-6 space-y-4">
                <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#1278ce]/60">Need to discuss a specific project?</p>
                <p className="text-[16px] leading-[1.65] text-[#4d6277]">
                  Book a dedicated Project Consultation — this is where we sit down to discuss the specific renovation costs, feasibility, and timeline for your property to ensure we are the right fit for your job.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1278ce] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Book Your Project Consultation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left" delay={120}>
            <div className="w-full overflow-hidden rounded-2xl bg-white shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <div className="bg-[#1278ce] px-6 py-4">
                <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-white/80">Send a General Enquiry</p>
                <p className="mt-0.5 text-[15px] font-semibold text-white">Phil will respond as soon as possible.</p>
              </div>
              <div className="p-5 sm:p-6">
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
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── SERVICE AREA MAP ─────────────────────────────────── */}
      <section className="bg-[#f9fafb] border-t border-[#e8edf2]">
        <Container className="max-w-[1200px] py-16 sm:py-20">
          <AnimateOnScroll variant="fade-up" className="mb-8 space-y-3">
            <p className="section-tab w-fit">Service Coverage</p>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[32px] font-extrabold leading-tight tracking-tight text-[#1278ce] sm:text-[38px]">
              Our Service Area
            </h2>
            <p className="max-w-xl text-[16px] leading-[1.65] text-[#5f7286]">
              We operate within a 50-minute travel radius of Wellington CBD — covering Wellington City, Lower Hutt, Upper Hutt, and Porirua.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={80}>
            <div className="overflow-hidden rounded-[20px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
              <iframe
                title="Bear Construction Wellington location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.706306230515!2d174.7791946760538!3d-41.271730171314815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38aff3a642017b%3A0x729ee2b6e756a84!2sBear%20Construction!5e0!3m2!1sen!2sph!4v1779251791083!5m2!1sen!2sph"
                width="100%"
                height="480"
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
