import {ReactNode, useMemo, useState} from "react";
import {ThemeContext} from "../lib/ThemeContext";

export type TypeTheme = 'light' | 'dark';

export interface IThemeProvider {
  children: ReactNode;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TypeTheme || 'light';

const ThemeProvider = ({children}: IThemeProvider) => {
  const [theme, setTheme] = useState<TypeTheme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme: setTheme,
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;