import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Site Audit Report | Bear Construction",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const SITE_URL = "https://www.bearconstruction.co.nz";
const REPORT_DATE = "May 2026";

const trackingStatus = [
  {
    tool: "GoHighLevel Form Embed",
    id: "form_embed.js",
    script: "https://link.contractorscale.com/js/form_embed.js",
    status: "active" as const,
    note: "Loaded globally via layout.tsx (afterInteractive)",
  },
  {
    tool: "GoHighLevel External Tracking",
    id: "tk_bf41288bda444b048916515a9ac962f3",
    script: "https://link.contractorscale.com/js/external-tracking.js",
    status: "active" as const,
    note: "Loaded globally via layout.tsx (afterInteractive)",
  },
  {
    tool: "Facebook Pixel",
    id: "—",
    script: "https://connect.facebook.net/en_US/fbevents.js",
    status: "missing" as const,
    note: "Not installed. Add FB Pixel ID to layout.tsx when ready.",
  },
  {
    tool: "Google Tag Manager",
    id: "—",
    script: "https://www.googletagmanager.com/gtag/js",
    status: "missing" as const,
    note: "Not installed. Add GTM container ID or GA4 measurement ID when ready.",
  },
];

const pages = [
  {
    group: "Core",
    label: "Homepage",
    url: "/",
    title: "Bear Construction | Wellington Renovation & Extension Builders",
    titleLen: 62,
    description: "Wellington renovation builders — home extensions, renovations, exterior cladding & leaky home repairs across Wellington, Lower Hutt, Upper Hutt and Porirua.",
    descLen: 118,
    keywords: ["renovation builders wellington", "home extensions wellington", "bathroom renovations wellington", "kitchen renovations wellington", "exterior cladding wellington", "leaky home repair wellington", "bear construction"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "LocalBusiness",
  },
  {
    group: "Core",
    label: "About",
    url: "/about",
    title: "Independent Builders Wellington | About Bear Construction",
    titleLen: 57,
    description: "Phil Ashton leads Bear Construction, a team of independent, licensed building practitioners in Wellington backed by 20+ years of experience and Master Builders.",
    descLen: 163,
    keywords: ["independent builders wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "AboutPage + Person",
  },
  {
    group: "Core",
    label: "Contact",
    url: "/contact",
    title: "Contact Us | Bear Construction Wellington",
    titleLen: 42,
    description: "Get in touch with Bear Construction. We are independent builders servicing Wellington, Lower Hutt, Upper Hutt, and Porirua. Call 021 824 419 today.",
    descLen: 147,
    keywords: ["residential builders wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "ContactPage + LocalBusiness",
  },
  {
    group: "Core",
    label: "Why Choose Us",
    url: "/why-choose-us",
    title: "Why Choose Bear Construction | Wellington Builders",
    titleLen: 51,
    description: "Discover why Wellington homeowners trust Bear Construction — 20+ years local experience, Registered Master Builders, and a 10-Year Ironclad Guarantee.",
    descLen: 151,
    keywords: ["residential builders wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage + Organization",
  },
  {
    group: "Core",
    label: "Guarantee",
    url: "/guarantee",
    title: "The 10-Year Ironclad Building Guarantee | Bear Construction",
    titleLen: 59,
    description: "Bear Construction backs every renovation and extension with a 10-Year Ironclad Guarantee. Build with total peace of mind across the Wellington region.",
    descLen: 151,
    keywords: ["wellington building guarantee"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage + Service",
  },
  {
    group: "Core",
    label: "Testimonials",
    url: "/testimonials",
    title: "Client Testimonials | Bear Construction Reviews",
    titleLen: 48,
    description: "Read the latest Bear Construction reviews. See why Wellington homeowners trust us to deliver architectural extensions, renovations, and leaky home repairs.",
    descLen: 155,
    keywords: ["Bear Construction reviews"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "AggregateRating + Reviews",
  },
  {
    group: "Core",
    label: "FAQ",
    url: "/faq",
    title: "Frequently Asked Questions | Bear Construction Wellington",
    titleLen: 57,
    description: "Have questions about building in Wellington? Read our FAQs on renovation costs, leaky home repairs, council consents, and our 10-Year Building Guarantee.",
    descLen: 155,
    keywords: ["renovation process"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "FAQPage",
  },
  {
    group: "Core",
    label: "Service Areas",
    url: "/service-areas",
    title: "Service Areas | Local Renovation Specialists Wellington",
    titleLen: 55,
    description: "Bear Construction serves Wellington City, Lower Hutt, Upper Hutt and Porirua. Expert leaky home repairs and architectural renovations within a 50-minute radius.",
    descLen: 162,
    keywords: ["local renovation specialists wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "WebPage + LocalBusiness",
  },
  {
    group: "Services",
    label: "Services (Index)",
    url: "/services",
    title: "Building Services Wellington | Bear Construction",
    titleLen: 48,
    description: "Wellington building services by Bear Construction — home extensions, renovations, bathroom & kitchen upgrades, exterior cladding, and leaky home repairs.",
    descLen: 153,
    keywords: ["building services wellington", "home extensions wellington", "renovation builders wellington", "exterior cladding wellington", "bear construction services"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "—",
  },
  {
    group: "Services",
    label: "Home Extensions",
    url: "/services/home-extensions",
    title: "Expert Home Extensions Wellington | Bear Construction",
    titleLen: 53,
    description: "Bear Construction specialises in home extensions and second-storey additions across Wellington. We manage structural work, consents, and construction.",
    descLen: 151,
    keywords: ["home extensions wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "Service",
  },
  {
    group: "Services",
    label: "Home Renovations",
    url: "/services/home-renovations",
    title: "Expert Home Renovations Wellington | Bear Construction",
    titleLen: 54,
    description: "Bear Construction delivers high-end home renovations and structural upgrades across Wellington. We manage the design, planning, and complete build process.",
    descLen: 157,
    keywords: ["home renovations wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "Service",
  },
  {
    group: "Services",
    label: "Bathroom Renovations",
    url: "/services/bathroom-renovations",
    title: "Expert Bathroom Renovations Wellington | Bear Construction",
    titleLen: 57,
    description: "Bear Construction delivers high-end bathroom renovations across Wellington. We manage the design, waterproofing, plumbing, and complete build process.",
    descLen: 149,
    keywords: ["bathroom renovations wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "Service",
  },
  {
    group: "Services",
    label: "Kitchen Renovations",
    url: "/services/kitchen-renovations",
    title: "Expert Kitchen Renovations Wellington | Bear Construction",
    titleLen: 56,
    description: "Bear Construction delivers high-end kitchen renovations across Wellington. We manage structural changes, layout design, cabinetry, and complete installation.",
    descLen: 159,
    keywords: ["kitchen renovations wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "Service",
  },
  {
    group: "Services",
    label: "Exterior Cladding",
    url: "/services/exterior-cladding",
    title: "Expert Exterior Cladding Wellington | Bear Construction",
    titleLen: 55,
    description: "Bear Construction specialises in exterior cladding replacement and leaky home remediation in Wellington. We manage timber repairs, consents, and construction.",
    descLen: 161,
    keywords: ["exterior cladding wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "Service",
  },
  {
    group: "Projects",
    label: "Projects (Index)",
    url: "/projects",
    title: "Our Projects | Wellington Renovation Builders | Bear Construction",
    titleLen: 65,
    description: "Explore recent Bear Construction projects — architectural extensions, full renovations, and leaky home repairs delivered across the Wellington region.",
    descLen: 150,
    keywords: ["renovation builders wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "—",
  },
  {
    group: "Projects",
    label: "Churton Park Home Reclad",
    url: "/projects/churton-park",
    title: "Churton Park Home Reclad | Bear Construction",
    titleLen: 46,
    description: "Complex two-stage recladding in Churton Park, Wellington — expert diagnostics and compliant workmanship to permanently rectify failing, non-compliant cladding.",
    descLen: 162,
    keywords: ["exterior cladding wellington", "leaky home repair wellington", "recladding wellington", "renovation builders wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "BreadcrumbList + Article",
  },
  {
    group: "Projects",
    label: "Esplanade Warehouse Rebuild",
    url: "/projects/esplanade",
    title: "Esplanade Warehouse Rebuild | Bear Construction",
    titleLen: 48,
    description: "Comprehensive building services dividing a large commercial premises into distinct warehouse and office spaces at 81 The Esplanade, Petone.",
    descLen: 140,
    keywords: ["commercial builders wellington", "warehouse rebuild wellington", "commercial renovation petone", "renovation builders wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "BreadcrumbList + Article",
  },
  {
    group: "Projects",
    label: "103–105 Victoria Street",
    url: "/projects/103-105-victoria-street",
    title: "103–105 Victoria Street | Bear Construction",
    titleLen: 43,
    description: "Earthquake-strengthening and full rebuild of a historic Wellington CBD building — modern commercial ground floor and expanded upper apartment.",
    descLen: 140,
    keywords: ["commercial builders wellington", "earthquake strengthening wellington", "commercial renovation wellington cbd", "renovation builders wellington"],
    hasOG: true,
    hasCanonical: true,
    schemaType: "BreadcrumbList + Article",
  },
  {
    group: "Legal",
    label: "Privacy Policy",
    url: "/privacy-policy",
    title: "Privacy Policy | Bear Construction Wellington",
    titleLen: 46,
    description: "Read the Bear Construction privacy policy to understand how we collect, use, and protect your personal information.",
    descLen: 117,
    keywords: [],
    hasOG: false,
    hasCanonical: false,
    schemaType: "—",
  },
  {
    group: "Legal",
    label: "Terms & Conditions",
    url: "/terms-and-conditions",
    title: "Terms & Conditions | Bear Construction Wellington",
    titleLen: 49,
    description: "Read the Bear Construction terms and conditions governing the use of our website and building services across the Wellington region.",
    descLen: 133,
    keywords: [],
    hasOG: false,
    hasCanonical: false,
    schemaType: "—",
  },
];

const remainingGaps = [
  { priority: "Medium", page: "/about", issue: "Meta description 163 chars (over 160)", fix: "Trim to ≤160 chars" },
  { priority: "Medium", page: "/projects (index)", issue: "Meta title 65 chars (over 60)", fix: "Trim to ≤60 chars" },
  { priority: "Medium", page: "/faq", issue: "Keyword too generic ('renovation process')", fix: "Expand to 3–5 specific terms" },
  { priority: "Medium", page: "All service detail pages", issue: "Only 1 keyword each", fix: "Expand to 3–5 keyword phrases" },
  { priority: "Low", page: "LocalBusiness schema", issue: "sameAs array is empty", fix: "Add Google Business, Facebook, Instagram URLs" },
  { priority: "Low", page: "/services (index)", issue: "No structured data", fix: "Add ItemList schema" },
  { priority: "Low", page: "/projects (index)", issue: "No structured data", fix: "Add ItemList schema for 3 projects" },
  { priority: "Low", page: "Privacy Policy & Terms", issue: "No OG / canonical (intentional)", fix: "Consider noindex to save crawl budget" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function Badge({ children, variant }: { children: React.ReactNode; variant: "green" | "red" | "yellow" | "gray" | "blue" }) {
  const styles: Record<string, string> = {
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    gray: "bg-zinc-100 text-zinc-600",
    blue: "bg-blue-100 text-blue-800",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${styles[variant]}`}>
      {children}
    </span>
  );
}

function Check() {
  return <span className="text-green-600 font-bold">✓</span>;
}

function Cross() {
  return <span className="text-red-500 font-bold">✗</span>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[22px] font-extrabold tracking-tight text-zinc-900 mt-10 mb-4 pb-2 border-b border-zinc-200">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[15px] font-semibold text-zinc-700 mt-6 mb-2">{children}</h3>;
}

const groupOrder = ["Core", "Services", "Projects", "Legal"];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ReportAuditPage() {
  const totalPages = pages.length;
  const withSchema = pages.filter((p) => p.schemaType !== "—").length;
  const withOG = pages.filter((p) => p.hasOG).length;
  const withCanonical = pages.filter((p) => p.hasCanonical).length;
  const withKeywords = pages.filter((p) => p.keywords.length > 0).length;
  const activeTracking = trackingStatus.filter((t) => t.status === "active").length;
  const missingTracking = trackingStatus.filter((t) => t.status === "missing").length;

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ── HEADER ── */}
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="gray">INTERNAL — NOINDEX</Badge>
          <Badge variant="blue">Bear Construction</Badge>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-1">
          SEO &amp; Site Audit Report
        </h1>
        <p className="text-zinc-500 text-[14px] mb-10">
          {SITE_URL} &nbsp;·&nbsp; Last updated {REPORT_DATE} &nbsp;·&nbsp; Next.js 16.2.4 static export &nbsp;·&nbsp; {totalPages} pages indexed
        </p>

        {/* ── SUMMARY STATS ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
          {[
            { label: "Total Pages", value: totalPages, tone: "neutral" },
            { label: "With Schema", value: `${withSchema}/${totalPages}`, tone: withSchema >= 16 ? "good" : "warn" },
            { label: "With OG Tags", value: `${withOG}/${totalPages}`, tone: withOG >= 18 ? "good" : "warn" },
            { label: "With Canonical", value: `${withCanonical}/${totalPages}`, tone: withCanonical >= 18 ? "good" : "warn" },
            { label: "With Keywords", value: `${withKeywords}/${totalPages}`, tone: withKeywords >= 16 ? "good" : "warn" },
            { label: "Active Trackers", value: `${activeTracking}/${trackingStatus.length}`, tone: missingTracking > 0 ? "warn" : "good" },
          ].map((s) => (
            <div
              key={s.label}
              className={`rounded-xl border p-4 text-center ${
                s.tone === "good" ? "border-green-200 bg-green-50" :
                s.tone === "warn" ? "border-yellow-200 bg-yellow-50" :
                "border-zinc-200 bg-white"
              }`}
            >
              <div className={`text-3xl font-extrabold ${
                s.tone === "good" ? "text-green-700" :
                s.tone === "warn" ? "text-yellow-700" :
                "text-zinc-800"
              }`}>{s.value}</div>
              <div className="text-[12px] text-zinc-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── STATUS BANNER ── */}
        <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 mb-2">
          <p className="text-[14px] font-semibold text-green-800">
            All high-priority SEO gaps resolved — OG tags, canonical URLs, structured data, and keywords are now active across all content pages.
          </p>
        </div>

        {/* ══ TRACKING CODES ══════════════════════════════════════════════════ */}
        <SectionHeading>Tracking &amp; Analytics Codes</SectionHeading>
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50 text-left">
                <th className="px-4 py-3 font-semibold text-zinc-600">Tool</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">ID / Tag</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Script Source</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Status</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Notes</th>
              </tr>
            </thead>
            <tbody>
              {trackingStatus.map((t, i) => (
                <tr key={t.tool} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                  <td className="px-4 py-3 font-medium text-zinc-800">{t.tool}</td>
                  <td className="px-4 py-3 font-mono text-zinc-600">{t.id}</td>
                  <td className="px-4 py-3 text-zinc-500 max-w-[220px] break-all">{t.script}</td>
                  <td className="px-4 py-3">
                    {t.status === "active"
                      ? <Badge variant="green">Active</Badge>
                      : <Badge variant="red">Not Installed</Badge>}
                  </td>
                  <td className="px-4 py-3 text-zinc-500">{t.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ══ SEO AUDIT BY PAGE ═══════════════════════════════════════════════ */}
        <SectionHeading>SEO Audit by Page</SectionHeading>
        <p className="text-[13px] text-zinc-500 mb-4">
          Title ideal ≤ 60 chars &nbsp;·&nbsp; Description ideal ≤ 160 chars &nbsp;·&nbsp; OG = page-level OpenGraph &nbsp;·&nbsp; Canonical = per-page canonical URL
        </p>
        {groupOrder.map((group) => {
          const groupPages = pages.filter((p) => p.group === group);
          return (
            <div key={group} className="mb-8">
              <SubHeading>{group} Pages</SubHeading>
              <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-zinc-100 bg-zinc-50 text-left">
                      <th className="px-3 py-2.5 font-semibold text-zinc-600">Page</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600">URL</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600 text-center">Title</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600 text-center">Desc</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600">Primary Keyword</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600 text-center">OG</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600">Schema</th>
                      <th className="px-3 py-2.5 font-semibold text-zinc-600 text-center">Canonical</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupPages.map((p, i) => (
                      <tr key={p.url} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                        <td className="px-3 py-2.5 font-medium text-zinc-800 whitespace-nowrap">{p.label}</td>
                        <td className="px-3 py-2.5 font-mono text-zinc-500 whitespace-nowrap">{p.url}</td>
                        <td className={`px-3 py-2.5 text-center whitespace-nowrap font-mono ${p.titleLen > 60 ? "text-yellow-700 font-bold" : "text-zinc-600"}`}>
                          {p.titleLen}{p.titleLen > 60 ? " ⚠" : " ✓"}
                        </td>
                        <td className={`px-3 py-2.5 text-center whitespace-nowrap font-mono ${p.descLen > 160 ? "text-yellow-700 font-bold" : "text-zinc-600"}`}>
                          {p.descLen}{p.descLen > 160 ? " ⚠" : " ✓"}
                        </td>
                        <td className="px-3 py-2.5 text-zinc-600">{p.keywords.length > 0 ? p.keywords[0] : "—"}</td>
                        <td className="px-3 py-2.5 text-center">{p.hasOG ? <Check /> : <Cross />}</td>
                        <td className="px-3 py-2.5">
                          {p.schemaType !== "—"
                            ? <Badge variant="blue">{p.schemaType}</Badge>
                            : <span className="text-zinc-400">—</span>}
                        </td>
                        <td className="px-3 py-2.5 text-center">{p.hasCanonical ? <Check /> : <Cross />}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}

        {/* ══ META TITLES & DESCRIPTIONS ══════════════════════════════════════ */}
        <SectionHeading>Meta Titles &amp; Descriptions</SectionHeading>
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50 text-left">
                <th className="px-4 py-3 font-semibold text-zinc-600 w-[140px]">Page</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Meta Title</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Meta Description</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((p, i) => (
                <tr key={p.url} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                  <td className="px-4 py-3 font-medium text-zinc-700 whitespace-nowrap align-top">{p.label}</td>
                  <td className="px-4 py-3 text-zinc-700 align-top">{p.title}</td>
                  <td className="px-4 py-3 text-zinc-500 align-top">{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ══ STRUCTURED DATA MAP ═════════════════════════════════════════════ */}
        <SectionHeading>Schema.org Structured Data Map</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="font-bold text-zinc-800 mb-3 text-[14px]">Global Schema — layout.tsx</h3>
            <dl className="space-y-2 text-[13px]">
              {[
                ["Type", "LocalBusiness"],
                ["Name", "Bear Construction"],
                ["Phone", "+64 21 824 419"],
                ["Email", "phil@bearconstruction.co.nz"],
                ["Address", "191 Thorndon Quay, Wellington 6011"],
                ["Areas Served", "Wellington, Lower Hutt, Upper Hutt, Porirua"],
                ["Hours", "Mon–Fri 07:30–17:30"],
                ["Coordinates", "-41.2717, 174.7792"],
                ["sameAs", "Empty — add social URLs"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <dt className="font-semibold text-zinc-500 w-[120px] shrink-0">{k}:</dt>
                  <dd className={`text-zinc-700 ${k === "sameAs" ? "text-yellow-700" : ""}`}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50 text-left">
                  <th className="px-4 py-3 font-semibold text-zinc-600">Page</th>
                  <th className="px-4 py-3 font-semibold text-zinc-600">Schema Type</th>
                  <th className="px-4 py-3 font-semibold text-zinc-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["/", "LocalBusiness", "active"],
                  ["/about", "AboutPage + Person", "active"],
                  ["/contact", "ContactPage + LocalBusiness", "active"],
                  ["/why-choose-us", "WebPage + Organization", "active"],
                  ["/guarantee", "WebPage + Service", "active"],
                  ["/testimonials", "AggregateRating + Reviews", "active"],
                  ["/faq", "FAQPage", "active"],
                  ["/service-areas", "WebPage + LocalBusiness", "active"],
                  ["/services/home-extensions", "Service", "active"],
                  ["/services/home-renovations", "Service", "active"],
                  ["/services/bathroom-renovations", "Service", "active"],
                  ["/services/kitchen-renovations", "Service", "active"],
                  ["/services/exterior-cladding", "Service", "active"],
                  ["/projects/churton-park", "BreadcrumbList + Article", "active"],
                  ["/projects/esplanade", "BreadcrumbList + Article", "active"],
                  ["/projects/103-105-victoria-street", "BreadcrumbList + Article", "active"],
                  ["/services (index)", "None", "low"],
                  ["/projects (index)", "None", "low"],
                ].map(([url, schema, status], i) => (
                  <tr key={url} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                    <td className="px-4 py-2 font-mono text-zinc-600 text-[11px]">{url}</td>
                    <td className="px-4 py-2 text-zinc-700">{schema}</td>
                    <td className="px-4 py-2">
                      {status === "active"
                        ? <Badge variant="green">Active</Badge>
                        : <Badge variant="gray">Low priority</Badge>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ══ REMAINING GAPS ══════════════════════════════════════════════════ */}
        <SectionHeading>Remaining Gaps &amp; Recommendations</SectionHeading>
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50 text-left">
                <th className="px-4 py-3 font-semibold text-zinc-600">Priority</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Page / Scope</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Issue</th>
                <th className="px-4 py-3 font-semibold text-zinc-600">Recommended Fix</th>
              </tr>
            </thead>
            <tbody>
              {remainingGaps.map((g, i) => (
                <tr key={i} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                  <td className="px-4 py-3">
                    <Badge variant={g.priority === "Medium" ? "yellow" : "gray"}>{g.priority}</Badge>
                  </td>
                  <td className="px-4 py-3 font-mono text-zinc-600 text-[12px]">{g.page}</td>
                  <td className="px-4 py-3 text-zinc-700">{g.issue}</td>
                  <td className="px-4 py-3 text-zinc-500">{g.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ══ TECHNICAL INFRASTRUCTURE ════════════════════════════════════════ */}
        <SectionHeading>Technical Infrastructure</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50 text-left">
                  <th className="px-4 py-3 font-semibold text-zinc-600">Setting</th>
                  <th className="px-4 py-3 font-semibold text-zinc-600">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Framework", "Next.js 16.2.4 (Turbopack)"],
                  ["Output Mode", "Static Export"],
                  ["Sitemap", "/sitemap.xml · 20 URLs"],
                  ["robots.txt", "Allow all · Sitemap pointer"],
                  ["Favicon", "cropped-BC_Favicon-32x32.png"],
                  ["OG Image", "Bear Construction Social Media.png (1200×630)"],
                  ["Fonts", "Plus Jakarta Sans + Lora"],
                ].map(([k, v], i) => (
                  <tr key={k} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                    <td className="px-4 py-2.5 font-medium text-zinc-600">{k}</td>
                    <td className="px-4 py-2.5 text-zinc-700">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50 text-left">
                  <th className="px-4 py-3 font-semibold text-zinc-600">URL Group</th>
                  <th className="px-4 py-3 font-semibold text-zinc-600">Priority</th>
                  <th className="px-4 py-3 font-semibold text-zinc-600">Change Freq</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["/ (Homepage)", "1.0", "Weekly"],
                  ["/about, /contact, /projects", "0.8", "Monthly"],
                  ["/services/*", "0.9", "Monthly"],
                  ["/why-choose-us, /guarantee, /faq, /testimonials", "0.7", "Monthly"],
                  ["/service-areas", "0.8", "Monthly"],
                  ["/projects/*", "0.6", "Yearly"],
                  ["/privacy-policy, /terms", "0.3", "Yearly"],
                ].map(([url, pri, freq], i) => (
                  <tr key={url} className={`border-b border-zinc-100 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}>
                    <td className="px-4 py-2.5 font-mono text-zinc-600 text-[12px]">{url}</td>
                    <td className="px-4 py-2.5 text-zinc-700">{pri}</td>
                    <td className="px-4 py-2.5 text-zinc-500">{freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div className="mt-12 pt-6 border-t border-zinc-200">
          <p className="text-[12px] text-zinc-400 text-center">
            Internal report — noindexed &nbsp;·&nbsp; {SITE_URL}/report-audit &nbsp;·&nbsp; Bear Construction &nbsp;·&nbsp; {REPORT_DATE}
          </p>
        </div>

      </div>
    </div>
  );
}
