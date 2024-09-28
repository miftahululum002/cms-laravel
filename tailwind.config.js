import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            // fontFamily: {
            //     sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            // },
            colors: {
                primary: "#06b6d4",
                secondary: "#64748b",
                dark: "#164e63",
            },
            screens: {
                "2xl": "1320px",
            },
        },
    },

    plugins: [forms],
};
