import React from "react";
import { Link } from "react-router-dom";

const VisionCeo = () => {
  return (
    <>
      <section className="mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* section texts  */}
            <div>
              <div className="border-l-4 border-[#cf4500]">
                <p className="text-3xl px-8 leading-[48px] font-thin mb-5 font-bcd">
                  We recognize environmental, social and governance efforts are
                  intertwined. We cannot fix one at the expense of another. Our
                  world — global and local communities — is successful when
                  growth is sustainable and inclusive and when prosperity is
                  shared.
                </p>
                <p className="px-8 mt-16 font-bcd">–Michael Miebach, CEO</p>
              </div>
            </div>
            {/* section image  */}
            <div>
              <div>
                <img
                  src="https://www.mastercard.us/content/dam/public/mastercardcom/na/global-site/vision/images/michael-miebach-708x573.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link to="https://www.mastercard.com/content/dam/public/mastercardcom/na/global-site/documents/michael-miebach-letter-2021.pdf" className="px-4 py-2 text-amber-700 rounded-full border-amber-700 border-2  bg-inherit hover:bg-amber-700 hover:text-white transition duration-700 ease-in-out">
             View CEO letter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionCeo;
