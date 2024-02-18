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
        },
        blue: {
          main: "#4865AF",
        },
      },
      fontSize: {
        sm: [
          "13px",
          {
            lineHeight: "15.73px",
          },
        ],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
