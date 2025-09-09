import {TypeTheme} from "../../ThemeProvider/types/themeProviderInterface";

export interface IUseThemeHook {
  theme: TypeTheme;
  toggleTheme: () => void;
}