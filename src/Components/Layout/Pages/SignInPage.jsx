import React from "react";
import Fac from "../FACFeatures/FacNav";
import BeforeFooter from "../Features/BeforeFooter";
import Footer from "../Features/Footer";
import SignIn from "../SignIn/SignIn";

const SignInPage = () => {
  return (
    <>
      <Fac />
      <SignIn />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default SignInPage;
