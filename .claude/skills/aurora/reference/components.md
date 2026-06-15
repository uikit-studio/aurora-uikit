# Aurora component API

Import paths assume the kit lives at the project root (after `uikit init`). Adjust
the prefix if your registry copied them under `components/ui/`.

## Button — `react/components/button.tsx`

```tsx
import { Button } from "@/components/ui/button";

<Button>Primary</Button>
<Button variant="outline" size="lg">Outline</Button>
<Button variant="glass">Glass</Button>
<Button variant="ghost" size="icon"><Icon /></Button>
```

- `variant`: `primary` (default) · `outline` · `ghost` · `glass`
- `size`: `sm` · `md` (default) · `lg` · `icon`

## Card — `react/components/card.tsx`

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Revenue</CardTitle>
    <CardDescription>Last 30 days</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
</Card>
```

Card is glassy by default (`bg-card/80` + backdrop blur + glass shadow).

## Input — `react/components/input.tsx`

```tsx
import { Input } from "@/components/ui/input";
<Input placeholder="you@example.com" type="email" />
```

## Badge — `react/components/badge.tsx`

```tsx
import { Badge } from "@/components/ui/badge";
<Badge>Neutral</Badge>
<Badge variant="brand">Live</Badge>
<Badge variant="outline">Draft</Badge>
```

## Blocks

- `StatCards({ stats: { label, value, delta?, trend? }[] })` — KPI row.
- `Navbar({ brand?, items?: { label, href }[] })` — sticky glassy header.

## Templates

- `Dashboard()` — sidebar + KPI cards + invoices table.
- `Landing()` — hero + features + pricing teaser.

Start from a template and swap the data; keep the classes.
