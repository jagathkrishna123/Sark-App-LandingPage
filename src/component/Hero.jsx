

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Phone2 from "../assets/phoneimg2.png"

const Hero = () => {
    const heroRef = useRef(null);
    const headingRef = useRef(null);
    const paraRef = useRef(null);
    const buttonsRef = useRef(null);
    const imageRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(glowRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 0.5, duration: 2 }
        )
            .fromTo(headingRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2 },
                "-=1.5"
            )
            .fromTo(paraRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=1"
            )
            .fromTo(buttonsRef.current.children,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
                "-=0.8"
            )
            .fromTo(imageRef.current,
                { x: 100, opacity: 0, rotate: 10, scale: 0.9 },
                { x: 0, opacity: 1, rotate: 0, scale: 1, duration: 1.5, ease: "expo.out" },
                "-=1.2"
            );

        // Subtle floating animation for the phone
        gsap.to(imageRef.current, {
            y: 15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, []);

    return (
        <section ref={heroRef} className="relative pt-16 sm:pt-14 pb-12 sm:pb-24">
            {/* Background Gradient Glow */}
            <div ref={glowRef} className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-gradient-to-r from-[#f3e3c4] via-[#e7c89a] to-[#d4a15c] rounded-full blur-[80px] sm:blur-[90px] lg:blur-[100px] opacity-50 -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2937] leading-[1.2] lg:leading-[1.3] mb-6">
                        Turn Your Shop Into a Smart QR Digital Menu
                    </h1>
                    <p ref={paraRef} className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0">
                        Create a modern digital menu for your shop or restaurant. Customers simply scan a QR code to view items and place orders. Get instant order notifications directly on WhatsApp and manage everything effortlessly.
                    </p>
                    <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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

                {/* Right Mobile Mockup */}
                <div className="relative flex justify-center">
                    {/* Subtle Glow behind phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] lg:w-[500px] h-[350px] sm:h-[450px] lg:h-[500px] bg-gradient-to-tr from-[#f99147]/70 via-[#c9964a]/60 to-[#8c5e24]/70 rounded-full blur-[90px] opacity-60 z-0 drop-shadow-[0_0_24px_#f99147] sm:drop-shadow-[0_0_32px_#f99147] lg:drop-shadow-[0_0_40px_#f99147]"></div>

                    {/* iPhone Body */}
                    <div ref={imageRef}>
                        <img
                            src={Phone2}
                            alt="Mobile App Mockup"
                            className="relative z-10 mx-auto
                                     w-[48vw] sm:w-[34vw] lg:w-[24vw]
                                     max-w-[320px]
                                     h-auto
                                     drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;

