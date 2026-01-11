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
          className="flex flex-1 flex-col px-6 py-30 space-y-14 overflow-y-auto scrollbar-hide"
          data-aos="fade-down"
          data-aos-delay="800"
        >
          <div className="flex flex-col space-y-8">
            <h1
              className={`font-bold uppercase text-8xl ${montserrat.className}`}
            >
              About
            </h1>
            <p className={`text-5xl font-semibold ${montserrat.className}`}>
              I'm Yuan. A fullstack developer, creator and problem solver.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <h2 className={`text-2xl font-semibold ${montserrat.className}`}>Professional Experience</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 text-zinc-900 rounded-full p-3 mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-yellow-500">Fullstack Web Developer Intern</h3>
                    <p className="text-zinc-900 font-medium">Dumbways</p>
                    <p className="text-zinc-900 text-sm mb-2">2025</p>
                    <p className="text-zinc-500">Developed fullstack web applications using modern technologies and best practices.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 text-zinc-900 rounded-full p-3 mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-yellow-500">Web Developer Intern</h3>
                    <p className="text-zinc-900 font-medium">Badan Pemeriksa Keuangan Perwakilan Provinsi DKI Jakarta</p>
                    <p className="text-zinc-900 text-sm mb-2">2023</p>
                    <p className="text-zinc-500">Developed an employee attendance application for interns using face recognition technology to automate and streamline the attendance tracking system.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <h2 className={`text-2xl font-semibold ${montserrat.className}`}>Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-lg font-semibold text-yellow-500 mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"].map((skill) => (
                    <span key={skill} className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-lg font-semibold text-yellow-500 mb-3">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "PHP", "Laravel"].map((skill) => (
                    <span key={skill} className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-lg font-semibold text-yellow-500 mb-3">Database & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Git", "GitHub"].map((skill) => (
                    <span key={skill} className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <h3 className="text-lg font-semibold text-yellow-500 mb-3">Design & Other</h3>
                <div className="flex flex-wrap gap-2">
                  {["Web Design"].map((skill) => (
                    <span key={skill} className="bg-zinc-800 text-zinc-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex items-start p-6"
          data-aos="fade-down"
          data-aos-delay="800"
        >
          <Image src="/yuan.jpg" alt="About" width={350} height={350} className="shadow-xl" />
        </div>
      </div>
    </div>
  );
}
