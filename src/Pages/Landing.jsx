import React from 'react'
import HeroCarousel from '../components/Home/HeroCarousel'
import Stats from '../components/Home/Stats'
import ProductsSection from '../components/Home/ProductsSection'
import UssdBanner from '../components/Home/Ussdbanner'
import MarqueeTestimonials from '../components/Home/Testimonials'

function Landing() {
  return (
    <div>
      <HeroCarousel />
      <Stats />
      <ProductsSection />
      <UssdBanner />
      <MarqueeTestimonials />
    </div>
  )
}

export default Landing
