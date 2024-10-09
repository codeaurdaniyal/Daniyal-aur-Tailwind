/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      /* <-- Custom Styling --> */
        fontFamily: {
          poppin: ['Poppins', 'sans-serif'],
        },
        height:{
          fit: "fit-content",
        },
        width:{
          fit: "fit-content"
        },
        boxShadow:{
          'black-100': '0 2px 4px rgba(0, 0, 0, .7)', 
        },
        keyframe:{
          moveup:{
            "0%":{  },
          },
        },
        aspectRatio:{
          '1/2': '1/2',
        },
      /* <-- Custom Styling --> */
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': { 'scrollbar-width': 'none' },
        '.shadow-before': { '&::before': { content: "''", position: 'absolute', top: '-9px', left: '0', right: '0', height: '30px', width: '100%', 'box-shadow': 'inset 0 23px 18px rgba(9, 9, 11)'},
        },
        '.shadow-after': { '&::after': { content: "''", position: 'absolute', bottom: '-7px', left: '0', right: '0', height: '30px', width: '100%', 'box-shadow': 'inset 0 -23px 18px rgba(9, 9, 11)'},
        },
      });
    },
  ],
}

