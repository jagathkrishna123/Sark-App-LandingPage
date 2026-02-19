// import React from 'react';
// import { FaXTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa6";
// const Footer = () => {
//     return (
//         <footer className="pt-24 pb-12 bg-white px-6 border-t border-gray-100 mt-10">
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
//                     {/* Logo and About */}
//                     <div>
//                         <div className="flex items-center gap-2 mb-8">
//                             <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
//                                 <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
//                                     <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
//                                 </svg>
//                             </div>
//                             <span className="text-2xl font-bold text-gray-700 tracking-tight">Sark</span>
//                         </div>
//                         <div className="flex flex-col gap-4 text-gray-500 font-semibold text-[15px]">
//                             <a href="#" className="hover:text-black transition-colors">About</a>
//                             <a href="#" className="hover:text-black transition-colors">Features</a>
//                             <a href="#" className="hover:text-black transition-colors">Works</a>
//                             <a href="#" className="hover:text-black transition-colors">Career</a>
//                         </div>
//                     </div>

//                     {/* Help Links */}
//                     <div>
//                         <h4 className="text-[17px] font-bold text-gray-700 mb-8">Help</h4>
//                         <div className="flex flex-col gap-5 text-gray-500 font-semibold text-[15px]">
//                             <a href="#" className="hover:text-black transition-colors">Customer Support</a>
//                             <a href="#" className="hover:text-black transition-colors">Delivery Details</a>
//                             <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
//                             <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
//                         </div>
//                     </div>

//                     {/* Resources Links */}
//                     <div>
//                         <h4 className="text-[17px] font-bold text-gray-700 mb-8">Resources</h4>
//                         <div className="flex flex-col gap-5 text-gray-500 font-semibold text-[15px]">
//                             <a href="#" className="hover:text-black transition-colors">Free eBooks</a>
//                             <a href="#" className="hover:text-black transition-colors">Development Tutorial</a>
//                             <a href="#" className="hover:text-black transition-colors">How to - Blog</a>
//                             <a href="#" className="hover:text-black transition-colors">Youtube Playlist</a>
//                         </div>
//                     </div>

//                     {/* Extra Links */}
//                     <div>
//                         <h4 className="text-[17px] font-bold text-gray-700 mb-8">Extra Links</h4>
//                         <div className="flex flex-col gap-5 text-gray-500 font-semibold text-[15px]">
//                             <a href="#" className="hover:text-black transition-colors">Customer Support</a>
//                             <a href="#" className="hover:text-black transition-colors">Delivery Details</a>
//                             <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
//                             <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-gray-100 gap-8">
//                     <div className="flex items-center gap-6 text-gray-600 text-lg">
//                             <a href="#" className="hover:text-indigo-600 transition-colors">
//                                 <FaXTwitter />
//                             </a>
//                             <a href="#" className="hover:text-indigo-600 transition-colors">
//                                 <FaFacebookF />
//                             </a>
//                             <a href="#" className="hover:text-indigo-600 transition-colors">
//                                 <FaInstagram />
//                             </a>
//                             <a href="#" className="hover:text-indigo-600 transition-colors">
//                                 <FaGithub />
//                             </a>
//                         </div>

//                     <div className="flex items-center gap-8 text-[13px] font-bold text-gray-500">
//                         <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
//                         <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
//                         <a href="#" className="hover:text-black transition-colors">Support</a>
//                     </div>

//                     <div className="text-[13px] font-bold text-gray-400">
//                         © Copyright 2022, All Rights Reserved by Postcraft
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from 'react';
import { FaXTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="pt-14 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-white px-6 border-t border-gray-100 mt-10">

            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-20">

                    {/* Logo and About */}
                    <div>
                        <div className="flex items-center gap-2 mb-6 sm:mb-8">
                            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold text-gray-700 tracking-tight">Sark</span>
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

                    <div className="flex items-center gap-6 text-gray-600 text-lg">
                        <FaXTwitter className="hover:text-indigo-600 cursor-pointer" />
                        <FaFacebookF className="hover:text-indigo-600 cursor-pointer" />
                        <FaInstagram className="hover:text-indigo-600 cursor-pointer" />
                        <FaGithub className="hover:text-indigo-600 cursor-pointer" />
                    </div>

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
