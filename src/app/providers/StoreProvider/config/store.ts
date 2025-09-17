import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
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
    };

    const reducerManager = createReducerManager(rootReduces);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: isDev,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
