import { Container } from "@/components/ui/Container";

export function FormCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#111] bg-cover bg-center bg-no-repeat py-14 sm:py-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url('/JRA-Belle-Vue-Website-Ready-27-e4e5bfc3-49d4-4872-b806-0fe6aa29407b.png')",
      }}
    >
      <Container className="grid gap-8 lg:grid-cols-[1fr_520px] lg:items-center">
        <div className="text-white text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
            Let&apos;s get your project moving
          </p>
          <h2 className="mt-2 max-w-xl font-[ui-sans-serif,system-ui,sans-serif] text-[54px] font-extrabold leading-[1.02] tracking-tight !text-white">
            Let&apos;s get your project moving.
          </h2>
          <p className="mt-5 text-[17px] text-zinc-200">A successful build starts with a realistic conversation. Book a Project Consultation to get clarity on your goals, the likely scope of work, and the right next step for your property.</p>

          <p className="mt-5 text-[15px] font-semibold text-zinc-300">In this consultation, we cover:</p>
          <ul className="mt-3 space-y-3 text-[16px] text-zinc-100">
            {[
              "Your project goals and must-haves",
              "Realistic budget ranges for your type of build",
              "Timeline expectations",
              "Whether your project is a good fit for our team",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400 text-[12px] text-emerald-400">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-center">
          <div className="w-full max-w-[520px] rounded-xl overflow-hidden bg-white p-4">
            <iframe
              src="https://link.contractorscale.com/widget/form/JUmWw969pNoKIq9jDbMf"
              style={{ width: "100%", height: "815px", border: "none", borderRadius: "7px" }}
              id="inline-JUmWw969pNoKIq9jDbMf"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="New Lead - Short"
              data-height="815"
              data-layout-iframe-id="inline-JUmWw969pNoKIq9jDbMf"
              data-form-id="JUmWw969pNoKIq9jDbMf"
              title="New Lead - Short"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
