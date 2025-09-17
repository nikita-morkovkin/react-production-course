import axios from 'axios';
import { Dispatch } from 'react';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('AuthByUsername', () => {
    let dispatch: Dispatch<any>;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success server answer', async () => {
        const userValue = {
            username: 'username',
            id: '1',
        };

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const action = loginByUsername({
            username: 'username',
            password: 'password',
        });

        const result = await action(dispatch, getState, undefined);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    });

    test('server returns 404 error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 404 }));

        const action = loginByUsername({
            username: 'username',
            password: 'password',
        });

        const result = await action(dispatch, getState, undefined);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
