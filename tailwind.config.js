export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg-black", "bg-red-500", "text-white", "hover:bg-gray-200"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo
        secondary: "#6366F1",
        accent: "#3B82F6",
        background: "#F9FAFB",
        surface: "#FFFFFF",
        textMain: "#111827",
        textSub: "#6B7280",
      },
    },
  },
  plugins: [],
};
