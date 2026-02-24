import React from 'react';
import Phone3 from "../assets/phone7.png"

const Organize = () => {


    const taskProgressData = [
        { label: 'Copywriting', value: '2/8', width: '25%', color: 'bg-orange-400' },
        { label: 'Illustrations', value: '6/10', width: '60%', color: 'bg-emerald-400' },
        { label: 'UI Design', value: '2/7', width: '28%', color: 'bg-blue-400' }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 space-y-32">

                {/* Top Section: Mobile Mockup + Text */}
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-24">
                    {/* Left: Mobile Mockup */}
                    <div className="flex-1 relative w-full flex justify-center lg:block mb-12 lg:mb-0">
                        {/* Purple Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] h-[350px] sm:h-[550px] bg-purple-200/40 rounded-full blur-[100px] -z-10"></div>

                        <img
  src={Phone3}
  alt="Organize Insights Mockup"
  className="relative z-10 mx-auto
             w-[62vw] sm:w-[44vw] lg:w-[34vw]
             max-w-[460px]
             h-auto
             drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
/>
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex-1 max-w-xl text-center lg:text-left z-10 mb-10 sm:mb-0">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-6 sm:mb-8 leading-[1.2]">
                            Organize your web <br className="hidden sm:block" /> app easily with Sharko
                        </h2>
                        <p className="text-gray-500 text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed mb-8 sm:mb-12">
                            App landing pages are web pages designed to promote your mobile application & drive downloads. With Sharko your leads will land to get more information about your app and to download it.
                        </p>

                        <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12 justify-center lg:justify-start">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tighter">3.5x</h3>
                            <p className="text-gray-500 text-[12px] sm:text-[14px] lg:text-[15px] font-semibold leading-relaxed text-left">
                                Mobile apps convert 3.5x <br /> higher than mobile websites
                            </p>
                        </div>

                        <button className="w-full sm:w-auto px-8 py-4 bg-[#f99147] text-white rounded-md font-bold text-sm shadow-[0_4px_14px_rgba(99,102,241,0.39)] hover:bg-[#4f46e5] transition-all">
                            Explore Now
                        </button>
                    </div>
                </div>

                {/* Bottom Section: Text + Widget Stack */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-24 lg:gap-24 relative">
                    {/* Left: Text Content */}
                    <div className="flex-1 max-w-xl text-center lg:text-left z-10 relative mt-20 sm:mt-0">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-6 sm:mb-8 leading-[1.2]">
                            Get detailed time and <br className="hidden sm:block" /> data for every project
                        </h2>
                        <p className="text-gray-500 text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed mb-8 sm:mb-12">
                            App landing pages are web pages designed to promote your mobile application & drive downloads. With Sharko your leads will land to get more information about your app and to download it.
                        </p>

                        <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12 justify-center lg:justify-start">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tighter">2.4x</h3>
                            <p className="text-gray-500 text-[12px] sm:text-[14px] lg:text-[15px] font-semibold leading-relaxed text-left">
                                Mobile apps convert 3.5x <br /> higher than mobile websites
                            </p>
                        </div>

                        <button className="w-full sm:w-auto px-8 py-4 bg-[#f99147] text-white rounded-md font-bold text-sm shadow-[0_4px_14px_rgba(99,102,241,0.39)] hover:bg-[#4f46e5] transition-all">
                            Explore Now
                        </button>
                    </div>

                    {/* Right: Widget Stack */}
                    <div className="flex-1 relative w-full max-w-[340px] sm:max-w-[500px] h-[450px] sm:h-[550px] lg:h-[600px] mb-20 lg:mb-0 flex justify-center lg:block">
                        {/* Pink Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-100/40 rounded-full blur-[80px] sm:blur-[100px] -z-10"></div>

                        {/* Card 1: Konsep design homepage */}
                        <div className="absolute top-0 right-[-3%] sm:right-0 w-[95%] sm:w-[350px] bg-white rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50 z-0 text-left">
                            <div className="flex justify-between items-center mb-3 sm:mb-4">
                                <h4 className="text-[12px] sm:text-[16px] font-extrabold text-gray-900 tracking-tight">Konsep design homepage</h4>
                                <div className="text-gray-300 text-lg">...</div>
                            </div>
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">📅 Due Nov 24</span>
                            </div>
                            <p className="text-gray-400 text-[9px] sm:text-[11px] leading-relaxed mb-4 sm:mb-6 font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[9px] font-bold text-black">Project Progress</span>
                                <span className="text-[9px] font-bold text-black">32%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-50 rounded-full overflow-hidden mb-4 sm:mb-6">
                                <div className="w-[32%] h-full bg-emerald-400 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-200 overflow-hidden ring-2 ring-white">
                                        <img src="https://xsgames.co/randomusers/assets/avatars/male/45.jpg" alt="User" />
                                    </div>
                                    <span className="text-[9px] font-bold text-gray-400">+ 15 people</span>
                                </div>
                                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 text-[9px]">+</div>
                            </div>
                        </div>

                        {/* Card 2: Weekly Progress */}
                        <div className="absolute top-[35%] sm:top-auto sm:bottom-0 left-[-5%] sm:left-[-10%] w-[65%] sm:w-[250px] bg-white rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-50 z-10 transition-transform hover:-translate-y-2 text-left">

                            <div className="flex justify-between items-center mb-3">
                                <h4 className="text-[11px] sm:text-[13px] font-extrabold text-gray-900">
                                    Weekly Progress
                                </h4>
                                <div className="text-gray-300">...</div>
                            </div>

                            <p className="text-[8px] font-bold text-gray-300 mb-4 sm:mb-6">
                                Start from Nov 7-14, 2020
                            </p>

                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto">
                                <svg
                                    viewBox="0 0 100 100"
                                    className="w-full h-full transform -rotate-90 block"
                                >
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#f3f4f6"
                                        strokeWidth="10"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#6366f1"
                                        strokeWidth="10"
                                        strokeDasharray="210 282.6"
                                        strokeLinecap="round"
                                    />
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-[16px] sm:text-[20px] font-extrabold text-gray-900">
                                        75%
                                    </span>
                                    <span className="text-[6px] sm:text-[8px] text-gray-400 font-bold">
                                        Tasks Completed
                                    </span>
                                </div>
                            </div>

                        </div>


                        {/* Card 3: Task Progress */}
                        <div className="absolute bottom-[-5%] sm:bottom-1/4 right-[-5%] sm:right-[-5%] lg:right-0 w-[55%] sm:w-[230px] bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50 z-20 text-left">
                            <h4 className="text-[10px] sm:text-[12px] font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight">Task Progress</h4>
                            <div className="space-y-3 sm:space-y-4">
                                {taskProgressData.map((task, i) => (
                                    <div key={i} className="space-y-1.5 sm:space-y-2">
                                        <div className="flex justify-between items-center text-[8px] sm:text-[9px] font-bold">
                                            <span className="text-gray-900">{task.label}</span>
                                            <span className="text-gray-300">{task.value}</span>
                                        </div>
                                        <div className="w-full h-1 bg-gray-50 rounded-full overflow-hidden">
                                            <div style={{ width: task.width }} className={`h-full ${task.color} rounded-full`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Organize;