import { createContext,useContext } from "react"

const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {}, //here we don't give the defination just the decleration 
    lightTheme: () => {}
});

const ThemeProvider = ThemeContext.Provider;

function useTheme() {
    return useContext(ThemeContext);
}

export default useTheme;
export {ThemeProvider,ThemeContext};