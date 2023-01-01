
/** @type {import('tailwindcss').Config} */
export default {
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
        theme : "#FF8A1C" ,
        primary : "#FFFFFF", 
        secondary : "#0D0A0D" ,
        tertiary : "#3F4143", //border
        quaternary : "#222426" , // header
        background : "#24130E" , // index.jss background 
        senary : "#141316" , // profile box
        textSecondary : "#B3B6B9"
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
      }
    },
  },
  plugins: [],
}


