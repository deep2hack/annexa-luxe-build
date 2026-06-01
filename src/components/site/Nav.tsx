import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "Studio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tight text-foreground">Annexa</span>
          <span className="font-display italic text-gold text-lg">Dynamics</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors underline-grow"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold hover:text-ink px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] transition-all duration-500"
        >
          WhatsApp
        </a>

        <button
          className="md:hidden text-foreground"
          aria-label="menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center border border-gold/40 text-gold px-5 py-3 text-xs uppercase tracking-[0.25em]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
