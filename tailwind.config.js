/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0056b3', // Un azul industrial premium sugerido
                    dark: '#003d7a',
                    light: '#3378c2',
                },
                secondary: {
                    DEFAULT: '#1f2937',
                    dark: '#111827',
                },
                // FONDOS DE SECCIONES (Editables en src/index.css)
                'solutions': 'var(--bg-solutions)',
                'valueprop': 'var(--bg-valueprop)',
                'process': 'var(--bg-process)',
                'tech': 'var(--bg-tech)',
                'projects': 'var(--bg-projects)',
                'contact': 'var(--bg-contact)',
                'nav-scrolled': 'var(--bg-navbar)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
