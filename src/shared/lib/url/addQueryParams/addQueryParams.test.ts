import { getQueryParams } from './addQueryRarams';

describe('addQueryParams.test', () => {
    test('called with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });

        expect(params).toBe('?test=value');
    });
    test('called with multiple params', async () => {
        const params = getQueryParams({
            test: 'value',
            test2: 'value2',
        });

        expect(params).toBe('?test=value&test2=value2');
    });
    test('called with multiple params', async () => {
        const params = getQueryParams({
            test: 'value',
            test2: undefined,
        });

        expect(params).toBe('?test=value');
    });
});
