"use client";

import { useEffect, useState } from "react";
import { Montserrat, Grandstander } from "next/font/google";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/global/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });
const grandstander = Grandstander({ subsets: ["latin"] });

export default function Services() {
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
        <div className="flex flex-col space-y-8 md:flex-row justify-center md:items-center h-screen">
          <div className="p-6 md:flex-1">
            <div
              className="flex flex-col space-y-4 lg:pr-52"
              data-aos="fade-down"
              data-aos-delay="800"
            >
              <h1 className={`font-semibold uppercase  ${montserrat.className}`}>
                Services
              </h1>
              <p className={montserrat.className}>
                Professional web development and design services to bring your
                digital vision to life with modern technologies and creative
                solutions.
              </p>
            </div>
          </div>
          <div
            className="p-6 md:flex-1"
            data-aos="fade-down"
            data-aos-delay="800"
          >
            <div className="flex flex-col space-y-8 max-h-[60vh] overflow-y-auto pr-4">
              <div className="space-y-3">
                <h1
                  className={`${montserrat.className} font-semibold text-3xl md:text-5xl uppercase`}
                >
                  Web Development
                </h1>
                <p className={`${montserrat.className} text-lg text-zinc-700`}>
                  Contributed to web development projects for government
                  financial auditing systems.
                </p>
              </div>

              <div className="space-y-3">
                <h1
                  className={`${montserrat.className} font-semibold text-3xl md:text-5xl uppercase`}
                >
                  Web Design
                </h1>
                <p className={`${montserrat.className} text-lg text-zinc-700`}>
                  Creating Seamless User Experiences through Innovative Web
                  Design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
