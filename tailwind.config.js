module.exports = {
  content: ["./*.html", "./**/*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00bcd4",
          light: "#00e5ff",
        },
      },
      borderRadius: {
        xl: "12px",
      },
    },
    extend: {
      animation: {
        fade: "fadeIn 0.8s ease-in",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },

          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
    extend: {
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
