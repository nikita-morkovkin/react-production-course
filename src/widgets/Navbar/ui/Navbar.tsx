import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import './Navbar.scss';
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({className}: INavbarProps) => {
  const {t} = useTranslation();

  return (
    <nav className={classNames('navbar', {}, [className])}>
      <div className={'links'}>
        <AppLink
          to={'/'}
          theme={AppLinkTheme.PRIMARY}
        >
          {t('mainLink')}
        </AppLink>

        <AppLink
          to={'about'}
          theme={AppLinkTheme.PRIMARY}
        >
          {t('aboutLink')}
        </AppLink>
      </div>
    </nav>
  );
};