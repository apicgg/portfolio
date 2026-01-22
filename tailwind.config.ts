import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        backgroundColor: "#202023",
        fontColor: "#eee",
        "brand-light": "#1C3782",
        "brand-dark": "#74C0FC",
        "yellow-primary": "rgb(249 195 77 / 0.9)",
      },
    },
  },
  plugins: [],
};

export default config;
