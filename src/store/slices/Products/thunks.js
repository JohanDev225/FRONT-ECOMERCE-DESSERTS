import { backApi } from "../../../api/axiosApi";
import { products } from "./productsSlice"

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const { data } = await backApi.get('/deserts');
            dispatch(products(data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const getProductById = (id) => {
    return async (dispatch) => {
        try {
    
            const { data } = await backApi.get(`/desert/${id}`);
            dispatch(products(data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const createProduct = (values) => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().auth;
            const { data } = await backApi.get(`/create-dessert`, values ,{
                headers: {
                  'Authorization': `Basic ${uid}` 
                }
              });
            dispatch(products(data));
        } catch (error) {
            console.log(error);
        }
    }
}