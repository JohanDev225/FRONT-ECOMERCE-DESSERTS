import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'checking' | 'not-authenticated' | 'authenticated'
        uid: null,
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.uid = payload.uid
        },
        logout: (state) => {
            state.status = 'non-authenticated';
            state.uid = null
        },
    },
});

export const { login, logout } = authSlice.actions;