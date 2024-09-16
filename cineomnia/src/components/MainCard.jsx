import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MainCard({ dataMov, updateFav }) {
  let { pathname } = useLocation();
  const [isFav, setIsFav] = useState(false);

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

  const addToFavorites = () => {
    const favs = JSON.parse(localStorage.getItem("fav"));

    if (favs) {
      const newFav = [...favs, dataMov];
      localStorage.setItem("fav", JSON.stringify(newFav));
      setIsFav(true);
      localStorage.setItem("img");
    } else {
      localStorage.setItem("fav", JSON.stringify([dataMov]));
      setIsFav(true);
    }
  };

  const deleteFavorites = () => {
    const favs = JSON.parse(localStorage.getItem("fav"));

    const newFavs = favs.filter((el) => {
      return el.id !== dataMov.id;
    });
    localStorage.setItem("fav", JSON.stringify(newFavs));

    updateFav();
  };

  let date = new Date(dataMov.release_date);
  const rating = dataMov.vote_average / 2;
  return (
    <>
      <section>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${dataMov.poster_path}`}
            alt="poster"
            className="max-w-36 max-h-72 rounded-lg items-center"
          />
          <div className="text-white pt-2 flex flex-col items-center">
            <div className="flex w-[100%] justify-between line-clamp-1 ">
              <h1 className="text-xs max-w-24 line-clamp-1 gradientWarna bg-clip-text font-black text-transparent lg:text-sm">
                {dataMov.title}
              </h1>
              <h1
                className={`text-xs ${
                  rating >= 3.5 ? "text-green-400" : "text-merah"
                } text-sm`}
              >{`⭐${rating.toFixed(2)}`}</h1>
            </div>

            <div className="mt-1 flex h w-[100%] items-center justify-between lg:mt-0">
              <div className="flex text-xs items-center lg:text-sm gap-1">
                <img
                  src="../public/hdIcon.png"
                  alt="logo"
                  className="max-w-3 max-h-3 object-cover"
                />
                <h1 className="">{genres(dataMov.genre_ids)}</h1>
              </div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-xs lg:text-sm">{date.getFullYear()}</h1>
                {pathname === "/" ? (
                  <img
                    src={`../public/iconLove${
                      isFav === true ? "Filled" : "Border"
                    }.png`}
                    alt="icon"
                    className="max-w-4 max-h-3 object-cover cursor-pointer"
                    onClick={() => addToFavorites(dataMov)}
                  />
                ) : (
                  <img
                    src="../public/iconLoveFilled.png"
                    alt="icon"
                    className="max-w-4 max-h-3 object-cover cursor-pointer"
                    onClick={() => deleteFavorites()}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainCard;

// const addToFavorites = (id) => {
//   let myFav = [];
//   let idMovie = { id: id };
//   if (localStorage.getItem("favorite")) {
//     myFav = JSON.parse(localStorage.getItem("favorite"));

//     let isFavorite = true;
//     for (let i = 0; i < myFav.length; i++) {
//       if (myFav[i].id === idMovie.id) {
//         isFavorite = false;
//         myFav.shift();
//         break;
//       }
//     }
//     if (isFavorite) {
//       myFav.push(idMovie);
//       localStorage.setItem("favorite", JSON.stringify(myFav));
