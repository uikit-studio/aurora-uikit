# Using Aurora

Aurora is a clean, glassy SaaS UI kit (blue · Inter · light + dark). It ships design
tokens, React components, blocks, and two templates (dashboard + landing), plus a
Claude Code skill so the AI builds **with** the kit.

## Quick start

```bash
git clone https://github.com/uikit-studio/aurora-uikit my-app
cd my-app
npx uikit-cli init        # installs deps, wires the Aurora skill into the project
```

Then open the project in Claude Code and ask:

> "Build a billing dashboard using this kit."

The bundled skill (`.claude/skills/aurora`) gives the AI Aurora's exact components,
tokens, and rules — so the result is consistent and cheap to produce.

## Add individual pieces (shadcn-style)

```bash
npx uikit-cli add button card        # copy specific components into your project
npx uikit-cli add dashboard          # copy a full template (+ its dependencies)
```

## Manual setup

1. Tailwind v4: in your CSS, `@import "tailwindcss";` then `@import "./design/theme.css";`
2. Load the `Inter` font.
3. Install: `clsx tailwind-merge class-variance-authority lucide-react`.
4. Import components from `react/components/…`.

## What's inside

```text
design/      tokens.json · theme.css · tailwind-preset.js
react/       components · blocks · templates
registry/    index.json   (shadcn-style add targets)
.claude/     skills/aurora  (the consumer skill)
screenshots/ logo · landing · dashboard
uikit.json   the contract
```

MIT licensed.
