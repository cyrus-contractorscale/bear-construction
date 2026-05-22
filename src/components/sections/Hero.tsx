"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useEffect, useState } from "react";

const videoId = "xRMsp2zs9c4";

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isVideoOpen]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-900"
    >
      <Image
        src="/hp-hero.webp"
        alt="Bear Construction hero"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-zinc-950/55" />

      <Container className="relative z-10 py-28 sm:py-36 lg:py-44">
        <div className="mx-auto w-full max-w-5xl space-y-6 text-center text-white">
          <h1
            className="w-full font-[ui-sans-serif,system-ui,sans-serif] font-extrabold uppercase leading-[1.1] tracking-tight [text-shadow:0_3px_18px_rgba(0,0,0,0.38)]"
            style={{ fontSize: "clamp(1.75rem, 4vw + 1rem, 3.5rem)" }}
          >
            Transform Your Home With Bear Construction,{" "}
            Expert Wellington Home Renovation Builders
          </h1>
          <p className="mx-auto w-full text-sm leading-relaxed text-white/85 sm:text-base">
            Discovering a structural issue or planning a major extension is stressful. We are the residential builders Wellington families trust to protect their biggest asset with practical planning, clear communication, and guaranteed results — all without the franchise red tape.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Book Your Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </Container>

      <Container className="pointer-events-none absolute inset-x-0 bottom-6 z-20">
        <div className="flex items-end justify-between gap-6">
          <div className="pointer-events-auto text-white">
            <p className="mt-3 text-[18px] font-extrabold leading-none tracking-tight">
              20+ Years Experience | Registered Master Builders
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="pointer-events-auto inline-flex items-center gap-4 rounded-full border border-white/35 bg-white/15 px-5 py-3 text-white shadow-lg shadow-black/20 backdrop-blur-xl transition hover:bg-white/20"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[16px] text-slate-700">
              ▷
            </span>
            <span className="text-[14px] font-semibold leading-none">Play Video</span>
          </button>
        </div>
      </Container>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-lg bg-black p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-800"
              onClick={() => setIsVideoOpen(false)}
            >
              &times;
            </button>
            <div className="relative pb-[56.25%]" style={{ height: 0 }}>
              <iframe
                className="absolute inset-0 h-full w-full rounded-md"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Bear Construction — Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
