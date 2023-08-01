import { BsFillTrash2Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { updateOrder, deleteOrder } from "../../../store";

const Orders = () => {
    const assetsPath = import.meta.env.VITE_ASSETS_PATH;

    const { listOrders } = useSelector(state => state.admin);

    const dispatch = useDispatch();

    const handleUpdateOrder = (id, status) => {
        dispatch(updateOrder(id, status));
    }

    const handleDeleteOrder = (id) => {
        dispatch(deleteOrder(id));
    }

    return (
        <ul role="list" className="divide-y divide-gray-100">
            {listOrders.map((order) => (
                <li key={order.id} className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <img className="h-20 w-20 flex-none rounded-full bg-gray-50" src={`${assetsPath}/order.png`} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="px-5 pb-2 text-sm leading-6 text-gray-900"><span className="font-bold pr-2">OrderId:</span>{order.id.slice(-6)}</p>

                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="relative flex items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={`${assetsPath}/list.png`}
                                            alt=""
                                        />
                                        <span className="p-2">List Of Products</span>
                                    </Menu.Button>

                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute left-0 z-10 mt-2 w-96 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                                        {order.order.map((item) => (
                                            <Menu.Item key={item.product}>
                                                <div className="flex justify-between gap-x-6">
                                                    <div className="flex gap-x-4 justify-center items-start px-5">
                                                        <img className="h-8 w-8 flex-none rounded-full bg-gray-50" src={item.image} alt="" />
                                                        <div className="min-w-0 flex-auto">
                                                            <p className="px-5 pb-2 text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                                                            <p className="px-5 pb-2 mt-1 truncate text-xs leading-5 text-gray-500">COP/{item.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Menu.Item>
                                        ))}

                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <p className="px-5 py-2 mt-1 truncate text-sm leading-5 text-gray-500"><span className="font-bold">Total:</span>COP/{order.total}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                    <p className="py-2 mt-1 truncate text-sm leading-5 text-gray-500"><span className="font-bold mr-2">Date:</span>{new Date(order.date).toDateString()}</p>
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button className="relative flex items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="mr-3">UserInfo</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={`${assetsPath}/user.png`}
                                        alt=""
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {order.user && (
                                            <>
                                                <p className='block px-4 py-2 text-sm text-gray-700'>
                                                    {order.user.name}
                                                </p>
                                                <p className='block px-4 py-2 text-sm text-gray-700'>
                                                    {order.user.email}
                                                </p>
                                            </>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="py-5">
                            {order.status === "pending" ? (
                                <div className="mt-1 flex items-center gap-x-1.5 cursor-pointer" onClick={() => handleUpdateOrder(order.id, "completed")}>
                                    <div className="flex-none rounded-full bg-red-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500">Pending</p>
                                </div>
                            ) : (
                                <div className="mt-1 flex items-center gap-x-1.5 cursor-pointer" onClick={() => handleUpdateOrder(order.id, "pending")}>
                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500">Complete</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-end pb-5 md:items-center gap-3">
                        <button
                            className="text-darkOrange text-xl p-1 rounded-xl hover:opacity-70"
                            onClick={() => handleDeleteOrder(order.id)}
                        >
                            <BsFillTrash2Fill />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Orders