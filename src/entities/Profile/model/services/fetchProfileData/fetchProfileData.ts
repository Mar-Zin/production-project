import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const resoponse = await extra.api.get<Profile>('/profile');

            if (!resoponse.data) {
                throw new Error();
            }

            return resoponse.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
