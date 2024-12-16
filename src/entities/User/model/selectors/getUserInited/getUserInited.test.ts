import { StateSchema } from 'app/providers/StoreProvider';
import { getUserInited } from './getUserInited';

describe('getUserInited', () => {
    test('should return user inited false', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: false,
            },
        };
        expect(getUserInited(state as StateSchema)).toBe(false);
    });

    test('should return user inited true', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: true,
            },
        };
        expect(getUserInited(state as StateSchema)).toBe(true);
    });
});
