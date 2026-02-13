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
      once: true,
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <div className="h-screen bg-zinc-900">
      <div className="h-screen flex bg-yellow-100 text-zinc-900 animate-slide-up overflow-hidden">
        <Navbar />
        <div className="flex flex-col md:flex-row justify-center md:items-center h-screen">
          <div className="p-6 md:flex-1">
            <div
              className="flex flex-col space-y-4 lg:pr-52"
              data-aos="fade-down"
              data-aos-delay="800"
            >
              <h1
                className={`font-semibold uppercase ${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
              >
                Projects
              </h1>
              <p
                className={`${montserrat.className} text-sm sm:text-base md:text-lg lg:text-xl`}
              >
                A collection of innovative web applications and digital solutions
                showcasing modern development practices and creative
                problem-solving approaches.
              </p>
            </div>
          </div>
          <div
            className="p-6 md:flex-1"
            data-aos="fade-down"
            data-aos-delay="800"
          >
            <div className="flex flex-col space-y-4 lg:space-y-6 max-h-[60vh] overflow-y-auto pr-4">
              <Link href="/projects/urban-yuan">
                <h1
                  className={`${montserrat.className} font-semibold text-2xl md:text-4xl lg:text-5xl uppercase transition-all duration-300 hover:text-yellow-600 cursor-pointer`}
                >
                  Urban Yuan
                </h1>
              </Link>
              <Link href="/projects/job-matcher">
                <h1
                  className={`${montserrat.className} font-semibold text-2xl md:text-4xl lg:text-5xl uppercase transition-all duration-300 hover:text-yellow-600 cursor-pointer`}
                >
                  Job Matcher
                </h1>
              </Link>
              <Link href="/projects/life-admin-assistant">
                <h1
                  className={`${montserrat.className} font-semibold text-2xl md:text-4xl lg:text-5xl uppercase transition-all duration-300 hover:text-yellow-600 cursor-pointer`}
                >
                  Life Admin
                </h1>
              </Link>
              <Link href="/projects/circle-app">
                <h1
                  className={`${montserrat.className} font-semibold text-2xl md:text-4xl lg:text-5xl uppercase transition-all duration-300 hover:text-yellow-600 cursor-pointer`}
                >
                  Circle App
                </h1>
              </Link>
              <Link href="/projects/sipresmagmth34">
                <h1
                  className={`${montserrat.className} font-semibold text-2xl md:text-4xl lg:text-5xl uppercase transition-all duration-300 hover:text-yellow-600 cursor-pointer`}
                >
                  Sipresmagmth34
                </h1>
              </Link>
              <Link href="/contact">
                <h1
                  className={`${montserrat.className} font-semibold text-2xl md:text-4xl lg:text-5xl uppercase transition-all duration-300 hover:text-yellow-600 cursor-pointer`}
                >
                  Dinow
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
