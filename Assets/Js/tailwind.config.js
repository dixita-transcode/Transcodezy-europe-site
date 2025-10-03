tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#0094EE', // Primary brand color (logo, buttons, highlights)
        gradientStart: '#FFFFFF00', 
        gradientEnd: '#F6F6F7F5',   
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1280px',
          xl: '1280px',
          xxl:"1440px",
        },
      },
  
    },
  },
  plugins: [],
}