import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "Poppins":['var(--font-poppins)'],
        "Chakra": ['var(--font-Chakra_Petch)'],
        "Advent": ['var(--font-Advent_Pro)'],
        "Vollkorn":['var(--font-Vollkorn)'],
      },
      screens: {
        'xs': '475px',
        '2xs': '300px',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
