import React from 'react';

const FeatureCard = ({ icon, title, description, iconBg }) => (
    <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
        <div className={`w-14 h-14 ${iconBg} rounded-[20px] flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm">
            {description}
        </p>
    </div>
);

const Features = () => {
    const features = [
        {
            title: "Innovative Solution",
            description: "Innovative Solutions require your operate & approach the problem in a specific way so that you can improvements to system.",
            iconBg: "bg-[#a87532]",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-none stroke-current stroke-2">
                    <path d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: "Fully functional",
            description: "A work that can be considered to be with practical use, such as software and apps having no point of view and non-fiction.",
            iconBg: "bg-[#a87532]",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-none stroke-current stroke-2">
                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            title: "Secure Database",
            description: "Your website data is always secure & protected with automatic daily backups and easily restore data with 1 click.",
            iconBg: "bg-[#a87532]",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-none stroke-current stroke-2">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-snug sm:leading-tight mb-4 sm:mb-6">
                        Some features that set <br className="hidden sm:block" />
                        Sharko apart from others
                    </h2>
                    <p className="text-gray-500 leading-relaxed">
                        SHARKO has some unique features & It lets you create landing pages or customize already existing templates easily as you like.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
