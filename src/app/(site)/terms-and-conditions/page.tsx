import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Bear Construction Wellington",
  description:
    "Read the Bear Construction terms and conditions governing the use of our website and building services across the Wellington region.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 pt-44 pb-20 sm:pt-52 sm:pb-24 lg:pt-60 lg:pb-28">
        <Image
          src="/page-header-bg.webp"
          alt="Bear Construction Terms and Conditions"
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
            Terms &amp; Conditions
          </h1>
        </Container>
      </section>

      {/* ── CONTENT ─────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[860px]">
          <div className="prose prose-lg max-w-none text-[#4d6277]">

            <p className="text-[15px] text-[#8a9aab]">Last updated: May 2026</p>

            <p className="text-[17px] leading-[1.7]">
              These Terms and Conditions govern your use of the Bear Construction website and the provision of our building services. By accessing our website or engaging our services, you agree to be bound by these terms. Please read them carefully.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              1. About Bear Construction
            </h2>
            <p className="text-[17px] leading-[1.7]">
              Bear Construction is an independently owned and operated building company based in Wellington, New Zealand. We provide residential building services including architectural extensions, full home renovations, exterior cladding, and leaky home remediation throughout the Wellington region.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              2. Website Use
            </h2>
            <p className="text-[17px] leading-[1.7]">
              The content on this website is provided for general information purposes only. While we endeavour to keep information accurate and up to date, we make no warranties or representations regarding the completeness, accuracy, or suitability of any information on this site.
            </p>
            <p className="text-[17px] leading-[1.7]">
              You must not use this website in any way that causes damage to the website, impairs its availability, or is unlawful or fraudulent. Unauthorised use of this website may give rise to a claim for damages and may constitute a criminal offence.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              3. Quotations and Contracts
            </h2>
            <p className="text-[17px] leading-[1.7]">
              Any quotation provided by Bear Construction is valid for 30 days from the date of issue unless otherwise stated. A quotation does not constitute a binding contract. A binding contract is only formed when both parties have signed a written building contract and the agreed deposit has been received.
            </p>
            <p className="text-[17px] leading-[1.7]">
              All building contracts are subject to the terms set out in the signed agreement, including payment schedules, project timelines, and variation procedures. Any changes to the agreed scope of work must be approved in writing by both parties prior to the additional work commencing.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              4. Payment Terms
            </h2>
            <p className="text-[17px] leading-[1.7]">
              Payment terms are as specified in your individual building contract. Generally, payments are structured as progress payments aligned with key project milestones. Invoices are due within 7 days of issue unless otherwise agreed in writing.
            </p>
            <p className="text-[17px] leading-[1.7]">
              Bear Construction reserves the right to suspend work if payments are not received by the agreed due date. Interest may be charged on overdue amounts at the rate specified in your contract.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              5. Variations
            </h2>
            <p className="text-[17px] leading-[1.7]">
              Any work outside the original agreed scope constitutes a variation. Bear Construction will provide a written variation order specifying the additional cost and any impact on the project timeline. No variation work will commence until the variation order is approved and signed by the client.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              6. The 10-Year Building Guarantee
            </h2>
            <p className="text-[17px] leading-[1.7]">
              Eligible projects completed by Bear Construction are backed by a 10-Year Building Guarantee as outlined in your contract. As a member of Registered license builders, eligible projects may also be covered under the Master Build 10-Year Guarantee. Specific terms, conditions, and exclusions apply and are detailed in your guarantee documentation.
            </p>
            <p className="text-[17px] leading-[1.7]">
              The guarantee is provided to the property owner at the time of construction and may be transferable to subsequent property owners in certain circumstances. Please refer to your guarantee certificate for full details.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              7. Insurance
            </h2>
            <p className="text-[17px] leading-[1.7]">
              Bear Construction holds current public liability insurance and contract works insurance appropriate to the scope of our building services. Details of our insurance coverage are available upon request. Clients are advised to maintain their own home and contents insurance throughout the construction period.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              8. Health and Safety
            </h2>
            <p className="text-[17px] leading-[1.7]">
              Bear Construction operates in accordance with the Health and Safety at Work Act 2015. Access to the construction site by clients, visitors, or other parties is strictly controlled. Clients must notify Bear Construction in advance of any intended site visits and comply with all site safety requirements.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              9. Intellectual Property
            </h2>
            <p className="text-[17px] leading-[1.7]">
              All content on the Bear Construction website, including text, images, graphics, and logos, is the property of Bear Construction and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content from this website without our prior written consent.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              10. Limitation of Liability
            </h2>
            <p className="text-[17px] leading-[1.7]">
              To the maximum extent permitted by law, Bear Construction shall not be liable for any indirect, incidental, or consequential loss or damage arising from the use of our website or our services, beyond the value of the applicable building contract.
            </p>
            <p className="text-[17px] leading-[1.7]">
              Nothing in these terms limits any rights you may have under the Consumer Guarantees Act 1993 or the Building Act 2004.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              11. Dispute Resolution
            </h2>
            <p className="text-[17px] leading-[1.7]">
              In the event of a dispute, both parties agree to first attempt to resolve the matter through good-faith negotiation. If a resolution cannot be reached, the dispute may be referred to mediation or, if necessary, adjudication under the Construction Contracts Act 2002.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              12. Governing Law
            </h2>
            <p className="text-[17px] leading-[1.7]">
              These Terms and Conditions are governed by and construed in accordance with the laws of New Zealand. Any disputes are subject to the exclusive jurisdiction of the New Zealand courts.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              13. Changes to These Terms
            </h2>
            <p className="text-[17px] leading-[1.7]">
              We reserve the right to update these Terms and Conditions at any time. The revised terms will be posted on this page with an updated date. Continued use of our website or services following any changes constitutes your acceptance of the updated terms.
            </p>

            <h2 className="mt-10 font-[ui-sans-serif,system-ui,sans-serif] text-[26px] font-extrabold tracking-tight text-[#1278ce]">
              14. Contact Us
            </h2>
            <p className="text-[17px] leading-[1.7]">
              If you have any questions about these Terms and Conditions, please contact us:
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
                href="/privacy-policy"
                className="inline-flex items-center justify-center rounded-full border border-[#dfe7ef] bg-[#f9fafb] px-7 py-3 text-sm font-semibold text-[#1278ce] transition hover:border-[#1278ce]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
