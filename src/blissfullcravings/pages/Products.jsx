/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";

import { LayoutBF } from "../layouts";
import { Product } from "../components";
import { getProducts } from "../../store";
import { toast } from "react-toastify";


const Products = () => {
  const assetsPath = import.meta.env.VITE_ASSETS_PATH;

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [isDeleteToastShown, setIsDeleteToastShown] = useState(false);
  const [isEditToastShown, setIsEditToastShown] = useState(false);
  const [search, setSearch] = useState("");
  

  //traer la propiedad desserts del estado
  const { desserts, message } = useSelector((state) => state.products);

  useEffect(() => {
    if (desserts.length === 0) {
      dispatch(getProducts());
    }
  }, [desserts]);

  const prods = _.sortBy(desserts, "category");

  const showHeading = (id, category, i) => {
    if (i > 0) {
      const previousCategory = prods[i - 1].category;
      if (previousCategory !== category) {
        return (
          <div key={id + i} className="md:col-span-3 lg:col-span-4 row-span-2">
            <p className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-cyan">
              {category}
            </p>
          </div>
        );
      }
    } else {
      return (
        <div key={id + i} className="md:col-span-3 lg:col-span-4 row-span-2">
          <p className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-cyan">
            {category}
          </p>
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

  const showToast = () => {
    if (message) {
      if (message.type === 'wish-done' && !isEditToastShown) {
        toast(`${message.text}`);
        setIsEditToastShown(true);
      } else if (message.type === 'wish-error' && !isDeleteToastShown) {
        toast(`${message.text}`, { type: "error" });
        setIsDeleteToastShown(true);
      }
    }
  };

  return (
    <LayoutBF>
      { message && showToast()}
      <section>
        <div className="container mx-auto px-3 mb-12">
          <h2 className="text-3xl md:text-6xl mb-4 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r to-cyan from-cyanLight">
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
                alt="Image with a little smiley cake"
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

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {search === "" && prods.length > 0 ? (
              prods.map((dessert, i) => (
                <Product
                  key={`desset-list-${dessert._id}`}
                  dessert={dessert}
                  showHeading={showHeading}
                  i={i}
                />
              ))
            ) : search !== "" && filteredDesserts(desserts).length > 0 ? (
              filteredDesserts(desserts).map((dessert) => (
                <Product
                  key={`desset-list-${dessert._id}`}
                  dessert={dessert}
                  showHeading={showHeading}
                />
              ))
            ) : (
              <div className="md:col-span-3 lg:col-span-4 row-span-2 text-center">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-cyan">We are baking new cravs</h1>
                <img
                  className="object-scale-down h-96 w-full"
                  src={`${assetsPath}/empty.svg`}
                  alt="Image that says we are baking new cravs because the search is empty"
                />
              </div>
            )}
          </div>
        </div>
        {/*Valida que search no este vacio y que la cantidad de desserts sean mayores a 8 para crear la paginacion*/}
        {search !== "" && desserts.length > 8 && (
          <div className="flex justify-center p-10">
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
