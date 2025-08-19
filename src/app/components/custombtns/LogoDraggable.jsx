"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Panchang from "next/font/local";
gsap.registerPlugin(Draggable);

const LogoDraggable = () => {
  const itemsRef = useRef([]);
  const textRef = useRef(null);

  const colors = [
    ["rgb(155, 237, 255)", "rgb(3, 127, 154)"],
    ["rgb(10, 228, 72)", "rgb(171, 255, 132)"],
    ["rgb(255, 135, 9)", "rgb(247, 189, 248)"],
    ["rgb(241, 0, 203)", "rgb(254, 197, 251)"],
  ];

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      const itemColor = colors[i];

      Draggable.create(item, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: window,
        inertia: true,
        onPress: () => {
          gsap.to(item, { duration: 0.1, scale: 1.2, rotate: "random(-9,9)", zIndex: 100 });
          gsap.to(itemsRef.current, {
            duration: 0.1,
            opacity: (t, index) => (index === i ? 1 : 0.3),
          });
        },
        onRelease: () => {
          gsap.to(item, {
            duration: 0.4,
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            ease: "elastic.out(.45)",
          });
          gsap.to(itemsRef.current, { duration: 0.2, opacity: 1, zIndex: 0 });
        },
        onDrag: () => {
          if (textRef.current) {
            gsap.to(textRef.current, {
              color: itemColor[0],
            });
          }
        },
      });
    });
  }, []);

  const pngImages = [
    "/images/1.png.png",
    "/images/2.png.png",
    "/images/3.png.png",
    "/images/4.png.png",
  ];

  const localFont = Panchang({
    src: "../fonts/TTF/Panchang-Variable.ttf",
  })

  return (
    <main className="main flex flex-col items-center justify-center min-h-screen bg-[#0e100f] px-4">
      {/* Center text "Video Editor" */}
      <h1
        ref={textRef}
        className="text-4xl sm:text-5xl md:text-8xl Panchang-Regular uppercase  text-white mb-8 text-center"
      >
        Video Editor
      </h1>

      <div className="img-group flex flex-wrap justify-center items-center gap-6">
        {pngImages.map((src, i) => (
          <img
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            src={src}
            alt={`draggable ${i}`}
            className="w-[80px] sm:w-[100px] md:w-[120px] cursor-grab"
          />
        ))}
      </div>

      <style jsx>{`
        @font-face {
          font-display: block;
          font-family: Mori;
          font-style: normal;
          font-weight: 400;
          src: url("https://assets.codepen.io/16327/PPMori-Regular.woff")
            format("woff");
        }
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Mori", sans-serif;
          color: rgb(255, 252, 225);
          background: #0e100f;
          height: 100%;
          width: 100%;
        }
        main {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .img-group img {
          transition: transform 0.2s;
        }
        .img-group img:active {
          cursor: grabbing;
        }
      `}</style>
    </main>
  );
};

export default LogoDraggable;
