const items = [
  "Real Estate Films",
  "Fashion Editorials",
  "Brand Photography",
  "Social Strategy and Management",
  "Meta Ads",
  "Lead Generation",
  "Hospitality Content",
];

export function Marquee() {
  const list = [...items, ...items];
  return (
    <div className="border-y border-black/10 py-6 overflow-hidden bg-[#f6f3ec]">
      <div className="flex whitespace-nowrap animate-marquee">
        {list.map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-10 shrink-0">
            <span className="font-display italic text-3xl lg:text-4xl text-ink/85">{t}</span>
            <span className="text-[var(--gold)] text-xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

