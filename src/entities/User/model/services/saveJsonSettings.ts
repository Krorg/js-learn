import { createAsyncThunk } from '@reduxjs/toolkit';
import { JsonSettings } from '../types/jsonSettings';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
        return rejectWithValue('Нет данных пользователя');
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            })
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('Данные не были переданы');
        }

        return response.jsonSettings;
    } catch (error) {
        console.log(error);
        return rejectWithValue('');
    }
});
