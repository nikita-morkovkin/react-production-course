import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

interface CreateReduxStoreParams {
    initialState?: StateSchema;
    isDev?: boolean;
}

export const createReduxStore = ({
    initialState,
    isDev,
}: CreateReduxStoreParams) => {
    const rootReduces: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore({
        reducer: rootReduces,
        devTools: isDev,
        preloadedState: initialState,
    });
};
