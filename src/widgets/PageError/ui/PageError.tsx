import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import './PageError.scss'

const PageError = () => {
  const {t} = useTranslation();

  const reloadPage = () => {
    location.reload();
  }

  return (
    <div className={'page-error'}>
      <p>{t('error')}</p>

      <Button onClick={reloadPage} theme={ThemeButton.CLEAR}>
        {t('buttonRestart')}
      </Button>
    </div>
  );
};

export default PageError;