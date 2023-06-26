import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const resoponse = await axios.post<User>('http://localhost:8000/login', authData);

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(resoponse.data));
            thunkAPI.dispatch(userActions.setAuthUser(resoponse.data));

            if (!resoponse.data) {
                throw new Error();
            }

            return resoponse.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
