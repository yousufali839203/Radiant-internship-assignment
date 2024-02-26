import React from 'react'
import Navbar from '../components/Header/Navbar'
import HeroSection from '../components/Home/HeroSection'
import HeroSection2 from '../components/Home/HeroSection2'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <HeroSection2/>
      <Footer/>
    </div>
  )
}

export default Home
