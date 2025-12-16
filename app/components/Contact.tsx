'use client';

import Image from "next/image";
import { Form } from "./Form";

export function Contact() {
    return (
        <section id="contact" className="bg-(--color-white) w-full">
            <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10 xl:gap-12">
                    <div className="flex w-full flex-col gap-5 sm:gap-6 lg:w-[48%] lg:gap-7">
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <h2 className="font-title text-[24px] font-extrabold leading-tight text-(--color-dark-blue) sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
                            Let&apos;s Build Your Dream Home
                            </h2>
                            <p className="font-body text-[14px] leading-[22px] text-(--color-black-grey) sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[26px]">
                                Reach Out For a Free Consultation
                            </p>
                        </div>

                        <div className="relative h-[250px] w-full overflow-hidden rounded-lg sm:h-[300px] md:h-[350px] lg:h-[380px]">
                            <Image
                                src="/contact.png"
                                alt="Home experts ready to help"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-[48%]">
                        <div className="rounded-lg bg-(--color-grey) p-5 sm:p-6">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
