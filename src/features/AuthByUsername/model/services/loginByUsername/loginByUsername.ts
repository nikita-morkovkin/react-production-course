import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            dispatch,
        } = thunkAPI;

        try {
            // @ts-ignore
            const response = await extra.api<User>('/login', authData);
            if (!response.data) {
                throw new Error(response.statusText);
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
