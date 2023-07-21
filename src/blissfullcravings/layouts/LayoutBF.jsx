import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const LayoutBF = ({ children }) => {
  const assetsPath = import.meta.env.VITE_ASSETS_PATH;

  return (
    <div >
      <header>
      <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <NavLink to="/">
            <img src={`${assetsPath}/logo.svg`} alt="" />
          </NavLink>
        
          <div className="hidden space-x-8 font-bold lg:flex">
            <NavLink to="/products" className="text-graylight hover:text-darkOrange"
              >Products
            </NavLink>
          </div>
        </div>

        <div
          className="hidden items-center space-x-6 font-bold text-graylight lg:flex"
        >
          <NavLink to="/auth/login" className="text-graylight hover:text-darkOrange"
              >Login
            </NavLink>
          <NavLink
            to="/auth/register"
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:bg-cyanLight"
            >Sign Up
          </NavLink>
        </div>

        <button
          id="menu-btn"
          className="block hamburger lg:hidden focus:outline-none"
          type="button"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div
        id="menu"
        className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
      >
        <div
          className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm"
        >
          <a href="#" className="w-full text-center">Features</a>
          <a href="#" className="w-full text-center">Pricing</a>
          <a href="#" className="w-full text-center">Resources</a>
          <a href="#" className="w-full pt-6 border-t border-gray-400 text-center"
            >Login</a
          >
          <a href="#" className="w-full py-3 text-center rounded-full bg-cyan"
            >Sign Up</a
          >
        </div>
      </div>
    </nav>

      </header>

      <div>{children}</div>

      <footer className="py-16 bg-darkOrange">
      <div
        className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start"
      >
        <img src={`${assetsPath}/logo.svg`} alt="" />

        <div
          className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0"
        >
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white text-lg capitalize">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-graylight hover:text-white"
                >Link shortening</a
              >
              <a href="#" className="capitalize text-graylight hover:text-white"
                >Branded links</a
              >
              <a href="#" className="capitalize text-graylight hover:text-white"
                >Analytics</a
              >
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white text-lg capitalize">Resources</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-graylight hover:text-white"
                >Blog</a
              >
              <a href="#" className="capitalize text-graylight hover:text-white"
                >Developers</a
              >
              <a href="#" className="capitalize text-graylight hover:text-white"
                >Support</a
              >
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white text-lg capitalize">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-graylight hover:text-white"
                >About</a
              >
              <a href="#" className="capitalize text-graylight hover:text-white"
                >Our Team</a
              >
              <a href="#" className="capitalize text-graylight hover:text-white"
                >Careers</a
              >
              <a href="#" className="capitalize text-graylight hover:text-white"
                >Contact</a
              >
            </div>
          </div>
        </div>

        <div className="flex space-x-6">
          <a href="#">
            <img src={`${assetsPath}/icon-facebook.svg`} alt="" className="ficon" />
          </a>
          <a href="#">
            <img src={`${assetsPath}/icon-twitter.svg`} alt="" className="ficon" />
          </a>
          <a href="#">
            <img src={`${assetsPath}/icon-pinterest.svg`} alt="" className="ficon" />
          </a>
          <a href="#">
            <img src={`${assetsPath}/icon-instagram.svg`} alt="" className="ficon" />
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
};

LayoutBF.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutBF;
