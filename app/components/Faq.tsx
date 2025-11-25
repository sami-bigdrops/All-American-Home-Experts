'use client';

import { useState } from "react";

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What financing options do you offer?",
            answer: "We offer a range of financing options including personal loans, home equity loans, and renovation loans. We work with multiple lenders to find the best financing solution for your needs.",
        },
        {
            question: "How long does it take to get funding?",
            answer: "Funding typically takes 2-4 weeks from application to approval. We provide clear timelines and updates throughout the process to keep you informed and minimize delays.",
        },
        {
            question: "Can you help me find a contractor?",
            answer: "Yes, we have a network of trusted contractors who can help you with your renovation project. We can provide you with a list of contractors who are licensed, insured, and experienced in the renovation industry.",
        },
        {
            question: "Do you manage the renovation?",
            answer: "Yes, we can help you manage your renovation project. We can provide you with a project manager who will oversee the entire renovation process and ensure that the project is completed on time and within budget.",
        },
        {
            question: "Are there extra costs or hidden fees?",
            answer: "No, we offer transparent pricing with no hidden fees. We provide you with a detailed estimate of the project before we start, and we will not charge you any additional fees unless you approve of the changes.",
        },
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-[#EFF7FF] w-full">
            <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
                <div className="mb-6 flex flex-col items-center gap-2 text-center sm:mb-8 md:mb-10 lg:mb-12 sm:gap-3">
                    <h2 className="font-title text-[24px] font-extrabold text-(--color-dark-blue) sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-body text-[14px] font-light text-(--color-black-grey) sm:text-[15px] md:text-[16px] lg:text-[17px]">
                        Everything You Need to Know Before Getting Started
                    </p>
                </div>

                <div className="mx-auto max-w-3xl space-y-4 sm:space-y-5">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg border border-(--color-grey) bg-(--color-white) shadow-sm transition-shadow hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <p className="flex-1 font-body text-[15px] font-medium text-(--color-black-grey) sm:text-[16px] md:text-[17px]">
                                    {faq.question}
                                </p>
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--color-blue) text-(--color-white) transition-transform sm:h-9 sm:w-9">
                                    <svg
                                        className={`h-4 w-4 transition-transform sm:h-5 sm:w-5 ${
                                            openIndex === index ? 'rotate-45' : ''
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </button>
                            <div
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="border-t border-(--color-grey) p-5 sm:p-6">
                                    <p className="font-body text-[14px] leading-[22px] text-(--color-black-grey) sm:text-[15px] sm:leading-[24px] md:text-[16px]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
