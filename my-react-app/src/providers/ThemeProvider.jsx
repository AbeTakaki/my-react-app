import { createContext, useState } from "react";

export const ThemeContext = createContext({});
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    setTheme((prevTheme) => 
      prevTheme === "light" ? "dark" : "light",
    );
  }

  return (
    <ThemeContext.Provider
      value={{ theme, onThemeToggle: handleThemeToggle}}
    >
      {children}
    </ThemeContext.Provider>
  )
}