 "use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useEffect, useMemo, useRef, useState } from "react";

const baseHeading = "Transform Your Home With Bear Construction,";
const fadedFirstLine = " Expert Wellington";
const fadedSecondLine = "Home Renovation Builders";
const revealText = `${fadedFirstLine}${fadedSecondLine}`;

export function Hero() {
  const [revealedLetters, setRevealedLetters] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const touchStartY = useRef<number | null>(null);
  const totalRevealLetters = revealText.length;
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoId = "xRMsp2zs9c4"; // YouTube Shorts video ID

  const firstLineReveal = useMemo(() => {
    const lineCount = Math.min(revealedLetters, fadedFirstLine.length);
    return {
      visible: fadedFirstLine.slice(0, lineCount),
      hidden: fadedFirstLine.slice(lineCount),
    };
  }, [revealedLetters]);

  const secondLineReveal = useMemo(() => {
    const secondLineCount = Math.max(0, revealedLetters - fadedFirstLine.length);
    const clamped = Math.min(secondLineCount, fadedSecondLine.length);
    return {
      visible: fadedSecondLine.slice(0, clamped),
      hidden: fadedSecondLine.slice(clamped),
    };
  }, [revealedLetters]);

  useEffect(() => {
    function canControlReveal() {
      const hero = heroRef.current;
      if (!hero) return false;
      const rect = hero.getBoundingClientRect();
      return rect.top <= 4 && rect.bottom > window.innerHeight * 0.55;
    }

    function updateRevealFromDelta(deltaY: number) {
      setRevealedLetters((prev) => {
        const step = Math.max(1, Math.round(Math.abs(deltaY) / 45));
        if (deltaY > 0) {
          return Math.min(totalRevealLetters, prev + step);
        }
        if (deltaY < 0) {
          return Math.max(0, prev - step);
        }
        return prev;
      });
    }

    function onWheel(event: WheelEvent) {
      if (!canControlReveal()) return;
      const delta = event.deltaY;
      const scrollingDown = delta > 0;
      const scrollingUp = delta < 0;
      const shouldLockDown = scrollingDown && revealedLetters < totalRevealLetters;
      const shouldLockUp = scrollingUp && revealedLetters > 0 && window.scrollY <= 8;

      if (!shouldLockDown && !shouldLockUp) return;
      event.preventDefault();
      updateRevealFromDelta(delta);
    }

    function onTouchStart(event: TouchEvent) {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    }

    function onTouchMove(event: TouchEvent) {
      if (!canControlReveal() || touchStartY.current === null) return;
      const currentY = event.touches[0]?.clientY ?? touchStartY.current;
      const delta = touchStartY.current - currentY;
      const swipingDown = delta > 0;
      const swipingUp = delta < 0;
      const shouldLockDown = swipingDown && revealedLetters < totalRevealLetters;
      const shouldLockUp = swipingUp && revealedLetters > 0 && window.scrollY <= 8;

      if (!shouldLockDown && !shouldLockUp) return;
      event.preventDefault();
      updateRevealFromDelta(delta);
      touchStartY.current = currentY;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (!canControlReveal()) return;
      const downKeys = ["ArrowDown", "PageDown", " ", "Spacebar"];
      const upKeys = ["ArrowUp", "PageUp"];
      const isDown = downKeys.includes(event.key);
      const isUp = upKeys.includes(event.key);
      if (!isDown && !isUp) return;

      const shouldLockDown = isDown && revealedLetters < totalRevealLetters;
      const shouldLockUp = isUp && revealedLetters > 0 && window.scrollY <= 8;
      if (!shouldLockDown && !shouldLockUp) return;

      event.preventDefault();
      updateRevealFromDelta(isDown ? 55 : -55);
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [revealedLetters, totalRevealLetters]);

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Prevent scrolling on html
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isVideoOpen]);

  return (
        <section
            id="top"
            ref={heroRef}
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
                        {baseHeading}
                        <span className="whitespace-pre-wrap transition-opacity duration-150">
                            {firstLineReveal.visible}
                        </span>
                        <span className="whitespace-pre-wrap text-white/30 transition-opacity duration-150">
                            {firstLineReveal.hidden}
                        </span>
                        <br className="hidden sm:block" />
                        <span className="whitespace-pre-wrap transition-opacity duration-150">
                            {secondLineReveal.visible}
                        </span>
                        <span className="whitespace-pre-wrap text-white/30 transition-opacity duration-150">
                            {secondLineReveal.hidden}
                        </span>
                    </h1>
                    <p className="mx-auto w-full text-sm leading-relaxed text-white/85 sm:text-base">
                        Discovering a structural issue or planning a major extension is stressful. We are the residential builders Wellington families trust to protect their biggest asset with practical planning, clear communication, and guaranteed results — all without the franchise red tape.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center">
                        <Link
                            href="#contact"
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
                        <p className="mt-3 text-[18px] font-extrabold leading-none tracking-tight">20+ Years Experience | Registered Master Builders</p>
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
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}