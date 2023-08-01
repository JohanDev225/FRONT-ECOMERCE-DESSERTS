import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        listOrders: [],
    },
    reducers: {
        orders: (state, {payload}) => {
            state.listOrders = payload;
        },
    },
});

export const { orders } = adminSlice.actions;