const Process = () => {
  const assetsPath = import.meta.env.VITE_ASSETS_PATH;

  return (
    <>
          <section className="py-24 bg-footer bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col p-2 space-y-6 backdrop-blur-sm">
        <h5
          className="mx-auto space-y-10 text-5xl font-bold text-center text-white "
        >
          You shouldn't miss this opportunity 
        </h5>
        <button
          className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLlight md:text-base md:py-3 focus:outline-none"
        >
          Order Now
        </button>
      </div>
    </section>
      <section id="stats" className="py-10 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Our Bake Process
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how we bake your crav from start to finish
          </p>
        </div>
      </section>
      
      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-25 h-20 p-4 rounded-full border-4 border-darkOrange">
                <img src={`${assetsPath}/meticulous.png`} alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left ">
              Meticulous Preparation
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              The secret to an exceptional dessert starts with meticulous
              preparation. Every ingredient you choose and every measurement you
              take has a direct impact on the perfection of the final result.
              From carefully selecting the ripest fruits to sifting the flour
              for a lighter texture, every detail matters.
            </p>
          </div>

          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-25 h-20 p-4 rounded-full border-4 border-darkOrange">
                <img src={`${assetsPath}/expert.png`} alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Expert Culinary Techniques
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Mastering certain culinary techniques is key to achieving
              excellence in this dessert. When whisking egg whites to stiff
              peaks, you create tiny air bubbles that will contribute to a
              fluffy texture in our mixture. Remember to whisk with gentle,
              steady motions to achieve the perfect consistency. With patience
              and practice, you'll become an expert in this fundamental
              technique!
            </p>
          </div>

          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3">
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-25 h-20 p-4 rounded-full border-4 border-darkOrange">
                <img
                  src={`${assetsPath}/presentation.png`}
                  alt=""
                />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Irresistible Presentation
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Presentation is the icing on the cake, the final touch that makes
              our dessert even more irresistible. You can delicately dust a bit
              of powdered sugar on the surface, adding a touch of elegance. Or,
              if you desire a more festive look, you can use a mold to shape
              your dessert and then decorate it with fresh fruits and a homemade
              raspberry sauce. Let your creativity soar and surprise your
              guests!
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default Process;
