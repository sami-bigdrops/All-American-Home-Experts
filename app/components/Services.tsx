'use client';

import Image from "next/image";

export function Services() {

    const services = [
        {
            icon: '/home-decor.svg',
            title: 'Home Décor',
            description: 'Stylish, budget-aware home décor solutions that refresh rooms and create cohesive interiors tailored to your lifestyle and taste.',
        },
        {
            icon: '/interior-exterior.svg',
            title: 'Interior & Exterior',
            description: 'Comprehensive interior and exterior remodeling: paint, siding, decks, windows, and whole-home refurbishments done with care.',
        },
        {
            icon: '/bathroom.svg',
            title: 'Bathroom Design',
            description: 'Modern bathroom design focused on efficient layouts, durable finishes, and accessible options to suit any family.',
        },
        {
            icon: '/cctv.svg',
            title: 'Home Security Installation & Maintenance',
            description: 'Installation and ongoing maintenance of CCTV, alarms, and smart access systems for complete home protection.',
        },
        {
            icon: '/bell.svg',
            title: 'Fire Security Installation & Maintenance',
            description: 'Fire detection, suppression system installation, and routine inspections to keep occupants and property safe.',
        },
        {
            icon: '/roof.svg',
            title: 'Roofing Installation & Maintenance',
            description: 'Durable roofing solutions, hail- and weather-resistant materials, and proactive maintenance plans to extend roof life.',
        },
        {
            icon: '/solar.svg',
            title: 'Solar & Energy Installation & Maintenance',
            description: 'Residential solar installations, battery storage solutions, and energy-efficiency retrofits to reduce long-term costs.',
        },
        {
            icon: '/floor.svg',
            title: 'Floor',
            description: 'Flooring replacement and refinishing, hardwood, laminate, tile, and specialty surfaces installed with precision.',
        },
        {
            icon: '/floor.svg',
            title: 'Door & Window',
            description: 'High-performance doors and windows that improve security, insulation, and curb appeal with professional installation.',
        },
    ];

    return (
        <section id="services" className="bg-(--color-white) w-full">
            <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
                <div className="mb-6 flex flex-col items-center gap-3 text-center sm:mb-8 md:mb-10 lg:mb-12">
                    <h2 className="font-title text-[28px] font-extrabold text-(--color-dark-blue) sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px]">
                        Our Home Improvement Services
                    </h2>
                    <p className="font-body text-[15px] font-light text-(--color-black-grey) sm:text-[16px] md:text-[17px] lg:text-[18px]">
                        Comprehensive Solutions for Every Home Project.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5 xl:gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 rounded-lg bg-(--color-light-yellow) p-5 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6"
                        >
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={56}
                                height={56}
                                className="h-14 w-14"
                            />
                            <h3 className="font-title text-[18px] font-bold text-(--color-dark-blue) sm:text-[20px] md:text-[22px]">
                                {service.title}
                            </h3>
                            <p className="font-body text-[13px] font-normal leading-[20px] text-(--color-black-grey) sm:text-[14px] sm:leading-[22px] md:text-[15px]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
