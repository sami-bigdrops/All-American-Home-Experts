'use client';

import Image from "next/image";
import { useModal } from "../contexts/ModalContext";

export function Hero() {
    const { openModal } = useModal();

    const handleScrollToServices = () => {
        const element = document.getElementById('services');
        
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
    };

    return (
      <section className="bg-(--color-light-yellow) w-full">
        <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-[60px]">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-20 xl:gap-16">
            <div className="flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:w-[48%] lg:items-start lg:gap-12 xl:gap-[40px]">
              <div className="flex w-full flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:items-start">
                <h1 className="text-center font-title text-[28px] font-extrabold leading-tight text-(--color-dark-blue) sm:text-[32px] sm:leading-[1.2] md:text-[38px] md:leading-[1.24] lg:text-left lg:text-[44px] xl:text-[50px] xl:leading-[62px]">
                  Secure Your Financial Future With Expert Guidance
                </h1>
                <p className="text-center font-body text-[14px] font-light leading-[24px] text-(--color-black-grey) sm:text-[15px] sm:leading-[26px] md:text-[16px] md:leading-[27px] lg:text-left lg:text-[17px] lg:leading-[28px] xl:text-[18px]">
                  Tailored financial planning, insurance, loans, and wealth advisory services - delivered with precision, integrity, and 10+ years of proven expertise.
                </p>
              </div>
              <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-4 sm:w-auto lg:items-start">
                <button 
                  onClick={() => openModal('contact')}
                  className="w-full rounded-[30px] bg-(--color-blue) px-6 py-3 font-body text-[14px] font-semibold text-(--color-white) transition-opacity hover:opacity-90 sm:w-auto sm:px-7 sm:py-3.5 md:px-8 md:py-4 md:text-[15px] lg:px-[18px] lg:py-[18px] lg:text-[16px]"
                >
                  Schedule Consultation
                </button>
                <button 
                  onClick={handleScrollToServices}
                  className="w-full rounded-[30px] border border-(--color-blue) bg-(--color-light-yellow) px-6 py-3 font-body text-[14px] font-semibold text-(--color-blue) transition-opacity hover:opacity-90 sm:w-auto sm:px-7 sm:py-3.5 md:px-8 md:py-4 md:text-[15px] lg:px-[18px] lg:py-[18px] lg:text-[16px] hover:bg-(--color-blue) hover:text-(--color-white)"
                >
                  Explore Our Services
                </button>
              </div>
            </div>
            <div className="relative w-full aspect-2000/1334 min-h-[300px] sm:min-h-[350px] md:max-w-[600px] md:min-h-[400px] lg:w-[48%] lg:min-h-[450px] xl:min-h-[500px]">
              <Image 
                alt="Financial planning and expert guidance" 
                className="object-cover" 
                src="/house-img.png"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
