'use client';

import { useModal } from "../contexts/ModalContext";

export function Navbar() {
    const { openModal } = useModal();
    const menuItems = {
        'Home': '/',
        'About': '#about',
        'Services': '#services',
        'Testimonials': '#testimonials',
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        
        if (href.startsWith('#')) {
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
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Keep URL clean
            window.history.replaceState(null, '', '/');
        }
    };
  
    return (
      <nav className="bg-(--color-white) w-full">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-[30px] sm:px-8 md:px-[80px]">
          <h2 className="text-[22px] font-bold text-(--color-dark-blue)">
            All American Home Experts
          </h2>
          <div className="flex items-center gap-12 xl:gap-[50px]">
            <div className="hidden xl:flex items-center gap-[50px]">
              {Object.entries(menuItems).map(([key, value]) => (
                <a 
                  href={value} 
                  key={key}
                  onClick={(e) => handleSmoothScroll(e, value)}
                  className="font-medium text-[16px] text-(--color-black-grey) transition-opacity hover:opacity-70 cursor-pointer"
                >
                  {key}
                </a>
              ))}
            </div>
            <button 
              onClick={openModal}
              className="hidden rounded-[30px] bg-(--color-blue) px-[18px] py-[18px] font-body text-[16px] font-semibold text-(--color-white) transition-opacity hover:opacity-90 md:flex"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </nav>
    );
  }
