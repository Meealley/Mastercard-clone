import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";


const FacCreditCard = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <section>
        <div>
          <p className="text-[25px] font-[80px">
            Get the financial freedom you deserve. Credit cards offer
            exceptional benefits, rewards, services and spending power that can
            help make your financial and personal dreams come true.
          </p>
        </div>
        <div className="my-8" data-aos="fade-up">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Section texts  */}
            <div>
              <div>
                <p className="uppercase font-bcd font-semibold tracking-[4px] text-[13px] lg:py-6 sm:py-3">
                  standard mastercard
                </p>
                <p className="pb-4 pt-2 text-2xl font-bcd tracking-abc">
                  For everyday purchases and beyond
                </p>
                <p className="text-sm font-semibold text-gray-600 hover:text-amber-700 cursor-pointer">
                  {" "}
                  Learn more
                  <span className="px-1 text-amber-700">
                    <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </span>
                </p>
              </div>
            </div>

            {/* section image  */}
            <div>
              <img
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/images/standard-mastercard-card-1158x650.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="my-8" data-aos="fade-up">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Section texts  */}
            <div>
              <div>
                <p className="uppercase font-bcd font-semibold tracking-[4px] lg:text-[13px] sm:text-[8px] lg:py-6 sm:py-3">
                  world mastercard
                </p>
                <p className="pb-4 pt-2 text-2xl font-bcd tracking-abc">
                  Giving you the flexibility to explore the places and pursuits
                  that matter most to you
                </p>
                <p className="text-sm font-semibold text-gray-600 hover:text-amber-700 cursor-pointer">
                  {" "}
                  Learn more
                  <span className="px-1 text-amber-700">
                    <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </span>
                </p>
              </div>
            </div>

            {/* section image  */}
            <div>
              <img
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/images/couple-shopping-on-street-pointing-to-store-front-window-world-mastercard-card-1158x650.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* another one  */}

        <div className="my-8" data-aos="fade-up">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Section texts  */}
            <div>
              <div>
                <p className="uppercase font-bcd font-semibold tracking-[4px] text-[13px] lg:py-6 sm:py-3">
                  world elite mastercard
                </p>
                <p className="pb-4 pt-2 text-2xl font-bcd tracking-abc">
                  Outstanding purchasing power and top-of-the-line features and
                  benefits
                </p>
                <p className="text-sm font-semibold text-gray-600 hover:text-amber-700 cursor-pointer">
                  {" "}
                  Learn more
                  <span className="px-1 text-amber-700">
                    <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </span>
                </p>
              </div>
            </div>

            {/* section image  */}
            <div>
              <img
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/images/world-elite-mastercard-credit-1158x650.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacCreditCard;
