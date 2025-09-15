import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from 'entities/Counter';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

describe('Counter Component', () => {
    test('renders correctly', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('increment-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('decrement-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
