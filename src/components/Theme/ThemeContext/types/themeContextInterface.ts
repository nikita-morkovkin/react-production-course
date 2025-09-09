import {TypeTheme} from "../../ThemeProvider/types/themeProviderInterface";

export interface IThemeContext {
  theme: TypeTheme;
  setTheme: (theme: TypeTheme) => void;
}