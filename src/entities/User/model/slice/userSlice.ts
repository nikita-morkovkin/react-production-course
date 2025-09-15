import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {

};

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
