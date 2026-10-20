import { Camera, Video, Share2, Target, Users, ArrowUpRight } from "lucide-react";
import influencerImage from "@/assets/campaign-fashion-creator.jpg";
import socialImage from "@/assets/campaign-hero-creator.jpg";
import videoImage from "@/assets/campaign-hospitality-creator.jpg";
import photoImage from "@/assets/campaign-beauty-creator.jpg";
import adsImage from "@/assets/hero-consumer.jpg.asset.json";

const services = [
  {
    num: "01",
    icon: Users,
    title: "Influencer Marketing",
    image: influencerImage,
    alt: "Fashion creator filming a social campaign",
    desc: "Creator discovery, influencer research, brand–creator matching, paid collaborations, campaign planning, deliverable coordination, content approvals, and campaign reporting.",
    items: ["Creator Discovery", "Brand Matching", "Paid Collaborations", "Campaign Reporting"],
  },
  {
    num: "02",
    icon: Share2,
    title: "Social Media Management",
    image: socialImage,
    alt: "Creator producing branded social content on set",
    desc: "Social media strategy, content calendars, content creation, publishing, community management, platform optimisation, and performance reporting.",
    items: ["Strategy", "Content Calendars", "Publishing", "Community Management"],
  },
  {
    num: "03",
    icon: Video,
    title: "Professional Videography",
    image: videoImage,
    alt: "Lifestyle creator filming a short-form hospitality video",
    desc: "Brand films, product videos, influencer and fashion campaigns, reels, and short-form social content.",
    items: ["Brand Films", "Product Videos", "Influencer Campaigns", "Reels & Short-form"],
  },
  {
    num: "04",
    icon: Camera,
    title: "Professional Photography",
    image: photoImage,
    alt: "Beauty creator presenting a skincare product",
    desc: "Campaign photography for fashion, lifestyle, product, beauty, food, and hospitality brands.",
    items: ["Fashion & Lifestyle", "Product & Beauty", "Food", "Hospitality"],
  },
  {
    num: "05",
    icon: Target,
    title: "Meta Ads Management",
    image: adsImage.url,
    alt: "Consumer product campaign image",
    desc: "Facebook and Instagram advertising focused on campaign testing, retargeting, and ongoing performance optimisation.",
    items: ["Facebook & Instagram", "Campaign Testing", "Retargeting", "Optimisation"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6">
              <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
              Services
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
              Creative that connects. <span className="italic text-champagne">Strategy that grows.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Five connected disciplines, shaped around your brand and audience.
          </p>
        </div>

        <div className="border-t border-border">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="group relative border-b border-border py-8 lg:py-10 grid grid-cols-12 gap-4 lg:gap-5 items-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="col-span-1 text-gold font-display text-xl lg:text-2xl relative">
                  {s.num}
                </div>

                <div className="col-span-4 sm:col-span-3 lg:col-span-2 relative">
                  <img src={s.image} alt={s.alt} loading="lazy" width={1408} height={1008} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>

                <div className="col-span-7 sm:col-span-8 lg:col-span-3 relative">
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-gold" />
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground group-hover:translate-x-2 transition-transform duration-500">
                      {s.title}
                    </h3>
                  </div>
                </div>

                <p className="col-span-12 lg:col-span-3 text-sm leading-relaxed text-muted-foreground relative">
                  {s.desc}
                </p>

                <div className="col-span-12 lg:col-span-2 flex flex-wrap gap-x-3 gap-y-2 relative">
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
