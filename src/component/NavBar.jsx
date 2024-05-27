import { useState } from "react";
import bar from "../assets/bars.svg";

export default function NavBar() {
  const [navBar, setNavBar] = useState(false);

  return (
    <header className="my-6 pt-4 lg:pt-8  sticky top-[0] z-10 bg-transparent backdrop-blur-sm w-full">
      <div className="lg:hidden flex px-[15px] justify-between w-full">
        <a
          href=""
          className="font-[Roboto] relative text-4xl lg:text-7xl font-extrabold content"
        >
          <h2>Tolu.</h2>
          <h2>Tolu.</h2>
        </a>
        <img
          src={bar}
          alt=""
          className="w-8"
          onClick={() => setNavBar(!navBar)}
        />
      </div>
      <nav
        className={
          "flex lg:justify-between flex-col lg:row px-[15px] !text-white wrap-content ease-in-out duration-300  " +
          (navBar ? "flex" : "hidden lg:flex ")
        }
      >
        <a
          href=""
          className="font-[Roboto] text-5xl xl:text-7xl font-extrabold relative content hidden lg:inline-block"
        >
          <h2>Tolu.</h2>
          <h2>Tolu.</h2>
        </a>

        <span className="flex lg:flex-row flex-col items-center gap-y-8 justify-end lg:gap-x-4 mt-4 lg:mt-0">
          <a href="#aboutMe" className="px-[15px] nav-item  text-lg font-bold ">
            About ME
          </a>
          <a href="#project" className="px-[15px] nav-item  text-lg font-bold">
            Projects
          </a>
          <a href="#contact" className="px-[15px] nav-item  text-lg font-bold">
            Contact Me
          </a>
        </span>
      </nav>
    </header>
  );
}
