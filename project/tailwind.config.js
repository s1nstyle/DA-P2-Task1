module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "media",
    theme: {
      extend: {
        colors: {
          'black-rgba': 'rgba(0,0,0,0.7)',
        },
        animation: {
          fadeIn: "fadeIn 3s ease-in forwards",
          slideInFromTop: "slideInFromTop 1s ease-out forwards",
          slideInFromLeft: "slideInFromLeft 2s ease-out forwards"
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 }
          },
          slideInFromTop: {
            "0%": {
              transform: 'translateY(-100%)'
            },
            "100%": {
              transform: 'translateY(0)'
            }
          },
          slideInFromLeft: {
            "0%": {
              transform: 'translateX(-100%)'
            },
            "100%": {
              transform: 'translateX(0)'
            }
          }
          
        }
      },
    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
      animation: ["motion-safe"]
    },
    plugins: [
      require('daisyui'),
      require("@tailwindcss/typography")
    ],
    daisyui: {
      styled: true,
      // TODO: Theme needs works
      themes: [
        {
          'solana': {                          /* your theme name */
            fontFamily: {
              display: ['PT Mono, monospace'],
              body: ['Inter, sans-serif'],
            },
            'primary': '#2a2a2a',           /* Primary color */
            'primary-focus': '#9945FF',     /* Primary color - focused */
            'primary-content': '#ffffff',   /* Foreground content color to use on primary color */
  
            'secondary': '#f6d860',         /* Secondary color */
            'secondary-focus': '#f3cc30',   /* Secondary color - focused */
            'secondary-content': '#ffffff', /* Foreground content color to use on secondary color */
  
            'accent': '#33a382',            /* Accent color */
            'accent-focus': '#2aa79b',      /* Accent color - focused */
            'accent-content': '#ffffff',    /* Foreground content color to use on accent color */
  
            'neutral': '#2b2b2b',           /* Neutral color */
            'neutral-focus': '#2a2e37',     /* Neutral color - focused */
            'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */
  
            'base-100': '#181818',          /* Base color of page, used for blank backgrounds */
            'base-200': '#35363a',          /* Base color, a little darker */
            'base-300': '#222222',          /* Base color, even more darker */
            'base-content': '#f9fafb',      /* Foreground content color to use on base color */
  
            'info': '#2094f3',              /* Info */
            'success': '#009485',           /* Success */
            'warning': '#ff9900',           /* Warning */
            'error': '#ff5724',             /* Error */
          },
        },
        // backup themes:
        // 'dark',
        // 'synthwave'
      ],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
    },
  }