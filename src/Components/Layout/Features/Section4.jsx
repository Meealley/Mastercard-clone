import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <>
      <section className="mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-2xl my-8 font-abc md:text-center lg:text-left md:tracking-wider">
            Related contents
          </h2>
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-4 gap-y-12 lg:gap-x-16">
            <div>
              <div>
                <img
                  src="https://www.mastercard.com/content/dam/public/mastercardcom/eu/gb/vision/Images/priceless-causes/SIBSTAR_1280X720px.png"
                  alt=""
                />
                <p className="font-extrabold font-abc uppercase mt-8 mb-4 text-gray-500 tracking-widest">
                  <small>news</small>
                </p>
                <h3 className="font-bcd text-2xl tracking-wide">
                  Sibstar, first debit card for people living with dementia
                </h3>
                <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                  <Link to="https://www.mastercard.com/news/europe/en-uk/newsroom/press-releases/en-gb/2023/new-debit-card-and-app-launches-to-help-those-living-with-dementia-to-safely-manage-spending/">
                    learn more{" "}
                    <span className="text-amber-700">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.mastercard.com/content/dam/public/mastercardcom/na/global-site/home/team-of-programmers-working-in-office-1280x720.jpg"
                  alt=""
                />
                <p className="font-extrabold font-abc uppercase mt-8 mb-4 text-gray-500 tracking-widest">
                  <small>innovation</small>
                </p>
                <h3 className="font-bcd text-2xl tracking-wide">
                  Discover a clear, flexible path to success with Mastercard
                  Developers
                </h3>
                <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                  <Link to="/">
                    learn more{" "}
                    <span className="text-amber-700">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.mastercard.com/content/dam/public/mastercardcom/na/global-site/vision/images/carrying-seedlings-in-a-field-1280x720.jpg"
                  alt=""
                />
                <p className="font-extrabold font-abc uppercase mt-8 mb-4 text-gray-500 tracking-widest">
                  <small>news</small>
                </p>
                <h3 className="font-bcd text-2xl tracking-wide">
                  Mastercard marks year of collective action in annual
                  Sustainability Report
                </h3>
                <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                  <Link to="https://www.mastercard.com/news/perspectives/2022/mass-transit-ways-to-improve-public-transportation/">
                    learn more{" "}
                    <span className="text-amber-700">
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </span>
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.mastercard.com/content/dam/public/mastercardcom/na/global-site/home/woman-carrying-baby-1280x720.jpg"
                  alt=""
                />
                <p className="font-extrabold font-abc uppercase mt-8 mb-4 tracking-widest text-gray-500">
                  <small>featured topic</small>
                </p>
                <h3 className="font-bcd text-2xl tracking-wide">
                  Together, we can achieve inclusion through action
                </h3>
                <p className="tracking-widest text-gray-500 capitalize mt-4 hover:text-amber-700">
                  <Link to="https://www.mastercard.com/news/perspectives/2022/metaverse-privacy-data-collection-nft/">
                    learn more{" "}
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
    </>
  );
};

export default Section4;
