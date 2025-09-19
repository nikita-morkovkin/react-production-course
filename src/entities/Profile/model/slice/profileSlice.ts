import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: '',
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
