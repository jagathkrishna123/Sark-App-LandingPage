import React from 'react';

const PriceCard = React.forwardRef(({ title, price, description, features, buttonText, isSelected, onSelect }, ref) => (
    <div
        ref={ref}
        onClick={onSelect}
        className={`cursor-pointer p-8 rounded-[32px] border transition-all duration-500 flex flex-col h-full
        snap-center min-w-[300px] sm:min-w-0
        ${isSelected
                ? 'bg-[#5e5df0] text-white border-[#5e5df0] shadow-[0_20px_50px_rgba(94,93,240,0.3)] scale-[1.05] z-10'
                : 'bg-white text-gray-900 border-gray-100 shadow-sm hover:shadow-xl scale-100 opacity-90 sm:opacity-100'
            }`}
    >
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className={`text-lg font-bold mb-6 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                {title}
            </h3>

            <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-extrabold tracking-tight">${price}</span>
                <span className={`text-sm font-medium ${isSelected ? 'text-white/70' : 'text-gray-500'}`}>
                    / Per Month
                </span>
            </div>

            <p className={`text-sm mb-10 leading-relaxed font-medium ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                {description}
            </p>
        </div>

        <div className="space-y-4 mb-10 flex-grow">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                    <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                        ${isSelected
                                ? 'bg-white/20'
                                : 'bg-indigo-50 border border-indigo-100'
                            }`}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className={`w-3 h-3 fill-none stroke-current stroke-[3]
                            ${isSelected ? 'text-white' : 'text-indigo-600'}`}
                        >
                            <path d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span
                        className={`text-sm font-semibold tracking-tight
                        ${isSelected ? 'text-white' : 'text-gray-600'}`}
                    >
                        {feature}
                    </span>
                </div>
            ))}
        </div>

        <button
            className={`w-full py-4 rounded-xl font-bold text-sm transition-all border
            ${isSelected
                    ? 'bg-white text-indigo-600 hover:bg-gray-50 shadow-lg'
                    : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                }`}
        >
            {buttonText}
        </button>
    </div>
));

PriceCard.displayName = 'PriceCard';

export default PriceCard;