import { FC, lazy } from 'react';
import { LoginModalProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy<FC<LoginModalProps>>(() => import('./LoginForm'));
