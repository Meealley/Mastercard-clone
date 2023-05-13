import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Section2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="bg-hero-card w-full bg-no-repeat lg:bg-cover md:bg-cover sm:bg-contain lg:h-full md:h-full sm:h-screen">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Section texts */}
            <div className="lg:mb-48 md:mb-24">
              <div className="flex items-center" data-aos="fade-down">
                <h1 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-abc mt-20 mb-8 sm:mt-20 md:mt-24 lg:mt-48">
                  Find the Mastercard that’s right for you
                </h1>
              </div>
              <button className="block px-4 py-2 text-white rounded-full border-white border-2  bg-inherit hover:bg-amber-700 hover:text-white transition duration-700 ease-in-out">
                <Link to="/find-a-card">Get a card</Link>
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
