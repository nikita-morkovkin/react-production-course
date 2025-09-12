import {useTranslation} from "react-i18next";
import './NotFoundPage.scss';
import {useEffect} from "react";

const NotFoundPage = () => {
  const {t} = useTranslation();

  useEffect(() => {
    throw new Error();
  }, []);

  return (
    <div className={'not-found-page'}>
      <p>{t('notFoundPageText')}</p>
    </div>
  );
};

export default NotFoundPage;