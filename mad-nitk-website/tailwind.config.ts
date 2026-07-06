import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#7C3AED",
        accent: "#A855F7",
        cyan: "#06B6D4",
        card: "#18181B",
        ink: "#09090B"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(124, 58, 237, 0.28)",
        soft: "0 24px 80px rgba(0, 0, 0, 0.32)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
