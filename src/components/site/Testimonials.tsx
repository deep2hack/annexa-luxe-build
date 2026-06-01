import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "Annexa transformed how our developments are marketed. The films feel like cinema — and our conversion rate has never been higher.",
    name: "Aarav Mehta",
    role: "MD, Lumen Estates",
    initials: "AM",
  },
  {
    quote:
      "Editorial, elegant, and effective. They understand luxury in a way most agencies simply don't.",
    name: "Sofia Marchetti",
    role: "Creative Director, Maison Noir",
    initials: "SM",
  },
  {
    quote:
      "From content to ads to leads — one studio, all dialled in. Bookings doubled within a quarter.",
    name: "Rohan Kapoor",
    role: "Owner, Restaurant Solène",
    initials: "RK",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const go = (d: number) => setI((p) => (p + d + reviews.length) % reviews.length);

  return (
    <section className="spotlight-white relative py-32 lg:py-44 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative">
        <div className="eyebrow mb-10">
          <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
          Clients
        </div>

        <div className="card-ivory relative p-10 md:p-16 lg:p-20">
          <Quote className="absolute top-8 left-8 ivory-gold opacity-30" size={80} />

          <blockquote key={i} className="animate-[fade-in_.6s_ease-out] relative">
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-balance">
              "{r.quote}"
            </p>
          </blockquote>

          <div className="mt-12 flex items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gold to-champagne flex items-center justify-center text-ink font-display text-lg">
                {r.initials}
              </div>
              <div>
                <div className="font-display text-xl">{r.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] ivory-muted mt-1">
                  {r.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-xs tracking-[0.3em] ivory-muted tabular-nums mr-4">
                {String(i + 1).padStart(2, "0")}
                <span className="mx-1 ivory-gold">/</span>
                {String(reviews.length).padStart(2, "0")}
              </div>
              <button
                onClick={() => go(-1)}
                className="h-12 w-12 border border-black/15 hover:border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                aria-label="Previous"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => go(1)}
                className="h-12 w-12 border border-black/15 hover:border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                aria-label="Next"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
