import React from "react";
import { Link } from "react-router-dom";

const VisionSection1 = () => {
  return (
    <>
      <section className="mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 ml-0 max-w-7xl sm:px-6 lg:px-8 mt-24">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Section Images */}
            <div className=" w-full bg-no-repeat lg:bg-cover md:bg-cover sm:bg-contain lg:h-full md:h-full sm:h-screen">
              <img
                data-aos="fade-right"
                className="w-full"
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/people-crossing-wooden-bridge-720x810.jpg"
                alt=""
              />
            </div>

            {/* Section texts */}
            <div>
              <p
                className="text-4xl font-[200] mb-5 font-bcd"
                data-aos="fade-down"
              >
                Building a sustainable digital economy where everyone prospers
              </p>
              <p className="mb-6 text-gray-800">
                Mastercard has been a leader on the front lines of financial
                inclusion, inclusive growth and data responsibility for more
                than a decade. We believe in doing well by doing good, so that
                everything we do enables people and the planet to thrive. Our
                scale and reach enable us to make measurable impact, as we track
                our progress and drive transparency, accountability and
                integrity throughout our network.
              </p>
              <button className="block px-4 py-2 text-black rounded-full border-black border-2  bg-inherit hover:bg-amber-700 hover:text-white transition duration-700 ease-in-out">
                <Link to="https://www.mastercard.com/content/dam/public/mastercardcom/na/global-site/documents/mastercard-sustainability-report-2021.pdf">
                  Download 2021 report
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionSection1;
