import { ProfileSchema, ValidateProfileError } from 'entities/Profile/model/types/profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { IsLoading } from '../../../../features/AuthByUsername/ui/LoginForm/LoginForm.stories';
import { profileReducer, profileActions } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    first: 'admin',
    lastname: 'adminov',
    age: 29,
    city: 'Kazan',
    country: Country.RUSSIA,
    currency: Currency.RUB,
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('test setCancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, readonly: false };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setCancelEdit(),
        )).toEqual({
            readonly: true,
            data,
            form: data,
            validateErrors: undefined,
        });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: data };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ first: '123' }),
        )).toEqual({
            form: { ...data, first: '123' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {};

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            readonly: true,
            data,
            form: data,
        });
    });
});
