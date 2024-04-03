import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      "white": '#ffffff',
      "black": '#565A5D',
      "primary": '#FAA73F',
      "info": '#565A5D',
      "warning": '#FAA73F',
      "danger": '#FF0F00',
      "disabled": '#D9D9D9',
      "brown": '#847000',
      "orange": {
        DEFAULT:'#F78F1E',
        "so-light":'#FAA73F',
        "light":'#FAA73F',
        "medium":'#F78F1E',
        "dark":'#F0733C',
      },
      "yellow": '#FBE04B',
      "green": {
        DEFAULT:'#02B53A',
        "light":'#5CB85C',
        "medium":'#02B53A',
        "dark":'#008400',
      },
      "blue": {
        DEFAULT:'#4880C1',
        "light":'#E1EFFF',
        "medium":'#4880C1',
        "dark":'#002D62',
      },
      "red": {
        DEFAULT:'#FF0F00',
        "light":'#FF0F00',
        "dark":'#D1271D',
      },
      "gray": {
        DEFAULT:'#D9D9D9',
        "so-light":'#F7F7F7',
        "light":'#D9D9D9',
        "medium":'#B4B4B4',
        "dark":'#828282',
      }
    }
  },
  plugins: [],
};
export default config;
