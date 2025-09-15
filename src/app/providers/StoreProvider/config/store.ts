import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReduces: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore({
        reducer: rootReduces,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
