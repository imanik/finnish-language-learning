import React  from "react";
import { useState, useEffect, useContext, createContext } from "react";


type ThemeStyle = "light" | "dark" | "rainbow";

interface ThemeContextType  {
  
    theme: ThemeStyle,
    setTheme: React.Dispatch<React.SetStateAction<ThemeStyle>>;

}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


export const ThemeProvider = ({children}:{children: React.ReactNode}) => {

    const getInitialThemeStyle = () : ThemeStyle => {

        const stored = localStorage.getItem("ThemeStyle")
        return stored ? JSON.parse(stored) : "light"

    }

    
    
    const [theme, setTheme] = useState<ThemeStyle>(getInitialThemeStyle)

    useEffect(() => {
        localStorage.setItem("ThemeStyle", JSON.stringify(theme));
      }, [theme]);
    


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook for easy access in components
export function useTheme() {
 const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
   
}

