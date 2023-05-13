import React from 'react'
import BeforeFooter from '../Features/BeforeFooter'
import Footer from '../Features/Footer'
import VisionCeo from '../Vision/VisionCeo'
import VisionImpact from '../Vision/VisionImpact'
import VisionNav from '../Vision/VisionNav'
import VisionProspect from '../Vision/VisionProspect'
import VisionSection1 from '../Vision/VisionSection1'
import VisionSection2 from '../Vision/VisionSection2'

const Vision = () => {
  return (
    <>
      <VisionNav />
      <VisionSection1 />
      <VisionProspect />
      <VisionCeo />
      <VisionImpact />
      <VisionSection2 />
      <BeforeFooter />
      <Footer />
    </>
  )
}

export default Vision
