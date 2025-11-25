'use client';

import Link from 'next/link';

export function Footer() {
    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'FAQs', href: '#faq' },
        { label: 'Contact', href: '#contact' },
    ];

    const legalLinks = [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Subscribe', href: '#' },
        { label: 'Unsubscribe', href: '#' },
    ];

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.substring(1);
            const element = document.getElementById(id);
            
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Keep URL clean without hash
                window.history.replaceState(null, '', window.location.pathname);
            }
        } else if (href === '/') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Keep URL clean
            window.history.replaceState(null, '', '/');
        }
        // For other routes like /privacy, /terms, etc., allow normal navigation
    };

    return (
        <footer className="bg-(--color-dark-blue) w-full">
            <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:justify-items-center">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-body text-[22px] font-bold text-(--color-white) sm:text-[24px] md:text-[26px]">
                            All American Home Experts
                        </h3>
                        <p className="font-body text-[14px] leading-[22px] text-(--color-white) opacity-90 sm:text-[15px] sm:leading-[24px]">
                            All American Home Experts — Expert Home Renovation & Financing.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-body text-[18px] font-bold text-(--color-white) sm:text-[20px]">
                            Quick Links
                        </h4>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className="font-body text-[14px] text-(--color-white) opacity-90 transition-opacity hover:opacity-100 sm:text-[15px] cursor-pointer"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-body text-[18px] font-bold text-(--color-white) sm:text-[20px]">
                            Legal
                        </h4>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {legalLinks.map((link) => {
                                // Use Next.js Link for routes, regular anchor for hash links
                                if (link.href.startsWith('#') || link.href === '/') {
                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            onClick={(e) => handleSmoothScroll(e, link.href)}
                                            className="font-body text-[14px] text-(--color-white) opacity-90 transition-opacity hover:opacity-100 sm:text-[15px] cursor-pointer"
                                        >
                                            {link.label}
                                        </a>
                                    );
                                } else {
                                    return (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="font-body text-[14px] text-(--color-white) opacity-90 transition-opacity hover:opacity-100 sm:text-[15px] cursor-pointer"
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-(--color-white) border-opacity-20 pt-6 sm:mt-12 sm:pt-8">
                    <p className="text-center font-body text-[13px] text-(--color-white) opacity-80 sm:text-[14px]">
                        &copy; {new Date().getFullYear()} All American Home Experts. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

