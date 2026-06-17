# Aurora — glassy SaaS UI kit

A clean, glassy **SaaS** kit: cool slate + blue, a Sora display face, glassmorphism
cards and a gradient highlight. Light + dark, full **EN/AR + RTL**. A runnable
React app you clone and build your product from — not a bin of loose components.

[![Live demo](https://img.shields.io/badge/live-uikit.studio%2Fkit%2Faurora-7c5cff)](https://uikit.studio/kit/aurora)
[![CLI](https://img.shields.io/badge/cli-uikit--cli-22d3ee)](https://www.npmjs.com/package/uikit-cli)
![License](https://img.shields.io/badge/license-MIT-34d399)
![Frameworks](https://img.shields.io/badge/react-19-555)

<video src="https://github.com/uikit-studio/aurora-uikit/raw/main/screenshots/preview.webm" poster="https://github.com/uikit-studio/aurora-uikit/raw/main/screenshots/landing.png" muted loop playsinline width="100%"></video>

> Video not playing? [▶ Watch the preview ↗](https://github.com/uikit-studio/aurora-uikit/raw/main/screenshots/preview.webm) · [screenshot ↗](./screenshots/landing.png) · [live demo ↗](https://uikit.studio/demos/aurora/)

**[▶ Open the live demo →](https://uikit.studio/demos/aurora/)** &nbsp;·&nbsp;
**[Gallery page →](https://uikit.studio/kit/aurora)**

## Quick start

```bash
git clone https://github.com/uikit-studio/aurora-uikit my-app
cd my-app/react
pnpm install && pnpm dev          # → a real app at localhost:5273
```

Then open in Claude Code and ask: *"build a billing dashboard using this kit."*
The bundled skill (`.claude/skills/aurora`) makes the AI build **with** the kit's
tokens and components — consistent and cheap.

## Design system

| | |
|---|---|
| **Primary** | `#3b82f6` (blue) |
| **Accent** | `#6366f1` (indigo) |
| **Display** | Sora |
| **Body** | Inter |
| **Mono** | JetBrains Mono |
| **Radius** | 1rem cards · 1.5rem sections · soft glass shadow |
| **Modes** | light + dark |
| **Responsive** | mobile → tablet → desktop (Tailwind `sm`/`md`/`lg`/`xl`) |
| **i18n** | EN + AR with full RTL |

**Components** — Button · Card · Input · Badge · Pill · Mark · Marquee · Container
**Blocks** — StatCards · Footer
**Pages** — Landing · Pricing · Dashboard · Components showcase

Tokens live in [`design/`](./design) (`tokens.json` → `theme.css` v4 +
`tailwind-preset.js` v3). The manifest is [`uikit.json`](./uikit.json).

## Screenshots

| Dashboard | Components showcase |
|---|---|
| ![Dashboard](./screenshots/dashboard.png) | ![Components](./screenshots/components.png) |

## Add pieces to an existing project

```bash
npx uikit-cli add dashboard     # a full template + every component it needs
npx uikit-cli add button card   # just the components you want
```

See **[USAGE.md](./USAGE.md)** for the full consumer guide.

## Use this design with an AI agent 🤖

This kit is **agent-ready**. Point Claude Code / Cursor / Codex at it and it reproduces
the exact design — tokens, fonts, radius, components. Paste:

> Build me a website styled exactly like this design: https://uikit.studio/kit/aurora —
> it's agent-ready. Read the spec at https://uikit.studio/kit/aurora/llms.txt and match
> its color tokens (light + dark), fonts, radius and components.

- **Agent spec:** <https://uikit.studio/kit/aurora/llms.txt> · manifest
  <https://uikit.studio/kit/aurora/manifest.json>
- Or point the agent **at this repo** — it reads [`AGENTS.md`](./AGENTS.md) + [`llms.txt`](./llms.txt).

---

MIT © UIKit Team · part of the [uikit.studio](https://uikit.studio) gallery
