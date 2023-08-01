import { backApi } from "../../../api/axiosApi";
import { products, product, statusProduct } from "./productsSlice"
import { getCart } from "../Cart/thunks";

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
            dispatch(product(data));
        } catch (error) {
            console.log(error);
        }
    }
}

export const createProduct = (values) => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().auth;
            await backApi.post(`/create-dessert`, values ,{
                headers: {
                  'Authorization': `${uid}` 
                }
              });
        } catch (error) {
            console.log(error);
        } finally {
            const { data } = await backApi.get('/deserts');
            dispatch(products(data));
        }
    }
}

export const updateProduct = (id, values) => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().auth;
            await backApi.put(`/update-dessert/${id}`, values ,{
                headers: {
                  'Authorization': `${uid}` 
                }
              });
              const message = {
                type: 'edit',
                text: 'Product updated successfully',
              };
            dispatch(statusProduct(message));
        } catch (error) {
            console.log(error);
        } finally {
            const { data } = await backApi.get('/deserts');
            dispatch(products(data));
        }
    }
}

export const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        try {
            const { uid } = getState().auth;
            await backApi.delete(`/delete-dessert/${id}`,{
                headers: {
                  'Authorization': `${uid}` 
                }
              });
              const message = {
                type: 'delete',
                text: 'Product deleted successfully',
              };
            dispatch(statusProduct(message));
        } catch (error) {
            console.log(error);
        } finally {
            const { data } = await backApi.get('/deserts');
            dispatch(products(data));
        }
    }
}

export const wishProduct = (values) => {
    return async (dispatch, getState) => {
        try {
            const { uid, idUser } = getState().auth;
            await backApi.post(`/user/${idUser}/wishlist`, values ,{
                headers: {
                  'Authorization': `${uid}` 
                }
              });  
              const message = {
                type: 'wish-done',
                text: 'Product Wished successfully',
              };
            dispatch(getCart());
            dispatch(statusProduct(message));
        } catch (error) {
            if (error.response.status === 400) {
                const message = {
                    type: 'wish-error',
                    text: 'Product already wished',
                };
                dispatch(statusProduct(message));
            }
        } finally {
            setTimeout(() => {
            const message = {
                type: null,
                text: null,
              };
                dispatch(statusProduct(message));
            }, 1000);
        }
    }
}
