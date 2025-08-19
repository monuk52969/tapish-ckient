"use client";
import Video from "@/app/video/page";
import Work from "@/app/work/page";
import About from "@/app/about/page";

import Vfx from "@/app/vfx/page";
import NavDemo from "@/app/components/ui/NavDemo"; // Navigation Component
import Graphic from "@/app/graphic/page";
import StyledWrapper from "@/app/components/custombtns/StyledWrapper "; // Custom Button Component
import CustomButton from "@/app/components/custombtns/CustomButton ";
 // Added draggable logo
import { motion } from "framer-motion";
import ImageTrailHero from "./components/ImageTrailHero";

const Page = () => {
  // Floating items array
 

  return (
    <div>
     
      {/* Hero Section */}
     <section id="home" className="relative h-screen w-full overflow-hidden">
       <NavDemo />
  {/* Logo Draggable Component */}
  <div className="absolute inset-0 flex items-center justify-center z-0">
    <ImageTrailHero />
  </div>
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

     

      <section id="vfx">
        <Vfx />
      </section>

      <section id="graphic">
        <Graphic />
      </section>
    </div>
  );
};

export default Page;
