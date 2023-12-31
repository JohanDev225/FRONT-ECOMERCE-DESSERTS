/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import { Formik } from "formik";

import { signIn } from "../../store";
const FormLogin = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { status, message } = useSelector((state) => state.auth);

  useEffect(() => {
    //redireccionar al home
    if (status === "authenticated") {
      navigate("/", { replace: true });
    }
  }, [status]);

  return (
    <>
      {message &&
        message.type === "login" &&
        toast(message.text, { type: "error" })}
      {message && message.type === "login-success" && toast(message.text)}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
            dispatch(signIn(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            /* and other goodies */
          }) => (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="email"
                  type="email"
                  placeholder=" "
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accentGreen peer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  required
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email Address<span className="text-red-500">*</span>
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <div className="text-sm">
                  <input
                    name="password"
                    type="password"
                    placeholder=" "
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accentGreen peer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    required
                  />
                  <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password<span className="text-red-500">*</span>
                  </label>
                  <a
                    href="#"
                    className="font-semibold text-cyanLight hover:text-opacity-80"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                {errors.password && touched.password && errors.password}
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-cyanLight px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormLogin;
