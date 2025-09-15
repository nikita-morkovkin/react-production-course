import { counterReducer, decrement, increment } from 'entities/Counter/model/slice/counterSlice';
import { DeepPartial } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';

describe('counterSlice', () => {
    test('decrement test', () => {
        const state: DeepPartial<CounterSchema> = { value: 10 };

        expect(counterReducer(state as CounterSchema, decrement()))
            .toEqual({ value: 9 });
    });
    test('increment test', () => {
        const state: DeepPartial<CounterSchema> = { value: 10 };

        expect(counterReducer(state as CounterSchema, increment()))
            .toEqual({ value: 11 });
    });
    test('empty state test', () => {
        expect(counterReducer(undefined, increment()))
            .toEqual({ value: 1 });
    });
});
