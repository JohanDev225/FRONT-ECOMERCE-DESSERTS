import { backApi } from "../../../api/axiosApi";
import { logout, register, userInfo, login, bad } from "./authSlice";
import { isExpired, decodeToken } from "react-jwt";

//funcion que registra un usuario en la base de datos
export const signUp = (values) => {
  return async (dispatch) => {
    try {
      const { data } = await backApi.post("/signup", values);
      if (data.code === "400") {
        const message = {
          type: "register",
          text: data.message,
        };
        dispatch(bad(message));
      } else {
        dispatch(register(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//funcion que hace el login y guarda el token en el localstorage
export const signIn = (values) => {
  return async (dispatch) => {
    try {
      const { data } = await backApi.post("/signin", values);
      if (data.code === "400") {
        const message = {
          type: "login",
          text: data.message,
        };
        dispatch(bad(message));
      } else {
        const infoUser = {
          token: data.token,
          role: decodeToken(data.token).role,
          expired: isExpired(data.token),
          message: data.message,
        };
        dispatch(login(infoUser));
        //mantener la sesion
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//funcion que obtiene la informacion del usuario
export const getUserInfo = (values) => {
  return async (dispatch) => {
    try {
      dispatch(userInfo(values));
    } catch (error) {
      console.log(error);
    }
  };
};

//funcion que obtiene el token del localstorage
export const isAuth = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const data = { token };
        dispatch(login(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// funcion que elimina el token del localstorage y cierra la sesion
export const signOut = () => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("token");
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
};
