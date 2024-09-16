import Jumbotron from "../components/Jumbotron";
import MovieList from "../components/MovieList";

function About() {
  return (
    <>
      <Jumbotron />
      <section className="bg-black h-auto overflow-hidden pt-2 ">
        <div className="lg:mx-48  mx-10 gradientWarna border rounded-md p-4">
          <h1 className="font-bold text-white text-base  md:text-4xl">
            Hallo :)
          </h1>
          <h1 className="font-semibold text-white text-base lg:text-2xl ">
            Selamat datang di Cineomnia (Cinema Insomnia)
          </h1>
          <h1 className="text-white text-base lg:text-xl font-light pt-2 text-justify">
            Temukan film favorit Anda dan cek rating terkini di Cineomnia!
            Kunjungi kami sekarang untuk menjelajahi koleksi film terbaru dan
            terbaik, serta mendapatkan rekomendasi yang sesuai dengan selera
            Anda. Jangan lewatkan kesempatan untuk menikmati pengalaman menonton
            yang lebih baik di Cineomnia!
          </h1>
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

export default About;
