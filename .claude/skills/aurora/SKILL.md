---
name: aurora-ui
description: >-
  Build apps with the Aurora UI kit. Use whenever the user asks to create,
  extend, or style any UI (dashboard, landing page, form, table, settings) in a
  project that contains this Aurora kit. Gives exact components, tokens, import
  paths, and composition rules so the result matches Aurora and stays consistent.
---

# Building with Aurora

Aurora is a clean, glassy SaaS kit: blue, Inter, light + dark. When this skill is
active, **build with Aurora's tokens and components — never invent new colors,
spacing, or one-off components.**

## Golden rules

1. **Use the tokens, not hex values.** Style with the semantic classes that map to
   `design/theme.css`: `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`,
   `border-border`, `bg-primary`/`text-primary-foreground`, brand scale `bg-brand-500` etc.
   Never write `bg-[#3b82f6]` — write `bg-primary` or `bg-brand-500`.
2. **Reuse components.** Import from the kit instead of rebuilding. See
   [reference/components.md](reference/components.md) for the full API.
3. **Radius + shadow are tokens.** Use `rounded-[--radius]` and `shadow-[var(--shadow-glass)]`
   for Aurora's signature soft, glassy feel.
4. **Dark mode is free.** Tokens already flip under `.dark`; don't hand-roll dark variants.
5. **Compose from blocks and templates first.** Need a dashboard? Start from
   `react/templates/dashboard.tsx`. Need stats? Use the `StatCards` block.

## What's in the box

- **Components** (`react/components/`): `Button`, `Card` (+ Header/Title/Description/Content),
  `Input`, `Badge`.
- **Blocks** (`react/blocks/`): `StatCards`, `Navbar`.
- **Templates** (`react/templates/`): `Dashboard`, `Landing`.
- **Tokens** (`design/`): `tokens.json` (DTCG), `theme.css` (Tailwind v4), `tailwind-preset.js` (v3).

## How to build a new screen

1. Pick the closest **template** or **block** as a starting point.
2. Replace its sample data with the user's data; keep the structure and classes.
3. For new pieces, compose existing **components** — match the patterns in
   [reference/examples.md](reference/examples.md).
4. Keep everything inside the token system. If a needed token is missing, add it to
   `design/theme.css` (and `tokens.json`) rather than hard-coding.

## Setup expected in the host project

- Tailwind v4 with `@import "tailwindcss";` then `@import "./design/theme.css";`
- `Inter` font loaded (Google Fonts or local).
- Deps: `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`.

See [reference/tokens.md](reference/tokens.md) for the token map and
[reference/components.md](reference/components.md) for component props.
