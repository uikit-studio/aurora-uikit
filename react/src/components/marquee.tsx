/** Infinite scrolling ticker. Reverses automatically in RTL. */
export function Marquee({ items }: { items: readonly string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-ink py-3 text-ink-foreground">
      <div className="aurora-marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-mono text-sm font-medium uppercase tracking-widest">
            {item}
            <span className="text-brand-400">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
