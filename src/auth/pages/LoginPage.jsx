import { useDispatch, useSelector } from 'react-redux'
import { Formik } from "formik";

import LayoutAuth from "../layout/LayoutAuth";
import { signIn } from '../../store';




const LoginPage = () => {
  const assetsPath = import.meta.env.VITE_ASSETS_AUTH;


  const dispatch = useDispatch()
  const { message } = useSelector(state => state.auth)


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
            Sign in to your account
          </h2>
        </div>
        {message && <div className="text-red-500 text-center">{message}</div>}
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
              dispatch(signIn(values))
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
                  <a href="#" className="font-semibold text-cyanLight hover:text-opacity-80">
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
      </div>
    </LayoutAuth>
  );
};

export default LoginPage;
