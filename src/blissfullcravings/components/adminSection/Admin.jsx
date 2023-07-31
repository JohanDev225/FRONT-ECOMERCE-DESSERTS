import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Admin = ({ children, setItem }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
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
                    <h2 className="text-3xl text-graylight">Manage Desserts</h2>
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
                  <form className="mt-4 border-t border-gray-200 p-5">
    
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    > 
                    <li className="mb-5">
                        <a onClick={() => setItem('list')} className="text-xl text-graylight hover:text-darkOrange cursor-pointer">
                          List Of Desserts
                        </a>
                      </li>
                      <li className="mb-5">
                        <a onClick={() => setItem('create')} className="text-xl text-graylight hover:text-darkOrange cursor-pointer">
                          New Dessert
                        </a>
                      </li>
                      <li className="mb-5">
                        <a onClick={() => setItem('list')} className="text-xl text-graylight hover:text-darkOrange cursor-pointer">
                          Orders
                        </a>
                      </li>
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Manage Desserts
            </h1>

            <div className="flex items-center lg:hidden">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button
                    className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    Menu
                  </Menu.Button>
                </div>
              </Menu>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                    <li>
                    <a onClick={() => setItem('list')} className="text-sm text-graylight hover:text-darkOrange cursor-pointer">
                      List Of Desserts
                    </a>
                  </li>
                  <li>
                    <a onClick={() => setItem('create')} className="text-sm text-graylight hover:text-darkOrange cursor-pointer">
                      New Dessert
                    </a>
                  </li>
                </ul>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 pt-5 text-sm font-medium text-gray-900"
                >
                    <li>
                    <a onClick={() => setItem('list')} className="text-sm text-graylight hover:text-darkOrange cursor-pointer">
                      Orders
                    </a>
                  </li>
                </ul>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">{children}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

Admin.propTypes = {
  children: PropTypes.node.isRequired,
  setItem: PropTypes.func.isRequired,
};

export default Admin;
