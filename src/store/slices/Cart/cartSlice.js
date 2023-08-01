import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        orders: [],
        message: {
            type: null,
            text: null,
        },
    },
    reducers: {
        cart: (state, {payload}) => {
            state.cart = payload;
        },
        orders: (state, {payload}) => {
            state.orders = payload;
        },
        statusCart: (state, {payload}) => {
            state.message = {
                type: payload.type,
                text: payload.text,
            };
        }
    },
});

export const { cart, orders, statusCart } = cartSlice.actions;