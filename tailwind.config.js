// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          light: "#6366F1",
          dark: "#3730A3",
        },
        secondary: {
          DEFAULT: "#EC4899",
          light: "#F472B6",
          dark: "#BE185D",
        },
        accent: "#22C55E",

        background: "#F8FAFC",
        surface: "#FFFFFF",

        text: {
          primary: "#0F172A",
          secondary: "#475569",
        },
      },

      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.05)",
        card: "0 8px 20px rgba(0,0,0,0.06)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
