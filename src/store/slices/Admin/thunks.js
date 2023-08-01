import { backApi } from "../../../api/axiosApi";
import { statusProduct } from "../Products";
import { orders } from "./adminSlice";

export const getListOrders = () => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().auth;
            const { data } = await backApi.get(`/orders`,{
                headers: {
                    'Authorization': `${uid}`
                }
            });
            dispatch(orders(data));
        } catch (error) {
            const msj = {
                type: 'error',
                text: 'Error getting orders list'
            }
            dispatch(statusProduct(msj));
        }
    }
}

export const updateOrder = (id, status) => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().auth;
            await backApi.put(`/update-order/${id}`, {
                status
            },{
                headers: {
                    'Authorization': `${uid}`
                }
            });
            const msj = {
                type: 'u-order',
                text: 'Order updated successfully'
            }
            dispatch(statusProduct(msj));
            dispatch(getListOrders());
        } catch (error) {
            const msj = {
                type: 'error',
                text: 'Error updating order'
            }
            dispatch(statusProduct(msj));
        } 
    }
}

export const deleteOrder = (id) => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().auth;
            await backApi.delete(`/delete-order/${id}`,{
                headers: {
                    'Authorization': `${uid}`
                }
            });
            const msj = {
                type: 'd-order',
                text: 'Order deleted successfully'
            }
            dispatch(statusProduct(msj));
            dispatch(getListOrders());
        } catch (error) {
            console.log();
            const msj = {
                type: 'error',
                text: error.response.data.error
            }
            dispatch(statusProduct(msj));
        }
    }
}