import { backApi } from "../../../api/axiosApi";
import { logout, login, badCredentials } from "./authSlice"

export const signIn = (values) => {
    return async (dispatch) => {
        try {
            const {data} = await backApi.post('/signin', values);
            console.log(data);
            if (data.code === 400) {
                console.log('bad credentials');
                dispatch(badCredentials(data))
            }else{
            dispatch(login(data))
            //mantener la sesion
            localStorage.setItem('token', data.token);
            }
        } catch (error) {
           console.log(error); 
        }
    }
}

//funcion que obtiene el token del localstorage
export const isAuth = () => {
    return async (dispatch) => {
        try {   
            const token = localStorage.getItem('token');
            if (token) {
                const data = {token}
                dispatch(login(data))
            }
        } catch (error) {
        console.log(error);  
        }
    }
}

export const signOut = () => {
    return async (dispatch) => {
        try {
            localStorage.removeItem('token');
            dispatch(logout())
        } catch (error) {
            console.log(error);
        }
    }
}


