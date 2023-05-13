import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Fac from "../FACFeatures/FacNav";

const VisionNav = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Fac />
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <video
            src="https://mastercardamd-a.akamaihd.net/dxp/prod/sustainability-video_1300x450.mp4?autoplay=1"
            className="z-[-10] absolute w-full h-[70%] object-cover  top-0 left-0 "
            muted
            loop
            autoPlay
          ></video>
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16 z-10">
            {/* VisionNav texts */}
            <div>
              <div className="text-center lg:text-left" data-aos="fade-up">
                <p className="mt-32 uppercase font-bcd font-semibold tracking-[4px] text-[13px] text-white py-6">
                  POWERING ECONOMIES & EMPOWERING PEOPLE
                </p>

                <p className=" font-normal leading-tight text-white sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">
                  Doing well by doing good
                </p>
                <p className="mt-2 text-white sm:mt-8 font-inter">
                Mastercard Corporate Sustainability Report 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionNav;
