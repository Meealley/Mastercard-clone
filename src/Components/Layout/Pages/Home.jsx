import React from "react";
import NavBar from "../../Navigation/NavBar";
import BeforeFooter from "../Features/BeforeFooter";
import Footer from "../Features/Footer";
import Section1 from "../Features/Section1";
import Section2 from "../Features/Section2";
import Section3 from "../Features/Section3";
import Section4 from "../Features/Section4";

const Home = () => {
  return (
    <>
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Home;
