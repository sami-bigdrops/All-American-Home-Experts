'use client';

import { useState, useEffect } from "react";

export function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    const testimonials = [
        {
            quote: "Transformed our kitchen beyond our dreams.",
            text: "All American Home Experts helped us secure renovation financing and connected us with an amazing contractor. Our kitchen remodel was completed on time and within budget. The entire process was seamless from start to finish.",
            name: "Sarah Johnson",
            rating: 5,
        },
        {
            quote: "Expert guidance every step of the way.",
            text: "From initial planning to final touches, they guided us through our bathroom renovation. Their network of trusted contractors and financing options made our home improvement project stress-free and affordable.",
            name: "Emma Rodriguez",
            rating: 5,
        },
        {
            quote: "Exceeded all our expectations.",
            text: "We wanted to add a second story to our home but didn't know where to start. All American Home Experts provided the financing solution and matched us with the perfect contractor. The results are incredible!",
            name: "Michael Chen",
            rating: 5,
        },
        {
            quote: "Professional and reliable service.",
            text: "The team helped us finance our whole-house renovation and connected us with quality contractors. Every contractor they recommended was professional, skilled, and completed work on schedule. Highly recommend!",
            name: "David Thompson",
            rating: 5,
        },
        {
            quote: "Made our home improvement dreams a reality.",
            text: "We had been dreaming of a home office renovation for years. All American Home Experts made it possible with flexible financing options and connected us with contractors who understood our vision. Couldn't be happier!",
            name: "Lisa Anderson",
            rating: 5,
        },
        {
            quote: "Outstanding support throughout the project.",
            text: "From conceptualization to completion, they were there every step of the way. The renovation financing was straightforward, and the contractors they recommended were top-notch. Our home looks amazing!",
            name: "James Wilson",
            rating: 5,
        },
    ];

    useEffect(() => {
        const updateItemsPerView = () => {
            setItemsPerView(window.innerWidth >= 1024 ? 2 : 1);
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

    const StarIcon = () => (
        <svg className="h-4 w-4 sm:h-[18px] sm:w-[18px]" style={{ fill: 'var(--color-yellow)' }} viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
    );

    return (
        <section id="testimonials" className="bg-(--color-white) w-full">
            <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
                <div className="mb-6 flex items-center justify-between sm:mb-8 md:mb-10 lg:mb-12">
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <h2 className="font-title text-[24px] font-extrabold text-(--color-dark-blue) sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
                        What Homeowners Are Saying
                        </h2>
                        <p className="font-body text-[14px] font-light text-(--color-black-grey) sm:text-[15px] md:text-[16px] lg:text-[17px]">
                            Real Stories. Real Transformations.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button
                            onClick={goToPrevious}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-blue) text-(--color-white) transition-opacity hover:opacity-90 sm:h-10 sm:w-10 md:h-11 md:w-11"
                            aria-label="Previous testimonial"
                        >
                            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-blue) text-(--color-white) transition-opacity hover:opacity-90 sm:h-10 sm:w-10 md:h-11 md:w-11"
                            aria-label="Next testimonial"
                        >
                            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-6 xl:gap-8">
                    {visibleTestimonials.map((testimonial, index) => (
                        <div
                            key={currentIndex + index}
                            className="flex flex-col gap-3 rounded-lg border border-(--color-grey) bg-(--color-white) p-5 shadow-sm transition-shadow hover:shadow-md sm:gap-4 sm:p-6"
                        >
                            <p className="font-title text-[20px] italic leading-[1.3] text-(--color-dark-blue) sm:text-[22px] md:text-[24px] lg:text-[26px]">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <p className="font-body text-[13px] leading-[20px] text-(--color-black-grey) sm:text-[14px] sm:leading-[22px] md:text-[15px] md:leading-[24px]">
                                {testimonial.text}
                            </p>
                            <div className="mt-auto flex items-center justify-between pt-2">
                                <p className="font-body text-[14px] font-bold text-(--color-black-grey) sm:text-[15px] md:text-[16px]">
                                    {testimonial.name}
                                </p>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
