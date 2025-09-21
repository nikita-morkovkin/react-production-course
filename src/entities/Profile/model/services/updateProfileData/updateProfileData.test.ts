import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';

describe('updateProfileData.test', () => {
    test('updateProfileData works correctly', async () => {
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

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('updateProfileData validation error', async () => {
        const invalidData = {
            first: '',
            lastname: '',
            age: 0,
            city: '',
            username: '',
            currency: Currency.RUB,
            country: Country.Russia,
        };

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: invalidData,
            },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
