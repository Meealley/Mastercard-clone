import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Aos from "aos";

const WapFeatures = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="bg-[#f8f7f5] ">
        <section className="py-12">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* first section  */}
            <div className="lg:p-8 sm:p-8 pb-6 sm:pb-5" data-aos="fade-down">
              <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16 bg-white">
                {/* section with pictures  */}
                <div>
                  <img
                    src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/images/close-up-of-mans-arm-in-dress-shirt-paying-for-danish-and-coffee-by-taping-watch-on-terminal-1280x720.jpg"
                    alt=""
                  />
                </div>
                {/* section with texts  */}
                <div className="pl- 10 pr-3 ">
                  <p className="text-[12px] px-3 py-4 uppercase font-bcd font-bold tracking-[4px]">
                    contactless
                  </p>
                  <p className="text-2xl">Tap & Go® Payments</p>

                  <p className="py-6 px-3">
                    A faster, safer way to make everyday purchases with your
                    contactless-enabled card or device. It's like having exact
                    change wherever you go, but even more convenient than cash.
                  </p>
                  <p className="px-3 pb-4 text-gray-600">
                    <Link to="https://mea.mastercard.com/en-region-mea/personal/ways-to-pay/click-to-pay.html">
                      Get started
                    </Link>
                    <span className="text-amber-700">
                      <FontAwesomeIcon icon={faArrowRight} />
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
                    src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/images/man-tapping-phone-at-subway-1280x720.jpg"
                    alt=""
                  />
                </div>
                {/* section with texts  */}
                <div className="pl- 10 pr-3 px-3">
                  <p className="text-[12px] px-3 py-4 uppercase font-bcd font-bold tracking-[4px]">
                    everyday spend
                  </p>
                  <p className="text-2xl">Speedier subway payments</p>
                  <p className="py-6 px-3">
                    The better way to pay the MTA. Now you can breeze through
                    the turnstile with the tap of your contactless Mastercard.
                  </p>
                  <p className="px-3 text-gray-600 pb-5">
                    <Link to="https://mea.mastercard.com/en-region-mea/personal/ways-to-pay/contactless.html">
                      Get started
                    </Link>
                    <span className="text-amber-700 ">
                      <FontAwesomeIcon icon={faArrowRight} />
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
                    src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/consumers/images/man-tapping-car-fob-on-terminal-1280x720.jpg"
                    alt=""
                  />
                </div>
                {/* section with texts  */}
                <div className="pl- 10 pr-3 px-3">
                  <p className="text-[12px] px-3 py-4 uppercase font-bcd font-bold tracking-[4px]">
                    connected commerce
                  </p>
                  <p className="text-2xl">Beyond the wallet</p>
                  <p className="py-6 px-3">
                    Pay when, where and how you want using the device and
                    digital environment of your choice.
                  </p>
                  <p className="px-3 text-gray-600 pb-5">
                    Get connected
                    <span className="text-amber-700 ">
                      <FontAwesomeIcon icon={faArrowRight} />
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

export default WapFeatures;
