/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                accent: "var(--accent)",
                muted: "var(--muted)",
                foreground: "var(--foreground)",
                button: {
                    foreground: "var(--button-foreground)",
                    background: "var(--button-background)",
                },
            },
        },
    },
    plugins: [],
};
