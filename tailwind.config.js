/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blue-default" : "#1D9BF0",
        "blue-hover" : "#1871CA",
        "blue-disabled" : "#1E5D87",
        "blue-wash" : "rgba(117, 190, 239, 0.20)",
        "button-stroke" : "#546A7A",
        "searchbar-fill" : "#212327",
        "card-fill" : "#16181C",
        "success" : "#00BE74",
        "error" : "#8B141A",
        "background" : "#40596A",
        "neutral-50" : "#F9F9F9",
        "neutral-100" : "#F4F4F4",
        "neutral-200" : "#E4E4E4",
        "neutral-300" : "#D3D3D3",
        "neutral-400" : "#A2A2A2",
        "neutral-500" : "#737373",
        "neutral-600" : "#525252",
        "neutral-700" : "#404040",
        "neutral-800" : "#262626",
        "neutral-900" : "#171717",
        "neutral-950" : "#0A0A0A",
        "neutral-1000" : "#000"
      },
      fontSize: {
        "48px" : "48px",
        "31px" : "31px",
        "26px" : "26px",
        "24px" : "24px",
        "20px" : "20px",
        "19px" : "19px",
        "17px" : "17px",
        "16px" : "16px",
        "15px" : "15px",
        "14px" : "14px",
        "13px" : "13px",
        "12px" : "12px",
        "10px" : "10px"
      },
      fontFamily: {
        "inter" : [ 'Inter', 'sans-serif']
      },
      boxShadow: {
        "box" : "0px 8px 16px 0px rgba(0, 0, 0, 0.25)"
      },
      width: {
        "334px" : "20.875rem",
        "85px" : "5.3125rem",
        "442px" : "27.625rem",
        "100px" : "6.25rem",
        "222px" : "13.875rem",
        "84px" : "5.25rem",
        "598px" : "37.375rem",
        "426px" : "26.625rem",
        "348px" : "21.75rem",
        "512px" : "32rem",
        "355px" : "22.1875rem",
        "482px" : "30.125rem",
      },
      height: {
        "35px" : "2.1875rem",
        "33px" : "2.0625rem",
        "43px" : "2.6875rem",
        "29px" : "1.8125rem",
        "49px" : "3.0625rem",
        "59px" : "3.6875rem",
        "38px" : "2.375rem",
        "3px" : "0.1875",
        "335px" : "20.9375rem",
        "223px" : "13.9375rem",
        "143px" : "8.9375rem",
        "19px" : "1.1875rem",
        "133px" : "8.3125rem",
        "41px" : "2.5625rem"
      },
      borderRadius: {
        "65px" : "4.0625rem",
        "30px" : "1.875rem",
      },
      padding: {
        "15px" : "0.9375rem",
        "93px" : "5.8125rem"
      },
      gap: {
        "15px" : "0.9375rem",
        "5px" : "0.3125rem"
      },
      fontSize: {
        "15px" : ['15px', '22px'],
      }
    },
  },
  plugins: [],
}
