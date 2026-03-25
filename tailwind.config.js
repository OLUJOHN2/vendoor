export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["bg-black", "bg-red-500", "text-white", "hover:bg-gray-200"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo main
        secondary: "#6366F1", // Slightly lighter Indigo
        accent: "#3B82F6", // Blue accent
        background: "#F9FAFB", // Light gray background
        surface: "#FFFFFF", // White cards / navbar / modals
        textMain: "#111827", // Dark gray text for main content
        textSub: "#6B7280", // Secondary text
        danger: "#EF4444", // Red for alerts, errors
        success: "#10B981", // Green for success messages
      },
      spacing: {
        72: "18rem", // Custom spacing for hero images/cards
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.06)",
        "hover-card": "0 8px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
