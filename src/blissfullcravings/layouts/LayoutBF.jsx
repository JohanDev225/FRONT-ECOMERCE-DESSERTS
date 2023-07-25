/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { Fragment, useEffect, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Dialog, Transition } from "@headlessui/react";
import { BiCartAlt } from "react-icons/bi";
import { isExpired, decodeToken } from "react-jwt";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { isAuth, getUserInfo } from "../../store";
import Cart from "../components/cart/Cart";

const LayoutBF = ({ children }) => {
  const assetsPath = import.meta.env.VITE_ASSETS_PATH;

  const { uid, role, expired } = useSelector((state) => state.auth);

  const [open, setOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  //setear token
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== uid) {
      dispatchUserInfo();
    }
  }, [token, uid]);

  useEffect(() => {
    if (expired) {
      localStorage.removeItem("token");
      navigate("/", { replace: true });
    }
  }, [expired]);

  const dispatchUserInfo = useCallback(() => {
    if (token) {
      dispatch(isAuth(token));
      dispatch(getUserInfo(myDecodedToken()));
    }
  }, [dispatch, token]);

  const myDecodedToken = () => {
    const infoUser = {
      role: decodeToken(token).role,
      expired: isExpired(token),
    };
    return infoUser;
  };

  const onHandleMenu = (e) => {
    e.preventDefault();
    setOpen(!open);
    setMobileFiltersOpen(false);
  };

  return (
    <div>
      <header>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-4xl text-graylight">
                      Menu Options
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <AiOutlineCloseCircle
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="p-5 mt-4 border-t border-gray-200">

                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      <li>
                        <NavLink
                          to="/products"
                          className="text-2xl text-graylight hover:text-darkOrange"
                        >
                          Products
                        </NavLink>
                      </li>
                      <li>
                        {uid && role === "Admin" ? (
                          <NavLink
                            to="/dashboard"
                            className="text-2xl text-graylight hover:text-darkOrange"
                          >
                            DashBoard
                          </NavLink>
                        ) : (
                          <>
                            <button
                              className="text-2xl text-graylight hover:text-darkOrange"
                              onClick={onHandleMenu}
                            >
                              <p>Shooping Cart</p>
                            </button>
                          </>
                        )}
                      </li>
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <Cart open={open} setOpen={setOpen} />
        <nav className="relative container mx-auto p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-20">
              <NavLink to="/">
                <img src={`${assetsPath}/logo.svg`} alt="" />
              </NavLink>

              <div className="hidden space-x-8 font-bold lg:flex">
                <NavLink
                  to="/products"
                  className="text-graylight hover:text-darkOrange"
                >
                  Products
                </NavLink>
                {uid && role === "Admin" && (
                  <NavLink
                    to="/dashboard"
                    className="text-graylight hover:text-darkOrange"
                  >
                    DashBoard
                  </NavLink>
                )}
              </div>
            </div>

            <div className="hidden items-center space-x-6 font-bold text-graylight lg:flex">
              {!uid ? (
                <>
                  <NavLink
                    to="/auth/login"
                    className="text-graylight hover:text-darkOrange"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/auth/register"
                    className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:bg-cyanLight"
                  >
                    Sign Up
                  </NavLink>
                </>
              ) : uid && role !== "Admin" ? (
                <>
                  <button
                    className="text-3xl text-graylight hover:text-darkOrange"
                    onClick={() => setOpen(true)}
                  >
                    <BiCartAlt />
                  </button>
                </>
              ) : null}
            </div>

            <button
              id="menu-btn"
              className="block hamburger lg:hidden focus:outline-none"
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
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
            <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
              <a href="#" className="w-full text-center">
                Features
              </a>
              <a href="#" className="w-full text-center">
                Pricing
              </a>
              <a href="#" className="w-full text-center">
                Resources
              </a>
              <a
                href="#"
                className="w-full pt-6 border-t border-gray-400 text-center"
              >
                Login
              </a>
              <a
                href="#"
                className="w-full py-3 text-center rounded-full bg-cyan"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div>{children}</div>

      <footer className="py-16 bg-darkOrange">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          <img src={`${assetsPath}/logo.svg`} alt="" />

          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white text-lg capitalize">
                Company
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                  href="#"
                  className="capitalize text-graylight hover:text-white"
                >
                  About
                </a>
                <a
                  href="#"
                  className="capitalize text-graylight hover:text-white"
                >
                  Our Team
                </a>
                <a
                  href="#"
                  className="capitalize text-graylight hover:text-white"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="capitalize text-graylight hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="flex space-x-6">
            <a href="#">
              <img
                src={`${assetsPath}/icon-facebook.svg`}
                alt=""
                className="ficon"
              />
            </a>
            <a href="#">
              <img
                src={`${assetsPath}/icon-twitter.svg`}
                alt=""
                className="ficon"
              />
            </a>
            <a href="#">
              <img
                src={`${assetsPath}/icon-pinterest.svg`}
                alt=""
                className="ficon"
              />
            </a>
            <a href="#">
              <img
                src={`${assetsPath}/icon-instagram.svg`}
                alt=""
                className="ficon"
              />
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
