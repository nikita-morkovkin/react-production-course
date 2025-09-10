import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import './Navbar.scss';
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({className}: INavbarProps) => {
  return (
    <nav className={classNames('navbar', {}, [className])}>
      <div className={'links'}>
        <AppLink
          to={'/'}
          theme={AppLinkTheme.PRIMARY}
        >
          Главная
        </AppLink>

        <AppLink
          to={'about'}
          theme={AppLinkTheme.PRIMARY}
        >
          О нас
        </AppLink>

        <ThemeSwitcher />
      </div>
    </nav>
  );
};