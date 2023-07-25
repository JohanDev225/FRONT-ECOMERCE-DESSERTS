import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        desserts: [],
    },
    reducers: {
        products: (state, {payload}) => {
            state.desserts = payload;
        },
    },
});

export const { products } = productsSlice.actions;