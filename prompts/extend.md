# Extending Aurora with AI

With the bundled skill active, ask in plain language and stay in the token system:

- "Add a `Tabs` component to Aurora matching the glass style." → new file in
  `react/components/`, add a registry entry in `registry/index.json`.
- "Build a pricing page template using Aurora." → compose from Card + Button + Badge,
  save under `react/templates/`.
- "Add a teal accent palette." → extend `design/tokens.json` + `theme.css`, add a
  palette entry to `uikit.json` → `design.palettes`.

Rules when extending:

1. New tokens go in `tokens.json` first, then mirror into `theme.css`/`tailwind-preset.js`.
2. New surface items must be added to `uikit.json` (`surface`) and `registry/index.json`.
3. Run `npx uikit-studio validate` before committing — the manifest must stay contract-valid.
