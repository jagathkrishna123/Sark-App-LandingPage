// import React from 'react';
// import { MdQrCodeScanner } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";
// import { HiOutlineViewGridAdd } from "react-icons/hi";
// const FeatureCard = ({ icon, title, description, iconBg }) => (
//     <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
//         <div className={`w-14 h-14 ${iconBg} rounded-[20px] flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform`}>
//             {icon}
//         </div>
//         <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
//         <p className="text-gray-500 leading-relaxed text-sm">
//             {description}
//         </p>
//     </div>
// );

// const Features = () => {
//     const features = [
//         {
//             title: "QR Code Ordering System",
//             description:
//                 "Customers can scan your unique QR code to instantly access your digital menu. No app download required. Faster service, better customer experience.",
//             iconBg: "bg-[#f99147]",
//             icon: <MdQrCodeScanner className="w-6 h-6 text-white" />,
//         },
//         {
//             title: "Instant WhatsApp Order Notifications",
//             description:
//                 "Receive real-time order details directly on your WhatsApp. Get customer name, items ordered, and special instructions instantly.",
//             iconBg: "bg-[#25D366]",
//             icon: <FaWhatsapp className="w-6 h-6 text-white" />,
//         },
//         {
//             title: "Multiple Layouts & Banner Ads",
//             description:
//                 "Choose from 3 beautiful menu layouts that match your brand. Promote offers and announcements using custom banner advertisements inside your menu.",
//             iconBg: "bg-[#f99147]",
//             icon: <HiOutlineViewGridAdd className="w-6 h-6 text-white" />,
//         },
//     ];

//     return (
//         <section className="py-24 bg-gray-50/50">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="text-center max-w-2xl mx-auto mb-20">
//                     <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f2937] leading-snug sm:leading-tight mb-4 sm:mb-6">
//                         Powerful Features Designed <br className="hidden sm:block" />
//                         for Modern Shops
//                     </h2>
//                     <p className="text-gray-500 leading-relaxed">
//                         OLABIZ has some unique features & It lets you create landing pages or customize already existing templates easily as you like.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {features.map((feature, index) => (
//                         <FeatureCard key={index} {...feature} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Features;


import React, { useEffect, useRef } from 'react';
import { MdQrCodeScanner } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const paraRef = useRef(null);
    const cardsRef = useRef([]);

  useEffect(() => {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
        }
    });

    tl.fromTo(
        headingRef.current,
        {
            opacity: 0,
            y: 80,
            scale: 0.8
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "expo.out"
        }
    );

    tl.fromTo(
        paraRef.current,
        {
            opacity: 0,
            y: 40,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        },
        "-=0.6"
    );

    tl.fromTo(
        cardsRef.current,
        {
            opacity: 0,
            scale: 0.6,
            rotateX: 40,
            rotateY: -15,
            filter: "blur(10px)",
            transformPerspective: 1000,
            transformOrigin: "center"
        },
        {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.2,
            ease: "back.out(1.7)"
        },
        "-=0.4"
    );

}, []);
    const features = [
        {
            title: "QR Code Ordering System",
            description:
                "Customers can scan your unique QR code to instantly access your digital menu. No app download required. Faster service, better customer experience.",
            iconBg: "bg-[#f99147]",
            icon: <MdQrCodeScanner className="w-6 h-6 text-white" />,
        },
        {
            title: "Instant WhatsApp Order Notifications",
            description:
                "Receive real-time order details directly on your WhatsApp. Get customer name, items ordered, and special instructions instantly.",
            iconBg: "bg-[#25D366]",
            icon: <FaWhatsapp className="w-6 h-6 text-white" />,
        },
        {
            title: "Multiple Layouts & Banner Ads",
            description:
                "Choose from 3 beautiful menu layouts that match your brand. Promote offers and announcements using custom banner advertisements inside your menu.",
            iconBg: "bg-[#f99147]",
            icon: <HiOutlineViewGridAdd className="w-6 h-6 text-white" />,
        },
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2
                        ref={headingRef}
                        className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f2937] leading-snug sm:leading-tight mb-4 sm:mb-6"
                    >
                        Powerful Features Designed <br className="hidden sm:block" />
                        for Modern Shops
                    </h2>

                    <p
                        ref={paraRef}
                        className="text-gray-500 leading-relaxed"
                    >
                        OLABIZ has some unique features & It lets you create landing pages or customize already existing templates easily as you like.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                        >
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
