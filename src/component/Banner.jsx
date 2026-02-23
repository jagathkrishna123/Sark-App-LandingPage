import React from 'react';

const Banner = () => {
    return (
        <section className="bg-[#a87532] py-20 px-6 overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    Download our mobile app
                </h2>
                <p className="text-white/80 text-lg max-w-lg leading-relaxed mb-10">
                    With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                </p>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default Banner;