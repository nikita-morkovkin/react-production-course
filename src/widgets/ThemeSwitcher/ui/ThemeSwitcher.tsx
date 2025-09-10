import React from 'react';
import useTheme from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import LightIcon from 'shared/assets/icons/sun.svg';
import DarkIcon from 'shared/assets/icons/moon.svg';
import './ThemeSwitcher.scss';
import {Button} from "shared/ui/Button/Button";

interface IThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({className}: IThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames('theme-switcher', {}, [className])}
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