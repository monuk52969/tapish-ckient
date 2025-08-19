'use client'
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CurvedNavbar from '@/app/components/ui/curved-navbar';
import { FaBarsStaggered } from "react-icons/fa6";

export default function NavDemo() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <div className="sticky top-0 left-0 z-50">
      {/* Navbar */}
      <div className='h-auto w-full flex justify-around  '>
        <div className={`w-[45%]`}>
          <div className={`text-xl text-white w-fit font-black h-full flex items-center justify-center pl-4`}>
            LOGO
          </div>
        </div>
        <div className={`flex justify-end w-[45%]`}>
          <div
            onClick={() => { setIsActive(!isActive) }}
            className={`w-20 h-20 rounded-full flex flex-col items-center justify-center`}
          >
            <FaBarsStaggered className='text-2xl text-white' />
          </div>
        </div>
      </div>

      {/* Curved Navbar */}
      <AnimatePresence mode="wait">
        {isActive && <CurvedNavbar isActive={isActive} setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
}
