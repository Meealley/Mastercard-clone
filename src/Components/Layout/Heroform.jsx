import React from "react";
import { Link } from "react-router-dom";

const Heroform = () => {
  return (
    <>
      <form className="mt-8 sm:mt-10">
        <div className="relative p-2 sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-90">
          <input
            type="email"
            name=""
            id="email"
            placeholder="Enter your Email Address"
            className="placeholder:text-gray-400 block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border outline-none border-gray-400  focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
          />
          <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
            <button
              className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-amber-700 rounded-full focus:outline-none focus:bg-amber-700 font-pj hover:bg-none hover:border-2 border-amber-700 hover:text-white"
              type="submit"
            >
              <Link to="/find-a-card">Get Free Card</Link>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Heroform;
