import React from 'react';
import Phone3 from "../assets/phone7.png"

const Organize = () => {


    const taskProgressData = [
        { label: 'Pending', value: '4/12', width: '33%', color: 'bg-orange-400' },
        { label: 'Preparing', value: '6/10', width: '60%', color: 'bg-emerald-400' },
        { label: 'Delivered', value: '18/25', width: '72%', color: 'bg-blue-400' }
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
                            className="relative z-10 mx-auto w-[62vw] sm:w-[44vw] lg:w-[34vw] max-w-[460px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex-1 max-w-xl text-center lg:text-left z-10 mb-10 sm:mb-0">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-6 sm:mb-8 leading-[1.2]">
                            Smart Digital Menu <br className="hidden sm:block" /> for Modern Businesses
                        </h2>
                        <p className="text-gray-500 text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed mb-8 sm:mb-12">
                            Transform your shop or restaurant with a powerful QR-based ordering system. Customers simply scan your QR code, browse your menu, and place orders instantly — no app installation required.                        </p>

                        <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12 justify-center lg:justify-start">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tighter">2x Faster</h3>
                            <p className="text-gray-500 text-[12px] sm:text-[14px] lg:text-[15px] font-semibold leading-relaxed text-left">
                                Digital QR ordering <br />improves customer experience.
                            </p>
                        </div>

                        <button className="w-full sm:w-auto px-8 py-4 bg-[#f99147] text-white rounded-md font-bold text-sm shadow-[0_4px_14px_rgba(99,102,241,0.39)] hover:bg-[#4f46e5] transition-all">
                            Explore Features
                        </button>
                    </div>
                </div>

                {/* Bottom Section: Text + Widget Stack */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-24 lg:gap-24 relative">
                    {/* Left: Text Content */}
                    <div className="flex-1 max-w-xl text-center lg:text-left z-10 relative mt-20 sm:mt-0">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-6 sm:mb-8 leading-[1.2]">
                            Manage Orders Effortlessly <br className="hidden sm:block" /> in Real-Time
                        </h2>
                        <div className="text-gray-500 text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed mb-8 sm:mb-12">
                            <p className="mb-4">Track every order placed through your digital menu. No complicated dashboard needed — simple and efficient order management.</p>
                        </div>

                        <div className="flex flex-col gap-2 mb-8 sm:mb-12 items-center lg:items-start">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 flex items-center gap-2">
                                Instant WhatsApp Notifications
                            </h3>
                            <p className="text-gray-500 text-[14px] sm:text-[15px] font-semibold leading-relaxed">
                                Receive orders immediately and respond faster to your customers.
                            </p>
                        </div>

                        <button className="w-full sm:w-auto px-8 py-4 bg-[#f99147] text-white rounded-md font-bold text-sm shadow-[0_4px_14px_rgba(249,145,71,0.39)] hover:bg-[#4f46e5] transition-all">
                        See How It Works.
                        </button>
                    </div>

                    {/* Right: Widget Stack */}
                    <div className="flex-1 relative w-full max-w-[340px] sm:max-w-[500px] h-[450px] sm:h-[550px] lg:h-[600px] mb-20 lg:mb-0 flex justify-center lg:block">
                        {/* Pink Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-100/40 rounded-full blur-[80px] sm:blur-[100px] -z-10"></div>

                        {/* Card 1: Latest Order: WhatsApp */}
                        <div className="absolute top-0 right-[-3%] sm:right-0 w-[95%] sm:w-[350px] bg-white rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50 z-0 text-left">
                            <div className="flex justify-between items-center mb-3 sm:mb-4">
                                <h4 className="text-[12px] sm:text-[16px] font-extrabold text-[#111827] tracking-tight">Latest Order: WhatsApp</h4>
                                <div className="text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">Active</div>
                            </div>
                            <div className="space-y-3 mb-4 sm:mb-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] sm:text-[12px] font-bold text-gray-400">Customer</span>
                                    <span className="text-[10px] sm:text-[12px] font-bold text-gray-900">John Doe</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] sm:text-[12px] font-bold text-gray-400">Items</span>
                                    <span className="text-[10px] sm:text-[12px] font-bold text-gray-900">Chicken burger + Fries</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] sm:text-[12px] font-bold text-gray-400">Quantity</span>
                                    <span className="text-[10px] sm:text-[12px] font-bold text-gray-900">2x</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-[10px]">JD</div>
                                    <span className="text-[9px] font-bold text-gray-400">No special instructions</span>
                                </div>
                                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#f99147]/10 flex items-center justify-center text-[#f99147] text-[12px] select-none">🍟</div>
                            </div>
                        </div>

                        {/* Card 2: Orders Delivered */}
                        <div className="absolute top-[35%] sm:top-auto sm:bottom-0 left-[-5%] sm:left-[-10%] w-[65%] sm:w-[250px] bg-white rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-50 z-10 transition-transform hover:-translate-y-2 text-left">

                            <div className="flex justify-between items-center mb-3">
                                <h4 className="text-[11px] sm:text-[13px] font-extrabold text-gray-900">
                                    Orders Delivered
                                </h4>
                                <div className="text-blue-500 font-bold text-[10px]">Today</div>
                            </div>

                            <p className="text-[8px] font-bold text-gray-300 mb-4 sm:mb-6">
                                Tracked in Real-Time
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
                                        85%
                                    </span>
                                    <span className="text-[6px] sm:text-[8px] text-gray-400 font-bold uppercase">
                                        Fulfillment
                                    </span>
                                </div>
                            </div>

                        </div>


                        {/* Card 3: Order Status */}
                        <div className="absolute bottom-[-5%] sm:bottom-1/4 right-[-5%] sm:right-[-5%] lg:right-0 w-[55%] sm:w-[230px] bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50 z-20 text-left">
                            <h4 className="text-[10px] sm:text-[12px] font-extrabold text-[#111827] mb-4 sm:mb-6 tracking-tight">Orders Overview</h4>
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