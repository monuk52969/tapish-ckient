"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Comparison() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".comparisonSection");

    sections.forEach((section) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => "+=" + section.offsetWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });

      tl.fromTo(
        section.querySelector(".afterImage"),
        { xPercent: 100, x: 0 },
        { xPercent: 0 }
      ).fromTo(
        section.querySelector(".afterImage img"),
        { xPercent: -100, x: 0 },
        { xPercent: 0 },
        0
      );
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero / Intro Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-stone-300 panchang">
            Elevating Ideas with{" "}
            <sup className="text-[#E3FF73] sharpie text-4xl sm:text-6xl md:text-7xl">
              VFX
            </sup>
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-xl panchang text-stone-400 max-w-3xl mx-auto leading-relaxed px-2">
            Hum sirf VFX nahi banate, hum aapke brand ki kahani ko zinda karte
            hain. Har frame ko hum precision, creativity aur technology ke saath
            design karte hain, taki aapki audience sirf dekhe nahi, balki{" "}
            <span className="text-[#E3FF73] font-semibold">feel</span> bhi kare.
          </p>

          {/* 3 Key Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 px-4">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-gray-700 hover:scale-105 hover:bg-white/20 transition duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 panchang text-[#E3FF73]">
                Why Choose Us?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base panchang">
                Industry-standard tools aur cinematic techniques ka use karke,
                hum aapke project ko ek{" "}
                <span className="text-white">premium finish</span> dete hain.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-gray-700 hover:scale-105 hover:bg-white/20 transition duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 panchang text-[#E3FF73]">
                What We Do
              </h3>
              <p className="text-gray-300 text-sm sm:text-base panchang">
                3D compositing, motion graphics, cinematic edits aur immersive
                visuals — sab ek hi jagah under one roof.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur border border-gray-700 hover:scale-105 hover:bg-white/20 transition duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 panchang text-[#E3FF73]">
                How We're Different
              </h3>
              <p className="text-gray-300 text-sm sm:text-base panchang">
                Har client ko personalized solution milta hai. Hum sirf visuals
                nahi dete, hum aapki{" "}
                <span className="text-white">brand identity</span> ko elevate
                karte hain.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 md:mt-12">
            <a
              href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20discuss%20about%20VFX%20Project"
              target="_blank"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-[#E3FF73] text-black hover:bg-[#E3FF73] transition shadow-lg hover:shadow-stone-300/40"
            >
              Let’s Create Magic ✨
            </a>
          </div>
        </div>
      </section>

      {/* Before/After Scroll Section */}
      <section className="comparisonSection relative h-screen">
        {/* Before Image */}
        <div className="comparisonImage beforeImage w-full h-full">
          <img
            src="https://assets.codepen.io/16327/before.jpg"
            alt="before"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>

        {/* After Image */}
        <div className="comparisonImage afterImage absolute top-0 left-0 w-full h-full overflow-hidden translate-x-full">
          <img
            src="https://assets.codepen.io/16327/after.jpg"
            alt="after"
            className="absolute top-0 left-0 w-full h-full object-cover -translate-x-full"
          />
        </div>
      </section>
    </div>
  );
}
