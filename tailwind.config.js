/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./src/styles/utils.css"],
  theme: {
    extend: {
      // Font size
      fontSize: {
        xs: ["0.75rem", "1rem"], // text-xs: Font Size: 0.75rem | Line Height: 1rem
        sm: ["0.875rem", "1.25rem"], // text-sm: Font Size: 0.875rem | Line Height: 1.25rem
        lg: ["1.125rem", "1.75rem"], // text-lg: Font Size: 1.125rem | Line Height: 1.75rem
        xl: ["1.25rem", "1.75rem"], // text-xl: Font Size: 1.25rem | Line Height: 1.75rem
        "2xl": ["1.5rem", "2rem"], // text-2xl: Font Size: 1.5rem | Line Height: 2rem
        "6xl": ["3.75rem", "3.75rem"], // text-6xl: Font Size: 3.75rem | Line Height: 3.75rem
        "7xl": ["4.5rem", "4.5rem"], // text-7xl: Font Size: 4.5rem | Line Height: 4.5rem
        "8xl": ["6rem", "6rem"] // text-8xl: Font Size: 6rem | Line Height: 6rem
      },
      // Font families
      fontFamily: {
        sans: [
          "Open Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji"
        ]
      },
      // Colors
      colors: {},
      // Shadow boxes
      boxShadow: {
        "inner-light": "inset 0 -3px 0 #3ee997"
      },
      // Containers max widths
      maxWidth: {
        container: "var(--max-container-width)"
      },
      // Breakpoints for media queries
      screens: {
        xs: "478px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1900px"
      }
    },
    plugins: []
  }
}
