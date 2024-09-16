function Jumbotron() {
  return (
    <>
      <section>
        <div className="bg-gradient-to-t from-black">
          <div className="text-justify bg-black bg-opacity-50 h-auto">
            <div className="absolute mt-[23%] w-full flex flex-col md:mt-28 lg:mt-36">
              <h1 className="text-white font-semibold text-xs mx-auto md:text-lg lg:text-2xl">
                Discover Your Favorite Movie From Only Rp33.250/Month
              </h1>
              <h2 className="text-white font-light mx-auto px-5 text-center text-xs md:text-sm lg:text-lg">
                *For the 12-month plan (Rp 399.000/yr) vs standard 3-month plan
                (Rp 79.000/mo)
              </h2>
              <button className="text-white border mx-28 my-3 cursor-pointer z-10 md:mx-36 lg:mx-52 lg:text-xl xl:mx-[30%]">
                Subscribe
              </button>
            </div>
            <img
              src="../public/jumbotron.jpg"
              alt="poster"
              className="mix-blend-overlay relative max-w-[100%] md:max-h-80 md:w-[100%] lg:max-h-96 object-cover transition-all"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Jumbotron;
