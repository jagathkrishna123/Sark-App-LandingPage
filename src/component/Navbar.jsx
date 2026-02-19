// import React from 'react';

// const Navbar = () => {
//     return (
//         <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
//             {/* Logo */}
//             <div className="flex items-center gap-2">
//                 <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
//                     <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
//                         <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
//                     </svg>
//                 </div>
//                 <span className="text-2xl font-bold text-gray-900 tracking-tight">Sark</span>
//             </div>

//             {/* Nav Links */}
//             <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-500">
//                 <a href="#" className="hover:text-black transition-colors">Demos</a>
//                 <a href="#" className="hover:text-black transition-colors">About</a>
//                 <a href="#" className="hover:text-black transition-colors">Blog</a>
//                 <a href="#" className="hover:text-black transition-colors text-gray-900">Pages</a>
//                 <a href="#" className="hover:text-black transition-colors">Contact</a>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex items-center gap-8">
//                 <button className="text-[15px] font-semibold text-gray-500 hover:text-black transition-colors cursor-pointer">
//                     Login
//                 </button>
//                 <button className="bg-[#111827] text-white px-7 py-3 rounded-lg text-[15px] font-semibold hover:bg-black transition-all shadow-md">
//                     Get Started Free
//                 </button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto w-full relative z-50">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current">
                            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                        </svg>
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Sark</span>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-6 lg:gap-10 text-[14px] lg:text-[15px] font-medium text-gray-500">
                    <a href="#" className="hover:text-black transition-colors">Demos</a>
                    <a href="#" className="hover:text-black transition-colors">About</a>
                    <a href="#" className="hover:text-black transition-colors">Blog</a>
                    <a href="#" className="hover:text-black transition-colors text-gray-900">Pages</a>
                    <a href="#" className="hover:text-black transition-colors">Contact</a>
                </div>

                {/* Action Buttons */}
                <div className="hidden sm:flex items-center gap-4 md:gap-8">
                    <button className="text-[14px] md:text-[15px] font-semibold text-gray-500 hover:text-black transition-colors cursor-pointer">
                        Login
                    </button>
                    <button className="bg-[#111827] text-white px-5 md:px-7 py-2.5 md:py-3 rounded-lg text-[14px] md:text-[15px] font-semibold hover:bg-black transition-all shadow-md">
                        Get Started Free
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200"
                    onClick={() => setIsOpen(true)}
                >
                    <HiMenuAlt3 className='text-gray-700'/>
                </button>
            </nav>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-72 bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    
    {/* Header */}
    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Sark</span>
        </div>

        <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
            <IoClose className="text-gray-700 text-xl" />
        </button>
    </div>

    {/* Navigation */}
    <div className="flex flex-col gap-1 px-4 py-6 text-gray-700 text-[15px] font-medium">
        <a href="#" className="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 hover:text-black transition">
            Demos
        </a>
        <a href="#" className="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 hover:text-black transition">
            About
        </a>
        <a href="#" className="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 hover:text-black transition">
            Blog
        </a>
        <a href="#" className="flex items-center px-4 py-3 rounded-xl bg-gray-100 text-black font-semibold">
            Pages
        </a>
        <a href="#" className="flex items-center px-4 py-3 rounded-xl hover:bg-gray-100 hover:text-black transition">
            Contact
        </a>
    </div>

    {/* Bottom Section */}
    <div className="absolute bottom-0 left-0 w-full px-5 pb-6">
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-600 mb-4">
                Start building your modern app landing page today.
            </p>

            <div className="flex flex-col gap-3">
                <button className="w-full text-left text-sm font-semibold text-gray-600 hover:text-black transition">
                    Login
                </button>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-95 transition">
                    Get Started Free
                </button>
            </div>
        </div>
    </div>

    {/* Decorative glow */}
    <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
</div>

        </>
    );
};

export default Navbar;
