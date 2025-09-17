import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { memo, useCallback } from 'react';
import Input from 'shared/ui/Input/Input';
import DynamicModuleLoader, {
    ReducersList,
} from '../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import cls from './LoginForm.module.scss';

export interface LoginModalProps {
    className?: string;
}

// @ts-ignore
const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginModalProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader reducers={initialReducers}>
            <form className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('AuthForm')} />
                {error && <Text
                    text={error}
                    theme={TextTheme.ERROR}
                />}

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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
