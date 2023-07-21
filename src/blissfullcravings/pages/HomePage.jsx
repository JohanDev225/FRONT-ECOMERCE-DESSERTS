import { Hero, Process } from "../components";
import { LayoutBF } from "../layouts";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { isAuth } from '../../store';

const HomePage = () => {
  //setear token
  const token = localStorage.getItem("token");

  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      dispatch(isAuth(token))
    }
  }, [token, dispatch])

  return (
    <>
      <LayoutBF>
        <Hero />
        <Process />
      </LayoutBF>
    </>
  );
};

export default HomePage;
