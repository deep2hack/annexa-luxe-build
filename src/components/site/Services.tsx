import { Camera, Video, Share2, Target, Sparkles, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Video,
    title: "Professional Videography",
    desc: "Real estate, luxury properties, fashion campaigns, brand films, reels & short-form.",
    items: ["Real Estate Films", "Luxury Property Tours", "Fashion Campaigns", "Brand Films", "Reels & Social"],
  },
  {
    num: "02",
    icon: Camera,
    title: "Professional Photography",
    desc: "Architecture, interiors, fashion, product and restaurant photography.",
    items: ["Architecture", "Interiors", "Fashion Shoots", "Product", "Hospitality"],
  },
  {
    num: "03",
    icon: Share2,
    title: "Social Media Management",
    desc: "Strategy, content creation, posting and community growth across platforms.",
    items: ["Content Planning", "Creation", "Posting & Optimization", "Community Growth"],
  },
  {
    num: "04",
    icon: Target,
    title: "Meta Ads Management",
    desc: "Facebook & Instagram campaigns engineered for conversions and ROI.",
    items: ["Facebook Ads", "Instagram Ads", "Retargeting", "Conversion Optimization"],
  },
  {
    num: "05",
    icon: Sparkles,
    title: "Lead Generation",
    desc: "Funnels and acquisition systems for real estate and premium local brands.",
    items: ["Real Estate Leads", "Local Business Leads", "Sales Funnels", "Quality Prospects"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 lg:py-44 bg-card">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">
              <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
              Services
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
              A full creative <span className="italic text-champagne">+</span> growth studio.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Five disciplines, one obsession — premium work that performs.
          </p>
        </div>

        <div className="border-t border-border">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="group relative border-b border-border py-10 lg:py-12 grid grid-cols-12 gap-6 items-start cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="col-span-2 lg:col-span-1 text-gold font-display text-xl lg:text-2xl relative">
                  {s.num}
                </div>

                <div className="col-span-10 lg:col-span-4 relative">
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-gold" />
                    <h3 className="font-display text-3xl lg:text-5xl text-foreground group-hover:translate-x-2 transition-transform duration-500">
                      {s.title}
                    </h3>
                  </div>
                </div>

                <p className="col-span-12 lg:col-span-3 text-muted-foreground relative">
                  {s.desc}
                </p>

                <div className="col-span-12 lg:col-span-3 flex flex-wrap gap-x-4 gap-y-2 relative">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80"
                    >
                      — {i}
                    </span>
                  ))}
                </div>

                <ArrowUpRight
                  size={20}
                  className="hidden lg:block col-span-1 text-foreground/40 group-hover:text-gold group-hover:rotate-45 transition-all duration-500 ml-auto relative"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
