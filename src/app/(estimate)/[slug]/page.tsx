import Link from "next/link";
import { notFound } from "next/navigation";
import { EstimateSidebar } from "@/components/survey/EstimateSidebar";
import { SurveyFlow } from "@/components/survey/SurveyFlow";
import { getSiteConfig } from "@/lib/config";
import type { ProjectType } from "@/lib/types";

export const runtime = "edge";

/* ─── Slug → ProjectType ──────────────────────────────────────────── */
const slugToType: Record<string, ProjectType> = {
  "e-home":     "customHome",
  "e-addition": "homeExtension",
  "e-reno":     "homeRenovation",
  "e-kitchen":  "kitchenRenovation",
  "e-bathroom": "bathroomRenovation",
};

const typeLabel: Record<ProjectType, string> = {
  customHome:         "Custom Home",
  homeExtension:      "Home Extension",
  homeRenovation:     "Home Renovation",
  kitchenRenovation:  "Kitchen Renovation",
  bathroomRenovation: "Bathroom Renovation",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = slugToType[slug];
  return {
    title: t ? `${typeLabel[t]} Estimate | Bear Construction` : "Not Found",
    robots: { index: false, follow: false },
  };
}

export default async function SurveyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectType = slugToType[slug];
  if (!projectType) notFound();
  const site = await getSiteConfig();

  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #eaecf0 0%, #f2f4f7 35%, #e8eaee 70%, #eceef2 100%)",
      }}
    >
      {/* Depth blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, #d8dce4 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-40 h-[480px] w-[480px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #cdd2dc 0%, transparent 70%)", filter: "blur(70px)" }}
      />

      <main className="relative flex-1">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-8 lg:px-12 lg:py-14">

          {/* Back breadcrumb */}
          <div className="mb-6">
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to Estimate
            </Link>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
            <div className="min-w-0 flex-1">
              <SurveyFlow projectType={projectType} backHref="/estimate" />
            </div>
            <EstimateSidebar />
          </div>

        </div>
      </main>

      <footer className="relative bg-black">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-2 px-4 py-5 text-[14px] text-white/60 sm:flex-row sm:px-8 lg:px-12">
          <span>© Copyright {site.copyrightYear} | {site.name} | All Rights Reserved</span>
          <span>
            Website &amp; Advertising by{" "}
            <a href="https://contractorscale.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              ContractorScale.com
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
