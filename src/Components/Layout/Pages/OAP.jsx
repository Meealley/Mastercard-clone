import React from "react";
import BeforeFooter from "../Features/BeforeFooter";
import Footer from "../Features/Footer";
import OAPContents from "../OffersAndPromotionsFeatures/OAPContents";
import OAPFeatures from "../OffersAndPromotionsFeatures/OAPFeatures";
import OAPHero from "../OffersAndPromotionsFeatures/OAPHero";
import OAPNav from "../OffersAndPromotionsFeatures/OAPNav";
import OAPResources from "../OffersAndPromotionsFeatures/OAPResources";
import OAPTermsandCondition from "../OffersAndPromotionsFeatures/OAPTermsandCondition";

const OAP = () => {
  return (
    <>
      <OAPNav />
      <OAPHero />
      <OAPResources />
      <OAPFeatures />
      <OAPContents />
      <OAPTermsandCondition />
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default OAP;
