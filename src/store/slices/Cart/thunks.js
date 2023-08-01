import { backApi } from "../../../api/axiosApi";
import { cart, orders, statusCart } from "./cartSlice"

export const getCart = (msj) => {
  return async (dispatch, getState) => {
    try {
      const { uid, idUser } = getState().auth;
      const { data } = await backApi.get(`/user/${idUser}/order`, {
        headers: {
          'Authorization': `${uid}`
        }
      });
      if (msj) {
        dispatch(statusCart(msj));
      } else {
        const message = {
          type: 'cart',
          text: 'Cart Filled successfully',
        };
        dispatch(statusCart(message));
      }
      dispatch(cart(data));

    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteWish = (id) => {
  return async (dispatch, getState) => {
    try {
      const { uid, idUser } = getState().auth;
      await backApi.delete(`/user/${idUser}/wishlist/${id}`, {
        headers: {
          'Authorization': `${uid}`
        }
      });
      dispatch(getCart());
    } catch (error) {
      console.log(error);
    } finally {
      const message = {
        type: 'cart',
        text: 'Wish deleted successfully',
      };

      dispatch(statusCart(message));
    }
  }
}

export const clearCart = () => {
  return async (dispatch, getState) => {
    try {
      const { uid, idUser } = getState().auth;
      await backApi.delete(`/user/${idUser}/wishlist`, {
        headers: {
          'Authorization': `${uid}`
        }
      });
      dispatch(getCart());
    } catch (error) {
      console.log(error);
    }
  }
}

export const createOrder = () => {
  return async (dispatch, getState) => {
    try {
      const { uid, idUser } = getState().auth;
      const { cart } = getState().cart;
      await backApi.post(`/create-order`, {
        id: idUser,
        products: cart.products,
        total: cart.total,
      }, {
        headers: {
          'Authorization': `${uid}`
        }
      });
      dispatch(getCart());
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(getOrders());
      dispatch(clearCart())
    }
  }
}

export const getOrders = () => {
  return async (dispatch, getState) => {
    try {
      const { uid, idUser } = getState().auth;
      const { data } = await backApi.get(`/orders/${idUser}`,{
        headers: {
          'Authorization': `${uid}`
        }
      });
      dispatch(orders(data));
    } catch (error) {
      console.log(error);
    }
  }
}

