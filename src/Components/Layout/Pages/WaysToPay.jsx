import React from 'react'
import BeforeFooter from '../Features/BeforeFooter'
import Footer from '../Features/Footer'
import WapFeatures from '../WaysToPay/WapFeatures'
import WapHero from '../WaysToPay/WapHero'
import WapNav from '../WaysToPay/WapNav'

const WaysToPay = () => {
  return (
    <>
      <WapNav />
      <WapHero />
      <WapFeatures />
      <BeforeFooter />
      <Footer />
    </>
  )
}

export default WaysToPay
