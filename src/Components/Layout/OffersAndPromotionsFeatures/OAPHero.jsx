import React from 'react'

const OAPHero = () => {
  return (
    <>
      <section className="bg-oap-img w-full bg-no-repeat lg:bg-cover md:bg-cover sm:bg-cover lg:h-full md:h-full">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            {/* Section texts */}
            <div className="lg:mb-48 md:mb-24">
              <div className="flex items-center" data-aos="fade-down">
                <p className="text-black font-[80px] sm:text-3xl md:text-4xl lg:text-5xl font-abc mt-20 mb-8 sm:mt-20 md:mt-24 lg:mt-48">
                  Unique and exclusive offers, only from Mastercard
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OAPHero
