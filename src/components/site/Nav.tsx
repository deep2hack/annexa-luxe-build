import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import logoAsset from "@/assets/afterlight-logo-wide.png.asset.json";

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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 lg:px-6">
      <div
        className={`mx-auto max-w-[1400px] h-14 lg:h-[60px] rounded-2xl flex items-center justify-between pl-5 pr-3 lg:pl-7 lg:pr-4 transition-all duration-500 ${
          scrolled
            ? "bg-white/85 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.35)]"
            : "bg-white/75 shadow-[0_8px_32px_-10px_rgba(0,0,0,0.25)]"
        }`}
        style={{
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.6)",
        }}
      >
        <a href="#top" className="flex items-center group shrink-0 h-full py-1.5">
          <img
            src={logoAsset.url}
            alt="AfterLight Studios"
            className="h-full w-auto object-contain rounded-md transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.25em] text-ink/70 hover:text-ink transition-colors underline-grow"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-ink text-white hover:bg-[var(--gold)] hover:text-ink px-5 py-2.5 rounded-xl text-[11px] uppercase tracking-[0.25em] transition-all duration-500"
        >
          WhatsApp
        </a>

        <button
          className="md:hidden text-ink"
          aria-label="menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden mt-2 mx-auto max-w-[1400px] rounded-2xl bg-white/90 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.35)]"
          style={{
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.6)",
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-ink/80 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center bg-ink text-white rounded-xl px-5 py-3 text-xs uppercase tracking-[0.25em]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
