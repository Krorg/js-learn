import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfile';
import { ValidateProfileError } from '../../consts/consts';

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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });
    test('without first and last name', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: 150,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
