import React, {createContext, useState} from "react";

const ThemeContext = createContext('light');

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light"); // Начальная тема

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeProvider};
