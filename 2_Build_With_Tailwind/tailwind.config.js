/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.html'],
  theme: {
    extend: {
      /* <-- Custom Styling --> */
        fontFamily: {
          poppin: ['Poppins', 'sans-serif'],
        },
        backgroundColor:{
          'black-l-1': 'rgb(9, 9, 9)',
          'black-l-2': 'rgb(9, 10, 10)',
        },
        height:{
          fit: 'fit-content',
        },
        width:{
          fit: 'fit-content'
        },
        boxShadow:{
          'black-100': '0 2px 4px rgba(0, 0, 0, .7)', 
        },
        keyframes:{
          movedown:{
            '0%':{ transform: 'translateY(0)'},
            '100%':{ transform: 'translateY(-936px)'},
          },
          moveup:{
            '0%':{ transform: 'translateY(0)'},
            '100%':{ transform: 'translateY(936px)'},
          },
          moveright:{
            '0%':{ left: '-90%' },
            '100%':{ left: '300%' }
          },
        },
        animation:{
          movedown: 'movedown 29s linear infinite',
          moveup: 'moveup 29s linear infinite',
          moveright: 'moveright 5s linear infinite',
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
        // Shadow::Before & ::After
        '.shadow-before': { '&::before': { content: '""', 'box-shadow': 'inset 0 23px 18px rgba(9, 9, 11)', height: '30px', width: '100%', position: 'absolute', top: '-7px', left: '0', right: '0', 'z-index': '3'}},
        '.shadow-after': { '&::after': { content: '""', 'box-shadow': 'inset 0 -23px 18px rgba(9, 9, 11)', height: '30px', width: '100%', position: 'absolute', bottom: '-7px', left: '0', right: '0', 'z-index': '3'}},
        // Shadow::Before & ::After 

        // Move Div::Before & ::After 
        '.moveable-div-before': { '&::before': { content: '""', 'background-color': 'rgb(24 24 27)', height: '84%', width: '97%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 'border-radius': '1.5rem', 'z-index': '2'}},
        '.moveable-div-after': { '&::after': { content: '""', 'background-color': 'rgb(244, 244, 244)', height: '100%', width: '110%', position: 'absolute', top: '-60%', transform: 'rotate(-30deg) translate(-50%, -50%)', 'border-radius': '1.5rem', 'z-index': '1'}},
        // Move Div::Before & ::After 
      });
    },
  ],
}

