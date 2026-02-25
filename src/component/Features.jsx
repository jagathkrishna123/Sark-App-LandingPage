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
            title: "QR Code Ordering System",
            description: "Customers can scan your unique QR code to instantly access your digital menu. No app download required. Faster service, better customer experience.",
            iconBg: "bg-[#f99147]",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-none stroke-current stroke-2">
                    <path d="M12 4v1m6 11h2m-6 0h-2v4m0-16v3m0 0h.01M4 12H2m10 0h2m-10 8h.01M16 20h.01m-4 0h.01m-4 0h.01m-4 0h.01M4 8h.01M4 16h.01M4 12h.01M20 8h.01M20 12h.01M20 16h.01M8 4h.01M16 4h.01" />
                    <rect x="7" y="7" width="10" height="10" rx="1" />
                </svg>
            )
        },
        {
            title: "Instant WhatsApp Order Notifications",
            description: "Receive real-time order details directly on your WhatsApp. Get customer name, items ordered, and special instructions instantly.",
            iconBg: "bg-[#25D366]",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.704 1.435h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            )
        },
        {
            title: "Multiple Layouts & Banner Ads",
            description: "Choose from 3 beautiful menu layouts that match your brand. Promote offers and announcements using custom banner advertisements inside your menu.",
            iconBg: "bg-[#f99147]",
            icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-none stroke-current stroke-2">
                    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f2937] leading-snug sm:leading-tight mb-4 sm:mb-6">
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
