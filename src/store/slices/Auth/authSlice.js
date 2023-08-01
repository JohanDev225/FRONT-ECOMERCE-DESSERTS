import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'not-authenticated' | 'authenticated' | 'registered'
        uid: null,
        idUser: null,
        role: null,
        expired: false,
        message: {
            type: null,
            text: null,
        },
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.uid = payload.token;
            state.idUser = payload.id;
            state.role = payload.role;
            state.expired = payload.expired;
            state.message = {
                type: 'login-success',
                text: payload.message,
            };
        },
        register: (state, {payload}) => {
            state.status = 'registered';
            state.message = {
                type: 'register-success',
                text: payload.message,
            };
        },
        userInfo: (state, {payload}) => {
            state.idUser = payload.idUser;
            state.role = payload.role;
            state.expired = payload.expired;
        },
        logout: (state) => {
            state.status = 'non-authenticated';
            state.uid = null;
            state.idUser = null;
            state.role = null;
            state.expired = false;
            state.message = {
                type: null,
                text: null,
            };
        },
        bad: (state, {payload}) => {
            state.status = 'error-form';
            state.message = {
                type: payload.type,
                text: payload.text,
            };
        }
    },
});

export const { login, register, userInfo, logout, bad } = authSlice.actions;