# How Aurora was built

The brief that generated this kit (via `uikit-standard`):

> A clean SaaS kit with a glassy dashboard. Blue primary (#3b82f6), Inter font,
> glassmorphism cards, light + dark. React-first. Ship a dashboard and a landing
> page template.

Generation steps the standard followed:

1. Derived design tokens (colors, Inter, 0.75rem radius, soft glass shadow) →
   `design/tokens.json`, then `theme.css` (v4) and `tailwind-preset.js` (v3).
2. Built React components on a shared `cn` util: Button, Card, Input, Badge.
3. Composed blocks (StatCards, Navbar), then assembled the Dashboard and Landing
   templates.
4. Wrote the bundled consumer skill (`.claude/skills/aurora`) so AI builds with the
   kit cheaply.
5. Emitted `uikit.json` and validated it against the contract.
6. Authored screenshots (logo, landing, dashboard) in `screenshots/`.
