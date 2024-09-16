function MovieCard({ dataMov }) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const ratingStar = function (popular) {
    let star = "";
    if (popular <= 3) {
      return (star = `⭐`);
    } else if (popular <= 4) {
      return (star = "⭐⭐");
    } else if (popular <= 7.5) {
      return (star = "⭐⭐⭐");
    } else if (popular <= 9.5) {
      return (star = "⭐⭐⭐⭐");
    } else if (popular <= 10) {
      return (star = "⭐⭐⭐⭐⭐");
    } else {
      return (star = "No Rating");
    }
  };
  const genres = ([id]) => {
    // Mendapatkan content budaya dari kota terpilih
    let genre = [];
    switch (id) {
      case 28:
        genre.push("Action");
        break;
      case 80:
        genre.push("Crime");
        break;
      case 12:
        genre.push("Adventure");
        break;
      case 16:
        genre.push("Animation");
        break;
      case 35:
        genre.push("Comedy");
        break;
      case 99:
        genre.push("Documentary");
        break;
      case 18:
        genre.push("Drama");
        break;
      case 1075:
        genre.push("Family");
        break;
      case 14:
        genre.push("Fantasy");
        break;
      case 36:
        genre.push("History");
        break;
      case 27:
        genre.push("Horror");
        break;
      case 10402:
        genre.push("Music");
        break;
      case 9648:
        genre.push("Mistery");
        break;
      case 10749:
        genre.push("Romance");
        break;
      case 878:
        genre.push("Science Fiction");
        break;
      case 10770:
        genre.push("TV Movie");
        break;
      case 53:
        genre.push("Thriller");
        break;
      case 10752:
        genre.push("War");
        break;
      case 37:
        genre.push("Western");
        break;
      default:
        genre.push("Movie");
    }
    return genre;
  };
  let date = new Date(dataMov.release_date);
  return (
    <>
      <section className="px-5 h-auto overflow-hidden relative lg:px-24">
        <div className="flex">
          <img
            src={`https://image.tmdb.org/t/p/w500/${dataMov.poster_path}`}
            alt="poster"
            className="scale-[90%] rounded-xl h-44 object-cover md:h-64 lg:h-80"
          />
          <div className="py-1 ml-2 mr-2 md:py-1.5 lg:py-2.5">
            <div className="flex gap-1 items-center justify-between">
              <h1 className="font-black gradientWarna bg-clip-text text-transparent line-clamp-1  md:text-xl lg:text-3xl">
                {dataMov.title}
              </h1>
              <h1 className="text-xs md:text-base lg:text-xl">
                {ratingStar(dataMov.vote_average)}
              </h1>
            </div>

            <div className="text-white text-xs flex items-center gap-1.5 md:text-base lg:text-lg">
              <div className="flex items-center">
                <img
                  src="../public/hdIcon.png"
                  alt="icon"
                  className="max-w-3 max-h-3 object-cover md:max-h-4 md:max-w-4 lg:max-h-5 lg:max-w-7"
                />
                <h1 className="md:pl-0.5 lg:pl-1">
                  {genres(dataMov.genre_ids)}
                </h1>
              </div>
              <h1>|</h1>

              <h1>{`${date.getDate()} ${
                months[date.getMonth()]
              } ${date.getFullYear()}`}</h1>
            </div>

            <div className="mt-3 text-xs text-white text-justify  md:text-base md:font-light md:h-24 lg:text-2xl lg:h-40 line-clamp-4 lg:line-clamp-5 xl:h-32 xl:mt-7">
              {dataMov.overview}
            </div>

            <div className="mt-2 font-semibold text-white md:mt-6 lg:mt-3 xl:mt-">
              <button className="border p-1 rounded-md gradientWarna text-xs md:text-lg lg:text-xl lg:p-1.5 xl:p-2 xl:mt-2">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MovieCard;
