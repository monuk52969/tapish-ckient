"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import CustomButton from "@/app/components/custombtns/CustomButton ";

const images = [
  "https://picsum.photos/id/1015/300/400",
  "https://picsum.photos/id/1025/300/400",
  "https://picsum.photos/id/1035/300/400",
  "https://picsum.photos/id/1045/300/400",
];

export default function ImageTrailHero() {
  const containerRef = useRef(null);
  const bgRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    bgRefs.forEach((ref, i) => {
      gsap.to(ref.current, {
        x: i % 2 === 0 ? "-50%" : "50%",
        duration: 20 + i * 5,
        ease: "linear",
        repeat: -1,
      });
    });
  }, []);

  const svgBackground = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 436.3 436.3">
  <radialGradient id="grad" cx="218.151" cy="218.151" r="218.151" gradientUnits="userSpaceOnUse">
    <stop offset=".051" stop-color="#E3FF73" stop-opacity="0.5"/> {/* Start color with opacity */}
    <stop offset=".912" stop-color="#E3FF73" stop-opacity="0"/> {/* Transparent end */}
  </radialGradient>
  <path
    d="M436.3,218.15c0,120.48-97.67,218.15-218.15,218.15S0,338.63,0,218.15S97.67,0,218.15,0S436.3,97.67,436.3,218.15z"
    fill="url(#grad)"
    opacity="0.7"
  />
</svg>


  `);

  return (
    <section
  ref={containerRef}
  className="relative w-full h-screen overflow-hidden bg-[#000000]"
  style={{
    backgroundImage: `url("data:image/svg+xml,${svgBackground}")`,
    backgroundRepeat: "no-repeat",
    
    backgroundPosition: "left top",
  }}
>
  <style jsx>{`
    section {
      background-size: 100% 100%;
    }
    @media (min-width: 768px) {
      section {
        background-size: 40% 100%; 
      }
    }
  `}
  </style>
      {/* Background moving text */}
      {[0, 1, 2].map((i) => (
  <div
    key={i}
    className={`absolute 
      ${i === 0 ? "top-10" : i === 1 ? "top-1/2 -translate-y-1/2" : "bottom-10"} 
      left-0 
      w-full sm:w-[150%] md:w-[200%] 
      flex whitespace-nowrap overflow-hidden 
      opacity-10 font-extrabold 
      text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] 
      text-white uppercase tracking-widest
      ${i === 0 ? "rotate-[-4deg] md:rotate-0" : i === 1 ? "rotate-[6deg] md:rotate-0" : "rotate-[-6deg] md:rotate-0"}`}
  >
    <div ref={bgRefs[i]} className="flex">
      <span className="sharpie text-[10vw] mr-4 sm:mr-6 md:mr-10">
        {i === 0
          ? "Crafting Stories, Frame by Frame"
          : i === 1
          ? "Cut Above The Rest"
          : "Editing Beyond Limits"}
      </span>
      <span className="sharpie">
        {i === 0
          ? "Edit. Create. Inspire"
          : i === 1
          ? "Turning Raw Clips into Magic"
          : "Your Story, My Cut"}
      </span>
    </div>
  </div>
))}


      {/* Foreground content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-stone-300 text-[8.5vw] md:text-8xl panchang font-bold drop-shadow-lg relative inline-block">
          Design.{" "}
          <span className="text-[#E3FF73] relative inline-block">
            Animate.
            <svg
              viewBox="0 0 200 50"
              className="absolute -bottom-2 left-0 w-full h-6"
              fill="none"
            >
              <motion.path
                d="M0,25 Q100,0 200,25"
                stroke="#FACC15"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </span>{" "}
          <br /> Captivate. ✨
        </h1>

        <p className="text-stone-400 mt-4 max-w-xl text-base md:text-lg">
          Turning raw footage into cinematic magic! From YouTube reels to social media clips,
          I create videos that grab attention and leave a lasting impact.
        </p>

        <div className="mt-12 md:mt-6">
          <CustomButton />
        </div>
      </div>

      {/* Trail images */}
      {/* {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt="trail"
          className="trail-img absolute w-24 h-32 md:w-32 md:h-40 object-cover rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
      ))} */}
    </section>
  );
}
