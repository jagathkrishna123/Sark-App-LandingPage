

import React from 'react';
import LOGO from "../assets/weblogo.png"


const Footer = () => {
    return (
        <footer className="pt-14 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-white px-6 border-t border-gray-100 mt-10">

            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-20">

                    {/* Logo and About */}
                    <div>
                        <div className="flex items-center gap-2 mb-6 sm:mb-8">
                            <img src={LOGO} alt="OLABIZ Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                            <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight uppercase">OLABIZ</span>
                        </div>

                        <div className="flex flex-col gap-3 sm:gap-4 text-gray-500 font-semibold text-[15px]">
                            <a href="#" className="hover:text-black transition-colors">About</a>
                            <a href="#" className="hover:text-black transition-colors">Features</a>
                            <a href="#" className="hover:text-black transition-colors">Works</a>
                            <a href="#" className="hover:text-black transition-colors">Career</a>
                        </div>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="text-[17px] font-bold text-gray-700 mb-6 sm:mb-8">Help</h4>
                        <div className="flex flex-col gap-3 sm:gap-5 text-gray-500 font-semibold text-[15px]">
                            <a href="#">Customer Support</a>
                            <a href="#">Delivery Details</a>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-[17px] font-bold text-gray-700 mb-6 sm:mb-8">Resources</h4>
                        <div className="flex flex-col gap-3 sm:gap-5 text-gray-500 font-semibold text-[15px]">
                            <a href="#">Free eBooks</a>
                            <a href="#">Development Tutorial</a>
                            <a href="#">How to - Blog</a>
                            <a href="#">Youtube Playlist</a>
                        </div>
                    </div>

                    {/* Extra */}
                    <div>
                        <h4 className="text-[17px] font-bold text-gray-700 mb-6 sm:mb-8">Extra Links</h4>
                        <div className="flex flex-col gap-3 sm:gap-5 text-gray-500 font-semibold text-[15px]">
                            <a href="#">Customer Support</a>
                            <a href="#">Delivery Details</a>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 sm:pt-10 border-t border-gray-100 gap-6 sm:gap-8">


                    <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-[13px] font-bold text-gray-500">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Support</a>
                    </div>

                    <div className="text-[13px] font-bold text-gray-400">
                        © Copyright 2022, All Rights Reserved by Postcraft
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
