import {createContext} from "react";
import {TypeTheme} from "app/providers/ThemeProvider/ui/ThemeProvider";

export interface IThemeContext {
  theme: TypeTheme;
  setTheme: (theme: TypeTheme) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => {}
});