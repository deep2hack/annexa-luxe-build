import { Counter } from "./Counter";

const results = [
  { n: 500, suffix: "K+", label: "Content Views" },
  { n: 1200, suffix: "+", label: "Qualified Leads" },
  { n: 45, suffix: "+", label: "Brands Managed" },
  { n: 8, suffix: "x", label: "Average ROAS" },
];

export function Results() {
  return (
    <section className="spotlight-white relative py-32 lg:py-44 overflow-hidden bg-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow mb-6 inline-flex items-center justify-center">
            <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
            Outcomes
            <span className="inline-block w-8 h-px bg-gold align-middle ml-3" />
          </div>
          <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight text-balance text-foreground">
            Numbers <span className="italic text-champagne">earned</span>, not promised.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {results.map((r) => (
            <div
              key={r.label}
              className="card-outline-white group p-10 lg:p-14 text-center transition-all duration-500 hover:-translate-y-1"
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground group-hover:text-gold transition-colors duration-500 leading-none break-words">
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
