import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema;
}

const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    return (
        <Provider store={createReduxStore(initialState as StateSchema)}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
