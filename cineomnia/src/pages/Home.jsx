import { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron.jsx";
import MainList from "../components/MainList.jsx";
import MovieList from "../components/MovieList.jsx";

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

function Home() {
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

  return (
    <>
      <Jumbotron />
      <MovieList dataMov={dataMov} genres={genres} />
      <MainList dataMov={dataMov} fetchData={fetchData} genres={genres} />
    </>
  );
}

export default Home;
