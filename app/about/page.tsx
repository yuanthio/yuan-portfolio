"use client";

import { useEffect, useState } from "react";
import { Montserrat, Grandstander } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/global/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });
const grandstander = Grandstander({ subsets: ["latin"] });

export default function About() {
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
        <div
          className="flex flex-1 px-4 py-30 overflow-y-auto scrollbar-hide"
          data-aos="fade-down"
          data-aos-delay="800"
        >
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex-1 flex flex-col space-y-14">
              {/* Header Section dengan Gambar di Samping Judul */}
              <div className="flex flex-col space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h1
                      className={`font-bold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-8xl ${montserrat.className}`}
                    >
                      About
                    </h1>
                  </div>
                  <div className="shrink-0 flex items-start">
                    <Image src="/yuan.jpg" alt="About" width={120} height={120} className="shadow-xl w-auto h-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[150px] lg:hidden" />
                  </div>
                </div>
                <p className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold ${montserrat.className}`}>
                  I'm Yuan. A fullstack developer and problem solver.
                </p>
              </div>
              
              <div className="flex flex-col space-y-6">
                <h2 className={`text-lg sm:text-xl md:text-2xl font-semibold ${montserrat.className}`}>Professional Experience</h2>
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mt-1">
                        <Image src="/experiences/dumbways.png" alt="Dumbways" width={48} height={48} className="object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-yellow-500">Fullstack Web Developer Intern</h3>
                        <p className="text-zinc-900 font-medium text-sm sm:text-base">Dumbways</p>
                        <p className="text-zinc-900 text-xs sm:text-sm mb-2">2025</p>
                        <p className="text-zinc-500 text-xs sm:text-sm">Developed fullstack web applications using modern technologies and best practices.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mt-1">
                        <Image src="/experiences/bpk.png" alt="BPK" width={48} height={48} className="object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-yellow-500">Web Developer Intern</h3>
                        <p className="text-zinc-900 font-medium text-sm sm:text-base">Badan Pemeriksa Keuangan Perwakilan Provinsi DKI Jakarta</p>
                        <p className="text-zinc-900 text-xs sm:text-sm mb-2">2023</p>
                        <p className="text-zinc-500 text-xs sm:text-sm">Developed an employee attendance application for interns using face recognition technology to automate and streamline the attendance tracking system.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-6 mb-6">
                <h2 className={`text-lg sm:text-xl md:text-2xl font-semibold ${montserrat.className}`}>Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-3 border border-white/20">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-yellow-500 mb-2 sm:mb-3">Frontend Development</h3>
                    <div className="flex flex-wrap gap-2">
                      {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"].map((skill) => (
                        <span key={skill} className="bg-zinc-800 text-zinc-200 px-2 py-1 rounded-full text-xs sm:text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-3 border border-white/20">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-yellow-500 mb-2 sm:mb-3">Backend Development</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "PHP", "Laravel"].map((skill) => (
                        <span key={skill} className="bg-zinc-800 text-zinc-200 px-2 py-1 rounded-full text-xs sm:text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-3 border border-white/20">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-yellow-500 mb-2 sm:mb-3">Database & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Git", "GitHub"].map((skill) => (
                        <span key={skill} className="bg-zinc-800 text-zinc-200 px-2 py-1 rounded-full text-xs sm:text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg py-3 border border-white/20">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-yellow-500 mb-2 sm:mb-3">Design & Other</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Web Design"].map((skill) => (
                        <span key={skill} className="bg-zinc-800 text-zinc-200 px-2 py-1 rounded-full text-xs sm:text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Gambar Desktop - Hanya muncul di desktop (992px+) */}
            <div className="hidden lg:flex shrink-0 items-start justify-end">
              <Image src="/yuan.jpg" alt="About" width={280} height={280} className="shadow-xl w-auto h-auto max-w-75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
