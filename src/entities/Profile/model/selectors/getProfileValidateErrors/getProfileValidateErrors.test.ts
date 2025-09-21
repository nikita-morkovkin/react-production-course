import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileData selector', () => {
    test('should return profile data', () => {
        const errors = [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.NO_DATA,
            ValidateProfileError.INCORRECT_COUNTRY,
        ];

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.NO_DATA,
                    ValidateProfileError.INCORRECT_COUNTRY,
                ],
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });

    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
