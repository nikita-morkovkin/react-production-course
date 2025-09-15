import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounter()', () => {
    test('should return the correct counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 0 },
        };

        expect(getCounter(state as StateSchema)).toEqual({ value: 0 });
    });
});
