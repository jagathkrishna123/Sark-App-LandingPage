import React, { useState, useEffect, useRef } from "react";
import PriceCard from "./PriceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Plans = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const cardRefs = useRef([]);

    const pricingPlans = [
        {
            title: "Essential",
            price: "19",
            description: "Perfect for small cafes and food stalls",
            buttonText: "Start 7-Day Free Trial",
            features: [
                "1 Dynamic QR Code",
                "Instant WhatsApp Alerts",
                "1 Menu Layout",
                "Basic Order Tracking",
                "Standard Email Support"
            ]
        },
        {
            title: "Professional",
            price: "49",
            description: "Best for growing restaurants & bistros",
            buttonText: "Choose Professional",
            features: [
                "3 Dynamic QR Codes",
                "Advanced WhatsApp Details",
                "All 3 Menu Layouts",
                "Daily Sales Analytics",
                "Priority Chat Support"
            ]
        },
        {
            title: "Business",
            price: "99",
            description: "For multi-location shops & chains",
            buttonText: "Get OLABIZ Business",
            features: [
                "Unlimited QR Codes",
                "Multi-Branch Management",
                "Custom Banner Ads",
                "Monthly Performance Reports",
                "Dedicated Account Manager"
            ]
        },
        {
            title: "Enterprise",
            price: "199",
            description: "Custom solutions for large franchises",
            buttonText: "Contact Sales",
            features: [
                "White-label Branding",
                "Custom API Integrations",
                "POS System Sync",
                "Unlimited Everything",
                "24/7 Phone Support"
            ]
        }
    ];

    const sectionRef = useRef(null);
    const headerRef = useRef(null);

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

        // GSAP Animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            }
        });

        tl.fromTo(headerRef.current.children,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
        )
            .fromTo(cardRefs.current,
                { opacity: 0, y: 60, scale: 0.9, rotateY: 15 },
                { opacity: 1, y: 0, scale: 1, rotateY: 0, duration: 1.2, stagger: 0.15, ease: "back.out(1.4)" },
                "-=0.4"
            );

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) observer.unobserve(card);
            });
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-x-hidden overflow-y-visible">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-6 outfit-font tracking-tight">
                        Simple & Transparent <br /> Pricing for Your Shop
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                        Choose the plan that fits your business needs. No hidden fees, <br className="hidden md:block" />
                        just pure performance to help you manage orders effortlessly.
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
                        <div key={index} className="snap-center px-3 py-10 overflow-visible">
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
