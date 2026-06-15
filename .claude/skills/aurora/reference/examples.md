# Aurora composition examples

## A settings form

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ProfileSettings() {
  return (
    <Card className="max-w-lg">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Name</label>
          <Input placeholder="Ada Lovelace" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="ada@example.com" />
        </div>
        <Button>Save changes</Button>
      </CardContent>
    </Card>
  );
}
```

## A KPI strip

```tsx
import { StatCards } from "@/components/blocks/stat-cards";

<StatCards
  stats={[
    { label: "MRR", value: "$48.2k", delta: "+12%", trend: "up" },
    { label: "Users", value: "8,940", delta: "+3%", trend: "up" },
  ]}
/>
```

## The rule of thumb

If you're about to write `bg-white`, `text-gray-500`, or `rounded-xl shadow-lg`,
stop — use `bg-card`, `text-muted-foreground`, `rounded-[--radius] shadow-[var(--shadow-glass)]`.
That single habit keeps everything looking like Aurora.
