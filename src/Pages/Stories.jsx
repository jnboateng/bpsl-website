import React from 'react'
import Hero from '../components/About/Hero'
import StoriesArticlesGallery from '../components/Stories/Articles'

const heroBg ="https://res.cloudinary.com/dinb6qtto/image/upload/v1747327033/fuelme/tlimnbsaqc9mweziayjl.png"
function Stories() {
  return (
    <div>
      <Hero image={heroBg} text1={"Stories"}/>
      <StoriesArticlesGallery />
    </div>
  )
}

export default Stories
