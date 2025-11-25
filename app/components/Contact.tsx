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
                        
                        <div className="flex items-center gap-2.5 sm:gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--color-blue) sm:h-10 sm:w-10">
                                <svg className="h-4 w-4 text-(--color-white) sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <a 
                                href="mailto:contact@allamericanhomeexperts.com" 
                                className="font-body text-[14px] font-medium text-(--color-black-grey) hover:text-(--color-blue) transition-colors sm:text-[15px] md:text-[16px]"
                            >
                                contact@allamericanhomeexperts.com
                            </a>
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
