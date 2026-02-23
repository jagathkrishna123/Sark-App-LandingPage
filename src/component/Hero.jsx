

import React from 'react';
import { FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="relative pt-16 sm:pt-14 pb-12 sm:pb-24">
            {/* Background Gradient Glow */}
<div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-gradient-to-r from-[#f3e3c4] via-[#e7c89a] to-[#d4a15c] rounded-full blur-[80px] sm:blur-[90px] lg:blur-[100px] opacity-50 -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-[1.2] lg:leading-[1.3] mb-6">
                        Just one click away to create a modern app landing page
                    </h1>
                    <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-10 max-w-lg leading-relaxed mx-auto lg:mx-0">
                        App landing page is an important part of mobile app development and app marketing strategy use your mobile device to quickly create a landing page.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button className="w-full sm:w-auto bg-[#a87532] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg shadow-purple-200 hover:bg-[#a88f32] transition-all">
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
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
w-[350px] sm:w-[450px] lg:w-[500px] 
h-[350px] sm:h-[450px] lg:h-[500px] 
bg-gradient-to-tr from-[#a87532]/70 via-[#c9964a]/60 to-[#8c5e24]/70 
rounded-full 
blur-[80px] sm:blur-[90px] lg:blur-[100px] 
opacity-60 
z-0">
</div>

                    {/* iPhone Body */}
                    <div className="relative z-10 mx-auto w-[200px] sm:w-[240px] lg:w-[300px] h-[400px] sm:h-[480px] lg:h-[560px] bg-black rounded-[45px] p-1.5 sm:p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.35)] border-[5px] sm:border-[6px] lg:border-[7px] border-black">

                        {/* Screen */}
                        <div className="w-full h-full bg-white rounded-[35px] overflow-hidden relative font-sans">

                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] sm:w-[130px] sm:h-[24px] h-[15px] bg-black rounded-b-2xl z-20"></div>

                            {/* Status Bar */}
                            <div className="pt-6 sm:pt-7 px-4 sm:px-6 flex justify-between items-center text-[9px] sm:text-[10px] font-semibold">
                                <span>9:41</span>
                                <div className="flex items-center gap-1.5 text-gray-900">
                                    <FaSignal className="text-[10px]" />
                                    <FaWifi className="text-[10px]" />
                                    <FaBatteryFull className="text-[11px]" />
                                </div>
                            </div>

                            {/* Mockup Header Icon */}
                            <div className="flex justify-center mt-3 sm:mt-4">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg transform rotate-45 flex items-center justify-center">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/20 rounded-full"></div>
                                </div>
                            </div>

                            {/* Bar Chart Mockup */}
                            <div className="px-4 sm:px-6 mt-6 sm:mt-8">
                                <div className="flex items-end justify-between h-16 sm:h-20 gap-1 mt-2">
                                    {[40, 60, 45, 80, 50, 90, 60, 55, 75, 45].map((h, i) => (
                                        <div key={i} style={{ height: `${h}%` }} className={`w-full rounded-full ${i % 3 === 0 ? 'bg-indigo-500' : i % 3 === 1 ? 'bg-blue-400' : 'bg-yellow-400'}`}></div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-1 text-[5px] sm:text-[6px] text-gray-400 uppercase font-bold tracking-widest">
                                    <span>Sun</span>
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                </div>
                            </div>

                            {/* Business Ranking Text */}
                            <div className="px-4 sm:px-6 mt-6 sm:mt-8">
                                <h4 className="text-[10px] sm:text-[12px] font-bold text-gray-900">Business Ranking</h4>
                            </div>

                            {/* Recent Activity Mockup */}
                            <div className="px-4 sm:px-6 mt-4 sm:mt-6">
                                <h5 className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3 sm:mb-4">Recent Activity</h5>
                                <div className="space-y-3 sm:space-y-4">
                                    {[
                                        { color: 'bg-emerald-400', name: 'Karen', text: 'leave some comments on Konsep Ilustrasi', date: 'Aug 10' },
                                        { color: 'bg-indigo-500', name: 'Karen', text: 'change project info on Project Homepage', date: 'Aug 10' },
                                        { color: 'bg-orange-400', name: 'Andrea', text: 'change the due date of Project Homepage', date: 'Aug 10' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-2 sm:gap-3">
                                            <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg ${item.color} flex-shrink-0 flex items-center justify-center`}>
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/30 rounded-full"></div>
                                            </div>
                                            <div>
                                                <p className="text-[9px] sm:text-[10px] leading-tight">
                                                    <span className="font-bold text-gray-900">{item.name}</span>{' '}
                                                    <span className="text-gray-500">{item.text}</span>
                                                </p>
                                                <span className="text-[7px] sm:text-[8px] text-gray-300 font-bold">{item.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;

