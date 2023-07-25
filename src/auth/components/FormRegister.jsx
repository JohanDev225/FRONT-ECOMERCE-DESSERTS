import { useDispatch } from 'react-redux'

import { Formik } from "formik";
import * as Yup from 'yup';

import { signUp } from '../../store';

const FormRegister = () => {
    
  const dispatch = useDispatch()

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      });

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={SignupSchema}

      onSubmit={(values) => {
        dispatch(signUp(values))
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
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accentGreen peer"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre y Apellido<span className="text-red-500">*</span>
            </label>
            {errors.name && <div className="text-red-500">{errors.name}</div>}
          </div>
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
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>

          <div className="relative z-0 w-full mb-6 group">
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
            {errors.password && <div className="text-red-500">{errors.password}</div>}
          </div>

          <div>
            {errors.password && touched.password && errors.password}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-cyanLight px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      )}
    </Formik>
  </div>
  )
}

export default FormRegister