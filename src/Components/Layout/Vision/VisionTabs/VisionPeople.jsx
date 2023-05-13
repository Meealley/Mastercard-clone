import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";

const VisionPeople = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <section className="mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 lg:mx-auto md:mx-4  max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-3 md:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* features  */}
            <div>
              <div>
                <img
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/team-at-big-table-having-meeting-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  In pursuit of gender equity
                </p>
                <p className="font-bcd tracking-wide sm:text-[8px]">
                  Mastercard is committed to designing a better world for women
                  and creating limitless possibilities for everyone.
                </p>
                <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                  <a href="/">
                    learn more{" "}
                    <span className="text-amber-700">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            {/* features  */}
            <div>
              <div>
                <img
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/transgender-woman-looking-at-camera-during-pride-parade-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Being your true self is Priceless
                </p>
                <p className="font-bcd tracking-wide">
                  We believe in everyone’s right to be their true self and
                  proudly commit to play our part to make that happen.
                </p>
                <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                  <a href="/">
                    learn more{" "}
                    <span className="text-amber-700">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            {/* features  */}
            <div>
              <div>
                <img
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/happy-african-american-people-hugging-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Standing against racism,creating equal opportunities for
                  all
                </p>
                <p className="font-bcd tracking-wide">
                  As a part of our journey to build an economy that works for
                  everyone, everywhere, we are investing $500M in Black
                  communities over the next five years.
                </p>
                <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                  <a href="/">
                    learn more{" "}
                    <span className="text-amber-700">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            {/* features  */}
            <div>
              <div>
                <img
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/icons/mastercard-touch-cards-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  A new card standard for people who are blind or partially
                  sighted
                </p>
                <p className="font-bcd tracking-wide">
                  The Touch Card improves upon a current design standard to help
                  blind and partially sighted consumers use the right card, the
                  right way, by touch alone.
                </p>
                <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                  <a href="/">
                    learn more{" "}
                    <span className="text-amber-700">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            {/* features  */}
            <div>
              <div>
                <img
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/smiling-trans-person-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Making a difference for the trans and nonbinary community
                </p>
                <p className="font-bcd tracking-wide">
                  Find out how True Name™ helps to remedy the frustration of
                  having to show an ID that does not reflect one’s chosen
                  identity.
                </p>
                <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                  <a href="/">
                    learn more{" "}
                    <span className="text-amber-700">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            {/* features  */}
            <div>
              <div>
                <img
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/diverse-mc-team-sitting-in-lounge-area-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Why we’re linking employee compensation to ESG goals
                </p>
                <p className="font-bcd tracking-wide">
                  Our new compensation model for executives will help Mastercard
                  honor our commitment to do well by doing good.
                </p>
                <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                  <a href="/">
                    learn more{" "}
                    <span className="text-amber-700">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </a>
                </p>
              </div>
            </div>

            {/* end here  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionPeople;
