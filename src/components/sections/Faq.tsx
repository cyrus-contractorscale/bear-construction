"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const faqs = [
  {
    question: "Do you handle the council consents and planning?",
    answer: "Yes. We have long-standing relationships with architects and can help coordinate the planning and council consent process to ensure your project stays on track and meets all current Building Code requirements.",
  },
  {
    question: "How much will my renovation or extension cost?",
    answer: "Every home is different. Rather than guessing, we provide realistic budget ranges during our initial consultation based on your specific property and goals. This ensures your expectations and budget are aligned early on.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. Phil is a Licensed Building Practitioner (LBP) and a Certified Building Surveyor (CBS). Bear Construction is also a proud member of Registered Master Builders. Every project is fully insured and backed by our 10-Year Ironclad Guarantee.",
  },
  {
    question: "Can we live in the house while you renovate?",
    answer: "This depends entirely on the scope of the work. For smaller projects or targeted extensions, it is often possible. For full home transformations or major structural reclads, moving out is usually safer and faster. We will discuss this with you upfront.",
  },
];

function QuestionMarkIcon() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c5d0dc] bg-white text-[13px] font-bold text-[#1278ce]">
      ?
    </span>
  );
}

function ExpandableAnswer({ isOpen, answer }: { isOpen: boolean; answer: string }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const inner = innerRef.current;
    if (!panel || !inner) return;

    if (isOpen) {
      panel.style.maxHeight = `${inner.scrollHeight + 48}px`;
      panel.style.opacity = "1";
    } else {
      panel.style.maxHeight = "0px";
      panel.style.opacity = "0";
    }
  }, [isOpen]);

  return (
    <div
      ref={panelRef}
      style={{
        maxHeight: "0px",
        opacity: 0,
        overflow: "hidden",
        transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease",
      }}
    >
      <div ref={innerRef} className="border-t border-white/10 px-5 pb-6 pt-4 sm:px-7 sm:pb-7">
        <p className="text-[15px] leading-[1.65] text-white/80 sm:text-[16px]">{answer}</p>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Container>
        <AnimateOnScroll variant="fade-up" className="mb-10 space-y-5 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 rounded-[10px] border border-[#dfe7ef] bg-[#fafbfc] px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#4f6678]">
            <QuestionMarkIcon />
            <span className="text-[#1278ce]">Common Questions About Our Services</span>
          </div>
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[40px] font-extrabold leading-[1.1] tracking-tight sm:text-[48px] lg:text-[52px]">
            Frequently Asked Questions
          </h2>
        </AnimateOnScroll>

        <div className="flex w-full flex-col gap-3 sm:gap-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimateOnScroll
                key={item.question}
                variant="fade-up"
                delay={Math.min(index * 55, 400)}
              >
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#1278ce] bg-[#1278ce] shadow-lg shadow-[#1278ce]/15"
                      : "border-[#eef2f6] bg-[#f9fafb] hover:border-[#c8d5e2] hover:shadow-md hover:shadow-[#1278ce]/5 hover:-translate-y-0.5"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span
                      className={`text-[16px] font-semibold leading-snug sm:text-[17px] transition-colors duration-200 ${
                        isOpen ? "text-white" : "text-[#1278ce]"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-light leading-none transition-all duration-300 sm:h-10 sm:w-10 ${
                        isOpen
                          ? "rotate-45 bg-white/15 text-white"
                          : "bg-[#eef2f6] text-[#1278ce] hover:bg-[#e2e8f0]"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <ExpandableAnswer isOpen={isOpen} answer={item.answer} />
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
