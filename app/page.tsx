import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import { Testimonial } from "./components/Testimonial";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";

export default function Home() {
  return (
    <div className="flex flex-col items-start h-screen">
      <Navbar />
      <Hero />  
      <About />
      <Features />
      <Services />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
      <Modal />
    </div>
  );
}
