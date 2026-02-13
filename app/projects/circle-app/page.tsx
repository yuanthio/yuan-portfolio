"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { Grandstander } from "next/font/google";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/global/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });
const grandslang = Grandstander({ subsets: ["latin"] });

export default function CircleApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const allImages = [
    {
      src: "/projects/circle-app/circle-app-1.png",
      alt: "Circle App Dashboard",
    },
    {
      src: "/projects/circle-app/circle-app-2.png",
      alt: "Circle App Community Feed",
    },
    {
      src: "/projects/circle-app/circle-app-3.png",
      alt: "Circle App User Profile",
    },
    {
      src: "/projects/circle-app/circle-app-4.png",
      alt: "Circle App Mobile View",
    },
  ];

  const projects = [
    { name: "Urban Yuan", href: "/projects/urban-yuan" },
    { name: "Job Matcher", href: "/projects/job-matcher" },
    { name: "Life Admin", href: "/projects/life-admin-assistant" },
    { name: "Circle App", href: "/projects/circle-app" },
    { name: "Sipresmagmth34", href: "/projects/sipresmagmth34" },
    { name: "Dinow", href: "/contact" },
  ];

  const currentIndex = projects.findIndex(
    (p) => p.href === "/projects/circle-app",
  );
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const openLightbox = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setTimeout(() => setIsLightboxOpen(true), 50);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    const currentIndex = allImages.findIndex(
      (img) => img.src === selectedImage.src,
    );
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage(allImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    const handleScroll = () => {
      const scrollContainer = document.querySelector(
        ".lightbox-scroll-container",
      );
      if (scrollContainer) {
        setScrollPosition(scrollContainer.scrollTop);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    if (isLightboxOpen) {
      const scrollContainer = document.querySelector(
        ".lightbox-scroll-container",
      );
      if (scrollContainer) {
        scrollContainer.addEventListener("scroll", handleScroll);
      }
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      const scrollContainer = document.querySelector(
        ".lightbox-scroll-container",
      );
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isLightboxOpen, selectedImage]);

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
      document.body.style.overflow = isLightboxOpen ? "hidden" : "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading, isLightboxOpen]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-yellow-100 z-50 animate-slide-down"></div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 cursor-pointer transition-all duration-300 ${
            isLightboxOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeLightbox}
        >
          <div
            className={`relative max-w-6xl w-full h-full transform transition-all duration-300 ${
              isLightboxOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-scroll-container relative w-full h-full overflow-auto scrollbar-hide">
              <div className="flex items-start justify-center min-h-full py-8">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="max-w-full object-contain rounded-lg"
                  style={{ maxHeight: "none" }}
                />
              </div>

              {/* Navigation Buttons */}
              <button
                className={`absolute left-4 text-white bg-black bg-opacity-70 rounded-full p-3 hover:bg-opacity-85 transition-all duration-300 hover:scale-110 ${
                  isLightboxOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-2 opacity-0"
                }`}
                style={{ top: `calc(50% + ${scrollPosition}px)` }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                className={`absolute right-4 text-white bg-black bg-opacity-70 rounded-full p-3 hover:bg-opacity-85 transition-all duration-300 hover:scale-110 ${
                  isLightboxOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-2 opacity-0"
                }`}
                style={{ top: `calc(50% + ${scrollPosition}px)` }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Close Button */}
              <button
                className={`absolute text-white bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-85 transition-all duration-300 hover:scale-110 ${
                  isLightboxOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
                style={{ top: `${32 + scrollPosition}px`, right: "16px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div
                className={`absolute text-white bg-black bg-opacity-70 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  isLightboxOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                }`}
                style={{
                  bottom: `${32 - scrollPosition}px`,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                {allImages.findIndex((img) => img.src === selectedImage.src) +
                  1}{" "}
                / {allImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-screen flex bg-zinc-900 text-yellow-100 overflow-hidden">
        <Navbar darkMode={true} menuText="Projects" menuHref="/projects" />
        <div className="flex flex-1 justify-center overflow-hidden">
          <div className="w-full max-w-4xl flex-col px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 overflow-y-auto scrollbar-hide">
            <div className="flex flex-col space-y-6 sm:space-y-8">
              <div data-aos="fade-down" data-aos-delay="200">
                <Link
                  href="/projects"
                  className="text-zinc-400 hover:text-yellow-100 transition-colors duration-300 mb-4 inline-block"
                >
                  ← Back to Projects
                </Link>
                <h1
                  className={`font-bold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${montserrat.className}`}
                >
                  Circle App
                </h1>
                <p
                  className={`text-lg sm:text-xl md:text-2xl font-semibold ${montserrat.className} mt-2`}
                >
                  Social Media Platform for Creative Communities
                </p>
              </div>

              <div
                className="space-y-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div>
                  <h2
                    className={`text-2xl sm:text-3xl font-bold ${montserrat.className} mb-4`}
                  >
                    Project Overview
                  </h2>
                  <p
                    className={`text-sm sm:text-base md:text-lg ${montserrat.className} text-zinc-300`}
                  >
                    Circle App is a web-based real-time social platform inspired
                    by Twitter, featuring live posts, community circles, and
                    interactive user engagement. Built with a scalable
                    full-stack architecture, it employs WebSockets for instant
                    communication, Redis for performance optimization, and
                    Docker for easy setup. The application offers users a
                    seamless experience to share content, join circles, and
                    interact with others instantly.
                  </p>
                </div>

                <div>
                  <h2
                    className={`text-2xl sm:text-3xl font-bold ${montserrat.className} mb-4`}
                  >
                    Key Features
                  </h2>
                  <ul
                    className={`space-y-2 ${montserrat.className} text-sm sm:text-base md:text-lg text-zinc-300`}
                  >
                    <li>
                      • Real-time posts and live interaction using WebSockets
                    </li>
                    <li>• Community circles for focused discussions</li>
                    <li>• Redis caching for faster data performance</li>
                    <li>
                      • Scalable full-stack architecture with backend & frontend
                      separation
                    </li>
                    <li>• Secure user authentication and session management</li>
                    <li>• Dockerized development & deployment workflow</li>
                  </ul>
                </div>

                <div>
                  <h2
                    className={`text-2xl sm:text-3xl font-bold ${montserrat.className} mb-4`}
                  >
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Tailwind CSS",
                      "shadcn/ui",
                      "Express.js",
                      "PostgreSQL",
                      "Redis",
                      "WebSocket (socket.io)",
                      "Docker",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-zinc-800 text-yellow-100 px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2
                    className={`text-2xl sm:text-3xl font-bold ${montserrat.className} mb-4`}
                  >
                    Project Highlights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-zinc-800 text-yellow-100 p-4 sm:p-6 rounded-lg">
                      <h3
                        className={`text-lg sm:text-xl font-semibold ${montserrat.className} mb-2`}
                      >
                        Real-Time Communication
                      </h3>
                      <p className={`${montserrat.className} text-sm sm:text-base text-zinc-300`}>
                        Leveraging WebSockets, Circle App supports real-time
                        posts and instant interactions, creating a live social
                        experience.
                      </p>
                    </div>
                    <div className="bg-zinc-800 text-yellow-100 p-4 sm:p-6 rounded-lg">
                      <h3
                        className={`text-lg sm:text-xl font-semibold ${montserrat.className} mb-2`}
                      >
                        Scalable Architecture
                      </h3>
                      <p className={`${montserrat.className} text-sm sm:text-base text-zinc-300`}>
                        With Redis caching and Dockerized deployment, the
                        application is built for performance, reliability, and
                        easy development setup.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2
                    className={`text-2xl sm:text-3xl font-bold ${montserrat.className} mb-4`}
                  >
                    Project Gallery
                  </h2>

                  {/* Hero Gallery Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                    <div
                      className="relative h-64 sm:h-80 lg:h-96 bg-yellow-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() =>
                        openLightbox({
                          src: "/projects/circle-app/circle-app-1.png",
                          alt: "Circle App Dashboard",
                        })
                      }
                    >
                      <Image
                        src="/projects/circle-app/circle-app-1.png"
                        alt="Circle App Dashboard"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="relative h-64 sm:h-80 lg:h-96 bg-yellow-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() =>
                        openLightbox({
                          src: "/projects/circle-app/circle-app-2.png",
                          alt: "Circle App Community Feed",
                        })
                      }
                    >
                      <Image
                        src="/projects/circle-app/circle-app-2.png"
                        alt="Circle App Community Feed"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Feature Showcase Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      className="relative h-40 sm:h-48 md:h-56 lg:h-64 bg-yellow-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() =>
                        openLightbox({
                          src: "/projects/circle-app/circle-app-3.png",
                          alt: "Circle App User Profile",
                        })
                      }
                    >
                      <Image
                        src="/projects/circle-app/circle-app-3.png"
                        alt="Circle App User Profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="relative h-40 sm:h-48 md:h-56 lg:h-64 bg-yellow-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() =>
                        openLightbox({
                          src: "/projects/circle-app/circle-app-4.png",
                          alt: "Circle App Mobile View",
                        })
                      }
                    >
                      <Image
                        src="/projects/circle-app/circle-app-4.png"
                        alt="Circle App Mobile View"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
                    <Link
                      href="#"
                      target="_blank"
                      className="bg-yellow-100 text-zinc-900 px-8 py-3 rounded-lg font-semibold hover:bg-zinc-200 transition-colors duration-300 w-full sm:w-auto text-center"
                    >
                      View Live Project
                    </Link>
                    <Link
                      href="https://github.com/yuanthio/circle-app"
                      target="_blank"
                      className="border-2 border-yellow-100 text-yellow-100 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-100 hover:text-zinc-900 transition-all duration-300 w-full sm:w-auto text-center"
                    >
                      View Source Code
                    </Link>
                  </div>

                  {/* Project Navigation */}
                  <div className="flex justify-between items-center border-t border-zinc-700 pt-8">
                    {prevProject && (
                      <Link
                        href={prevProject.href}
                        className="flex items-center space-x-3 text-zinc-400 hover:text-yellow-100 transition-colors duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-full border-2 border-zinc-600 flex items-center justify-center group-hover:border-yellow-100 transition-colors duration-300">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </div>
                        <div className="text-left">
                          <p className="text-sm text-zinc-500">
                            Previous Project
                          </p>
                          <p className="font-semibold">{prevProject.name}</p>
                        </div>
                      </Link>
                    )}

                    <Link
                      href="/projects"
                      className="hidden sm:flex items-center space-x-2 text-zinc-400 hover:text-yellow-100 transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                      <span>All Projects</span>
                    </Link>

                    {nextProject && (
                      <Link
                        href={nextProject.href}
                        className="flex items-center space-x-3 text-zinc-400 hover:text-yellow-100 transition-colors duration-300 group"
                      >
                        <div className="text-right">
                          <p className="text-sm text-zinc-500">Next Project</p>
                          <p className="font-semibold">{nextProject.name}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-zinc-600 flex items-center justify-center group-hover:border-yellow-100 transition-colors duration-300">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
