import React from 'react'
import Hero from '../components/About/Hero'
import AboutSection from '../components/About/AboutSection'
import AwardList from '../components/About/AwardList'

const heroBg="https://res.cloudinary.com/dinb6qtto/image/upload/v1747327037/fuelme/eunqurz5ywlilv9qris7.png"

function About() {
  return (
    <div>
      <Hero image={heroBg} text1={"about us"}/>
      <AboutSection />
      <AwardList />

    </div>
  )
}

export default About
