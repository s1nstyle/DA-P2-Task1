module.exports = {
    mode: "jit",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media",
    theme: {
      extend: {
        colors: {
          'black-rgba': 'rgba(0,0,0,0.7)',
        },
        animation: {
          fadeIn: "fadeIn 3s ease-in forwards",
          slideInFromTop: "slideInFromTop 1s ease-out forwards",
          slideInFromLeft: "slideInFromLeft 2s ease-out forwards",
          pingSlow: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite"
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
    ],
    corePlugins: {
      preflight: false,
    }
  }