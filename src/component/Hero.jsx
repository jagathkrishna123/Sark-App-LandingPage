

import React from 'react';

import Phone2 from "../assets/phoneimg2.png"

const Hero = () => {
    return (
        <section className="relative pt-16 sm:pt-14 pb-12 sm:pb-24">
            {/* Background Gradient Glow */}
            <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-gradient-to-r from-[#f3e3c4] via-[#e7c89a] to-[#d4a15c] rounded-full blur-[80px] sm:blur-[90px] lg:blur-[100px] opacity-50 -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2937] leading-[1.2] lg:leading-[1.3] mb-6">
                        Just one click away to create a modern app landing page
                    </h1>
                    <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0">
                        App landing page is an important part of mobile app development and app marketing strategy use your mobile device to quickly create a landing page.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button className="w-full sm:w-auto bg-[#f99147] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg shadow-purple-200 hover:bg-[#a88f32] transition-all">
                            Let's get started
                        </button>
                        <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-gray-900 hover:bg-gray-50 transition-all shadow-sm">
                            <div className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-900">
                                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-current">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            Watch A Demo
                        </button>
                    </div>
                </div>

                {/* Right Mobile Mockup................................... */}
                <div className="relative flex justify-center">
                    {/* Subtle Glow behind phone */}
                    {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] lg:w-[500px] h-[350px] sm:h-[450px] lg:h-[500px] bg-gradient-to-tr from-[#f99147]/70 via-[#c9964a]/60 to-[#8c5e24]/70 rounded-full blur-[90px] opacity-60 z-0 drop-shadow-[0_0_24px_#f99147] sm:drop-shadow-[0_0_32px_#f99147] lg:drop-shadow-[0_0_40px_#f99147]"></div> */}

                    {/* iPhone Body */}
                   <img
  src={Phone2}
  alt="Mobile App Mockup"
  className="relative z-10 mx-auto w-[75vw] sm:w-[55vw] lg:w-[45vw] max-w-[580px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
/>
                </div>

            </div>
        </section>
    );
};

export default Hero;

