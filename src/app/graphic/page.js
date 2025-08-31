"use client";
import React from "react";
import Image from "next/image";

const GraphicDesign = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <div className="text-center space-y-4 mb-16">
        <h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold panchang 
             text-stone-300 drop-shadow-lg leading-tight sm:leading-snug md:leading-[1.1]"
        >
          Next-Level{" "}
          <span className="text-[#E3FF73] sharpie">Graphic Design</span>
        </h2>

        <p className="text-stone-400 panchang text-lg md:text-xl max-w-2xl mb-8 mx-auto">
          We break boundaries in creativity with stunning visuals, sleek UI/UX,
          and immersive digital experiences.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-7xl">
        {/* Text Content */}
        <div className="space-y-6 text-gray-200">
          <h3 className="text-2xl panchang md:text-4xl mb-8 font-bold text-[#E3FF73]">
            Why Choose Us?
          </h3>
          <ul className="space-y-4 panchang text-lg">
            <li className="text-nowrap">
              🚀 Unique and Modern UI/UX that breaks the mold
            </li>
            <li>🎨 High-end Visual Design & Branding</li>
            <li>🖼️ VFX & Motion Graphics integration</li>
            <li>🪄 Eye-catching Posters & Illustrations</li>
            <li>📱 Fully responsive and optimized designs</li>
          </ul>
          <a
            href="https://wa.me/919876543210"
            className="inline-block px-8 py-4 bg-[#E3FF73] mt-8 text-black font-bold text-lg rounded-full shadow-lg hover:bg-lime-500 transition-all"
          >
            Start Your Project
          </a>
        </div>

        {/* Showcase Cards Instead of 3D */}
        <div className="grid grid-cols-2 gap-6">
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/graph1.png"
              alt="Creative Poster"
              width={400}
              height={400}
              className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/graph2.png"
              alt="UI/UX Mockup"
              width={400}
              height={400}
              className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="relative group overflow-hidden rounded-2xl shadow-lg col-span-2">
            <Image
              src="/images/graph3.png"
              alt="Branding Showcase"
              width={800}
              height={400}
              className="object-cover w-full h-[250px] md:h-[300px] transform group-hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;
