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
        <div className="flex flex-1 items-center px-6 ml-16">
          <div className="flex flex-col space-y-4">
            <h1 
              className={`font-semibold uppercase ${montserrat.className}`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Yuanthio Virly
            </h1>
            <p 
              className={montserrat.className}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              A web developer who transforms creative ideas into innovative digital solutions. Specializing in building modern web applications with high performance and exceptional user experiences.
            </p>
            <p 
              className={montserrat.className}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Fullstack Developer
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center p-6">
          <div className="flex flex-col space-y-6 font-semibold text-8xl uppercase">
            <Link href="/projects">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-200 cursor-pointer text-8xl uppercase`}
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Projects
              </h1>
            </Link>
            <Link href="/services">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-200 cursor-pointer text-8xl uppercase`}
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                Services
              </h1>
            </Link>
            <Link href="/about">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-200 cursor-pointer text-8xl uppercase`}
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                About
              </h1>
            </Link>
            <Link href="/contact">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-200 cursor-pointer text-8xl uppercase`}
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                Contact
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
