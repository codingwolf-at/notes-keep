import { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const prevTheme = localStorage.getItem('theme');
    setTheme(prevTheme);
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <themeContext.Provider value={{theme, setTheme}}>
      { children }
    </themeContext.Provider>
  )
}