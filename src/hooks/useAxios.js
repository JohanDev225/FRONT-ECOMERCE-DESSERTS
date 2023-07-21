import {useState, useEffect, useRef} from 'react'
import axios from 'axios'

export const useAxios = (url, method, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const controllerRef = useRef(new AbortController());

    const base = import.meta.env.VITE_BASE_URL;

    const cancel = () => {
      controllerRef.current.abort();
    };

    const endUrl = `${base}${url}`;
  
    useEffect(() => {
      (async () => {
        try {
          const response = await axios.request({
            data: payload,
            signal: controllerRef.current.signal,
            method,
            endUrl,
          });
  
          setData(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoaded(true);
        }
      })();
    }, []);
  
    return { cancel, data, error, loaded };
  };