module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'Hero-section': "url('./img/hero-mobile_2021.webp')",
       }),
    padding:
    {
      four:"133%"
    },
    colors:
    {
      nav:"#1e3932",
      background:"#D4E9E2",
    },
    borderWidth:
    {
      '12':'12px'
    },
    width: {
    47.5:"11.875rem",
      140.25:"35.0625rem",
      81.25:"20.315rem"
    },
    margin:
    {
      53.4:"13.353rem",
    },
    fontSize:
    {
      14:"1.75rem",
      4.75:"1.1875rem"
    },
   letterSpacing: {
      widest: '0.15em',
    },
  },
},
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
}
