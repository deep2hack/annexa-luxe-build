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

type Cat = "All" | "Real Estate" | "Fashion" | "Photography" | "Social" | "Ads";

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
  { src: hero2, title: "Atelier Maison SS25", client: "Maison Noir", cat: "Fashion", video: true },
  { src: p1, title: "Marble & Light", client: "Aurelia Hotels", cat: "Photography", span: "wide" },
  { src: p2, title: "Champagne Edit", client: "Velvet & Co.", cat: "Fashion" },
  { src: p3, title: "Skyline Penthouse", client: "Northcrest Group", cat: "Real Estate", video: true, span: "tall" },
  { src: p4, title: "Tasting Menu Series", client: "Restaurant Solène", cat: "Photography" },
  { src: hero3, title: "Candlelit Hospitality", client: "Maison de Vins", cat: "Social", span: "wide" },
  { src: p5, title: "Eau de Or Campaign", client: "Or Privé", cat: "Ads" },
  { src: p6, title: "Sunset Residences", client: "Pacific Modern", cat: "Real Estate" },
];

const cats: Cat[] = ["All", "Real Estate", "Fashion", "Photography", "Social", "Ads"];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="work" className="relative py-32 lg:py-44 bg-background">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
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
