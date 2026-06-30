import { useState } from "react";
import { Play, X, ArrowUpRight } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import hero1 from "@/assets/hero-realestate.jpg";
import hero2 from "@/assets/hero-fashion.jpg";
import hero3 from "@/assets/hero-photography.jpg";

type Cat = "All" | "Real Estate" | "Photography" | "Social";

type Item = {
  src: string;
  title: string;
  client: string;
  cat: Exclude<Cat, "All">;
  video?: boolean;
  span?: "tall" | "wide" | "normal";
};

const items: Item[] = [
  { src: hero1, title: "Hillside Villa Film", client: "Lumen Estates", cat: "Real Estate", video: true, span: "tall" },
  { src: p1, title: "Marble & Light", client: "Aurelia Hotels", cat: "Photography", span: "wide" },
  { src: p3, title: "Skyline Penthouse", client: "Northcrest Group", cat: "Real Estate", video: true, span: "tall" },
  { src: p4, title: "Tasting Menu Series", client: "Restaurant Solène", cat: "Photography" },
  { src: hero3, title: "Candlelit Hospitality", client: "Maison de Vins", cat: "Social", span: "wide" },
  { src: p6, title: "Sunset Residences", client: "Pacific Modern", cat: "Real Estate" },
];

const cats: Cat[] = ["All", "Real Estate", "Photography", "Social"];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="work" className="relative py-32 lg:py-44 bg-background overflow-hidden">
      {/* Ambient premium backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Soft radial spotlights */}
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full blur-3xl opacity-[0.10]"
             style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 60%)" }} />
        <div className="absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full blur-3xl opacity-[0.08]"
             style={{ background: "radial-gradient(circle, #E8D8C4 0%, transparent 60%)" }} />

        {/* Golden grid */}
        <div className="absolute inset-0 grid-gold opacity-[0.35] animate-drift" />

        {/* Light streak */}
        <div className="absolute top-1/3 left-0 right-0 h-px overflow-hidden">
          <div className="h-px w-1/3 animate-streak"
               style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 70%, transparent), transparent)" }} />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-24 right-[8%] h-24 w-24 border border-gold/25 rotate-45 animate-float-slow" />
        <div className="absolute bottom-32 left-[6%] h-16 w-16 rounded-full border border-champagne/20 animate-float-slower" />
        <div className="absolute top-1/2 left-[3%] h-32 w-32 border border-white/[0.06] animate-float-slower" />

        {/* Blueprint wireframe — minimal architectural line drawing */}
        <svg
          className="absolute -bottom-10 right-[4%] w-[340px] h-[220px] opacity-[0.18]"
          viewBox="0 0 340 220"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          style={{ color: "var(--gold)" }}
        >
          <path className="animate-draw" d="M20 200 L20 90 L90 60 L90 200 M90 110 L180 80 L180 200 M180 120 L280 90 L280 200 M280 140 L320 130 L320 200 M10 200 L330 200" />
          <path className="animate-draw" d="M30 180 L30 110 M30 150 L80 150 M50 180 L50 110 M70 180 L70 110 M100 180 L100 130 M100 160 L170 160 M120 180 L120 130 M140 180 L140 130 M160 180 L160 130 M190 180 L190 150 M190 170 L270 170 M210 180 L210 150 M230 180 L230 150 M250 180 L250 150 M270 180 L270 150" strokeOpacity="0.5" />
        </svg>

        {/* Particles */}
        <div className="absolute top-[20%] left-[40%] h-1 w-1 rounded-full bg-gold/60 animate-float-slow" />
        <div className="absolute top-[70%] left-[20%] h-1 w-1 rounded-full bg-champagne/60 animate-float-slower" />
        <div className="absolute top-[35%] right-[18%] h-1.5 w-1.5 rounded-full bg-gold/40 animate-float-slow" />
        <div className="absolute bottom-[18%] right-[40%] h-1 w-1 rounded-full bg-white/40 animate-float-slower" />

        {/* Top + bottom hairlines for editorial framing */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 relative">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">
              <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
              Selected Work
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
              Worlds we've <span className="italic text-champagne">built</span>.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.25em] border transition-all duration-300 ${
                  active === c
                    ? "border-gold text-gold bg-gold/5"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 auto-rows-[200px] lg:auto-rows-[260px]">
          {filtered.map((it, i) => (
            <button
              key={`${it.title}-${i}`}
              onClick={() => setLightbox(it)}
              className={`group relative overflow-hidden bg-card text-left ${
                it.span === "tall" ? "row-span-2" : it.span === "wide" ? "col-span-2" : ""
              }`}
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {it.video && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full glass flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                    <Play size={18} fill="currentColor" />
                  </div>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 flex items-end justify-between gap-4">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-1">
                    {it.cat}
                  </div>
                  <div className="font-display text-xl lg:text-2xl text-foreground leading-tight">
                    {it.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {it.client}
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-foreground opacity-0 group-hover:opacity-100 group-hover:rotate-0 -rotate-12 transition-all duration-500 shrink-0"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 lg:p-12 animate-[fade-in_.3s_ease-out]"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/80 hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-6xl w-full max-h-full flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-card overflow-hidden">
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[78vh] object-contain" />
            </div>
            <div className="flex items-end justify-between gap-6 px-1">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{lightbox.cat}</div>
                <div className="font-display text-3xl text-foreground">{lightbox.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{lightbox.client}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
