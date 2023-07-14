const Hero = () => {
  const assetsPath = import.meta.env.VITE_ASSETS_PATH;

  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
        <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl text-darkOrange font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            More than just desserts
          </h1>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Bring your cravs and let us turn it into a dessert
          </p>
          <div className="mx-auto lg:mx-0">
            <a
              href="#"
              className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
            >
              Do You have a Crav?
            </a>
          </div>
        </div>

        <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
          <img src={`${assetsPath}/hero.svg`} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
