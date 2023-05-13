import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const OAPResources = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Section texts */}
            <div>
              <h2
                className="text-2xl font-thin mb-5 font-abc"
                data-aos="fade-down"
              >
                Take advantage of the exciting merchant offers that come with
                World and World Elite Mastercard®
              </h2>
              <p className="mb-6 text-gray-800">
                Enjoy exclusive offers from popular brands for services like
                ride-sharing, food delivery, and online shopping so you can make
                the most of life’s Priceless® moments.
              </p>
            </div>

            {/* Section Images */}
            <div>
              <img
                data-aos="fade-up"
                className="w-full"
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/other/mastercard-world-world-elite-cards-1280x720.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OAPResources;
