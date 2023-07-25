import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LayoutBF } from "../layouts";
import { getProducts } from "../../store";
import Product from "../components/Product";

import _ from "lodash";

const Products = () => {
  const assetsPath = import.meta.env.VITE_ASSETS_PATH;

  //const navigate = useNavigate();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  //traer la propiedad desserts del estado
  const { desserts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const prods = _.sortBy(desserts, "category");

  const showHeading = (id, category, i) => {
    if (i > 0) {
      const previousCategory = prods[i - 1].category;
      if (previousCategory !== category) {
        return (
          <div key={id + i} className="md:col-span-3 lg:col-span-4 row-span-2">
            <p className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-blue-400">{category}</p>
          </div>
        );
      }
    } else {
      return (
        <div key={id + i} className="md:col-span-3 lg:col-span-4 row-span-2">
          <p className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-blue-400">{category}</p>
        </div>
      );
    }
  };

  const filteredDesserts = (desserts) => {
    const filtered = desserts.filter((dessert) =>
      dessert.name.toLowerCase().includes(search.toLowerCase())
    );
    //si no encuentra nada, devuelve un array filtrando por tag
    if (filtered.length === 0) {
      return desserts.filter((dessert) =>
        dessert.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    return filtered.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    if (
      desserts.filter((dessert) => dessert.name.includes(search)).length >
      currentPage + 8
    ) {
      setCurrentPage(currentPage + 8);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 8);
  };

  const onSearchChange = ({ target }) => {
    setCurrentPage(0);
    setSearch(target.value);
  };

  return (
    <LayoutBF>
      <section>
        <div className="container mx-auto px-3 mb-12">
          <h2 className="text-3xl md:text-6xl mb-4 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r to-cyan from-darkOrange">
            Our Cravs
          </h2>

          <div className="flex py-10">
            <button
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
              type="button"
            >
              <img
                className="object-scale-down h-10 w-10"
                src={`${assetsPath}/pastel.png`}
                alt=""
              />
            </button>

            <div className="relative w-full">
              <input
                type="search"
                className="block p-5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-cyan focus:border-cyan"
                placeholder="Search by Name or Ingredient"
                value={search}
                onChange={onSearchChange}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {search === ""
              ? prods.map((dessert, i) => (
                  <Product
                    key={`desset-list-${dessert._id}`}
                    dessert={dessert}
                    showHeading={showHeading}
                    i={i}
                  />
                ))
              : filteredDesserts(desserts).map((dessert) => (
                  <Product
                    key={`desset-list-${dessert._id}`}
                    dessert={dessert}
                    showHeading={showHeading}
                  />
                ))}
          </div>
        </div>
        {/*Valida que search no este vacio y que la cantidad de desserts sean mayores a 8 para crear la paginacion*/}
        {search !== "" && desserts.length > 8 && (
          <div className="flex justify-center">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick={prevPage}
            >
              Previous
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </LayoutBF>
  );
};

export default Products;
