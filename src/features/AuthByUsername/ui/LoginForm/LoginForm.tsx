import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginModalProps {
    className?: string;
}

const LoginForm = ({ className }: LoginModalProps) => {
    const { t } = useTranslation();

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autofocus
                className={cls.input}
                type="text"
                placeholder={t('Enter-username')}
            />

            <Input
                className={cls.input}
                type="password"
                placeholder={t('Enter-password')}
            />

            <button
                className={cls.loginBtn}
                type="button"
            >
                {t('Sign-in')}
            </button>
        </form>
    );
};

export default LoginForm;
