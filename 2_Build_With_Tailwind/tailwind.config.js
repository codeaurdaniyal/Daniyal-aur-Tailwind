/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.html'],
  theme: {
    extend: {
      /* <-- Custom Styling --> */
        
        // Custom Screen Sizes
        screens: {
          '7xsm': '426px',
          '6xsm': '489px',
          '5xsm': '561px',
          '4xsm': '635px',
          '3xsm': '734px',
          '2xsm': '808px',
          'xsm': '900px',
          'sm': '1000px',
          'md': '1206px',
          'lg': '1322px',
          'xl': '1280px',
          '2xl': '1366px'
        },

        // Normal Styling 
        colors:{
          'black-c-l-1': 'var(--black-l-dark-3)',
          'black-c-l-contant-1': 'var(--l-black-contant)',
          'white-contant-1': 'var(--white-contant)',
          'color-zinc-900': 'var(--color-zinc-900)',
          'color-zinc-800': 'var(--color-zinc-800)',
          'slate-1-200': 'var(--slate-1-200)',
        },
        backgroundColor:{
          'background-color-zinc-850': 'var(--background-color-zinc-850)',
          'slate-1-200': 'var(--slate-1-200)',
          'black-bg-dark-light-1': 'var(--black-l-dark-1)',
          'black-bg-dark-light-2': 'var(--black-l-dark-2)',
          'black-bg-dark-light-3': 'var(--black-l-dark-3)',
          'black-bg-dark-light-4': 'var(--black-l-dark-4)',
          'black-bg-dark-light-5': 'var(--l-black-contant)',
          'navbar-background-c-l': 'var(--black-l-dark-5)',
          'black-l-dark-6-input-boxes': 'var(--black-l-dark-6-input-boxes)',
          'white-bg-l-opacity-0-7': 'var(--white-l-opacity-7)',
          'footer-top-bg': 'var(--footer-top-bg)',
          'footer-bottom-bg': 'var(--footer-bottom-bg)',
          'white-bg-l-opacity-0-1': 'var(--white-l-opacity-1)',
        },
        backgroundImage:{
          'custom-gradient-1': 'linear-gradient(90deg, var(--lg-l-blue), var(--lg-white-l-blue))',
          'custom-gradient-2': 'linear-gradient(90deg, var(--lg-white-l-blue) -190%, var(--lg-l-blue), var(--lg-white-l-blue) 140%)',
        },
        boxShadow:{
          'black-bs-1': '0 2px 3px var(--shadow-c-black-1)', 
          'black-bs-2': '0 4px 4px var(--shadow-c-black-2)',  
          'black-bs-3': '0 2px 2px var(--shadow-c-black-3)',  
          'black-bs-upper-1': 'inset 0 17px 14px var(--black-l-dark-1)',
          'black-bs-bottom-2': 'inset 0 -17px 14px var(--black-l-dark-1)',
        },
        height:{
          fit: 'fit-content',
        },
        width:{
          fit: 'fit-content',
        },
        fontFamily: {
          poppin: ['Poppins', 'sans-serif'],
        },
        rotate: {
          '180': '180deg'
        },
        fontWeight:{
          'weight-1': 'var(--weight-1)',
        },
        opacity:{
          'o-1': 'var(--opacity-1)',
          'o-2': 'var(--opacity-2)',
          'o-3': 'var(--opacity-3)',
        },
        keyframes:{
          movedown:{
            '0%':{ transform: 'translateY(0)'},
            '100%':{ transform: 'translateY(-936px)'},
          },
          moveup:{
            '0%':{ transform: 'translateY(0)'},
            '100%':{ transform: 'translateY(58.5rem)'},
          },
          moveright:{
            '0%':{ left: '-90%' },
            '100%':{ left: '300%' }
          },
          moveleft:{
            '0%':{ transform: 'translateX(0)' },
            '100%':{ transform: 'translateX(-148.4375rem)' }
          },
        },
        animation:{
          movedown: 'movedown 29s linear infinite',
          moveup: 'moveup 29s linear infinite',
          moveright: 'moveright 5s linear infinite',
          moveleft: 'moveleft 38s linear infinite',

        },
        transitionProperty: {
          'height': 'height',
          'transform': 'transform',
        },
        transitionDuration:{
          '10000': '1300ms'
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
        // Shadow for Larger Screen
        '.shadow-before-top-1': { '&::before': { content: '""', 'box-shadow': 'theme(boxShadow.black-bs-upper-1)', height: '30px', width: '100%', position: 'absolute', top: 0, rotate: '0deg', left: 0, 'z-index': 2}},
        '.shadow-after-bottom-2': { '&::after': { content: '""', 'box-shadow': 'theme(boxShadow.black-bs-bottom-2)', height: '30px', width: '100%', position: 'absolute', bottom: 0, rotate: '0deg', 'z-index': 2}},
        // Shadow for Larger Screen

        // Shadow for Smaller Screen
        '.shadow-before-right-1': {'box-shadow': 'inset -15px 0 12px var(--black-l-dark-1)', height: '100%', width: '18%', position: 'absolute', top: 0, left: '-1rem', rotate: 'theme(rotate.180)', 'z-index': 2},
        '.shadow-after-left-1': {'box-shadow': 'inset 15px 0 12px var(--black-l-dark-1)', height: '100%', width: '18%', position: 'absolute', bottom: 0, right: '-1rem', rotate: 'theme(rotate.180)', 'z-index': 2},
        // Shadow for Smaller Screen

        // Move Div::Before & ::After 
        '.moveable-div-before': { '&::before': { content: '""', 'background-color': 'theme(backgroundColor.black-bg-dark-light-4)', height: '84%', width: '97%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 'border-radius': '1.5rem', 'z-index': 2}},
        '.moveable-div-after': { '&::after': { content: '""', 'background-color': 'theme(backgroundColor.white-bg-l-opacity-0-1)', height: '100%', width: '110%', position: 'absolute', top: '-60%', transform: 'rotate(-30deg) translate(-50%, -50%)', 'border-radius': '1.5rem', 'z-index': 1}},
        // Move Div::Before & ::After

        // Visibility Hidden
        '.visibility-hidden': { visibility: 'hidden' },
        // Visibility Hidden

        // Justify Content
        '.justify-space-between': { 'justify-content': 'space-between' },
        // Justify Content

        // Behavior Smooth 
        '.behavior-smooth': { 'scroll-behavior': 'smooth' },
        // Behavior Smooth

        // Scrollbar Width
        '.scrollbar-width-none': { 'scrollbar-width': 'none' },
        // Scrollbar Width

        // Border Bottom
        '.border-bottom': { 'border-bottom': '2px solid var(--border-c-1)' },
        // Border Bottom

        // Border Top
        '.border-top': { 'border-top': '2px solid var(--border-c-1)' },
        // Border Top
      });
    },
  ],
}

