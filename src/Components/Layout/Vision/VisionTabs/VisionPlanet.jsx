import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";

const VisionPlanet = () => {
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/man-tending-to-young-trees-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Mastercard accelerates net zero timeline
                </p>
                <p className="font-bcd tracking-wide">
                  At the UN Climate Change Conference, we unveiled our plans to
                  accelerate our net zero timeline and scale our sustainable
                  commerce solutions.
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/tall-trees-view-from-bottom-640x360.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Mastercard launches global Sustainability Innovation Lab
                </p>
                <p className="font-bcd tracking-wide">
                  This new lab will spearhead further development of our
                  portfolio of environmentally conscious digital products and
                  solutions.
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/icons/layers-of-sustainable-card-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Sustainable cards program
                </p>
                <p className="font-bcd tracking-wide">
                  Find out how Mastercard is empowering consumers to choose a
                  sustainable future with our eco-friendly cards.
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/icons/phones-with-carbon-calculator-app-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Mastercard integrates Carbon Calculator across global network
                </p>
                <p className="font-bcd tracking-wide">
                  This new Mastercard feature provides carbon footprint data and
                  insights to help inform consumer spending and offer ways to
                  contribute to reforestation.
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/senior-man-planting-a-tree-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  Mastercard expands the Priceless Planet Coalition’s forest
                  restoration effort
                </p>
                <p className="font-bcd tracking-wide">
                  With 15 new projects across six continents, progress is
                  accelerating toward the goal of 100 million trees, as consumer
                  support for environmental causes grows.
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
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/restored-trees-in-africa-1280x720.jpg"
                  alt=""
                />
                <p className="font-normal text-[30px] font-bcd capitalize mt-8 mb-4 text-black tracking-wider">
                  How local communities are reforesting parts of Africa, one
                  seedling at a time
                </p>
                <p className="font-bcd tracking-wide">
                  Learn how the Priceless Planet Coalition™ is helping to
                  mitigate climate change and global deforestation by restoring
                  100 million trees.
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

export default VisionPlanet;
