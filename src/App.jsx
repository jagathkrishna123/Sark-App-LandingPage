import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Features from './component/Features'
import Plans from './component/Plans'
import Reviews from './component/Reviews'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Organize from './component/Organize'

const App = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <Hero />
      <Features />
      <Organize />
      <Plans />
      <Reviews />
      <Banner />
      <Footer />
    </div>
  )
}

export default App