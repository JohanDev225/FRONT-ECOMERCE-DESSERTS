import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { deleteWish } from '../../../store';

const ProductCart = ({item}) => {

  const {product, name, price, category, image, quantity } = item;
  const dispatch = useDispatch();

  const onHandleDeleteWish = (id) => {
    dispatch(deleteWish(id));
  };

  return (
    <li className="flex py-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover object-center"
      />
    </div>

    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="!#">{name}</a>
          </h3>
          <p className="ml-4">COP/{price}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{category}</p>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Qty {quantity}</p>

        <div className="flex">
          <button
            type="button"
            className="font-medium text-cyan hover:text-cyanLight"
            onClick={() => onHandleDeleteWish(product)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </li>
  )
}

ProductCart.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductCart