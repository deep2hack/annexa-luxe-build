import { useState } from "react";
import { X } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import video1 from "@/assets/portfolioVideo1.mp4.asset.json";
import video2 from "@/assets/portfolioVideo2.mp4.asset.json";
import video3 from "@/assets/portfolioVideo3.mp4.asset.json";
import video4 from "@/assets/portfolioVideo4.mp4.asset.json";
import gummies from "@/assets/portfolio-gummies.png.asset.json";

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
  { src: video1.url, title: "Signature Film I", client: "—", cat: "Real Estate", video: true, span: "tall" },
  { src: p1, title: "Marble & Light", client: "Aurelia Hotels", cat: "Photography", span: "wide" },
  { src: p3, title: "Skyline Penthouse", client: "Northcrest Group", cat: "Real Estate", span: "tall" },
  { src: p4, title: "Tasting Menu Series", client: "Restaurant Solène", cat: "Photography" },
  { src: gummies.url, title: "Peach Mango Campaign", client: "—", cat: "Photography", span: "tall" },
  { src: video4.url, title: "Signature Film IV", client: "—", cat: "Social", video: true, span: "wide" },
  { src: video2.url, title: "Signature Film II", client: "—", cat: "Social", video: true, span: "wide" },
  { src: video3.url, title: "Signature Film III", client: "—", cat: "Real Estate", video: true },
];

const cats: Cat[] = ["All", "Real Estate", "Photography", "Social"];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="work" className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Ambient premium backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full blur-3xl opacity-[0.10]"
             style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 60%)" }} />
        <div className="absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full blur-3xl opacity-[0.08]"
             style={{ background: "radial-gradient(circle, #E8D8C4 0%, transparent 60%)" }} />
        <div className="absolute inset-0 grid-gold opacity-[0.35] animate-drift" />
        <div className="absolute top-1/3 left-0 right-0 h-px overflow-hidden">
          <div className="h-px w-1/3 animate-streak"
               style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 70%, transparent), transparent)" }} />
        </div>
        <div className="absolute top-24 right-[8%] h-24 w-24 border border-gold/25 rotate-45 animate-float-slow" />
        <div className="absolute bottom-32 left-[6%] h-16 w-16 rounded-full border border-champagne/20 animate-float-slower" />
        <div className="absolute top-1/2 left-[3%] h-32 w-32 border border-white/[0.06] animate-float-slower" />
        <div className="absolute top-[20%] left-[40%] h-1 w-1 rounded-full bg-gold/60 animate-float-slow" />
        <div className="absolute top-[70%] left-[20%] h-1 w-1 rounded-full bg-champagne/60 animate-float-slower" />
        <div className="absolute top-[35%] right-[18%] h-1.5 w-1.5 rounded-full bg-gold/40 animate-float-slow" />
        <div className="absolute bottom-[18%] right-[40%] h-1 w-1 rounded-full bg-white/40 animate-float-slower" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
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
              className={`group relative overflow-hidden bg-card text-left animate-fade-in ${
                it.span === "tall" ? "row-span-2" : it.span === "wide" ? "col-span-2" : ""
              }`}
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              {it.video ? (
                <video
                  src={it.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              ) : (
                <img
                  src={it.src}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            className="relative max-w-6xl w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-card overflow-hidden w-full">
              {lightbox.video ? (
                <video src={lightbox.src} autoPlay muted loop playsInline controls className="w-full max-h-[82vh] object-contain" />
              ) : (
                <img src={lightbox.src} alt="" className="w-full max-h-[82vh] object-contain" />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
