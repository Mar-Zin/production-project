import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;
        try {
            const resoponse = await extra.api.post<User>('/login', authData);

            if (!resoponse.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(resoponse.data));
            dispatch(userActions.setAuthUser(resoponse.data));

            return resoponse.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
