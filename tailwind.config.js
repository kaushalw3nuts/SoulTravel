/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        },
        screens: {
					sm: "750px",
					md: "970px",
					lg: "1230px",
          xl: "1630px",
				},
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bebasneue: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        black: "#2E2E2E",
        orange: "#F77A40",
        hoverorange: "#F95A12",
        lightcolor: "#ABABAB",
        blacklight: "rgba(46, 46, 46, 0.5)",
      },
    },
  },
  plugins: [],
};
