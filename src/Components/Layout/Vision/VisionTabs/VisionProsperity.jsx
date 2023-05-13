import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";

const VisionProsperity = () => {
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/farmers-in-the-field-checking-plants-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Seeding resilience in a digital age
                </p>
                <p className="font-bcd tracking-wide">
                  Farm Pass provides smallholder farmers with improved access to
                  buyers and increased price transparency.
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/female-chef-in-restaurant-kitchen-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Strive: A global small business initiative to accelerate
                  economic recovery
                </p>
                <p className="font-bcd tracking-wide">
                  With our initial investment of $25 million, Strive will help
                  more than five million small businesses access the resources
                  they need to digitize.
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/ignite-program-to-support-millions-of-entrepreneurs-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  CARE International in Pakistan and Mastercard launch Ignite
                  program
                </p>
                <p className="font-bcd tracking-wide">
                  The Ignite program is part of a global collaboration between
                  CARE and the Mastercard Center for Inclusive Growth to help
                  support millions of entrepreneurs.
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/man-looking-at-los-angeles-view-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  An #LALOVE story: How the city got aid to its most vulnerable
                  citizens in just eight days
                </p>
                <p className="font-bcd tracking-wide">
                  Find out how Mastercard helped the city of Los Angeles to
                  distribute COVID-19 relief to Angelenos in need of assistance.
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/woman-getting-in-small-store-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Helping women entrepreneurs survive and thrive in the digital
                  economy
                </p>
                <p className="font-bcd tracking-wide">
                  The Mastercard Center for Inclusive Growth is collaborating
                  with Grameen America and other community development finance
                  institutions to help expand access to capital for underserved
                  entrepreneurs.
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/small-store-business-owner-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  What’s in stock for micro merchants? The working capital they
                  need to grow.
                </p>
                <p className="font-bcd tracking-wide">
                  Mastercard is pioneering digital solutions like the Track
                  Micro Credit Program to connect businesses in need to banks
                  and enable access to short-term credit utilizing sales data.
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

export default VisionProsperity;
