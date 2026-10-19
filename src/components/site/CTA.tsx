import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTA() {
  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-background overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, var(--gold) 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative text-center">
        <div className="eyebrow mb-8">Let's Begin</div>
        <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight text-balance">
          Ready to make
          <br />
          <span className="italic text-champagne">your brand stand out?</span>
        </h2>
        <p className="mt-10 max-w-2xl mx-auto text-lg text-muted-foreground">
          Whether you're launching a product, building your social presence, or planning your next creator campaign, let's create something worth paying attention to.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-5 text-xs uppercase tracking-[0.3em] hover:bg-champagne hover:text-ink transition-all duration-500"
          >
            <MessageCircle size={16} />
            Start a Conversation
          </a>
        </div>

        <p className="mt-6 text-center text-[11px] uppercase tracking-[0.3em] text-champagne/75">
          +91 75207 84796
        </p>

      </div>
    </section>
  );
}
