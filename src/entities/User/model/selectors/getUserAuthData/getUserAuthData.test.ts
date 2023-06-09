import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
    test('should return userAuthData', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    name: 'admin',
                },
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual({
            id: '1',
            name: 'admin',
        });
    });
});
