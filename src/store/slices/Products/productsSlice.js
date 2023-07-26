import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        desserts: [],
        dessert: {},
    },
    reducers: {
        products: (state, {payload}) => {
            state.desserts = payload;
        },
        product : (state, {payload}) => {
            state.dessert = payload;
        }
    },
});

export const { products, product } = productsSlice.actions;