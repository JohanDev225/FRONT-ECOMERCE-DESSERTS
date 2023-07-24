import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'auth',
    initialState: {
        products: [],
    },
    reducers: {
        products: (state, {payload}) => {
            state.products = payload;
        },
    },
    });

    export const { login, register, userInfo, logout, bad } = productsSlice.actions;