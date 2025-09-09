import {createContext} from "react";
import {IThemeContext} from "./types/themeContextInterface";

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => {}
});