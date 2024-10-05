/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./src/styles/utils.css"],
  theme: {
    extend: {
      // Font size
      fontSize: {
        "text-xs": ["0.75rem", { lineHeight: "1rem", fontWeight: "700" }],
        "text-sm": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "600" }],
        "text-sm_eb": [
          "0.875rem",
          { lineHeight: "1.25rem", fontWeight: "800" }
        ],
        "text-lg": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "800" }],
        "text-lg_sb": [
          "1.125rem",
          { lineHeight: "1.75rem", fontWeight: "600" }
        ],
        "+text-xl": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "800" }],
        "+sb_text-xl": [
          "1.25rem",
          { lineHeight: "1.75rem", fontWeight: "600" }
        ],
        "+text-2xl": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        "button-2xl": ["1.5rem", { lineHeight: "2rem", fontWeight: "800" }],
        "+text-6xl": ["3.75rem", { lineHeight: "3.75rem", fontWeight: "800" }],
        "+text-7xl": ["4.5rem", { lineHeight: "4.5rem", fontWeight: "800" }],
        "+text-8xl": ["6rem", { lineHeight: "6rem", fontWeight: "800" }]
      },
      // Font families
      fontFamily: {
        sans: ["Open Sans", "Inter"]
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
