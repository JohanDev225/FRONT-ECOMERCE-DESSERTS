import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductById } from "../../../store";

const Product = ({ dessert, i= null, showHeading }) => {
  const { _id, name, price, image, sweet, category, tags, available } = dessert;


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProduct = () => {
    dispatch(getProductById(_id));
    navigate(`/product/${_id}`);
  };

  return (
    <>
    {i !== null && showHeading(_id, category, i)}
    
    <div className="wrapper antialiased text-gray-900 hover:opacity-90 cursor-pointer px-2" onClick={handleProduct}>
      <div>
        <img
          src={image}
          alt=" random imgee"
          className="w-80 md:w-full rounded-lg shadow-md h-96 object-cover"
        />

        <div className="relative px-4 -mt-16 w-72 md:w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                {available ? "Avilable" : "Not Available"}
              </span>
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {category}
              </div>
            </div>

            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {name}
            </h4>

            <div className="mt-1">
              {price}
              <span className="text-gray-600 text-sm"> /COP</span>
            </div>
            <div className="mt-4 mb-4">
              <span className="text-teal-600 text-md font-semibold">
                {sweet}/10 ratings{" "}
              </span>
              <span className="text-sm text-gray-600">(Sweetness)</span>
            </div>

            <hr />

            <div className="mt-4 p-1 flex flex-wrap items-center justify-evenly gap-2">
              {/*Map de Tags */}
              {tags.map((tag) => (
                <span
                  key={`tag-desert-${tag}`}
                  className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

Product.propTypes = {
  dessert: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    sweet: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    available: PropTypes.bool.isRequired,
  }).isRequired,
  i: PropTypes.number,
  showHeading: PropTypes.func,
};


export default Product;
