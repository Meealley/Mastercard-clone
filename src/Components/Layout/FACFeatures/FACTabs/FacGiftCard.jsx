import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";

const FacGiftCard = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <section>
        <div>
          <p className="text-[25px] font-[80px">
            Mastercard Gift Cards are great for holidays, birthdays, graduations
            and anything in between. Simple, convenient and always
            well-received.
          </p>
        </div>
        <div className="my-8" data-aos="fade-up">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Section texts  */}
            <div>
              <div>
                <p className="uppercase font-bcd font-semibold tracking-[4px] text-[13px] lg:py-6 sm:py-3">
                  PREPAID GIFT
                </p>
                <p className="pb-4 pt-2 text-2xl font-bcd tracking-abc">
                  The perfect gift for everyone, every time
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
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/images/prepaid-gift-card-1158x650.jpg"
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
                  THE MASTERCARD WILDLIFE IMPACT GIFT CARD
                </p>
                <p className="pb-4 pt-2 text-2xl font-bcd tracking-abc">
                  Give the gift that helps preserve endangered species and the
                  environment*
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
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/images/wildlife-gift-card-elephant-1158x650.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* another one  */}
      </section>
    </>
  );
};

export default FacGiftCard;
