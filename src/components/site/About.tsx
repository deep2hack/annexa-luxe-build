import { Counter } from "./Counter";

const stats = [
  { n: 240, suffix: "+", label: "Projects Completed" },
  { n: 580, suffix: "+", label: "Videos Produced" },
  { n: 12000, suffix: "+", label: "Leads Generated" },
  { n: 90, suffix: "+", label: "Clients Served" },
];

export function About() {
  return (
    <section id="about" className="theme-light relative py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
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
              Annexa Dynamics helps brands grow through powerful visual storytelling, strategic
              social media, performance marketing, and lead-generation systems engineered for
              measurable results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              We pair editorial craft with data-driven marketing — so the worlds we build for our
              clients don't just look exceptional, they perform.
            </p>
          </div>
        </div>

        <div className="hairline mt-24" />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="group">
              <div className="font-display text-5xl lg:text-7xl text-foreground group-hover:text-gold transition-colors duration-500">
                <Counter to={s.n} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
