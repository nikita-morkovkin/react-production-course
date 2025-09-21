import { Profile, ValidateProfileError } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';

describe('validateProfileData.test', () => {
    test('validateData return empty array of errors', () => {
        const profile: Profile = {
            first: 'John',
            lastname: 'Doe',
            age: 30,
            city: 'New York',
            username: 'johndoe',
            avatar: 'https://example.com/avatar.jpg',
            currency: Currency.RUB,
            country: Country.Russia,
        };

        // Пустой массив ошибок так как профиль заполнен верно
        expect(validateProfileData(profile)).toEqual([]);
    });

    test('validateProfileData returns age error', () => {
        const profile: Profile = {
            first: 'John',
            lastname: 'Doe',
            age: undefined,
            city: 'New York',
            username: 'johndoe',
            avatar: 'https://example.com/avatar.jpg',
            currency: Currency.RUB,
            country: Country.Russia,
        };

        const errors: ValidateProfileError[] = [
            ValidateProfileError.INCORRECT_AGE,
        ];

        // Ошибка в виде возраста
        expect(validateProfileData(profile)).toEqual(errors);
    });

    test('validateProfileData returns lastname and firstname errors', () => {
        const profile: Profile = {
            first: undefined,
            lastname: undefined,
            age: 17,
            city: 'New York',
            username: 'johndoe',
            avatar: 'https://example.com/avatar.jpg',
            currency: Currency.RUB,
            country: Country.Russia,
        };

        const errors: ValidateProfileError[] = [
            ValidateProfileError.INCORRECT_USER_DATA,
        ];

        // Ошибка в виде имени и фамилии
        expect(validateProfileData(profile)).toEqual(errors);
    });

    test('validateProfileData returns country error', () => {
        const profile: Profile = {
            first: 'Nikita',
            lastname: 'Morkovkin',
            age: 17,
            city: 'New York',
            username: 'johndoe',
            avatar: 'https://example.com/avatar.jpg',
            currency: Currency.RUB,
            country: undefined,
        };

        const errors: ValidateProfileError[] = [
            ValidateProfileError.INCORRECT_COUNTRY,
        ];

        // Ошибка в виде некорректной страны
        expect(validateProfileData(profile)).toEqual(errors);
    });

    test('validateProfileData returns profile error', () => {
        let profile;

        const errors: ValidateProfileError[] = [
            ValidateProfileError.NO_DATA,
        ];

        // Ошибка в виде несуществующего профиля
        expect(validateProfileData(profile)).toEqual(errors);
    });
});
