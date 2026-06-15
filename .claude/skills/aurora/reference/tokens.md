# Aurora token map

Use these semantic classes everywhere. They flip automatically in dark mode.

| Purpose | Class | Light | Dark |
| --- | --- | --- | --- |
| Page background | `bg-background` | `#f7f9fc` | `#0a0f1a` |
| Body text | `text-foreground` | `#0b1220` | `#e6edf6` |
| Card surface | `bg-card` | `#ffffff` | `#0e1626` |
| Muted surface | `bg-muted` | `#eef2f7` | `#121a2a` |
| Secondary text | `text-muted-foreground` | `#5b6b82` | `#8a9bb4` |
| Borders | `border-border` | `#e2e8f0` | `#1e2a3e` |
| Primary action | `bg-primary` / `text-primary-foreground` | `#3b82f6` / `#fff` | `#60a5fa` / `#06101f` |

## Brand scale (static)

`brand-50 #eff6ff · brand-100 #dbeafe · brand-300 #93c5fd · brand-500 #3b82f6 · brand-600 #2563eb · brand-700 #1d4ed8`

## Primitives

- Radius: `rounded-[--radius]` (0.75rem)
- Glass shadow: `shadow-[var(--shadow-glass)]`
- Font: `font-sans` (Inter)

**Do:** `className="bg-card text-foreground rounded-[--radius] shadow-[var(--shadow-glass)]"`
**Don't:** `className="bg-white text-black rounded-xl shadow-lg"`
