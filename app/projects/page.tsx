"use client";

import { useEffect, useState } from "react";
import { Montserrat, Grandstander } from "next/font/google";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/global/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });
const grandstander = Grandstander({ subsets: ["latin"] });

export default function Projects() {
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
        <div className="flex flex-1 items-center px-6">
          <div className="flex flex-col space-y-4" data-aos="fade-down" data-aos-delay="800">
            <h1 
              className={`font-semibold uppercase ${montserrat.className}`}
            >
              Projects
            </h1>
            <p 
              className={montserrat.className}
            >
              A collection of innovative web applications and digital solutions showcasing modern development practices and creative problem-solving approaches.
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-center p-6" data-aos="fade-down" data-aos-delay="800">
          <div className="flex flex-col font-semibold space-y-6 text-6xl uppercase max-h-[60vh] overflow-y-auto pr-4">
            <Link href="/projects/urban-yuan">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-600 cursor-pointer uppercase`}
              >
                Urban Yuan
              </h1>
            </Link>
            <Link href="/projects/job-matcher">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-600 cursor-pointer uppercase`}
              >
                Job Matcher
              </h1>
            </Link>
            <Link href="/projects/life-admin-assistant">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-600 cursor-pointer uppercase`}
              >
                Life Admin
              </h1>
            </Link>
            <Link href="/projects/circle-app">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-600 cursor-pointer uppercase`}
              >
                Circle App
              </h1>
            </Link>
            <Link href="/projects/sipresmagmth34">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-600 cursor-pointer uppercase`}
              >
                Sipresmagmth34
              </h1>
            </Link>
            <Link href="/contact">
              <h1
                className={`${montserrat.className} transition-all duration-300 hover:text-yellow-600 cursor-pointer uppercase`}
              >
                Dinow
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}