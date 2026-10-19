export function Testimonials() {
  return (
    <section className="spotlight-white relative py-20 lg:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 relative">
        <div className="eyebrow mb-10">
          <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
          Our Approach
        </div>

        <div className="card-ivory relative p-10 md:p-16 lg:p-20">
          <div className="relative py-5 md:py-8">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">Built around <span className="italic text-champagne">your brand.</span></h2>
            <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">Every social strategy and creator partnership is shaped around your brand's voice, audience, and ambitions — never a one-size-fits-all formula.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
