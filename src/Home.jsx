import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Why from './Components/Why Krishi Setu/Why'
import Services from './Components/Services/Services';
import Working from './Components/How to use/Working';
import Footer from './Components/Footer/Footer';
import Download from './Components/Download/Download';
import NewsInsights from './Components/Schemes/NewsInsights';
import FaqSection from './Components/FAQ/FaqSection';
import Testimonials from './Components/Testimonial/Testimonials';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <div id="features">
      <Services/>
      </div>
      <div id="why"><Why/></div>
      <NewsInsights/>
      {/* <Working/> */}
      <div id="download">
      <Download/>
      </div>
      <FaqSection/>
      {/* <Testimonials/> */}
      <div id="contact">
      <Footer/>
      </div>
    </div>
  )
}

export default Home
