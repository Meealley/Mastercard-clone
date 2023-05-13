import React from "react";

const WapHero = () => {
  return (
    <>
      <section className="bg-wap-pay w-full bg-no-repeat lg:bg-cover md:bg-cover sm:bg-contain lg:h-full md:h-full sm:h-screen">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Section texts */}
            <div className="lg:mb-48 md:mb-24">
              <div className="flex items-center" data-aos="fade-down">
                <p className="text-white font-[80px] sm:text-3xl md:text-4xl lg:text-5xl font-abc mt-20 mb-8 sm:mt-20 md:mt-24 lg:mt-48">
                  <p className="uppercase font-bcd font-semibold tracking-[4px] text-[13px] py-6">
                    PAYMENT METHODS
                  </p>
                  Pay your way
                </p>
              </div>
              <p className="text-white">We make it easy. Just click, tap or swipe.</p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WapHero;
