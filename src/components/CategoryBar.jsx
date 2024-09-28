import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
    'All', 'Music', 'Gaming', 'Sports', 'News', 'Live', 'Fashion',
    'Learning', 'Spotlight', 'Technology', 'Entertainment', 'Travel', 'Food', "New to you", "Trending", "For you", "Following", "Popular", "More"
];

const HorizontalScroll = () => {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth * 0.8;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(
                container.scrollLeft < container.scrollWidth - container.offsetWidth
            );
        }
    };

    return (
        <div className="relative top-16 max-w-screen-xl mx-auto px-4 text-foreground">
            <div
                className="flex items-center space-x-4 overflow-x-auto scrollbar-hidden"
                ref={scrollContainerRef}
                onScroll={handleScroll}
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        className="flex-shrink-0 px-4 py-2 bg-button-bg rounded-full hover:bg-button-hover transition-colors"
                    >
                        {category}
                    </button>
                ))}
            </div>
            {showLeftArrow && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-background p-2 rounded-full shadow-md lg:block hidden"
                >
                    <ChevronLeft size={24} />
                </button>
            )}
            {showRightArrow && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-background p-2 rounded-full shadow-md lg:block hidden"
                >
                    <ChevronRight size={24} />
                </button>
            )}
        </div>
    );
};

export default HorizontalScroll;
