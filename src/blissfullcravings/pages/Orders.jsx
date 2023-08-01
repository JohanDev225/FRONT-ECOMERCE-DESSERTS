import { LayoutBF } from "../layouts";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useSelector } from "react-redux";

const Orders = () => {
  const assetsPath = import.meta.env.VITE_ASSETS_PATH;

  const [open, setOpen] = useState(false)
  const [product, setProduct] = useState([])

  const { orders } = useSelector((state) => state.cart);

  const handleProductModal = (product) => {
    setProduct(product)
    setOpen(true)
  }

  return (
    <LayoutBF>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl text-gray-900">{orders.length === 0 ? "No Orders - Its Time to Wish": "Your Order List"}</h2>
          <hr />
          {orders.length === 0 &&
          <>
            <div className="flex flex-column justify-center mt-5">
              <img
                src={`${assetsPath}/emptyOrder.svg`}
                alt="Order Image"
                className="h-96 w-96 object-cover object-center group-hover:opacity-75"
              />
            </div>
            
            </>
          }
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 mt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {orders.map((product, i) => (
              <div key={product.id} className="group" onClick={() => handleProductModal(product.order)}>
                <div className="cursor-pointer aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={`${assetsPath}/order.svg`}
                    alt="Order Image"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h1 className="mt-4 text-3xl text-gray-900">Order No {i + 1}</h1>
                <h3 className="mt-4 text-lg text-gray-700"><span className="font-bold text-xl">Final Price</span> COP/{product.total}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900"><span className="font-bold text-xl">Order Status</span> {product.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                enterTo="opacity-100 translate-y-0 md:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              >
                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                  <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl rounded-3xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button
                      type="button"
                      className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <AiOutlineCloseCircle className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="grid w-full mt-5 grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                      <div className="sm:col-span-8 lg:col-span-12">
                        <ul role="list" className="divide-y divide-gray-100">
                          <span className="text-xl">Your Order Products</span>
                          <hr />
                          {product.map((item) => (
                            <li key={item.product} className="flex justify-between gap-x-6 py-5">
                              <div className="flex gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={item.image} alt="" />
                                <div className="min-w-0 flex-auto">
                                  <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.category}</p>
                                </div>
                              </div>
                              <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">COP/{item.price}</p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                  Qty {item.quantity}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </LayoutBF>
  )
}

export default Orders