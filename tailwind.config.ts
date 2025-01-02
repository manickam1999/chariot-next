import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                pulseShadow: {
                    "0%": {
                        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.4)",
                    },
                    "70%": {
                        boxShadow: "0 0 0 20px rgba(0, 0, 0, 0)",
                    },
                    "100%": {
                        boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
                    },
                },
            },
            animation: {
                pulseShadow: "pulseShadow 0.75s infinite",
            },
            colors: {
                primary: {
                    "0": "#FFFFFF",
                    "50": "#F3EEF6",
                    "100": "#E6DCEE",
                    "150": "#DACBE5",
                    "200": "#CDB9DC",
                    "250": "#C1A8D4",
                    "300": "#B497CB",
                    "350": "#A885C2",
                    "400": "#9B74B9",
                    "450": "#8F62B1",
                    "500": "#8251A8",
                    "550": "#754997",
                    "600": "#684186",
                    "650": "#5B3976",
                    "700": "#4E3165",
                    "750": "#412954",
                    "800": "#342043",
                    "850": "#271832",
                    "900": "#1A1021",
                    "950": "#0D0811",
                    "1000": "#000000",
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                dark_inversed: {
                    "0": "#000000",
                    "50": "#0D0811",
                    "100": "#1A1021",
                    "150": "#271832",
                    "200": "#342043",
                    "250": "#412954",
                    "300": "#4E3165",
                    "350": "#5B3976",
                    "400": "#684186",
                    "450": "#754997",
                    "500": "#8251A8",
                    "550": "#8F62B1",
                    "600": "#9B74B9",
                    "650": "#A885C2",
                    "700": "#B497CB",
                    "750": "#C1A8D4",
                    "800": "#CDB9DC",
                    "850": "#DACBE5",
                    "900": "#E6DCEE",
                    "950": "#F3EEF6",
                    "1000": "#FFFFFF",
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
