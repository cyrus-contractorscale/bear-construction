import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Bear Construction Wellington",
  description:
    "Read the Bear Construction privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 pt-44 pb-20 sm:pt-52 sm:pb-24 lg:pt-60 lg:pb-28">
        <Image
          src="/page-header-bg.webp"
          alt="Bear Construction Privacy Policy"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent" />
        <Container className="relative z-10 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Legal · Bear Construction
          </span>
          <h1 className="mt-6 font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold uppercase tracking-tight text-white">
            Privacy Policy
          </h1>
        </Container>
      </section>

      {/* ── CONTENT ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[860px]">
          <div className="prose prose-lg max-w-none text-[#4d6277]">

            <p className="text-[15px] text-[#8a9aab]">Last updated: May 2026</p>

            <p className="text-[17px] leading-[1.7]">
              Bear Construction (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              1. Information We Collect
            </h2>
            <p className="text-[17px] leading-[1.7]">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="space-y-2 text-[17px] leading-[1.7] list-disc pl-6">
              <li>Complete an enquiry or consultation form on our website</li>
              <li>Contact us directly by phone or email</li>
              <li>Request a quote or project consultation</li>
            </ul>
            <p className="text-[17px] leading-[1.7]">
              The personal information we collect may include your name, email address, phone number, property address, and details about your building project.
            </p>
            <p className="text-[17px] leading-[1.7]">
              We may also automatically collect certain technical data when you visit our website, including your IP address, browser type, and pages visited, through standard web analytics tools.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              2. How We Use Your Information
            </h2>
            <p className="text-[17px] leading-[1.7]">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-[17px] leading-[1.7] list-disc pl-6">
              <li>Respond to your enquiries and provide project consultations</li>
              <li>Prepare and deliver quotes and proposals</li>
              <li>Communicate with you about your project or our services</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with our legal and contractual obligations</li>
            </ul>
            <p className="text-[17px] leading-[1.7]">
              We will not use your personal information for unsolicited marketing without your explicit consent.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              3. Sharing Your Information
            </h2>
            <p className="text-[17px] leading-[1.7]">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="space-y-2 text-[17px] leading-[1.7] list-disc pl-6">
              <li>Trusted subcontractors and suppliers involved in delivering your project, where necessary</li>
              <li>Professional advisers such as architects or surveyors engaged on your behalf</li>
              <li>Government or regulatory bodies where required by law</li>
              <li>Third-party service providers who assist us in operating our website (e.g. CRM and form platforms)</li>
            </ul>
            <p className="text-[17px] leading-[1.7]">
              Any third parties we engage are required to handle your data in accordance with applicable privacy laws.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              4. Data Retention
            </h2>
            <p className="text-[17px] leading-[1.7]">
              We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Project-related records may be retained for a minimum of 10 years in accordance with our building guarantee obligations.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              5. Your Rights
            </h2>
            <p className="text-[17px] leading-[1.7]">
              Under the New Zealand Privacy Act 2020, you have the right to:
            </p>
            <ul className="space-y-2 text-[17px] leading-[1.7] list-disc pl-6">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Ask us to delete your information, subject to any legal obligations we have to retain it</li>
              <li>Withdraw consent for marketing communications at any time</li>
            </ul>
            <p className="text-[17px] leading-[1.7]">
              To exercise any of these rights, please contact us using the details below.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              6. Cookies
            </h2>
            <p className="text-[17px] leading-[1.7]">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect certain functionality on our website.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              7. Security
            </h2>
            <p className="text-[17px] leading-[1.7]">
              We implement appropriate technical and organisational measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              8. Third-Party Links
            </h2>
            <p className="text-[17px] leading-[1.7]">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              9. Changes to This Policy
            </h2>
            <p className="text-[17px] leading-[1.7]">
              We may update this Privacy Policy from time to time. The revised policy will be posted on this page with an updated date. We encourage you to review this policy periodically.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              10. Contact Us
            </h2>
            <p className="text-[17px] leading-[1.7]">
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
            </p>
            <div className="mt-4 rounded-2xl border border-[#eef2f6] bg-[#f9fafb] p-6 space-y-2">
              <p className="font-bold text-[#1a2f48]">Bear Construction</p>
              <p>191 Thorndon Quay, Pipitea, Wellington 6011, New Zealand</p>
              <p>
                <a href="tel:+6421824419" className="text-[#1278ce] hover:underline">021 824 419</a>
              </p>
              <p>
                <a href="mailto:phil@bearconstruction.co.nz" className="text-[#1278ce] hover:underline">
                  phil@bearconstruction.co.nz
                </a>
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1278ce] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Contact Us
              </Link>
              <Link
                href="/terms-and-conditions"
                className="inline-flex items-center justify-center rounded-full border border-[#dfe7ef] bg-[#f9fafb] px-7 py-3 text-sm font-semibold text-[#1278ce] transition hover:border-[#1278ce]"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
