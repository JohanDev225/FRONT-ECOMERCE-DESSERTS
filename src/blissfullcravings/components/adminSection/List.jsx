import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts, getProductById } from "../../../store";

const List = ({setItem}) => {

  const dispatch = useDispatch();

  const { desserts } = useSelector((state) => state.products);
  console.log(desserts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleItem = (id) => {
    setItem('edit')
    dispatch(getProductById(id));
  }

  return (
    <ul role="list" className="divide-y divide-gray-100">
    {desserts.map((dessert) => (
      <li key={dessert._id} className="flex justify-between gap-x-6 py-5 cursor-pointer hover:opacity-70" onClick={() => handleItem(dessert._id)}>
        <div className="flex gap-x-4">
          <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={dessert.image} alt="" />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">{dessert.name}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500 w-96">{dessert.description}</p>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">COP/${dessert.price}</p>
          {dessert.available ? (
            <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-xs leading-5 text-gray-500">Available</p>
          </div>
          ) : (
            <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-red-500/20 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
            </div>
            <p className="text-xs leading-5 text-gray-500">Not Available</p>
          </div>
          )}
        </div>
      </li>
    ))}
  </ul>
  )
}

List.propTypes = {
  setItem: PropTypes.func.isRequired,
};

export default List