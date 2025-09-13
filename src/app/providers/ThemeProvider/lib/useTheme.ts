import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import {LOCAL_STORAGE_THEME_KEY, TypeTheme} from "../ui/ThemeProvider";

export interface ThemeHook {
  theme: TypeTheme;
  toggleTheme: () => void;
}

const useTheme = (): ThemeHook => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {theme, toggleTheme};
};

export default useTheme;