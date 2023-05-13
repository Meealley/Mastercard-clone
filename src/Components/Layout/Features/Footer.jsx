import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faGlobe,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-stone-900 text-white">
        <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Mastercard image and faq  */}
            <div>
              <div className="pt-24">
                <img
                  src="https://www.mastercard.com/content/dam/public/mastercardcom/na/global-site/home/mc-logo-52.svg"
                  alt=""
                />
                <h2 className="py-8 text-2xl font-abc">
                  Need help? We’re always <br />
                  here when you need us.
                </h2>
                <p className="text-gray-500  cursor-pointer">
                  <span>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </span>
                  <span className="px-2 uppercase">
                    <Link to="https://mea.mastercard.com/en-region-mea/frequently-asked-questions.html">
                      faqs
                    </Link>
                  </span>
                </p>
                <p className="text-gray-500 capitalize cursor-pointer pt-3">
                  <span>
                    <FontAwesomeIcon icon={faMessage} />
                  </span>
                  <span className="px-2">
                    <Link to="https://mea.mastercard.com/en-region-mea/personal/get-support.html">
                      get support
                    </Link>
                  </span>
                </p>
              </div>
            </div>

            {/* company text  */}
            <div>
              <div className="lg:mt-20 sm:mt-8 md:mt-8">
                <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                  <div>
                    <p className="uppercase tracking-[4px] font-light pb-3">
                      company
                    </p>
                    <div className="capitalize cursor-pointer">
                      <p className="py-1">
                        <Link to="https://www.mastercard.us/en-us/vision/who-we-are.html">
                          who are we
                        </Link>
                      </p>
                      <p className="py-1">
                        <Link to="https://careers.mastercard.com/us/en">
                          careers
                        </Link>
                      </p>
                      <p className="py-1">
                        <Link to="https://www.mastercard.com/news/">
                          newsroom
                        </Link>
                      </p>
                      <p className="py-1">
                        <Link to="https://investor.mastercard.com/overview/default.aspx">
                          investors relations
                        </Link>
                      </p>
                      <p className="py-1">
                        <Link to="">binding corporate rules </Link>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="uppercase tracking-[4px] font-light pb-3">
                      mastercard sites
                    </p>
                    <div className="capitalize cursor-pointer">
                      <p className="py-1">
                        <Link to="https://developer.mastercard.com/">
                          mastercard Developers
                        </Link>
                      </p>
                      <p className="py-1">
                        <Link to="https://www.mastercardservices.com/en">
                          mastercard data and services
                        </Link>
                      </p>
                      <p className="py-1">
                        <Link to="https://www.mastercard.com/brandcenter/en/home">
                          mastercard brand center
                        </Link>
                      </p>
                      <p className="py-1">
                        <Link to="https://www.mastercard.com/marketingcenter/">
                          mastercard marketing center
                        </Link>
                      </p>
                      <p className="py-1">
                        <Link to="https://www.priceless.com/">
                          priceless.com
                        </Link>
                      </p>
                      <p className="py-1">
                        <Link to="https://www.mastercardcenter.org/">
                          center for inclusive growth
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* this is the border  */}
          <div className="border border-zinc-600 my-10">
            <span></span>
          </div>

          <div className=" md:px-32 md:flex lg:flex justify-between pb-8  capitalize sm:block sm:p-5 sm:items-start">
            <div>&copy; 1994-2023 mastercard</div>
            <div className="lg:flexlg:justify-between cursor-pointer sm:block sm:items-start">
              <div className="lg:px-8 sm:px-0">
                <Link to="https://mea.mastercard.com/en-region-mea/vision/terms-of-use.html">
                  terms and condition
                </Link>
              </div>
            </div>
            <div>
              <span className="lg:px-3 sm:px-0">
                <FontAwesomeIcon icon={faGlobe} />
              </span>
              <span className="px-1">
                <Link
                  to="https://mea.mastercard.com/content/mastercardcom/en-region-mea/en/country-and-language-selector.html?locale=en-region-mea"
                  className="cursor-pointer"
                >
                  united states - english
                </Link>
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
