/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-card":
          "url('https://www.mastercard.com/content/dam/public/mastercardcom/na/us/en/homepage/Home/mastercard-cards-1300x650.jpg')",
        "fac-img":
          "url('https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/images/woman-yellow-sweater-on-tablet-1300x650.jpg')",
        "oap-img":
          "url('https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/images/dad-and-son-looking-at-tablet-1300x6500.jpg')",
        "wap-pay":
          "url('https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/images/woman-tapping-card-at-grocery-store-1300x650.jpg')",
        "vision-img":
          "url('https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/people-crossing-wooden-bridge-720x810.jpg')",
        "vision-sec":
          "url('https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/colorful-wooden-blocks-1300x650.jpg')",
      },
    },
    fontFamily: {
      abc: ["Kumbh Sans", "sans - serif"],
      bcd: ["Raleway", "sans-serif"],
    },
    letterSpacing: {
      abc: "2px",
    },
  },
  plugins: [],
};
