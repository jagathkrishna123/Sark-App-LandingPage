import React, { useState, useEffect, useRef } from "react";
import PriceCard from "./PriceCard";

const Plans = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const cardRefs = useRef([]);

    const pricingPlans = [
        {
            title: "Starter Plan",
            price: "5",
            description: "This package is suitable for teams 1-15 people",
            buttonText: "Purchase Now",
            features: [
                "10 GB Disk Space",
                "1 Year Support",
                "500 Queries",
                "Basic Statistics",
                "Free Custom Domain"
            ]
        },
        {
            title: "Basic Plan",
            price: "20",
            description: "This package is suitable for teams 1-50 people",
            buttonText: "Purchase Now",
            features: [
                "500 GB Disk Space",
                "5 Year Support",
                "600 Queries",
                "Basic Statistics",
                "Free Custom Domain"
            ]
        },
        {
            title: "Popular Plan",
            price: "46",
            description: "This package is suitable for teams 1-100 people",
            buttonText: "Purchase Now",
            features: [
                "800 GB Disk Space",
                "10 Year Support",
                "800 Queries",
                "Fully Statistics",
                "Free Custom Domain"
            ]
        },
        {
            title: "Premium Plan",
            price: "90",
            description: "This package is suitable for big team or company",
            buttonText: "Purchase Now",
            features: [
                "1000 GB Disk Space",
                "Unlimited Support",
                "Unlimited Queries",
                "Fully Statistics",
                "Free Custom Domain"
            ]
        }
    ];

    useEffect(() => {
        const observerOptions = {
            root: scrollContainerRef.current,
            threshold: 0.6, // Card is selected when 60% of it is visible
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = cardRefs.current.indexOf(entry.target);
                    if (index !== -1) {
                        setSelectedIndex(index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        cardRefs.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-x-hidden overflow-y-visible">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-6 outfit-font tracking-tight">
                        We offer great price <br /> plans for the application
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                        Objectively market-driven intellectual capital rather than covalent
                        best practices facilitate strategic information before innovation.
                    </p>
                </div>

                {/* Grid on Desktop, Horizontal Scroll on Mobile */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-px-4 gap-2 pt-6 pb-16 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 no-scrollbar"
                    style={{
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {pricingPlans.map((plan, index) => (
                       <div
  key={index}
  className="snap-center px-3 py-10 overflow-visible"
>
                            <PriceCard
                                ref={(el) => (cardRefs.current[index] = el)}
                                {...plan}
                                isSelected={selectedIndex === index}
                                onSelect={() => {
                                    setSelectedIndex(index);
                                    cardRefs.current[index]?.scrollIntoView({
                                        behavior: "smooth",
                                        inline: "center",
                                        block: "nearest"
                                    });
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;
