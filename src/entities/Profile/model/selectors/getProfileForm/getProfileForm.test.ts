import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileData selector', () => {
    test('should return profile data', () => {
        const data = {
            first: 'John',
            lastname: 'Doe',
            age: 30,
            city: 'New York',
            username: 'johndoe',
            avatar: 'https://example.com/avatar.jpg',
            currency: Currency.RUB,
            country: Country.Russia,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: {
                    first: 'John',
                    lastname: 'Doe',
                    age: 30,
                    city: 'New York',
                    username: 'johndoe',
                    avatar: 'https://example.com/avatar.jpg',
                    currency: Currency.RUB,
                    country: Country.Russia,
                },
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
