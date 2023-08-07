import axios from "axios";
const base = import.meta.env.VITE_BASE_URL;
//const baseDev = import.meta.env.VITE_BASE_DEV_URL;


export const backApi = axios.create({
    baseURL: base,
});