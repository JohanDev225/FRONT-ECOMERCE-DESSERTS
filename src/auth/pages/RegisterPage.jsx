import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LayoutAuth from "../layout/LayoutAuth";
import { toast } from "react-toastify";
import { FormRegister } from "../components";

const RegisterPage = () => {
  const assetsPath = import.meta.env.VITE_ASSETS_AUTH;

  const navigate = useNavigate();

  const { status, message } = useSelector((state) => state.auth);

  useEffect(() => {
    //redireccionar al home
    if (status === "registered") {
      navigate("/auth/login", { replace: true });
    }
  }, [status, navigate]);


  return (
    <LayoutAuth>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-32 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={`${assetsPath}/logo.svg`}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-darkOrange">
            Sign Up in our platform to get a carv
          </h2>
        </div>
        {message &&
          message.type === "register" &&
          toast(message.text, { type: "error" })}
        {message && message.type === "register-success" && toast(message.text)}
        <FormRegister />
      </div>
    </LayoutAuth>
  );
};

export default RegisterPage;
