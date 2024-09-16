import MovieCard from "./MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MovieList({ dataMov, genres }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="bg-black h-auto overflow-hidden">
        <Slider {...settings}>
          {dataMov.map((dataMov, i) => {
            return <MovieCard key={i} dataMov={dataMov} genres={genres} />;
          })}
        </Slider>
      </section>
    </>
  );
}

export default MovieList;
