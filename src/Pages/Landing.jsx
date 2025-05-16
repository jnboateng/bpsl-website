import React from 'react'
import HeroCarousel from '../components/Home/HeroCarousel'
import Stats from '../components/Home/Stats'
import ProductsSection from '../components/Home/ProductsSection'
import UssdBanner from '../components/Home/Ussdbanner'
import ServicesSection from '../components/Home/ServicesSection'

function Landing() {
  return (
    <div>
      <HeroCarousel />
      <Stats />
      <ProductsSection />
      <UssdBanner />
      <ServicesSection />
      
    </div>
  )
}

export default Landing
