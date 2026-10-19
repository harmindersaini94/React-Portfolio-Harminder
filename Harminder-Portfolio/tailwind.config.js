/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        panel: "#111821",
        ink: "#0E141C",
        edge: "#1F2A37",
        fg: "#E6EDF3",
        dim: "#9BA9B8",
        mint: "#5EEAD4",
        amber: "#FBBF24",
        violet: "#C4B5FD",
        rose: "#FDA4AF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(94, 234, 212, 0.18)",
      },
    },
  },
  plugins: [],
};
