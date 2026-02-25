import React from 'react';
import QRCode from "react-qr-code";
import { MdNoAccounts } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";

const Banner = () => {
    return (
        <section className="bg-[#f99147] py-20 px-6 overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

                {/* Left: Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Scan & Experience <br /> Live Demo
                    </h2>
                    <p className="text-white font-bold text-xl mb-4">
                        See how your digital menu works in real-time.
                    </p>
                    <p className="text-white/80 text-lg max-w-lg leading-relaxed mb-6">
                        Scan the QR code to explore a sample shop menu and place a demo order instantly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

  <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-white/20">
    <MdNoAccounts className="text-lg" />
    No sign-up required
  </span>

  <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-white/20">
    <HiOutlineDeviceMobile className="text-lg" />
    No app download needed
  </span>

</div>
                </div>

                {/* Right: Dummy QR Code */}
                <div className="flex-shrink-0 bg-white p-6 rounded-3xl shadow-2xl relative group transform  transition-transform duration-300">
                    <div className="absolute -inset-4 bg-white/20 blur-xl rounded-full -z-10 group-hover:bg-white/30 transition-all"></div>
                    <div className="bg-white p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition hover:scale-105 duration-300">
                        <QRCode
                            value="https://yourdomain.com/demo-menu"
                            size={170}
                            bgColor="#ffffff"
                            fgColor="#111111"
                            level="H"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <span className="text-[#f99147] font-bold text-sm tracking-widest uppercase">Scan Me</span>
                    </div>
                </div>

            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default Banner;