import fashionCreator from "@/assets/campaign-fashion-creator.jpg";
import beautyCreator from "@/assets/campaign-beauty-creator.jpg";

export function About() {
  return (
    <section id="about" className="spotlight-white relative py-20 lg:py-28 bg-background overflow-hidden">
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
              Attention is earned, not demanded. We help brands build a powerful social presence through strategic content, consistent social media management, and influencer partnerships that bring products and stories to the right audiences. From planning and production to creator collaborations and campaign execution, we turn creative ideas into meaningful brand experiences.
            </p>
          </div>
        </div>

        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <article className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-5 items-center">
            <img src={fashionCreator} alt="Fashion creator filming a campaign in a studio" loading="lazy" width={1408} height={1008} className="aspect-[4/5] h-full w-full object-cover" />
            <div>
              <h3 className="font-display text-3xl lg:text-4xl text-foreground">Social Media Management</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Your social presence, thoughtfully managed. We plan content calendars, create scroll-stopping visuals, manage publishing, and build a consistent brand voice across your social platforms.</p>
            </div>
          </article>
          <article className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-5 items-center">
            <img src={beautyCreator} alt="Beauty creator featuring an unbranded skincare product" loading="lazy" width={1408} height={1008} className="aspect-[4/5] h-full w-full object-cover" />
            <div>
              <h3 className="font-display text-3xl lg:text-4xl text-foreground">Influencer Marketing</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">The right creators. The right audience. The right story. We identify relevant influencers, coordinate paid collaborations, and manage creator-led campaigns that introduce your brand to new audiences.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
