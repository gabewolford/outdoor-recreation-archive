/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          main: "#666666",
          subtext: "#8E8D8D",
        },
        blue: {
          main: "#4865AF",
        },
      },
      fontSize: {
        sm: [
          "14px",
          {
            lineHeight: "19.6px",
            letterSpacing: "-0.28px",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "22.4px",
          },
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
