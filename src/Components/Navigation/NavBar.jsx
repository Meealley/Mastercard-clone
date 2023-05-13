import React, { useState, useEffect } from "react";
import Hero from "../Layout/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
// import { MenuIcon } from "@heroicons/react/outline";

const NavBar = () => {
  // const [isShown, setIsShown] = useState(false)
  const [toggelNav, setToggleNav] = useState(false);

  const handleToggle = () => {
    setToggleNav((prevNav) => !prevNav);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div>
        <header className="py-4 md:py-6">
          <div className=" px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <a
                  href="/"
                  title=""
                  className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <img
                    className="w-auto h-8"
                    src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg"
                    alt=""
                  />
                </a>
              </div>

              <div className="flex lg:hidden absolute right-4 md:right-20  pl-32 ">
                <button
                  onClick={handleToggle}
                  type="button"
                  className="text-gray-900 transition delay-200 ease-in-out duration-200"
                >
                  {toggelNav ? (
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-3xl text-white"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBars}
                      className="w-7 h-7 text-white"
                    />
                  )}
                </button>
              </div>

              <div className="hidden capitalize lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                <Link
                  to="/find-a-card"
                  title=""
                  className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  find a card
                </Link>

                <Link
                  to="/offers-and-promotions"
                  title=""
                  className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  offers and promotions
                </Link>

                <NavLink
                  to="/ways-to-pay"
                  title=""
                  className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  ways to pay
                </NavLink>

                <NavLink
                  to="/vision"
                  title=""
                  className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  vision
                </NavLink>
              </div>

              {/* responsive one / */}
              {toggelNav ? (
                <div
                  className="block capitalize lg:hidden"
                  onClick={handleToggle}
                >
                  <div className="flex flex-col bg-black text-white cursor-pointer text-left w-full h-85 items-start absolute lg:top-10 md:top-20 top-[60px] left-0 z-10  space-x-6 transition-all ease-in duration-500">
                    <Link href="/"></Link>
                    <Link to="/find-a-card" className="pt-8">
                      find a card
                    </Link>
                    <Link to="/offers-and-promotions" className="pt-8">
                      offers and promotions
                    </Link>
                    <Link to="/ways-to-pay" className="pt-8">ways to pay</Link>
                    <Link to="/vision" className="pt-8">vision</Link>
                    <div className="my-8 flex justify-between">
                      <div>
                        <Link to="/signIn" className="pt-8">sign in</Link>
                      </div>
                      <div className="pb-8 ml-20 md:justify-end">
                        <Link
                          to="/"
                          className="bg-amber-700 px-4 py-4 rounded-md text-white"
                        >
                          create account
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                <NavLink to="/signin" title="" className=" text-white">
                  Sign in
                </NavLink>

                <a
                  href="/"
                  title=""
                  className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-amber-700 border border-transparent rounded-xl hover:opacity-75 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Create free account
                </a>
              </div>
            </div>
          </div>
        </header>

        <Hero />
      </div>
    </>
  );
};

export default NavBar;
