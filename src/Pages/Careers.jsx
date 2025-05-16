import React from 'react'
import Hero from '../components/About/Hero'
import Describe from '../components/careers/Describe'
import TeamCarousel from '../components/careers/Carousel'
import OpenRoles from '../components/careers/Jobs'

const heroBg="https://res.cloudinary.com/dinb6qtto/image/upload/v1747327037/fuelme/eunqurz5ywlilv9qris7.png"

function Careers() {
  return (
    <div>
      <Hero image={heroBg} text1={'Careers'} />
      <Describe />
      <TeamCarousel />
      <OpenRoles />
    </div>
  )
}

export default Careers
