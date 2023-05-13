import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Section3 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="bg-stone-600">
        <section>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              {/* section text */}
              <div>
                <div className="text-white " data-aos="fade-right">
                  <div className="sm:mt-20">
                    <small className="uppercase font-extrabold tracking-widest mt-8 ">
                      priceless
                    </small>
                  </div>
                  <p className="text-3xl my-6 ">
                    Priceless is enabling unique experiences that can be enjoyed
                    at home or away
                  </p>
                  <p className="cursor-pointer text-gray-400 tracking-widest hover:text-amber-700">
                    <Link to="https://www.priceless.com/">
                      Learn more{" "}
                      <span className="text-amber-700">
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              {/* Section image */}
              <div>
                <img
                  data-aos="zoom-in-up"
                  className="my-8 rounded-md"
                  src="https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2FRemote-business-ideas.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.434&fp-y=0.1918&h=415&q=88&w=622&s=52988041275b13368828801a66929bc1"
                  alt="a woman"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Another one  */}

        <section>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              {/* Section image */}
              <div>
                <img
                  data-aos="zoom-in-down"
                  className="my-8 rounded-md"
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/homepage/Home/family-wrapping-presents-for-winter-holidays-1280x720.jpg"
                  alt="find a card"
                />
              </div>

              {/* section text */}
              <div>
                <div className="text-white" data-aos="zoom-in-down">
                  <div className="sm:mt-10">
                    <small className="uppercase font-extrabold tracking-widest mt-8 ">
                      mastercard gift cards
                    </small>
                  </div>
                  <p className="text-3xl my-6 ">
                    The perfect gift for everyone, every time
                  </p>
                  <p className="cursor-pointer text-gray-400 tracking-widest hover:text-amber-700 pb-8">
                    <Link to="https://www.mastercardgiftcard.com/catalog?SOLID=MCCORPWEBHOMEPAGE">
                      Get a card{" "}
                      <span className="text-amber-700">
                        <FontAwesomeIcon icon={faUpRightFromSquare} />
                      </span>
                    </Link>
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

export default Section3;
