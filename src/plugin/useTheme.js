import React, { useEffect, useState } from "react";
export function useTheme() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
    };
    return {
        theme,
        toggleTheme,
    };
}
