import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        desserts: [],
        dessert: {},
        message: {
            type: null,
            text: null,
        },
    },
    reducers: {
        products: (state, {payload}) => {
            state.desserts = payload;
        },
        product : (state, {payload}) => {
            state.dessert = payload;
        },
        statusProduct: (state, {payload}) => {
            state.message = {
                type: payload.type,
                text: payload.text,
            };
        }
    },
});

export const { products, product, statusProduct } = productsSlice.actions;