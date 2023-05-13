import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPeopleGroup,
  faEarthAfrica,
  faHandsHoldingCircle
} from "@fortawesome/free-solid-svg-icons";

const VisionProspect = () => {
  return (
    <>
      <section className="mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>
            <h3 className="my-4 text-[32px] font-bcd font-[80px] ">
              Shaping a more equitable and prosperous world
            </h3>
            <p className="text-[16px] text-gray-700">
              Grounded in strong Principles of Governance, we are applying the
              full breadth of our technology, insights, partnerships and people
              to address social, economic and environmental challenges. It’s how
              we’re empowering people and powering economies.
            </p>
          </div>

          {/* the font icon starts here  */}
          <div className="my-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-3 md:grid-cols-2 gap-y-12 lg:gap-x-16">
              {/* starts here  */}
              <div>
                <div>
                  <FontAwesomeIcon className="text-6xl text-[#cf4500]" icon={faPeopleGroup} />
                  <p className="font-bold text-[12px] font-bcd uppercase mt-8 mb-4 text-black tracking-abc ">
                    people
                  </p>
                  <p className="text-2xl pb-3">
                    Empowering people to reach their full potential
                  </p>
                  <p>
                    We are on a journey to create the type of workplace and
                    world where everyone has the opportunity to connect their
                    greatest passions to their fullest potential.
                  </p>
                  <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                    <a href="/">
                      learn more{" "}
                      <span className="text-amber-700">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </a>
                  </p>
                </div>
              </div>

              {/* ends here  */}
              {/* starts here  */}
              <div>
                <div>
                  <FontAwesomeIcon className="text-6xl text-[#cf4500]" icon={faEarthAfrica} />
                  <p className="font-bold text-[12px] font-bcd uppercase mt-8 mb-4 text-black tracking-abc ">
                    planet
                  </p>
                  <p className="text-2xl pb-3">
                    Preserving the planet for future generations
                  </p>
                  <p>
                    We are committed to reducing our own carbon footprint and
                    creating innovative solutions and initiatives that unite our
                    network of customers, partners and consumers in climate
                    action.
                  </p>
                  <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                    <a href="/">
                      learn more{" "}
                      <span className="text-amber-700">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </a>
                  </p>
                </div>
              </div>

              {/* ends here  */}
              {/* starts here  */}
              <div>
                <div>
                  <FontAwesomeIcon className="text-6xl text-[#cf4500]" icon={faHandsHoldingCircle} />
                  <p className="font-bold text-sm font-bcd uppercase mt-8 mb-4 text-black tracking-abc ">
                    people
                  </p>
                  <p className="text-2xl pb-3">
                    Fostering prosperity around the world
                  </p>
                  <p>
                    We are focused on empowering people by ensuring that
                    everyone has the opportunity to succeed in the digital
                    economy.
                  </p>
                  <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                    <a href="/">
                      learn more{" "}
                      <span className="text-amber-700">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </a>
                  </p>
                </div>
              </div>

              {/* ends here  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionProspect;
