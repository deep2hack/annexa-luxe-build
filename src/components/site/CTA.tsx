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
        <div className="eyebrow mb-8 inline-flex items-center">
          <span className="inline-block w-8 h-px bg-gold align-middle mr-3" />
          Let's Begin
          <span className="inline-block w-8 h-px bg-gold align-middle ml-3" />
        </div>
        <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight text-balance">
          Ready to grow
          <br />
          <span className="italic text-champagne">your brand?</span>
        </h2>
        <p className="mt-10 max-w-2xl mx-auto text-lg text-muted-foreground">
          Whether you're a real estate developer, fashion house, restaurant or growing brand —
          we create content that attracts attention and generates results.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-black px-8 py-5 text-xs uppercase tracking-[0.3em] hover:bg-champagne hover:text-ink transition-all duration-500"
          >
            <MessageCircle size={16} />
            Message Us On WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
