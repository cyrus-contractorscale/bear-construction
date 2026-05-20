"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 4h4l1 4-2 2a13 13 0 0 0 5 5l2-2 4 1v4c-8 1-15-6-14-14z" />
    </svg>
  );
}

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileMenuOpen]);

  return (
    <div className="fixed inset-x-0 top-0 z-[999] bg-zinc-950/45 backdrop-blur-sm">

      {/* ── Top bar ── */}
      <div className="border-b border-white/10">
        <Container className="flex h-9 items-center justify-between">
          {/* Social icons */}
          <div className="flex items-center gap-3 text-white/60">
            <a href="https://www.facebook.com/bearconstructionnz" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition hover:text-white">
              <IconFacebook />
            </a>
            <a href="https://www.instagram.com/bearconstructionnz/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition hover:text-white">
              <IconInstagram />
            </a>
          </div>

          {/* Hours + Location */}
          <div className="hidden items-center gap-5 text-[11px] font-medium text-white/60 sm:flex">
            <span className="flex items-center gap-1.5">
              <IconClock />
              Mon – Fri &nbsp;/&nbsp; 9am – 5pm
            </span>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <IconMapPin />
              Auckland, New Zealand
            </span>
          </div>
        </Container>
      </div>

      {/* ── Main nav ── */}
      <Container className="flex h-16 items-center justify-between gap-4 text-white lg:h-[100px]">

        {/* Logo */}
        <Link href="/" className="shrink-0 py-3">
          <Image
            src="/bear-logo-light.png"
            alt="Bear Construction logo"
            width={250}
            height={104}
            priority
            className="h-auto w-[200px] object-contain lg:w-[250px]"
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-6 text-[12px] font-semibold uppercase tracking-widest lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/80 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side: CTA + Phone */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-[12px] font-bold uppercase tracking-widest text-white transition hover:opacity-90"
            style={{ backgroundColor: "#1278ce" }}
          >
            Online Estimate
            <span aria-hidden="true" className="text-base leading-none">&#x2197;</span>
          </Link>

          <a
            href="tel:+6421824419"
            className="flex items-center gap-2 rounded-sm border border-white/20 px-4 py-2.5 text-[12px] font-bold text-white/90 transition hover:border-white/40 hover:text-white"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full text-white" style={{ backgroundColor: "#1278ce" }}>
              <IconPhone />
            </span>
            021 824 419
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/35 text-white transition hover:bg-white/10 lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </Container>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-[998] bg-black/60 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* ── Mobile drawer ── */}
      <aside
        className={`fixed right-0 top-0 z-[1000] h-screen w-[82%] max-w-[340px] border-l border-white/10 bg-[#0f1724] px-6 pb-8 pt-5 text-white shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/bear-logo-light.png"
            alt="Bear Construction logo"
            width={100}
            height={42}
            className="h-auto w-[100px] object-contain"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-xl leading-none text-white transition hover:bg-white/10"
          >
            ×
          </button>
        </div>

        <nav className="mt-7 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.label}`}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg border border-white/10 px-4 py-3 text-[13px] font-semibold uppercase tracking-wider text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-[12px] font-bold uppercase tracking-widest text-white"
            style={{ backgroundColor: "#1278ce" }}
          >
            Online Estimate
            <span aria-hidden="true">&#x2197;</span>
          </Link>
          <a
            href="tel:+6421824419"
            className="flex items-center justify-center gap-2 rounded-sm border border-white/20 px-5 py-3 text-[13px] font-semibold text-white/80"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full text-white" style={{ backgroundColor: "#1278ce" }}>
              <IconPhone />
            </span>
            021 824 419
          </a>
        </div>
      </aside>
    </div>
  );
}
