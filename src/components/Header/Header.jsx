import React, {useContext} from "react";
import {ThemeContext} from "../../Context/ThemeContext";


const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <header className={`header ${theme}`}>
            <h1>Переключатель тем</h1>
            <button onClick={toggleTheme} className="theme-toggle">
                {theme === "light" ? "Темная тема" : "Светлая тема"}
            </button>
        </header>
    );
};

export default Header;
