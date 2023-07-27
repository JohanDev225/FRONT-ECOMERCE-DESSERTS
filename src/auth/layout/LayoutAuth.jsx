import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

const LayoutAuth = ({ children }) => {
  const assetsPath = import.meta.env.VITE_ASSETS_AUTH;
  let location = useLocation();

  return (
    <div>
      <header>
        <nav className="relative container mx-auto p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-20">
              <NavLink to="/">
                <img src={`${assetsPath}/logo.svg`} alt="" />
              </NavLink>
            </div>

            <div className="items-center space-x-6 font-bold text-graylight lg:flex">
              {location.pathname === "/auth/register" ? (
                <NavLink
                  to="/auth/login"
                  className="text-graylight hover:text-darkOrange"
                >
                  Login
                </NavLink>
              ) : (
                <NavLink
                  to="/auth/register"
                  className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:bg-cyanLight"
                >
                  Sign Up
                </NavLink>
              )}
            </div>
          </div>
        </nav>
      </header>

      <div>{children}</div>
    </div>
  );
};

LayoutAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutAuth;
