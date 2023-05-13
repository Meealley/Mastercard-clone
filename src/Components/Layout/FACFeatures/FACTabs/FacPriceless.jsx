import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";

const FacPriceless = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="bg-[#f8f7f5] ">
        <section>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* first section  */}
            <div className="lg:p-8 sm:p-8 pb-6 sm:pb-5" data-aos="fade-down">
              <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16 bg-white">
                {/* section with pictures  */}
                <div>
                  <img
                    src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/images/man-taking-photo-rio-de-janeiro_1280x720.jpg"
                    alt=""
                  />
                </div>
                {/* section with texts  */}
                <div className="pl- 10 pr-3 ">
                  <p className="text-2xl px-3">Priceless.com</p>
                  <p className="py-6 px-3">
                    Unlock thousands of extraordinary experiences in the cities
                    where you live and travel, curated exclusively for
                    Mastercard cardholders.
                  </p>
                  <p className="px-3 pb-4 text-gray-600">
                    Learn more{" "}
                    <span className="text-amber-700">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* second section  */}
            <div
              className="lg:p-8 sm:p-8 pb-6 sm:pb-5"
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16 bg-white">
                {/* section with pictures  */}
                <div>
                  <img
                    src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/images/hispanic-girl-smiling-with-family-in-background_1280x720.jpg"
                    alt=""
                  />
                </div>
                {/* section with texts  */}
                <div className="pl- 10 pr-3 px-3">
                  <p className="text-2xl">Priceless Causes®</p>
                  <p className="py-6 px-3">
                    Through cause marketing programs, Mastercard makes it easy
                    to donate to the causes that matter the most to you.
                  </p>
                  <p className="px-3 text-gray-600 pb-5">
                    Learn more{" "}
                    <span className="text-amber-700 ">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* third section  */}
            <div
              className="lg:p-8 sm:p-8 sm:pb-5"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16 bg-white">
                {/* section with pictures  */}
                <div>
                  <img
                    src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/images/silhouette-of-hands-at-concert_1280x720.jpg"
                    alt=""
                  />
                </div>
                {/* section with texts  */}
                <div className="pl- 10 pr-3 px-3">
                  <p className="text-2xl">Priceless Surprises®</p>
                  <p className="py-6 px-3">
                    Be surprised and delighted in big and small ways. Instant
                    upgrades at events to once-in-a-lifetime moments like
                    meeting your heroes, simply for being a Mastercard
                    cardholder.
                  </p>
                  <p className="px-3 text-gray-600 pb-5">
                    Learn more{" "}
                    <span className="text-amber-700 ">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FacPriceless;
