import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        defaultShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.03)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#296573",
      },
    },
  },
  plugins: [],
};
export default config;
