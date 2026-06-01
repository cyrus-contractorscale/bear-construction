import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const steps = [
  { step: "01", title: "Initial Consultation", body: "We start by understanding your goals, your timeline, and your expected investment level to ensure we are the right fit for the job.", icon: "phone" },
  { step: "02", title: "Scope & Feasibility", body: "We walk through the property and the structural requirements, giving you practical advice on what it will actually take to bring your vision to life.", icon: "pin" },
  { step: "03", title: "Design & Consenting", body: "We help clarify the work involved, coordinating with architects to ensure plans are practical and all local council requirements are met.", icon: "users" },
  { step: "04", title: "Pricing & Contracts", body: "We provide transparent, fair pricing based on detailed planning, ensuring expectations and budgets are aligned before we start.", icon: "calculator" },
  { step: "05", title: "The Build Phase", body: "The work is carried out by our trusted network of trades. We focus on tight project management, keeping the site clean, and making sure you are updated every step of the way.", icon: "helmet" },
  { step: "06", title: "Handover & Guarantee", body: "We bring the project through to completion with meticulous attention to detail, backed by our 10-Year Building Guarantee.", icon: "key" },
];

function StepIcon({ type }: { type: string }) {
  const base = "h-9 w-9 text-white";
  if (type === "phone") return <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path d="M6 4h4l1 4-2 2a13 13 0 0 0 5 5l2-2 4 1v4c-8 1-15-6-14-14z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  if (type === "pin") return <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>;
  if (type === "users") return <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><circle cx="9" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17" cy="8" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M4 18c1-3 3-4 5-4s4 1 5 4M14 17c.7-2 2-3 3.8-3 1 0 1.8.3 2.2.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
  if (type === "calculator") return <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><rect x="6" y="3.5" width="12" height="17" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M9 8h6M9 12h1M12 12h1M15 12h1M9 15h1M12 15h1M15 15h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
  if (type === "doc") return <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M14 3.5v4h4M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
  if (type === "contract") return <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><rect x="4" y="5" width="8" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><rect x="12" y="5" width="8" height="14" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M7 9h2M7 12h2M15 9h2M15 12h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
  if (type === "helmet") return <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path d="M4 14a8 8 0 0 1 16 0v2H4z" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="M12 6v6M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
  return <svg viewBox="0 0 24 24" className={base} aria-hidden="true"><path d="M7 16c3-1 4-2 5-4l2 2-1 1 4 4 2-2-4-4 1-1-2-2c-2 1-3 2-4 5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <Container className="space-y-12">
        <AnimateOnScroll variant="fade-up" className="space-y-4 text-center">
          <p className="section-tab">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
              <path d="M3 10.5L12 3l9 7.5v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            How We Work
          </p>
          <h2 className="font-[ui-sans-serif,system-ui,sans-serif] text-[52px] font-extrabold leading-[1.02] tracking-tight">
            A Straightforward Building Process
          </h2>
        </AnimateOnScroll>

        <ol className="grid gap-y-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-8">
          {steps.map((item, index) => (
            <AnimateOnScroll as="li" key={item.step} variant="scale-in" delay={index * 75} duration={600} className="relative text-center">
                {index % 3 !== 2 ? (
                  <span className="absolute left-1/2 top-[39px] z-0 hidden h-px w-[calc(100%+2rem)] bg-[#d8e0eb] lg:block" />
                ) : null}
                <div className="relative z-10 mx-auto flex w-full max-w-[260px] items-center justify-center">
                  <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#1278ce] shadow-[0_8px_18px_rgba(15,39,68,0.18)] transition duration-300 hover:shadow-[0_12px_28px_rgba(15,39,68,0.32)] hover:scale-110">
                    <StepIcon type={item.icon} />
                  </div>
                  <span className="-ml-3 mt-12 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#000] text-[12px] font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-5 font-[ui-sans-serif,system-ui,sans-serif] text-[20px] font-extrabold leading-tight text-[#102a45]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.55] text-[#536779]">{item.body}</p>
            </AnimateOnScroll>
          ))}
        </ol>
      </Container>
    </section>
  );
}
