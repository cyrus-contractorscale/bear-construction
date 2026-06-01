"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function About() {
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const el = imageWrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const translateY = (clamped - 0.5) * 48;
      el.style.transform = `translateY(${translateY}px)`;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="about" className="scroll-mt-28 bg-white pt-0 pb-10 sm:pb-14">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <AnimateOnScroll variant="fade-right" className="min-w-0">
          <div
            ref={imageWrapRef}
            className="relative h-[520px] w-full overflow-hidden rounded-[40px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5 sm:h-[620px] xl:h-[700px]"
            style={{ willChange: "transform", transition: "transform 0.1s linear" }}
          >
            <Image
              src="/Phil-scaled.webp"
              alt="Phil Ashton - Bear Construction"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </AnimateOnScroll>

        <div className="min-w-0 pt-2">
          <AnimateOnScroll variant="fade-up" delay={0}>
            <div className="section-tab">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                <path
                  d="M3 10.5L12 3l9 7.5v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              About Us
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={100}>
            <h2 className="mt-5 font-[ui-sans-serif,system-ui,sans-serif] text-[44px] font-extrabold leading-[1.02] tracking-tight sm:text-[56px]">
              Built on clarity. Backed by a 10-Year Guarantee.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={200}>
            <div className="mt-7 space-y-5 text-[18px] leading-[1.62] text-[#3f5162]">
              <p>
                Bear Construction is an independent building company led by Phil Ashton. We work with homeowners who want local renovation specialists to guide them through the building and renovation process with clear communication, respect for their home, and a flawless finish.
              </p>
              <p>
                With over 20 years of local experience, Phil is a Registered license builder. Because we are independent, you are not dealing with a large franchise or getting passed around between different supervisors. You get direct, honest communication and tight project management from the owner from day one.
              </p>
            </div>
          </AnimateOnScroll>

          <ul className="mt-8 space-y-4 text-[18px] text-[#22384f]">
            {[
              "Clear communication from the first site visit to the final handover",
              "Transparent, practical guidance on your budget and scope",
              "Quality workmanship backed by a 10-Year Building Guarantee",
            ].map((text, i) => (
              <AnimateOnScroll as="li" key={text} variant="fade-up" delay={300 + i * 80} className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-[#1278ce]" aria-hidden="true">
                  <circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8.3 12.2l2.2 2.2 5.1-5.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{text}</span>
              </AnimateOnScroll>
            ))}
          </ul>

          <AnimateOnScroll variant="fade-up" delay={560}>
            <p className="mt-8 text-[20px] leading-[1.5] text-[#3f5162]">
              If you want renovation builders Wellington locals trust with their biggest asset, let&apos;s talk through your project.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={660}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1278ce] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Read More About Us
            </Link>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
