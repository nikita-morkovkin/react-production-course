import {useContext} from "react";
import {ThemeContext} from "../ThemeContext/ThemeContext";
import {LOCAL_STORAGE_THEME_KEY} from "../ThemeProvider/ThemeProvider";
import {IUseThemeHook} from "./types/useThemeInterface";

const useTheme = (): IUseThemeHook => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {theme, toggleTheme};
};

export default useTheme;