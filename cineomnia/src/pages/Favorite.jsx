import { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron.jsx";
import MainCard from "../components/MainCard.jsx";
import MovieCard from "../components/MovieCard.jsx";

function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const [dataMov, setDataMov] = useState([]);

  const fetchData = async (search) => {
    try {
      if (search) {
        let result = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
          {
            headers: {
              accept: "accept: application/json",
              Authorization:
                "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTgwOTYwNzc1ZmVkNDg3OTY5NGY2Njc0NTFkNzEwNiIsIm5iZiI6MTcyNjQ2NTU1My4yMTU2NTEsInN1YiI6IjY2ZDg3ZGEyYzNiZWE2MzRjOTI5ZWExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zmI1dZ3vEczs-Uz5s15e82m2jbIKeqiUsJtjwnxQ7nE",
            },
          }
        );
        let movie = await result.json();
        setDataMov(movie.results);
      } else {
        let result = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTgwOTYwNzc1ZmVkNDg3OTY5NGY2Njc0NTFkNzEwNiIsIm5iZiI6MTcyNjQ2NTU1My4yMTU2NTEsInN1YiI6IjY2ZDg3ZGEyYzNiZWE2MzRjOTI5ZWExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zmI1dZ3vEczs-Uz5s15e82m2jbIKeqiUsJtjwnxQ7nE",
            },
          }
        );
        let movie = await result.json();
        setDataMov(movie.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateFav = () => {
    const favorite = JSON.parse(localStorage.getItem("fav"));
    setFavorites(favorite);
  };

  useEffect(() => {
    updateFav();
  }, []);

  return (
    <>
      <section>
        <Jumbotron />
        <div className="bg-black h-full  pt-2 pb-10">
          <div className="text-white pb-5  flex justify-between items-center cursor-pointer md:pb-6 lg:pt-6 lg:pb-9 lg:px-20 px-7">
            <h1 className="font-black gradientWarna bg-clip-text text-transparent md:text-lg lg:text-2xl">
              Favorite Movies
            </h1>
          </div>
          <div className="flex gap-12 justify-center flex-wrap md:gap-10 lg:gap-20 h-auto py-5 overflow-y-scroll h-screen">
            {favorites.map((dataMov, id) => {
              return (
                <MainCard key={id} dataMov={dataMov} updateFav={updateFav} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Favorite;

// let favoriteMovies = [];
// const fav = JSON.parse(localStorage.getItem("favorite"));

// for (let i = 0; i < item.length; i++) {
//   for (let j = 0; j < fav.length; j++) {
//     if (fav[j].id === item[i]) {
//       favoriteMovies.push(item[i]);
//       console.log(favoriteMovies[i]);
//     }
//   }
