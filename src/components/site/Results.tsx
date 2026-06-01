import { Counter } from "./Counter";

const results = [
  { n: 500, suffix: "K+", label: "Content Views" },
  { n: 1200, suffix: "+", label: "Qualified Leads" },
  { n: 45, suffix: "+", label: "Brands Managed" },
  { n: 8, suffix: "x", label: "Average ROAS" },
];

export function Results() {
  return (
    <section className="theme-light relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
           style={{ backgroundImage: "radial-gradient(circle at 30% 30%, var(--gold) 0, transparent 50%)" }} />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow mb-6 inline-flex items-center justify-center">
            <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
            Outcomes
            <span className="inline-block w-8 h-px bg-gold align-middle ml-3" />
          </div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
            Numbers <span className="italic text-champagne">earned</span>, not promised.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {results.map((r) => (
            <div key={r.label} className="bg-card p-10 lg:p-14 text-center shadow-[0_1px_40px_-20px_rgba(0,0,0,0.15)]">
              <div className="font-display text-6xl lg:text-8xl text-foreground">
                <Counter to={r.n} suffix={r.suffix} />
              </div>
              <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-gold">
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
