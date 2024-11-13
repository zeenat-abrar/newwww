import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";
const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "!./node_modules"],
  prefix: "",
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
    },
    fontSize: {
      sm: "0.875rem",
      // base: "1.25rem",
      base: "1rem",
      xl: "1.2rem",
      "2xl": "2rem",
      "4xl": "3.5rem",

      //Specifically for mobile
      mobileMegaHeading: "2.5rem",
      mobileHeading: "1.375rem",
      mobileSubHeading: "1rem",
      mobileParagraph: "0.875rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ivindigo: {
          100: "#f3f0ff",
          200: "#e5dbff",
          300: "#d0bfff",
          400: "#b197fc",
          500: "#9775fa",
          600: "#845ef7",
          700: "#7950f2",
          800: "#7048e8",
          900: "#6741d9",
          1000: "#5f3dc4",
        },
        ivviolet: {
          100: "#edf2ff",
          200: "#dbe4ff",
          300: "#bac8ff",
          400: "#91a7ff",
          500: "#748ffc",
          600: "#5c7cfa",
          700: "#4c6ef5",
          800: "#4263eb",
          900: "#3b5bdb",
          1000: "#364fc7",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        boom: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        boom: "boom 0.6s ease-in-out",
        fadeIn: "fadeIn 0.6s ease-in-out",
        "meteor-effect": "meteor 5s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        body: ["var(--font-sans)", ...fontFamily.sans],
        sans: ["var(--font-sans)", ...fontFamily.sans],
        secondary: ["var(--font-secondary)"],
      },
      backgroundImage: {
        card1: "radial-gradient(at center bottom, var(--indigo-3), var(--violet-2), var(--indigo-1))",
      },
    },
  },
  plugins: [
    animate,
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scroll-smooth": {
          "scroll-behavior": "smooth",
        },
      });
    }),
  ],
} satisfies Config;

export default config;
