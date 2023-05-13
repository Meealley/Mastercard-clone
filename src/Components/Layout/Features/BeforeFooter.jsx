import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BeforeFooter = () => {
  return (
    <>
      <section className="bg-[#323231]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p className="text-white capitalize py-8">
            <Link to="/" className=""> 
              home <span className="px-4">
              <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default BeforeFooter;
