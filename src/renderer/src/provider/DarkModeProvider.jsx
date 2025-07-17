import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    // Load initial value from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("dark-mode");
        if (saved === "true") setIsDarkMode(true);
        if (saved === "false") setIsDarkMode(false);
    }, []);

    // Apply/remove dark class + sync to localStorage
    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("dark-mode", isDarkMode.toString());
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export function useDarkMode() {
    return useContext(DarkModeContext);
}
