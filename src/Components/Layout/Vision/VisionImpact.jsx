import React from "react";
import VisionTab from "./VisionTab";

const VisionImpact = () => {
  return (
    <>
      <section className="mt-12 bg-[#f8f7f5] sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>
            <h3 className="my-4 text-[32px] font-[80px] ">Our impact</h3>
            <p className="text-xl text-gray-700">
              Together we can ensure the digital economy is enabled with equity
              and inclusion at its foundation.
            </p>
          </div>
        </div>
        <VisionTab />
      </section>
    </>
  );
};

export default VisionImpact;
