'use client';
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Users, Heart, Briefcase, Rocket } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 pt-20 md:pt-28 pb-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative text-center"
        >
          <motion.h1
            variants={item}
            className="leading-[0.95] font-extrabold text-nowrap panchang text-[40px] sm:text-[68px] md:text-[94px] tracking-tight text-white"
          >
            ABOUT ME
          </motion.h1>
          <motion.h2
            variants={item}
            className="leading-[0.95] sharpie font-extrabold text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px] tracking-tight text-[#BBF351] mt-2"
          >
            CREATIVE STORYTELLER
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-3xl mx-auto text-zinc-300 text-base md:text-lg"
          >
            I craft high-calibre content & digital experiences — blending design, film, and technology 
            to help brands connect deeply with their audiences and stand out in a crowded world.
          </motion.p>
        </motion.div>
      </div>

      {/* subtle glow background */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-pink-500/10 blur-[120px]" />
    </section>
  );
};

const features = [
  {
    icon: Users,
    title: "Collaboration",
    text: "Working closely with teams & clients to bring ideas to life.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    text: "Always experimenting with modern tools & creative workflows.",
  },
  {
    icon: Heart,
    title: "Passion",
    text: "Dedicated to crafting meaningful digital experiences.",
  },
  {
    icon: Briefcase,
    title: "Experience",
    text: "Years of expertise in design, editing, and branding.",
  },
];

const AboutFeatures = () => {
  return (
    <section className="mx-auto max-w-[1200px]  px-4 md:px-6 py-12 md:py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              variants={item}
              className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 text-center shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4 text-[#E3FF73]">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{f.text}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden rounded-4xl">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[#E3FF73]/10 blur-[120px]" />
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-14 md:py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 md:p-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 text-pink-300 mb-2">
            <Sparkles />
            <span className="uppercase tracking-[0.2em] text-xs font-bold">Let’s Connect</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-extrabold">Want to work together?</h3>
          <p className="mt-2 text-zinc-300 max-w-2xl mx-auto">
            Whether it’s video editing, branding, or digital storytelling — I’m always excited 
            to collaborate and build something impactful.
          </p>
          <div className="mt-6 flex md:flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="rounded-full bg-[#E3FF73] text-black font-semibold md:px-6 md:py-3 px-4 py-2 text-[14px]">
              Contact Me
            </a>
            <a href="#work" className="rounded-full border border-white/15 md:px-6 md:py-3 px-4 py-2 text-[14px] hover:bg-white/5">
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-pink-300 selection:text-black">
      <AboutHero />
      <AboutFeatures />
      <AboutCTA />
    </main>
  );
}
