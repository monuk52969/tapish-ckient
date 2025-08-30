"use client";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import CurvedNavbar from "@/app/components/ui/curved-navbar";
import { FaBarsStaggered } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function NavDemo() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const btnRef = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  // Magnetic effect
  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);

    // Strong pull (increase multiplier)
    setPos({ x: relX * 0.6, y: relY * 0.6 });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      {/* Navbar */}
      <div className="h-20 w-full flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-xl text-white font-black">LOGO</div>

        {/* Magnetic Menu button */}
        <motion.div
          ref={btnRef}
          onClick={() => {
            setIsActive(!isActive);
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ x: pos.x, y: pos.y, scale: hovered ? 1.25 : 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 15,
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
            handleMouseLeave();
          }}
          className="w-14 h-14 rounded-full flex items-center justify-center cursor-pointer bg-[#E3FF73] backdrop-blur-md border border-white/30 shadow-lg"
        >
          <FaBarsStaggered className="text-2xl text-[#000000]" />
        </motion.div>
      </div>

      {/* Curved Navbar */}
      <AnimatePresence mode="wait">
        {isActive && (
          <CurvedNavbar isActive={isActive} setIsActive={setIsActive} />
        )}
      </AnimatePresence>
    </div>
  );
}
