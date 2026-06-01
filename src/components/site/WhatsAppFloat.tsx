import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-20" />
      <span className="relative flex items-center gap-3 bg-gold text-ink pl-4 pr-5 py-3 rounded-full shadow-2xl shadow-gold/30 hover:bg-champagne transition-all duration-500">
        <MessageCircle size={18} />
        <span className="text-[11px] uppercase tracking-[0.2em] hidden sm:inline">
          Chat with us
        </span>
      </span>
    </a>
  );
}
