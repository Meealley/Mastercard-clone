import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../FireBase";
import { authActions } from "../../../store/authSlice";
import Aos from "aos";
import "aos/dist/aos.css";

const Fac = () => {
  const userName = useSelector((state) => state.auth.userName);
  const userEmail = useSelector((state) => state.auth.userEmail);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [toggelNav, setToggleNav] = useState(false);

  const handleToggle = () => {
    setToggleNav((prevNav) => !prevNav);
  };

  // firebase auth
  
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        dispatch(authActions.showName(name));
        dispatch(authActions.showEmail(email));
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#db702e " : "white",
    };
  };
  return (
    <>
      <div>
        <header className="py-4 md:py-6 bg-black">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <a
                  href="/"
                  title=""
                  className="flex rounded outline-none focus:ring-1 focus:ring-gray-900"
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
                <NavLink
                  style={navLinkStyles}
                  to="/find-a-card"
                  title=""
                  className={`text-base  active:text-amber-700 font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2`}
                >
                  {" "}
                  find a card
                </NavLink>

                <NavLink
                  style={navLinkStyles}
                  to="/offers-and-promotions"
                  title=""
                  className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  offers and promotions
                </NavLink>

                <NavLink
                  style={navLinkStyles}
                  to="/ways-to-pay"
                  title=""
                  className="text-base font-medium text-white transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  ways to pay
                </NavLink>

                <NavLink
                  to="/vision"
                  style={navLinkStyles}
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
                  <div
                    className="flex flex-col cursor-pointer bg-gray-300 text-left w-full h-85 items-start absolute lg:top-10 md:top-20 top-[60px] left-0 z-10  space-x-6  transition-all ease-in duration-500"
                    data-aos="fade-out"
                  >
                    <Link to="/"></Link>
                    <Link to="/find-a-card" className="pt-8">find a card</Link>
                    <Link to="/offers-and-promotions" className="pt-8">
                      offers and promotions
                    </Link>
                    <Link to="/ways-to-pay" className="pt-8">ways to pay</Link>
                    <Link to="/vision" className="pt-8">vision</Link>

                    <div className="my-8 flex justify-between">
                      <div>
                        <Link to="/signin" className="pt-8">sign in</Link>
                      </div>
                      <Link className="pb-8 ml-20 md:justify-end">
                        <Link
                          to="/"
                          className="bg-amber-700 px-4 py-4 rounded-md text-white"
                        >
                          {`Welcome, ${userName ? userName : userEmail}`}
                        </Link>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
                {!isAuth && (
                  <NavLink
                    style={navLinkStyles}
                    to="/signin"
                    title=""
                    className=" text-white"
                  >
                    Sign in
                  </NavLink>
                )}
                {isAuth && (
                  <div>
                    <NavLink
                      style={navLinkStyles}
                      onClick={logoutHandler}
                      title=""
                      className=" text-white px-3"
                    >
                      Logout
                    </NavLink>

                    <Link
                      href="/"
                      title=""
                      className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-amber-700 border border-transparent rounded-xl hover:opacity-75 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                    >
                      {`Welcome, ${userName ? userName : userEmail}`}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Fac;
