import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginModalProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginModalProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUsernameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePasswordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClickHandler = useCallback(() => {
        dispatch(loginByUsername({
            username,
            password,
        }));
    }, [dispatch, password, username]);

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('AuthForm')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}

            <Input
                autofocus
                className={cls.input}
                type="text"
                placeholder={t('Enter-username')}
                onChange={onChangeUsernameHandler}
                value={username}
            />

            <Input
                className={cls.input}
                type="password"
                placeholder={t('Enter-password')}
                onChange={onChangePasswordHandler}
                value={password}
            />

            <button
                className={cls.loginBtn}
                type="button"
                onClick={onLoginClickHandler}
                disabled={isLoading}
            >
                {t('Sign-in')}
            </button>
        </form>
    );
});

export default LoginForm;
