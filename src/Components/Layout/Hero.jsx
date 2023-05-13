import React, { useEffect } from "react";
import HeroDel from "./HeroDel";
import Aos from "aos";
import "aos/dist/aos.css";

import Heroform from "./Heroform";
// import HeroImg from "./HeroImg";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <video
            src="https://mastercard-a.akamaihd.net/videos/RSA_Header_video_1080p_new.mp4?autoplay=1"
            className="z-[-10] absolute w-full h-full object-cover  top-0 left-0"
            muted
            loop
            autoPlay
          ></video>
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16 z-10">
            {/* Hero texts */}
            <div>
              <div className="text-center lg:text-left" data-aos="fade-up">
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  A special type of card for you to use
                </h1>
                <p className="mt-2 text-white sm:mt-8 font-inter">
                  We work to connect and power an inclusive digital economy that
                  benefits everyone, everywhere by making transactions safe,
                  simple, smart and accessible. Using secure data and networks,
                  partnerships and passion, our innovations and solutions help
                  individuals, financial institutions, governments and
                  businesses realize their greatest potential. Our decency
                  quotient, or DQ, drives our culture and everything we do
                  inside and outside of our company.
                </p>
                <Heroform />
              </div>
              <HeroDel />
            </div>

            {/* Hero Images */}
            {/* <HeroImg /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
