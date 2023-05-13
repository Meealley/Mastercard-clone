import React from "react";
import { Outlet } from "react-router-dom";
// import Fac from "../FACFeatures/FacNav";

const RootLaoyout = () => {
  return (
    <>
      {/* <Fac /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLaoyout;
