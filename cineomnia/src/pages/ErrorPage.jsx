import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import "../App.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <section className="h-screen bg-black">
        <Navbar />

        <div className="h-screen flex flex-col items-center justify-center">
          <img
            src="../public/errrorImg.png"
            alt="error"
            className="scale-[55%] lg:scale-[40%]"
          />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default ErrorPage;
