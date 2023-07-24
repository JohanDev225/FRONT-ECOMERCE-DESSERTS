import { LayoutBF } from "../layouts";
const Products = () => {
  const assetsPath = import.meta.env.VITE_ASSETS_PATH;
  return (
    <LayoutBF>
      <section>
        <div className="container mx-auto px-3 mb-12">
          <h2 className="text-3xl md:text-6xl mb-4 font-bold text-center">
            Our List of Little Cravs
          </h2>
          <div className="flex justify-center pb-5">
            <img
              className="object-scale-down h-13 w-20 md:h-24 md:w-45"
              src={`${assetsPath}/pastel.png`}
              alt=""
            />
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 w-100 ">
            <div className="wrapper antialiased text-gray-900 hover:opacity-90 cursor-pointer">
              {/*Map de Productos */}
              <div>
                <img
                  src="https://www.luisapostres.com/cdn/shop/files/birthdayfoto.jpg?v=1688740933&width=600"
                  alt=" random imgee"
                  className="w-full object-cover object-center rounded-lg shadow-md"
                />

                <div className="relative px-4 -mt-16  ">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        Avilable
                      </span>
                      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                        Category
                      </div>
                    </div>

                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                      A random Title
                    </h4>

                    <div className="mt-1">
                      $1800
                      <span className="text-gray-600 text-sm"> /COP</span>
                    </div>
                    <div className="mt-4 mb-4">
                      <span className="text-teal-600 text-md font-semibold">
                        4/10 ratings{" "}
                      </span>
                      <span className="text-sm text-gray-600">(Sweetness)</span>
                    </div>
      
                    <hr/>

                    <div className="mt-4 p-1 flex flex-wrap items-center justify-evenly gap-2">
                      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        #photography
                      </span>
                      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        #photography
                      </span>
                      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        #photography
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 border border-blue-600 bg-blue-100">02</div>
            <div className="p-10 border border-blue-600 bg-blue-100">03</div>
            <div className="p-10 border border-blue-600 bg-blue-100">04</div>
            <div className="p-10 border border-blue-600 bg-blue-100">05</div>
            <div className="p-10 border border-blue-600 bg-blue-100">06</div>
            <div className="p-10 border border-blue-600 bg-blue-100">07</div>
            <div className="p-10 border border-blue-600 bg-blue-100">08</div>
          </div>
        </div>
      </section>
    </LayoutBF>
  );
};

export default Products;
