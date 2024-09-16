function Footer() {
  return (
    <>
      <footer className="flex justify-between bg-black pb-2 mx-auto items-center px-2">
        <div>
          <img
            src="../public/cineomnia.png"
            alt="logo"
            className="object-cover scale-[80%] md:scale-90"
          />
        </div>
        <div>
          <ul className="flex gradientWarna bg-clip-text text-transparent gap-1 items-center md:gap-3 lg:gap-5">
            <li className="text-xs font-bold cursor-pointer md:text-sm lg:text-base">
              Help
            </li>
            <li>|</li>
            <li className="text-xs font-bold cursor-pointer md:text-sm lg:text-base">
              Privacy
            </li>
            <li>|</li>
            <li className="text-xs font-bold cursor-pointer md:text-sm lg:text-base">
              Terms
            </li>
          </ul>
        </div>
        <div className="text-[40%] font-normal text-white pt-[1%] md:text-xs lg:text-sm">
          <h1>©2024 Cineomnia. All Rights Reserved.</h1>
        </div>
      </footer>
    </>
  );
}

export default Footer;
