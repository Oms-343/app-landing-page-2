import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        desktop: "80px",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
