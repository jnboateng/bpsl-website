import Navbar from '../components/Navbar'
import Pages from './Pages'
import Footer from '../components/Footer'
import BuildingCarousel from '../components/Home/BuildingCarousel'
import SocialBar from '../components/SocialBar'
function Homepage() {
  return (
    <div > 
      <Navbar />
      <Pages />
      <BuildingCarousel />
      <SocialBar />
      <Footer />
    </div>
  )
}

export default Homepage