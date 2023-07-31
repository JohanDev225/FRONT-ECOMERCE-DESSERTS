import { useSelector } from "react-redux";
import { LayoutBF } from "../layouts";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useState } from "react";

const Product = () => {
  const { desserts } = useSelector((state) => state.products);
  
  const [dessert, setDessert] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (desserts.length > 0) {
      const dessert = desserts.find((dessert) => dessert._id === id);
      console.log(dessert);
      setDessert(dessert);
    }
  }, [desserts, id]);

  return (
    <LayoutBF>
    <div className="bg-white">
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-bold text-gray-900">
                  products 
                </a>
                <span className="text-gray-400">\</span>
              </div>
            </li>
   
          <li className="text-sm">
            <a href="!#" aria-current="page" className="font-bold text-gray-500 hover:text-gray-600">
            {dessert?.category} <span className="text-gray-400">\</span> {dessert?.name}
            </a>
          </li>
        </ol>
      </nav>

      {/* Image gallery */}
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block lg:col-span-3">
          <img
            src={dessert?.image}
            alt="Banner of Image Dessert"
            className="object-cover h-96 w-full rounded-lg"
          />
        </div>
      </div> 

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{dessert?.name}</h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="font-bold">Price information</h2>
          <p className="text-3xl tracking-tight text-gray-900">COP/${dessert?.price}</p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="font-bold">Sweetness</h3>
            <div className="flex items-center">
            {dessert?.sweet} / 10
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-bold text-gray-900">Ingredients</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {dessert?.tags.map((tag) => (
                  <li key={tag} className="text-gray-400">
                    <span className="text-gray-600">{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form className="mt-10">
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-cyan px-8 py-3 text-base font-bold text-white hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
          </form>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="font-bold">Description</h3>

            <div className="space-y-6 mt-5">
              <p className="text-base text-gray-900">{dessert?.description}</p>
            </div>
          </div>

    

          <div className="mt-10">
            <h2 className="text-sm font-bold text-gray-900">Category</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{dessert?.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </LayoutBF>
  )
}

export default Product