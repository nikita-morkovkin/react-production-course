import { ProfileSchema, updateProfileData, ValidateProfileError } from 'entities/Profile';
import { profileReducer, profileActions } from 'entities/Profile/model/slice/profileSlice';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

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

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ city: 'Moscow' }),
        )).toEqual({
            data,
            form: {
                city: 'Moscow',
                username: '',
            },
        });
    });

    test('text profile pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: undefined,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
            error: undefined,
        });
    });

    test('text profile fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            ValidateProfileError: undefined,
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });
});
