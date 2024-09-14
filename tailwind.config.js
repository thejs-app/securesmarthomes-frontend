/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "LightWhite": "#FCFCFC",
        "DarkGray": "#171A1B",
        "GrayLight1": "#A5A6AA",
        "GrayLight2": "#7A7E83",
        "MutedGrayBlue": "#BFC2C9",
        "SoftYellow": "#FEE198",
        "LightGray": "#EAEAEA",
        "PureWhite": "#FFFFFF",
        "GrayDark": "#2D3036",
        "GrayMid": "#707070",
        "Black": "#000000",
        "BlackShade35": "#121418",
        "LightGrayBlue50": "#BFC2C9",
        "SoftWhite": "#F8F7F5"
      },
      animation: {
        openDropDownMenu: "openDropDownMenu 0.5s ease-in-out",
        closeDropDownMenu: "closeDropDownMenu 0.5s ease-in-out",
      },
      keyframes: {
        openDropDownMenu: {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        closeDropDownMenu: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
