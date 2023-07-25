/* eslint-disable react-hooks/exhaustive-deps */
import LayoutAuth from "../layout/LayoutAuth";
import FormLogin from '../components/FormLogin';


const LoginPage = () => {
  const assetsPath = import.meta.env.VITE_ASSETS_AUTH;
  
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
        <FormLogin />
      </div>
    </LayoutAuth>
  );
};

export default LoginPage;
