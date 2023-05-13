import React from "react";
import { Link } from "react-router-dom";
import Fac from "../FACFeatures/FacNav";
import BeforeFooter from "../Features/BeforeFooter";
import Footer from "../Features/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ErrorPage = () => {
  return (
    <>
      <Fac />
      <section className="mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>
            <h1 className="text-center lg:text-4xl sm:text-3xl  tracking-abc font-bcd font-semibold lg:mt-32 sm:mt-0 mb-6 uppercase text-gray-800 tracking-widest md:text-center">
              Page not found
            </h1>
            <h3 className="text-center lg:text-2xl sm:text-lg">
              The page you're looking for can't be found. Try one of the links
              below, or try searching for a keyword(s) with the search icon
              above.
            </h3>
            <div className="my-10 flex px-12 text-sm font-bold text-gray-600">
              <p className="px-12">
                <Link to="/">Home</Link>
                <span className="px-2 text-amber-700">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </p>
              <p>
                <Link>FAQs</Link>
                <span className="px-2 text-amber-700">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <BeforeFooter />
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
