const steps = [
  { n: "01", title: "Discovery", desc: "We understand your brand, audience, goals, and creative direction." },
  { n: "02", title: "Strategy", desc: "We build a tailored social media plan or influencer campaign strategy, including content concepts, platforms, creator selection, and deliverables." },
  { n: "03", title: "Creation & Collaboration", desc: "We develop content, coordinate with creators, manage approvals, and bring campaign ideas to life." },
  { n: "04", title: "Publishing & Execution", desc: "We coordinate content publishing, influencer integrations, and campaign rollouts across relevant platforms." },
  { n: "05", title: "Analysis & Optimisation", desc: "We review performance, analyse relevant metrics, and identify opportunities to improve future campaigns." },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl mb-20">
          <div className="eyebrow mb-6">
            <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
            The Process
          </div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
            Five steps to a <span className="italic text-champagne">stronger social presence.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-12 hidden lg:block hairline" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative group">
                <div className="hidden lg:flex absolute -top-1 left-0 h-2 w-2 rounded-full bg-gold shadow-[0_0_20px_var(--gold)]" />
                <div className="lg:pt-12">
                  <div className="font-display text-gold text-2xl mb-4">{s.n}</div>
                  <h3 className="font-display text-2xl lg:text-3xl mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="lg:hidden h-12 w-px bg-border mx-auto mt-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
