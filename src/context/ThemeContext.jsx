import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            <div className={`${isDark ? 'dark' : 'light'} transition-colors duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);