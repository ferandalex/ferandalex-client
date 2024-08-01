import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "clashdisplay-regular": ["ClashDisplay-Regular", "sans-serif"],
        "clashdisplay-light": ["ClashDisplay-Light", "sans-serif"],
        "clashdisplay-bold": ["ClashDisplay-Bold", "sans-serif"],
        "clashdisplay-semibold": ["ClashDisplay-Semibold", "sans-serif"],
      },
      colors: {
        "navbar-bg": "#FFFFFF2B",
        "border-100": "#FFFFFF1A",
      },
      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xlg: "1200px",
        xl: "1440px",
        xxl: "1600px",
      },
    },
  },
  plugins: [],
};
export default config;
