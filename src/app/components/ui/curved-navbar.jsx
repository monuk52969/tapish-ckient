
'use client'
import {React, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import { FaYoutube, FaInstagram, FaBehance, FaPhone } from "react-icons/fa";

const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
   
    {
      title: "Graphics Design",
      href: "/graphic design",
    },
    {
      title: "VFX",
      href: "/vfx",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
]
const menuSlide = {
initial: {x: "calc(100% + 100px)"},
enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}
const slide = {
    initial: {x: 80},
    enter: i => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: i => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}
const scale = {
  open: {scale: 1, transition: {duration: 0.3}},
  closed: {scale: 0, transition: {duration: 0.4}}
}
function Curve() {

    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
    const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`
    
    const curve = {
      initial: {
          d: initialPath
      },
      enter: {
          d: targetPath,
          transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
      },
      exit: {
          d: initialPath,
          transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
      }
    }
  
    return (
      <svg className={`absolute top-0 -left-[99px] w-[100px] stroke-none h-full fill-[#e3ff73]`}>
          <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
      </svg>
    )
  }
  function Footer() {
    return (
      <div className="flex w-full justify-between items-center text-sm   px-4 py-4 mt-auto">
      <a
        href="https://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-red-600 transition-all text-2xl sm:text-4xl"
      >
        <FaYoutube />
      </a>
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-pink-500 transition-all text-2xl sm:text-4xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://behance.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-blue-500 transition-all text-2xl sm:text-4xl"
      >
        <FaBehance />
      </a>
      <a
        href="tel:+919876543210"
        className="text-black hover:text-green-500 transition-all text-2xl sm:text-4xl"
      >
        <FaPhone />
      </a>
    </div>
    )
  }
  function NavLink({data, isActive, setSelectedIndicator}) {
    
    const { title, href, index} = data;
  
    return (
      <motion.div className={`relative flex items-center`} onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={`w-2.5 h-2.5 bg-black rounded-full absolute -left-8`}></motion.div>
        <Link href={href} className='uppercase font-black'>{title}</Link>
      </motion.div>
    )
  }
export default function CurvedNavbar({isActive, setIsActive}) {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  
    return (
      <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={`h-screen w-screen max-w-screen-sm fixed right-0 top-0 text-black bg-[#e3ff73] z-10`}>
        <div className='w-full flex justify-end text-3xl p-4' onClick={()=>setIsActive(false)}><IoClose className='text-3xl'/></div>
         <div className={`styles.body h-full p-24 flex flex-col justify-between`}>
              <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={`flex flex-col text-4xl gap-3`}>
                      <div className={`text-gray-900 border-b border-gray-800 uppercase text-sm mb-8 md:mb-20`}>
                          <p>Brand Logo</p>
                      </div>
                      {
                        navItems.map( (data, index) => {
                          return <NavLink key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></NavLink>
                        })
                      }
              </div>
              <Footer />
          </div>
          <Curve />
      </motion.div>
    )
  }
  