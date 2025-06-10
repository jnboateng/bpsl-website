import React from 'react'
import Hero from '../components/About/Hero'
import AboutSection from '../components/About/AboutSection'
import AwardList from '../components/About/AwardList'
import banner from "../images/logo/hero-banner.svg"
const heroBg=""

function About() {
  return (
    <div>
      <Hero image={banner} text1={"about us"}/>
      <AboutSection />
    </div>
  )
}

export default About
