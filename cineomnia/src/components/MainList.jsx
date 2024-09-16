import MainCard from "./MainCard";

function MainList({ dataMov, fetchData, genres }) {
  const handleSearch = (search) => {
    search.preventDefault();
    fetchData(search.target[0].value);
    console.log(search.target[0].value);
  };

  return (
    <>
      <section className="bg-black h-auto overflow-hidden pt-2 ">
        <div className="text-white pb-5  flex justify-between items-center cursor-pointer md:pb-6 lg:pt-6 lg:pb-9 lg:px-20 px-7">
          <h1 className="font-black gradientWarna bg-clip-text text-transparent md:text-lg lg:text-2xl">
            Movies List
          </h1>

          <form className="flex gap-2" onSubmit={handleSearch}>
            <input
              type="search"
              className="rounded-sm px-2 text-slate-500 placeholder:text-slate-300 w-32 h-7 md:w-48 lg:w-56"
              placeholder="Search Movie"
            />
            <button className="gradientWarna p-1 rounded-sm w-14 h-7 flex items-center">
              Search
            </button>
          </form>
        </div>
        <div className="flex gap-12 justify-center flex-wrap md:gap-10 lg:gap-20 px-3">
          {dataMov.map((dataMov, i) => {
            return <MainCard key={i} dataMov={dataMov} genres={genres} />;
          })}
        </div>
        <div className="bg-gradient-to-b from-black opacity-60 my-10">
          <img
            src="../public/mainList.png"
            alt="gambar"
            className="mix-blend-overlay"
          />
        </div>
      </section>
    </>
  );
}

export default MainList;

// const handleSearch = (params) => {
//   params.preventDefault(params.target[0].value);
// };

// const handleInput = (params) => {
//   params.preventDefault(params.target.value);
// };
