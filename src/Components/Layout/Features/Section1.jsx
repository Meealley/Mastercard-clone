import React, { useEffect } from "react";
// import Aos from "aos";
import Aos from "aos";
import { Link } from "react-router-dom";


const Section1 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mt-20">
          <h3 className="text-center text-3xl font-extrabold lg:mt-32 sm:mt-50 mb-6 uppercase text-gray-800 tracking-widest md:text-center">
            resources
          </h3>
          </div>
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Section Images */}
            <div className="mt-4">
              <img
                data-aos="fade-right"
                className="w-full rounded-md shadow-md"
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/homepage/Home/mastercard-ticker_1280x720.gif"
                alt=""
              />
            </div>
            {/* Section texts */}
            <div>
              <h2
                className="text-4xl font-thin mb-5 font-abc"
                data-aos="fade-down"
              >
                See what’s possible when you partner with{" "}
                <span className="text-amber-700">Mastercard.</span>{" "}
              </h2>
              <p className="mb-6 max-w-full ">
                Mastercard is working with businesses and governments around the
                world to improve the lives of the billions of people we serve
              </p> 
              
               <button className="px-4 py-2 text-amber-700 rounded-full border-amber-700 border-2  bg-inherit hover:bg-amber-700 hover:text-white transition duration-700 ease-in-out">
                <Link to="https://www.mastercard.us/en-us/business/nextgensolutions.html">
                  Read about what's possible
                </Link>
              </button>
            </div>

            {/* end  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
