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
      duration: 1.6,   // slower scroll
      smoothWheel: true,
      smoothTouch: true,
      easing: (t) => 1 - Math.pow(1 - t, 4), // buttery easing curve
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