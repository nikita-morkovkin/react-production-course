import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import StoreProvider from 'app/providers/StoreProvider/ui/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider';
import App from './app/App';
import 'app/styles/index.scss';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

const initialState: StateSchema = {
    counter: {
        value: 100,
    },
};

render(
    <StoreProvider initialState={initialState}>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
