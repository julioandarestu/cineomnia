import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const activeLink = function () {
    return "gradientWarna bg-clip-text text-transparent  font-black text-xs md:text-base lg:text-lg";
  };

  return (
    <>
      <nav className="flex px-2 justify-between items-center h-14 text-white font-Inter font-medium text-sm fixed w-screen bg-gradient-to-b from-black z-10">
        <div>
          <Link to={"/"}>
            <img src="../public/cineomnia.png" alt="logo" className="md:w-28" />
          </Link>
        </div>
        <div className="w-screen items-center">
          <ul className="flex justify-center gap-2 items-center text-xs md:text-base md:gap-6 lg:text-lg lg:gap-10">
            <li className="navbarHover">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? activeLink() : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="navbarHover">
              <NavLink
                to={"Favorite"}
                className={({ isActive }) =>
                  isActive ? activeLink() : "text-white"
                }
              >
                Favorite
              </NavLink>
            </li>
            <li className="navbarHover">
              <NavLink
                to={"About"}
                className={({ isActive }) =>
                  isActive ? activeLink() : "text-white"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-1 items-center pr-5 cursor-pointer md:gap-2 mr-2 lg:mr-4">
          <img
            src="../public/profile.jpg"
            alt="profile"
            className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 object-cover rounded-full"
          />
          <h3 className="font-medium text-xs md:text-base">Julio</h3>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
