import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            number: '2',
        });

        expect(params).toBe('?test=value&number=2');
    });
    test('test with undefined', () => {
        const params = getQueryParams({});
        expect(params).toBe('?');
    });
});
