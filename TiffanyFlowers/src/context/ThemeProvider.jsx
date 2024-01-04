import React, {useState} from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

   

    const ejemplo = "Loreofficiis! Similique praesenti."

    return(
        <ThemeContext.Provider value={
            {
                darkMode,
                setDarkMode,
                toggleDarkMode,
                ejemplo
            }
        }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider