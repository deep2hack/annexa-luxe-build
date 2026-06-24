import { Counter } from "./Counter";

const stats = [
  { n: 240, suffix: "+", label: "Projects Completed" },
  { n: 580, suffix: "+", label: "Videos Produced" },
  { n: 12000, suffix: "+", label: "Leads Generated" },
  { n: 50, suffix: "+", label: "Clients Served" },
];

export function About() {
  return (
    <section id="about" className="spotlight-white relative py-32 lg:py-44 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-6">
              <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
              The Studio
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
              We create <span className="italic text-champagne">content</span> that converts.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-8 self-end">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              AfterLight Studios helps brands grow through powerful visual storytelling, strategic
              social media, performance marketing, and lead-generation systems engineered for
              measurable results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              We pair editorial craft with data-driven marketing — so the worlds we build for our
              clients don't just look exceptional, they perform.
            </p>
          </div>
        </div>

        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={`group p-8 lg:p-10 text-center transition-all duration-500 hover:-translate-y-1 ${
                idx % 2 === 0 ? "card-ivory" : "card-outline-white"
              }`}
            >
              <div className={`font-display text-5xl lg:text-7xl ${idx % 2 === 0 ? "" : "text-foreground group-hover:text-gold transition-colors duration-500"}`}>
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className={`mt-4 text-[10px] tracking-[0.3em] uppercase ${idx % 2 === 0 ? "ivory-gold" : "text-gold"}`}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
