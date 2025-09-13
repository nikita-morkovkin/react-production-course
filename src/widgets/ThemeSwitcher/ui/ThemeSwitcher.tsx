import React from 'react';
import useTheme from "../../../app/providers/ThemeProvider/lib/useTheme";
import LightIcon from '../../../shared/assets/icons/sun.svg';
import DarkIcon from '../../../shared/assets/icons/moon.svg';
import './ThemeSwitcher.scss';
import {Button} from "shared/ui/Button/Button";

const ThemeSwitcher = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={'className theme-switcher'}
    >
      {theme === 'light' ? <DarkIcon
        width={40}
        height={40}
      /> : <LightIcon
        width={40}
        height={40}
      />}
    </Button>
  );
};

export default ThemeSwitcher;