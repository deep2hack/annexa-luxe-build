import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-foreground">AfterLight</span>
              <span className="font-display italic text-2xl text-gold">Studios</span>
            </div>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              An editorial creative studio for real estate, fashion, hospitality and premium
              brands ready to look — and perform — at the highest level.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: MessageCircle, href: SITE.whatsapp, label: "WhatsApp" },
                { Icon: Instagram, href: SITE.instagram, label: "Instagram" },
                { Icon: Linkedin, href: SITE.linkedin, label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-10 w-10 border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Explore</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground underline-grow">Services</a></li>
              <li><a href="#process" className="hover:text-foreground underline-grow">Process</a></li>
              <li><a href="#about" className="hover:text-foreground underline-grow">Studio</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Contact</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="hover:text-foreground underline-grow">WhatsApp</a></li>
              <li><a href={SITE.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground underline-grow">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline my-14" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <div>© {new Date().getFullYear()} AfterLight Studios — All rights reserved.</div>
          <div>Crafted with intention.</div>
        </div>
      </div>
    </footer>
  );
}
