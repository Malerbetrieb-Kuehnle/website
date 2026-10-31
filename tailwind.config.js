/** @type {import('tailwindcss').Config} */
module.exports = {
  future: { hoverOnlyWhenSupported: true },
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        tupfer: {
          from: { opacity: "0", transform: "scale(0.94)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        einblenden: {
          from: {
            opacity: "0",
            transform: "translateY(12px)",
            filter: "blur(4px)",
          },
          to: { opacity: "1", transform: "none", filter: "none" },
        },
      },
      animation: {
        tupfer: "tupfer 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        einblenden: "einblenden 0.3s ease-out both",
      },
      fontFamily: {
        sans: ['"Outfit Variable"', "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        mbgreen: "hsl(var(--mbgreen))",
        mbfir: "hsl(var(--mbfir))",
        mblime: "hsl(var(--mblime))",
        mborange: "hsl(var(--mborange))",
        mbkalk: "hsl(var(--mbkalk))",
      },
      borderRadius: {
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
