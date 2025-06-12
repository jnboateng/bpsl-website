import Hero from '../components/About/Hero'
import AboutSection from '../components/About/AboutSection'
import banner from "../images/logo/hero-banner.svg"

function About() {
  return (
    <div>
      <Hero image={banner} text1={"about us"}/>
      <AboutSection />
    </div>
  )
}

export default About
