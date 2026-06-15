/** Aurora — Tailwind v3 compatibility preset. v4 users prefer design/theme.css. */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "Cairo", "sans-serif"],
        sans: ["Inter", "Cairo", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd",
          400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8",
        },
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: "var(--color-card)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        border: "var(--color-border)",
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        accent: "var(--color-accent)",
        ink: "var(--color-ink)",
      },
      borderRadius: { DEFAULT: "1rem", lg: "1.5rem" },
    },
  },
};
