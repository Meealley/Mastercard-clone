import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";


const FacDebitCard = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <section>
        <div>
          <p className="text-[25px] font-[80px">
            Enjoy the ultimate in convenience and financial control by combining
            the worldwide acceptance and benefits of Mastercard cards with
            direct deduction of funds from your checking account.
          </p>
        </div>
        <div className="my-8" data-aos="fade-up">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Section texts  */}
            <div>
              <div>
                <p className="uppercase font-bcd font-semibold tracking-[4px] text-[13px] lg:py-6 sm:py-3">
                  STANDARD DEBIT MASTERCARD
                </p>
                <p className="pb-4 pt-2 text-2xl font-bcd tracking-abc">
                  From buying groceries to enjoying the vacation of your dreams
                  — elevate every purchase a step above cash or checks with
                  control and convenience
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
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/images/smiling-woman-looking-at-window-while-holding-shopping-bag-debit-mastercard-card-1158x650.jpg"
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
                  ENHANCED DEBIT MASTERCARD
                </p>
                <p className="pb-4 pt-2 text-2xl font-bcd tracking-abc">
                  Turn good deals into great ones by adding value to purchases
                  large and small with convenience, protection and enhanced
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
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/images/world-debit-mastercard-card-1158x650.jpg"
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
                  WORLD DEBIT MASTERCARD®
                </p>
                <p className="pb-4 pt-2 text-2xl font-bcd tracking-abc">
                  Experience a higher level of convenience, security and control
                  with a suite of premier benefits, first-rate customer service
                  and access to exceptional travel experiences
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
                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/find-a-card/images/enhanced-debit-mastercard-card-1158x650.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacDebitCard;
