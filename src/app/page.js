"use client";
import Video from "@/app/video/page";
import Work from "@/app/work/page";
import About from "@/app/about/page";
import Vfx from "@/app/vfx/page";
import Graphic from "@/app/graphic/page";
import Lenis from "@studio-freight/lenis";
import ImageTrailHero from "./components/ImageTrailHero";
import { useEffect, useRef } from "react";
import Intro from "./components/custombtns/footer/Intro";
import Footer from "./components/custombtns/footer/Footer1";
import Section1 from "@/app/components/sections/Section1";
import Section2 from "@/app/components/sections/Section2";
import PhoneVideoMock from "./reels/page";

import { useScroll } from "framer-motion";
import Reels from "./work/reels/page";

const Page = () => {
  const container = useRef(null);

  // Framer Motion scroll progress
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // adjust smoothness
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <main ref={container} className="relative h-[200vh]">
          <Section1 scrollYProgress={scrollYProgress} />
          <Section2 scrollYProgress={scrollYProgress} />
        </main>
      </section>

      {/* Other Sections */}
      <section id="Video">
        <Video />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work">
        <Work />
      </section>
      {/* <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="flex gap-6 flex-wrap justify-center">
        <PhoneVideoMock phoneImg="/phone.png" videoSrc="/sample1.mp4" />
        <PhoneVideoMock phoneImg="/phone.png" videoSrc="/sample2.mp4" />
        <PhoneVideoMock phoneImg="/phone.png" videoSrc="/sample3.mp4" />
      </div>
    </div> */}

    <Reels />

      <section id="vfx">
        <Vfx />
      </section>

      <section id="graphic">
        <Graphic />
      </section>

      <section id="footer">
        <Intro />
        <Footer />
      </section>
    </div>
  );
};

export default Page;
