import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const OAPContents = () => {
  return (
    <>
      <div className="bg-[#f8f7f5] ">
        <section>
          <div className='className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"'>
            <p className="text-2xl py-12 font-thin font-bcd">
              Related contents
            </p>
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              <div>
                <div>
                  <img
                    src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/images/woman-outside-window-world-credit-card-650.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-bcd text-2xl py-5">
                    World Mastercard<sup>®</sup>
                  </p>
                  <p className="text-gray-700 pb-5">
                    Giving you the flexibility to explore the places and
                    pursuits that matter most to you.
                  </p>
                  <p className="text-sm pb-12 font-semibold text-gray-600 hover:text-amber-700 cursor-pointer">
                    {" "}
                    Learn more
                    <span className="px-1 text-amber-700">
                      <FontAwesomeIcon icon={faArrowRight} />{" "}
                    </span>
                  </p>
                </div>
              </div>

              {/* another grid  */}
              <div>
                <div>
                  <img
                    src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/images/world-elite-mastercard-credit-1158x650.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-bcd text-2xl py-5">
                    World Elite Mastercard<sup>®</sup>
                  </p>
                  <p className="text-gray-700 pb-5">
                    Outstanding purchasing power and top-of-the-line features
                    and benefits.
                  </p>
                  <p className="text-sm pb-12 font-semibold text-gray-600 hover:text-amber-700 cursor-pointer">
                    {" "}
                    Learn more
                    <span className="px-1 text-amber-700">
                      <FontAwesomeIcon icon={faArrowRight} />{" "}
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

export default OAPContents;
