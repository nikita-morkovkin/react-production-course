import {ReactNode} from "react";

export type TypeTheme = 'light' | 'dark';

export interface IThemeProvider {
  children: ReactNode;
}