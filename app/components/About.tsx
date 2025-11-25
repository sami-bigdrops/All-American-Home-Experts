export function About() {
    const stats = [
      { value: '12000+', label: 'Homeowners Helped', width: '120' },
      { value: '$300M+', label: 'Renovation Projects', width: '199' },
      { value: '20+', label: 'Years of Combined Experience', width: '147' },
    ];
  
    return (
      <section id="about" className="bg-(--color-white) w-full">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-20 xl:py-[80px]">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-16 xl:gap-[100px]">
            <div className="flex w-full flex-col gap-6 sm:gap-8 md:gap-10 lg:w-[48%] lg:max-w-[560px]">
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                <h2 className="font-title text-[32px] font-extrabold leading-tight text-(--color-dark-blue) sm:text-[36px] md:text-[40px] lg:text-[42px] xl:leading-[62px]">
                  About All American Home Experts
                </h2>
                <p className="font-body text-[16px] font-light leading-[26px] text-(--color-black-grey) sm:text-[17px] sm:leading-[28px] md:text-[18px] md:leading-[30px]">
                At All American Home Experts, we combine deep industry knowledge, renovation financing, and a network of trusted contractors to help homeowners across the United States bring their home improvement dreams to life. Whether you&apos;re planning a full-scale remodel or a simple upgrade, we guide you at every step,from conceptualization to completion.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:w-[48%] lg:items-start xl:gap-[50px]">
              <div className="grid w-full grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 xl:gap-[50px]">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="flex flex-col items-center gap-4">
                    <div className="relative h-0.5 w-full">
                      <svg 
                        className="block h-full w-full" 
                        fill="none" 
                        viewBox={`0 0 ${stat.width} 2`}
                        preserveAspectRatio="none"
                      >
                        <line 
                          stroke="var(--color-orange)" 
                          strokeWidth="2" 
                          x1="0" 
                          x2={stat.width} 
                          y1="1" 
                          y2="1" 
                        />
                      </svg>
                    </div>
                    <div className="font-title text-[40px] font-black leading-none text-(--color-dark-blue) sm:text-[45px] md:text-[50px]">
                      {stat.value}
                    </div>
                    <div className="font-body text-[16px] font-normal leading-[26px] text-(--color-black-grey) sm:text-[17px] md:text-[18px]">
                      {stat.label}
                    </div>
                  </div>
                ))}
                <div className="flex flex-col items-center gap-4 md:col-span-2 md:justify-self-center">
                  <div className="relative h-0.5 w-full">
                    <svg 
                      className="block h-full w-full" 
                      fill="none" 
                      viewBox={`0 0 ${stats[2].width} 2`}
                      preserveAspectRatio="none"
                    >
                      <line 
                        stroke="var(--color-orange)" 
                        strokeWidth="2" 
                        x1="0" 
                        x2={stats[2].width} 
                        y1="1" 
                        y2="1" 
                      />
                    </svg>
                  </div>
                  <div className="font-title text-[40px] font-black leading-none text-(--color-dark-blue) sm:text-[45px] md:text-[50px]">
                    {stats[2].value}
                  </div>
                  <div className="font-body text-[16px] font-normal leading-[26px] text-(--color-black-grey) sm:text-[17px] md:text-[18px]">
                    {stats[2].label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
