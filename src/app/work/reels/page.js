"use client";
import React from "react";

const videos = [
  { src: "/video/f1.mp4", label: "JEWELLERY BRAND" },
  { src: "/video/f2.mp4", label: "SOAP BRAND" },
  { src: "/video/f3.mp4", label: "FITNESS BRAND" },
  { src: "/video/f4.mp4", label: "CAR BRAND" },
  { src: "/video/f5.mp4", label: "CAR PERFUME" },
];

const PremiumUGC = () => {
  return (
    <div>
      <section className="relative w-full min-h-screen bg-black text-white px-4 sm:px-6 md:px-6 py-16 mt-20 flex flex-col">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-green-700/50 via-transparent to-transparent" />

        {/* Heading */}
        <div className="relative z-10 mb-24 w-full text-left">
          <div className="flex items-start gap-2">
            {/* Big OUR text */}
            <div className="absolute left-20 sm:left-40 md:left-80 -top-12 flex items-start gap-2">
              <div className="bg-[#E4F075] px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full">
                <span className="text-2xl sm:text-3xl md:text-3xl font-extrabold uppercase text-[#000000] sharpie">
                  OUR
                </span>
              </div>

              {/* Small badge with SVG */}
              <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 bg-[#E4F075] rounded-full text-xs sm:text-sm font-bold uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 418.6 418.6"
                  fill="black"
                  className="w-3 h-4 sm:w-4 sm:h-6 md:w-4 md:h-10"
                >
                  <path d="M418.5893,0v418.1772h-83.6981V142.8787L59.184,418.5859L0,359.4019L275.7093,83.6981H0.4121V0H418.5893z" />
                </svg>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold mt-4 panchang text-stone-300 ml-4 sm:ml-8 md:ml-12">
            PREMIUM{" "}
            <sup className="text-[#E3FF73] text-[10vw] sm:rotate-12 sm:text-[8vw] md:text-[7vw] sharpie">
              Reels
            </sup>
          </h1>

          <div className="absolute left-4 sm:left-0 md:left-20 mb-10">
            <div className="mt-4 inline-flex items-center gap-2 px-4 sm:px-10 md:px-16 py-2 sm:py-4 bg-[#E3FF73] rounded-full text-lg sm:text-xl md:text-xl font-bold uppercase justify-start panchang text-[#000000]">
              VIDEOS
              <span className="w-4 sm:w-5 h-4 sm:h-5 bg-[#000000] rounded-full inline-block" />
            </div>
          </div>
        </div>

        {/* Video Showcase */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {videos.map((vid, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Phone Frame */}
              <div className="relative w-[300px] sm:w-[200px] md:w-[220px] h-[580px] sm:h-[400px] md:h-[440px] rounded-3xl overflow-hidden shadow-2xl bg-black">
                <img
                  src="/images/dummy.png"
                  alt="Phone Frame Background"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <video
                  src={vid.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
                {/* Phone UI Elements */}
                <div className="absolute top-2 left-2 w-3 sm:w-4 h-3 sm:h-4 bg-blue-400 rounded-full z-20" />
                <div className="absolute top-2 left-6 sm:left-8 right-6 sm:right-8 h-1 bg-gray-300 rounded-full z-20" />
                <div className="absolute bottom-2 left-3 sm:left-4 right-3 sm:right-4 h-1.5 bg-gray-200 rounded-full z-20" />
                <div className="absolute bottom-2 right-2 flex gap-2 z-20">
                  <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full border border-white" />
                  <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full border border-white" />
                </div>
              </div>

              {/* Label */}
              <div className="mt-2 sm:mt-4 px-3 sm:px-4 py-1 bg-[#E3FF73] rounded-full text-xs sm:text-sm md:text-xs font-semibold flex text-[#000000] panchang items-center gap-1">
                {vid.label} <span>↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PremiumUGC;
