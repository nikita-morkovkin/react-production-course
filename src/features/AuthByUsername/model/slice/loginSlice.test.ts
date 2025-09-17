import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer, LoginSchema } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };

        const result = loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123123'),
        );

        expect(result.username).toBe('123123');
    });

    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };

        const result = loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123123'),
        );

        expect(result.password).toBe('123123');
    });
});
