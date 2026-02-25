import React from 'react';

const ReviewCard = ({ stars, text, author, role, avatar }) => (
    <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="flex gap-1 mb-6">
            {[...Array(stars)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400 fill-current">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>

        <p className="text-gray-700 leading-relaxed font-medium text-[15px] mb-8 italic">
            "{text}"
        </p>

        <div className="flex items-center gap-4">
            {avatar ? (
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm">
                    <img src={avatar} alt={author} className="w-full h-full object-cover" />
                </div>
            ) : (
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 shadow-sm">
                    {author[0]}
                </div>
            )}
            <div>
                <h4 className="text-sm font-bold text-gray-900">{author}</h4>
                <p className="text-xs text-gray-400 font-semibold">{role}</p>
            </div>
        </div>
    </div>
);

const Reviews = () => {
    const reviews = [
        {
            stars: 5,
            text: "Setting up our digital menu with you app was incredibly fast. Our customers love scanning the QR code and ordering without downloading any app. It has completely transformed our cafe's efficiency!",
            author: "Leslie Alexander",
            role: "Cafe Owner",
        },
        {
            stars: 5,
            text: "The WhatsApp order notifications are a game-changer! We receive complete order details instantly. It's so much simpler than managing a complex dashboard. Highly recommended for any restaurant.",
            author: "Jacob Jones",
            role: "Bistro Manager",
            avatar: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
        },
        {
            stars: 5,
            text: "I was amazed by the beautiful menu layouts. We were able to customize the design to match our bakery's brand perfectly. The banner ads feature also helped us increase our weekend sales by 20%.",
            author: "Jenny Wilson",
            role: "Bakery Owner",
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-6 outfit-font tracking-tight leading-tight">
                        What our satisfied <br /> clients say about Sharko
                    </h2>
                    <p className="text-gray-400 text-[15px] leading-relaxed font-medium">
                        Helping restaurants, cafes, and shops modernize their ordering experience <br className="hidden md:block" />
                        with smart QR menus and seamless WhatsApp integration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;