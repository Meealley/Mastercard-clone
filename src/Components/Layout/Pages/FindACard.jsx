import React from "react";
import FacBenefit from "../FACFeatures/FacBenefit";
import FacHero from "../FACFeatures/FacHero";
import Fac from "../FACFeatures/FacNav";
import FacSection1 from "../FACFeatures/FacSection1";
import FacPriceless from "../FACFeatures/FACTabs/FacPriceless";
import FacTab from "../FACFeatures/FACTabs/FacTab";
import BeforeFooter from "../Features/BeforeFooter";
import Footer from "../Features/Footer";

const FindACard = () => {
  return (
    <div>
      <Fac />
      <FacHero />
      <FacSection1 />
      <FacTab />
      <FacPriceless />
      <FacBenefit />
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default FindACard;
