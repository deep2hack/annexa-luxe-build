import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import creatorCampaign from "@/assets/campaign-hero-creator.jpg";
import fashionCampaign from "@/assets/campaign-fashion-creator.jpg";
import beautyCampaign from "@/assets/campaign-beauty-creator.jpg";
import hospitalityCampaign from "@/assets/campaign-hospitality-creator.jpg";

const slides = [
  {
    img: creatorCampaign,
    eyebrow: "Influencer Marketing & Social Media",
    title: ["Making brands", "impossible to ignore."],
    desc: "We connect brands with the right creators and build social-first content strategies that capture attention, strengthen communities, and make brands stand out.",
    mobilePos: "56% 48%",
  },
  {
    img: fashionCampaign,
    eyebrow: "Creator Partnerships",
    title: ["The right creators.", "A story worth sharing."],
    desc: "Thoughtful collaborations bring your brand into the conversations your audience cares about.",
    mobilePos: "52% 48%",
  },
  {
    img: beautyCampaign,
    eyebrow: "Social Media Management",
    title: ["A presence", "people remember."],
    desc: "Consistent social strategy and considered content make every touchpoint feel unmistakably yours.",
    mobilePos: "56% 48%",
  },
  {
    img: hospitalityCampaign,
    eyebrow: "Social-first Campaigns",
    title: ["Creative that", "starts a conversation."],
    desc: "From first idea to final post, we help ambitious brands show up with clarity and character.",
    mobilePos: "48% 48%",
  },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[560px] sm:min-h-[720px] w-full overflow-hidden">
      {/* Slideshow */}
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={idx !== i}
        >
          <img
            src={s.img}
            alt=""
            className={`h-full w-full object-cover ${idx === i ? "animate-ken-burns" : ""}`}
            loading={idx === 0 ? "eager" : "lazy"}
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col justify-end pb-24 lg:pb-32">
        <div className="max-w-3xl">
          <div key={`eb-${i}`} className="eyebrow mb-6 animate-[fade-in_.8s_ease-out]">
            <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
            {slides[i].eyebrow}
          </div>
          <h1
            key={`t-${i}`}
            className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight text-balance animate-[fade-in_1s_ease-out]"
          >
            <span className="block">{slides[i].title[0]}</span>
            <span className="block italic text-champagne">{slides[i].title[1]}</span>
          </h1>
          <p
            key={`d-${i}`}
            className="mt-8 max-w-xl text-base lg:text-lg text-muted-foreground animate-[fade-in_1.2s_ease-out]"
          >
            {slides[i].desc}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gold text-ink px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] shadow-[0_10px_40px_-12px_rgba(212,175,55,0.55)] hover:shadow-[0_18px_60px_-12px_rgba(212,175,55,0.8)] hover:-translate-y-0.5 hover:bg-champagne transition-all duration-500"
            >
              <MessageCircle size={16} className="transition-transform duration-500 group-hover:rotate-[-6deg]" />
              Let's Work Together
            </a>
            <a
              href="#services"
              className="group relative inline-flex items-center gap-3 border border-foreground/40 text-foreground hover:border-foreground hover:text-foreground px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] bg-white/0 hover:bg-white/[0.06] hover:-translate-y-0.5 hover:shadow-[0_18px_60px_-20px_rgba(255,255,255,0.35)] backdrop-blur-sm transition-all duration-500"
            >
              Explore Our Services
              <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="mt-16 flex items-center gap-6">
          <div className="text-xs tracking-[0.3em] text-muted-foreground tabular-nums">
            {String(i + 1).padStart(2, "0")}
            <span className="mx-2 text-gold">/</span>
            {String(slides.length).padStart(2, "0")}
          </div>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className="group h-px w-12 bg-foreground/20 relative overflow-hidden"
                aria-label={`Slide ${idx + 1}`}
              >
                <span
                  className={`absolute inset-0 bg-gold origin-left transition-transform duration-[4500ms] ease-linear ${
                    idx === i ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Side label */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-right text-[10px] tracking-[0.5em] uppercase text-muted-foreground">
        Est. 2024 — Creative Studio
      </div>
    </section>
  );
}
