import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#111118",
        card: "#18181f",
        gold: "#c9a84c",
        "gold-light": "#e8c97a",
        muted: "#9e9a8e",
        ink: "#e8e4dc",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(201, 168, 76, 0.35)",
        "glow-lg": "0 0 120px -30px rgba(201, 168, 76, 0.45)",
      },
      backgroundImage: {
        "radial-gold":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(201,168,76,0.18), transparent 55%)",
      },
    },
  },
  plugins: [],
};
export default config;
