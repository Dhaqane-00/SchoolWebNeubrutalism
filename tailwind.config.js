/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-97": "#fff5f0",
        "absolute-white": "#fff",
        "grey-15": "#262626",
        "grey-40": "#656567",
        "orange-90": "#ffdecc",
        "grey-20": "#333",
        "grey-30": "#4c4c4d",
        "grey-10": "#1a1a1a",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e6d6cc",
        },
        dimgray: {
          "100": "#59595a",
          "200": "#595959",
          "300": "rgba(89, 89, 89, 0.09)",
        },
        "orange-95": "#ffefe6",
        black: "#000",
        "orange-75": "#ffae80",
        peru: "#cc7a4d",
        "orange-65": "#ff8d4d",
        "orange-80": "#ffbe99",
        "orange-99": "#fffcfa",
        "grey-301": "#4c4c4c",
        peachpuff: "#e6c4b3",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        raleway: "Raleway",
      },
      borderRadius: {
        "3xs": "10px",
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "15xl": "34px",
      "8xl": "27px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "5xl": "24px",
      lgi: "19px",
      "4xl": "23px",
      "11xl": "30px",
      lg: "18px",
      "25xl": "44px",
      "7xl": "26px",
      "16xl": "35px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
