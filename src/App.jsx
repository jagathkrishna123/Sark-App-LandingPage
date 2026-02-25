import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Features from './component/Features'
import Plans from './component/Plans'
import Reviews from './component/Reviews'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Organize from './component/Organize'
import Lenis from "@studio-freight/lenis";


const App = () => {
   useEffect(() => {

  const lenis = new Lenis({
    duration: 0.8,     // reduced from 1.6
    smoothWheel: true,
    smoothTouch: false,
    easing: (t) => 1 - Math.pow(1 - t, 3), // less draggy
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

}, []);
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