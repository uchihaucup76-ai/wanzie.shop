import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E12",
        panel: "#10161C",
        line: "#1E2830",
        signal: "#4CF2C1",
        signal2: "#3AB0FF",
        warn: "#FF9F5A",
        danger: "#FF6B6B",
        muted: "#7C8994",
        paper: "#EAF2F1",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(76,242,193,0.06), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
