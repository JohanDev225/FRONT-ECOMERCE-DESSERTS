import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'not-authenticated' | 'authenticated'
        uid: null,
        message: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.uid = payload.token;
            state.message = payload.message;
        },
        badCredentials: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.message = payload.message;
        },
        logout: (state) => {
            state.status = 'non-authenticated';
            state.uid = null;
        },
    },
});

export const { login, logout, badCredentials } = authSlice.actions;