import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const data = {
    username: 'Nagibator228',
    first: 'Вася',
    lastname: 'Пупкин',
    age: 11,
    country: Country.Russia,
    city: 'Podolsk',
    currency: Currency.RUB,
    avatar: 'https://www.kindpng.com/picc/m/456-4569194_ninja-png-image-ninja-avatar-transparent-png.png',
};

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
