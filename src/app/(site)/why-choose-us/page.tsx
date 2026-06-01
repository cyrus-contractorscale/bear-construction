import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Bear Construction | Wellington Builders",
  description:
    "Discover why Wellington homeowners trust Bear Construction — 20+ years local experience, Registered license builders, and a 10-Year Ironclad Guarantee.",
  keywords: "residential builders wellington",
  alternates: {
    canonical: "https://www.bearconstruction.co.nz/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Bear Construction | Wellington Builders",
    description:
      "Discover why Wellington homeowners choose Bear Construction — direct access to owner Phil Ashton, 20+ years experience, Registered license builders membership, and a 10-Year Guarantee.",
    url: "https://www.bearconstruction.co.nz/why-choose-us",
    siteName: "Bear Construction",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://www.bearconstruction.co.nz/bear-construction-social-media.png",
        width: 1200,
        height: 630,
        alt: "Bear Construction Wellington — Why Choose Us",
      },
    ],
  },
};

const reasons = [
  {
    num: "01",
    title: "Direct Access to the Owner",
    body: "We are an independent, locally owned company. You are not dealing with a massive volume building franchise, a disconnected sales rep, or a junior project manager. You get direct, honest communication from Phil Ashton, our owner and operator.\n\nWith over 20 years of experience in the Wellington building trade, Phil personally oversees client relationships and ensures your project runs smoothly from start to finish.",
    image: "/projects/churton-park/Bear-Construction-Action-Photos-2024-1335838-scaled.webp",
  },
  {
    num: "02",
    title: "Expertise in Architectural Renovations and Leaky Homes",
    body: "While many home improvement builders focus on volume new builds or basic cosmetic updates, our true expertise lies in technically demanding work. We focus heavily on architectural renovations, second-storey extensions, and seamless leaky home remediation.\n\nWe have the technical knowledge required to safely manage and execute the most complex residential builds in the region.",
    image: "/projects/churton-park/Bear-Construction-Action-Photos-2024-1335861-scaled.webp",
  },
  {
    num: "03",
    title: "Fully Certified and Registered license builder Backed",
    body: "Trust is everything when undertaking a major renovation. Phil holds a current Licensed Building Practitioner (LBP) qualification and is a Registered license builder.\n\nFurthermore, Bear Construction is a proud member of Registered license builders. We build strictly to code and ensure every detail meets the highest industry standards.",
    image: "/projects/churton-park/Churton-Park-6-scaled.webp",
  },
  {
    num: "04",
    title: "Transparent and Fair Pricing",
    body: "A successful build requires financial clarity. Our business is built on long-term relationships and word-of-mouth referrals, which means we focus on delivering genuine value. We submit plans for detailed quantity surveying and provide transparent, fair pricing with no hidden surprises.\n\nWe believe it is incredibly important that you know exactly what your investment covers before we start.",
    image: "/projects/103-105-victoria-street/103-105-Victoria-St-10-scaled.webp",
  },
  {
    num: "05",
    title: "Premium Materials & A Trusted Network",
    body: "Over the last two decades, we have built long-standing relationships with Wellington's best architects, plumbers, electricians, and painters. We use premium, sustainable products, including treated NZ Radiata pine, to ensure your home remains safe, healthy, and structurally sound for decades to come.",
    image: "/projects/esplanade/BC-take2-33-scaled.webp",
  },
  {
    num: "06",
    title: "The 10-Year Ironclad Guarantee",
    body: "We stand by our quality workmanship. Every major structural project and exterior cladding job we complete is backed by our 10-Year Ironclad Guarantee. We build robust, healthy homes designed to perform flawlessly in Wellington's unique environment, providing the written assurance you need for total peace of mind.",
    image: "/projects/churton-park/Churton-Park-1-scaled.webp",
  },
];

const whyChooseSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Why Choose Bear Construction | Wellington Builders",
  description: "Discover why Wellington homeowners trust Bear Construction — 20+ years local experience, Registered license builders, and a 10-Year Ironclad Guarantee.",
  url: "https://www.bearconstruction.co.nz/why-choose-us",
  mainEntity: {
    "@type": "Organization",
    name: "Bear Construction",
    url: "https://www.bearconstruction.co.nz",
    foundingLocation: "Wellington, New Zealand",
    description: "Independent, owner-operated building company specialising in residential renovations, home extensions, and exterior recladding across Wellington.",
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Licensed Building Practitioner" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Registered license builders" },
    ],
  },
};

export default function WhyChooseUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(whyChooseSchema) }} />
      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 pt-44 pb-20 sm:pt-52 sm:pb-24 lg:pt-60 lg:pb-28">
        <Image
          src="/page-header-bg.webp"
          alt="Why Choose Bear Construction Wellington"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent" />
        <Container className="relative z-10 text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Why Choose Us · Wellington
          </span>
          <h1 className="mt-6 font-[ui-sans-serif,system-ui,sans-serif] h1-fluid font-extrabold uppercase tracking-tight text-white">
            Why Choose Us
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-black/30 transition hover:bg-zinc-100"
            >
              Book Your Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </Container>
      </section>

      {/* ── MAIN CONTENT TITLE ──────────────────────────────── */}
      <section className="bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        <Container className="max-w-[800px] text-center space-y-6">
          <AnimateOnScroll variant="fade-up">
            <div className="section-tab mx-auto w-fit">Our Advantages</div>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={80}>
            <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[36px] font-extrabold leading-[1.08] tracking-tight text-[#1278ce] sm:text-[44px]">
              Six Reasons We Are The Right Fit For Your Project
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={160}>
            <p className="text-[17px] leading-relaxed text-[#4d6277] max-w-2xl mx-auto">
              We understand that choosing a residential builder in Wellington is a major decision. Here is why homeowners trust Bear Construction to deliver technically demanding projects flawlessly.
            </p>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* ── SIX REASONS SECTION — alternating alternating grid ── */}
      <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
        <Container className="max-w-[1100px] space-y-20 sm:space-y-24 lg:space-y-32">
          {reasons.map((reason, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={reason.num}
                className={`grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16`}
              >
                {/* Image side */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <AnimateOnScroll variant={isEven ? "fade-right" : "fade-left"}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] shadow-xl shadow-zinc-900/10 ring-1 ring-zinc-900/5 sm:aspect-[16/10] lg:aspect-[4/3]">
                      <Image
                        src={reason.image}
                        alt={reason.title}
                        fill
                        className="object-cover transition duration-500 hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 40vw, 100vw"
                      />
                    </div>
                  </AnimateOnScroll>
                </div>

                {/* Text side */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-4 min-w-0">
                  <AnimateOnScroll variant="fade-up">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1278ce] text-[13px] font-extrabold text-white">
                      {reason.num}
                    </span>
                  </AnimateOnScroll>
                  <AnimateOnScroll variant="fade-up" delay={60}>
                    <h3 className="font-[ui-sans-serif,system-ui,sans-serif] text-[22px] font-extrabold leading-[1.15] tracking-tight text-[#1278ce] sm:text-[26px]">
                      {reason.title}
                    </h3>
                  </AnimateOnScroll>
                  <AnimateOnScroll variant="fade-up" delay={120}>
                    <div className="text-[16px] leading-[1.68] text-[#4d6277] whitespace-pre-line space-y-4">
                      {reason.body}
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
