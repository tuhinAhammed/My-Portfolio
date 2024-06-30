
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        container : "85%"
      },
      colors : {
        theme : 'var(--theme-color)', //#8128F6
        primary : "var(--color-primary)", 
        secondary : "var(--color-secondary)" ,
        tertiary : "var(--color-tertiary)", //border - #222426 , #3F4143
        quaternary : "var(--color-quaternary)", // header
        background : "var(--color-background)", // index.jss background 
        senary : "var(--color-senary)", // profile box
        textSecondary : "var(--color-text-secondary)",
        buttonTextColor : "var(--color-button-text-color)" // button text color
      },
      fontFamily : {
        primary: ['Kanit', 'sans-serif'],
      },
      fontSize : {
        extraSm : "12px" ,
        sm : "14px" ,
        base : "16px", // 16px
        lg : "18px",   // 18px
        xl: "20px",    // 20px
        "2xl" : "24px" ,
        "3xl" : "28px",
        "4xl" : "40px",
        "5xl" : "48px" ,
        "5xl" : "60px"
      },
      letterSpacing : {
        sm : "0.8px" ,
        lg : "1px"
      },
      keyframes: {
        leftToRight: {
          '0%, 100%': { transform: 'rotate(10deg)' ,},
          '50%': { transform: 'rotate(-10deg)' ,  },
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow' : 'pulse 10s linear infinite',
        'ping-slow' : 'ping 1s linear infinite',
        leftToRight : 'leftToRight 3s infinite'
      },
      boxShadow: {
        'header-shadow': 'rgb(255 255 255 / 10%) 3px 3px 6px 0px inset, rgb(255 255 255 / 10%) -3px -3px 6px 1px inset',
        'primary-shadow': 'rgb(255 255 255 / 4%) 3px 3px 6px 0px inset, rgb(255 255 255 / 4%) -3px -3px 6px 1px inset',
        'secondary-shadow': 'rgb(255 255 255 / 7%) 3px 3px 6px 0px inset, rgb(255 255 255 / 7%) -3px -3px 6px 1px inset',
      },
    },
  },
  plugins: [],
}


// opacity: 1;
// transform: translateZ(0) scale(1);