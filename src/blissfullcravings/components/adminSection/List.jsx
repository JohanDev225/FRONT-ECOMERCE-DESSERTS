import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { BsFillTrash2Fill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";

const List = ({ onHandleById, onHandleDelete }) => {
  const { desserts } = useSelector((state) => state.products);

  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {desserts.map((dessert) => (
          <div key={dessert._id}>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={dessert.image}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {dessert.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500 w-96">
                    {dessert.description}
                  </p>
                  <div className="mt-4 p-1 flex-wrap gap-2">
                    {dessert.tags.map((tag) => (
                      <p
                        key={`by-tag-${tag}`}
                        className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  COP/${dessert.price}
                </p>
                <p className="text-sm leading-6 text-gray-900">
                  Sweet: {dessert.sweet}/10
                </p>
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
                    <p className="text-xs leading-5 text-gray-500">
                      Not Available
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  className="text-cyan text-xl p-1 rounded-xl hover:opacity-70"
                  onClick={() => onHandleById(dessert)}
                >
                  <FaPen />
                </button>
                <button
                  className="text-darkOrange text-xl p-1 rounded-xl hover:opacity-70"
                  onClick={() => onHandleDelete(dessert._id)}
                >
                  <BsFillTrash2Fill />
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

List.propTypes = {
  onHandleById: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired,
};

export default List;
