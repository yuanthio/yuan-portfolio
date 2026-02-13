"use client";

import { useEffect, useState } from "react";
import { Montserrat, Grandstander } from "next/font/google";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/global/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });
const grandstander = Grandstander({ subsets: ["latin"] });

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling during animations
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <div className="h-screen bg-zinc-900">
      <div className="h-screen flex bg-yellow-100 text-zinc-900 animate-slide-up overflow-hidden">
        <Navbar />
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="flex-1 flex items-center px-6 py-8">
            <div className="flex flex-col space-y-6 max-w-2xl" data-aos="fade-down" data-aos-delay="800">
              <h1 
                className={`font-semibold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-8xl ${montserrat.className}`}
              >
                Contact
              </h1>
              <p 
                className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl`}
              >
                Get in touch with me for collaborations, opportunities, or just to say hello. I'm always excited to connect with new people and discuss interesting projects.
              </p>
              <div className="space-y-3">
                <p className={`${montserrat.className} text-sm sm:text-base md:text-lg`}>
                  Email: <a href="mailto:yuanthiovirly26.9a.tik@gmail.com" className="underline decoration-2 hover:text-yellow-600 transition-colors">yuanthiovirly26.9a.tik@gmail.com</a>
                </p>
                <p className={`${montserrat.className} text-sm sm:text-base md:text-lg`}>
                  On the internet: 
                  <a href="https://github.com/yuanthiovirly" target="_blank" rel="noopener noreferrer" className="underline decoration-2 hover:text-yellow-600 transition-colors ml-1">GitHub</a> | 
                  <a href="https://www.linkedin.com/in/yuanthio-virly/" target="_blank" rel="noopener noreferrer" className="underline decoration-2 hover:text-yellow-600 transition-colors ml-1">LinkedIn</a> | 
                  <a href="https://instagram.com/yuanthiovirly" target="_blank" rel="noopener noreferrer" className="underline decoration-2 hover:text-yellow-600 transition-colors ml-1">Instagram</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}