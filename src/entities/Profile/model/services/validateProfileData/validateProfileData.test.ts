import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

const data = {
    first: 'admin',
    lastname: 'adminov',
    age: 29,
    city: 'Kazan',
    country: Country.RUSSIA,
    currency: Currency.RUB,
    username: 'admin',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('error first and lastname', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect city', async () => {
        const result = validateProfileData({ ...data, city: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test('incorrect username', async () => {
        const result = validateProfileData({ ...data, username: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_USERNAME,
        ]);
    });
});
