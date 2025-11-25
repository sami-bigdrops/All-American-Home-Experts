import Image from "next/image";

export function Features() {
    const features = [
      {
        icon: '/insured.svg',
        title: 'Licensed & Insured',
        description: 'All teams are fully licensed and carry comprehensive insurance for your peace of mind.',
      },
      {
        icon: '/energy.svg',
        title: 'Energy Smart Solutions',
        description: 'We integrate solar & energy-efficient upgrades to reduce bills and boost home value.',
      },
      {
        icon: '/safety.svg',
        title: 'Safety First',
        description: 'Strict safety protocols and fire security installations keep your family protected.',
      },
      {
        icon: '/on-time.svg',
        title: 'On-Time Delivery',
        description: 'We provide realistic schedules and deliver projects on time, no surprises.',
      },
      {
        icon: '/pricing.svg',
        title: 'Transparent Pricing',
        description: 'Clear, itemized estimates so you know exactly what you\'re paying for.',
      },
      {
        icon: '/location.svg',
        title: 'Local Expertise',
        description: 'Deep knowledge of local codes and suppliers across the USA.',
      }
    ];
  
    return (
      <section className="bg-[#F8F9FA] w-full">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-20 xl:py-[80px]">
          <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="font-title text-[32px] font-extrabold text-(--color-dark-blue) sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[50px]">
              Why Work With Us
            </h2>
            <p className="font-body text-[16px] font-light text-(--color-black-grey) sm:text-[17px] md:text-[18px] lg:text-[20px]">
              Reliable. Transparent. Skilled.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-6 xl:gap-8 items-center justify-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-4 text-center">
                <Image src={feature.icon} alt={feature.title} width={64} height={64} className="text-(--color-dark-blue)" />
                <h3 className="font-title text-[20px] font-bold text-(--color-dark-blue) sm:text-[22px] md:text-[24px]">
                  {feature.title}
                </h3>
                <p className="font-body text-[14px] font-normal leading-[22px] text-(--color-black-grey) sm:text-[15px] sm:leading-[24px] md:text-[16px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

