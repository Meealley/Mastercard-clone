import React from "react";

const HeroDel = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
        <div className="flex items-center">
          <p className="text-3xl font-medium text-white sm:text-4xl font-pj">
            2943
          </p>
          <p className="ml-3 text-sm text-white font-pj">
            Cards
            <br />
            Delivered
          </p>
        </div>

        <div className="hidden sm:block">
          <svg
            className="text-white"
            width="16"
            height="39"
            viewBox="0 0 16 39"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
            <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
            <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
            <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
            <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
          </svg>
        </div>

        <div className="flex items-center">
          <p className="text-3xl font-medium text-white sm:text-4xl font-pj">
            $1M+
          </p>
          <p className="ml-3 text-sm text-white font-pj">
            Transaction
            <br />
            Completed
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroDel;
