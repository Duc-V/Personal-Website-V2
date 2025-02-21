/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        normal: 500,
      },
      keyframes : {
        slideDown: {
          "0%": { top: "-60px", transform: "scale(0.7)" },  // Start off-screen with smaller scale
          "50%": { top: "-30px", transform: "scale(0.9)" }, // Midway down with slightly larger scale
          "100%": { top: "1rem", transform: "scale(1)" }, 
        }
      }
    },
    animation: {
      slideDown: "slideDown 0.5s ease-out forwards", // Define animation
    },
  },
  plugins: [],
};
