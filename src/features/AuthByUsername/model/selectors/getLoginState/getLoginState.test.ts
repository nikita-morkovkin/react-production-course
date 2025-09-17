import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
                password: 'password',
                isLoading: true,
                error: 'error',
            },
        };

        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'username',
            password: 'password',
            isLoading: true,
            error: 'error',
        });
    });

    test('should return error with empty', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
