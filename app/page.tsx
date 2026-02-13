"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { Grandstander } from "next/font/google";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeNavbar from "@/components/home/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });
const grandslang = Grandstander({ subsets: ["latin"] });

export default function Home() {
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
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-yellow-100 z-50 animate-slide-down"></div>
      )}
      <div className="h-screen flex gap-8 bg-zinc-900 text-yellow-100 overflow-hidden">
        <HomeNavbar />
        <div className="flex flex-1 items-center px-6 ml-16 lg:px-12 lg:ml-20">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <h1 
              className={`font-semibold uppercase text-2xl ${montserrat.className}`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Yuanthio Virly
            </h1>
            <p 
              className={`${montserrat.className} text-sm sm:text-base md:text-lg lg:text-xl`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              A web developer who transforms creative ideas into innovative digital solutions. Specializing in building modern web applications with high performance and exceptional user experiences.
            </p>
            <p 
              className={`${montserrat.className} uppercase font-semibold text-2xl`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Full-stack Developer
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-1 items-center p-6 lg:p-8 xl:p-12">
          <div className="flex flex-col space-y-4 lg:space-y-6 xl:space-y-8 font-semibold text text-2xl-3xl md:text-4xl lg:text-5xl xl:text-8xl uppercase">
            <Link href="/projects">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-200 cursor-pointer uppercase`}
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Projects
              </h1>
            </Link>
            <Link href="/services">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-200 cursor-pointer uppercase`}
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Services
              </h1>
            </Link>
            <Link href="/about">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-200 cursor-pointer uppercase`}
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                About
              </h1>
            </Link>
            <Link href="/contact">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-200 cursor-pointer uppercase`}
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                Contact
              </h1>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-700 z-40">
        <div className="flex justify-around items-center py-3">
          <Link href="/projects" className="flex flex-col items-center space-y-1">
            <svg className="w-6 h-6 text-yellow-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-xs text-yellow-100">Projects</span>
          </Link>
          <Link href="/services" className="flex flex-col items-center space-y-1">
            <svg className="w-6 h-6 text-yellow-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs text-yellow-100">Services</span>
          </Link>
          <Link href="/about" className="flex flex-col items-center space-y-1">
            <svg className="w-6 h-6 text-yellow-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs text-yellow-100">About</span>
          </Link>
          <Link href="/contact" className="flex flex-col items-center space-y-1">
            <svg className="w-6 h-6 text-yellow-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs text-yellow-100">Contact</span>
          </Link>
        </div>
      </div>
    </>
  );
}
