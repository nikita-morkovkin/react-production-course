import React from 'react';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import './LangSwitcher.scss';

const LangSwitcher = () => {
  const {t, i18n} = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button
      className={'lang-switcher'}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
      type="button"
    >
      {t('langSwitcher')}
    </Button>
  )
};

export default LangSwitcher;