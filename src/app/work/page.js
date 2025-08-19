'use client';
import React, { useMemo, useState } from "react";
import Link from "next/link"; // ⬅️ added for navigation
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  Sparkles,
  Play,
  MonitorSmartphone,
  Image as ImageIcon,
  Wand2,
  BadgeCheck,
} from "lucide-react";

/*
  HOW TO USE
  1) Ensure TailwindCSS & Framer Motion are installed.
     - npm i framer-motion lucide-react
  2) Drop <WorkPage /> inside your route or App.
  3) Replace PROJECTS[] with your real items (thumbnails, titles, categories, links).
  4) Tailwind tips: container sizing uses max-w-[1200px] style; tweak as you like.
*/

const CATEGORIES = [
  { key: "all", label: "All Work" },
  { key: "reels", label: "Reels Videos" },
  { key: "short", label: "Short Video" },
  { key: "long", label: "Long Video" },
  { key: "graphic", label: "Graphic Design" },
  { key: "logo", label: "Logo" },
  { key: "vfx", label: "VFX" },
];

const ICONS = {
  reels: Play,
  short: MonitorSmartphone,
  long: Play,
  graphic: ImageIcon,
  logo: BadgeCheck,
  vfx: Wand2,
};

const PROJECTS = [
  {
    id: "p1",
    title: "Cafe Launch Reel",
    category: "reels",
    thumb:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p2",
    title: "Tech Event Aftermovie",
    category: "short",
    thumb:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p3",
    title: "Brand Story (5 min)",
    category: "long",
    thumb:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p4",
    title: "Festival Poster Kit",
    category: "graphic",
    thumb:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p5",
    title: "Minimal Logo Set",
    category: "logo",
    thumb:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "p6",
    title: "Sci‑Fi Portal FX",
    category: "vfx",
    thumb:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

const cardMotion = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 24, scale: 0.98 },
  transition: { duration: 0.35 },
};

const Smiley = () => (
  <motion.div
    initial={{ rotate: -10, scale: 0 }}
    animate={{ rotate: 0, scale: 1 }}
    transition={{ type: "spring", stiffness: 160, damping: 12, delay: 0.3 }}
    className="absolute right-4 -top-8 md:right-10 md:-top-10"
  >
    <div className="rounded-full bg-[#E3FF73] text-black w-16 h-16 md:w-20 md:h-20 grid place-items-center shadow-[0_0_0_6px_rgba(163,230,53,0.25)]">
      <span className="text-3xl">☺</span>
    </div>
  </motion.div>
);

const Pill = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={
      "relative shrink-0 rounded-full border border-white/15 px-5 py-3 text-sm md:text-base font-semibold tracking-wide " +
      (active
        ? "bg-[#E3FF73] text-black shadow-[0_10px_30px_rgba(190,242,100,0.45)]"
        : "bg-zinc-900/50 text-white hover:bg-zinc-900")
    }
  >
    {children}
  </button>
);

const WorkHero = () => {
  return (
    <section  className="relative overflow-hidden   rounded-4xl">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 pt-20 md:pt-28 pb-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative "
        >
          <Smiley />
          <motion.h1
            variants={item}
            className="leading-[0.95] font-extrabold panchang text-[56px] sm:text-[72px] md:text-[120px] tracking-tight text-stone-300"
          >
            DIGITAL
          </motion.h1>
          <motion.h2
  variants={item}
  initial={{ opacity: 0, rotate: -5 }} // thoda tilt with entry
   // constant tilt
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="leading-[0.95] sharpie font-extrabold 
             text-[40px] sm:text-[72px] md:text-[120px] 
             tracking-tight text-[#E3FF73] inline-block"
>
  EXPERIENCES
</motion.h2>

          <motion.h2
            variants={item}
            className="leading-[0.95] panchang text-nowrap font-extrabold 
                       text-[32px] sm:text-[48px] md:text-[72px] lg:text-[96px] xl:text-[120px] 
                       tracking-tight text-stone-300"
          >
            BUILT TO LAST
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 md:mt-8 max-w-3xl text-zinc-200 text-base md:text-lg"
          >
            High‑calibre content & digital marketing that helps ambitious brands
            grow, engage their audiences, and stand out from the crowd.
          </motion.p>
        </motion.div>
      </div>

      {/* subtle glow background */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-pink-500/10 blur-[120px]" />
    </section>
  );
};

const CategoryBar = ({ active, setActive }) => {
  return (
    <div className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-y border-white/10">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-4">
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          {CATEGORIES.map((c) => (
            <Pill
              key={c.key}
              active={active === c.key}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </Pill>
          ))}

          {/* Search bar (future) */}
          <div className="ml-auto hidden md:flex items-center gap-2 text-zinc-400 border border-white/10 rounded-full pl-3 pr-3 py-2" />
        </div>
      </div>
    </div>
  );
};

// 🔗 MAKE THE CARD CLICKABLE TO OPEN CATEGORY PAGES LIKE /work/reels, /work/short, etc.
const WorkCard = ({ project }) => {
  const Icon = ICONS[project.category] || Sparkles;
  return (
    <Link
      href={`/work/${project.category}`}
      className="block focus:outline-none"
    >
      <motion.article
        {...cardMotion}
        className="group relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-white/10 shadow-lg hover:shadow-2xl transition-shadow"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.thumb}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
        </div>

        <div className="p-4 md:p-5">
          <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
            <Icon className="w-4 h-4" />
            <span className="uppercase tracking-wider">{project.category}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white line-clamp-1">
            {project.title}
          </h3>
          <div className="mt-3 flex items-center gap-2 text-zinc-300">
            <Star className="w-4 h-4" />
            <span className="text-sm">Featured</span>
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-4 h-1 rounded-full bg-gradient-to-r from-pink-400 to-[#E3FF73]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/30 grid place-items-center"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-white text-black font-semibold px-5 py-2">
            View Work
          </span>
        </motion.div>
      </motion.article>
    </Link>
  );
};

export default function WorkPage() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-pink-300 selection:text-black">
      <WorkHero />
      <CategoryBar active={active} setActive={setActive} />

      <section className="mx-auto max-w-[1200px] px-4 md:px-6 py-10 md:py-14">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-zinc-400 py-20"
            >
              No work found in this category yet.
            </motion.div>
          ) : (
            <motion.div
              key={active}
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            >
              {filtered.map((p) => (
                <WorkCard key={p.id} project={p} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer CTA */}
      <section className="relative overflow-hidden">
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
              <span className="uppercase tracking-[0.2em] text-xs font-bold">
                Let’s Build
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-zinc-300 max-w-2xl mx-auto">
              From reels to long‑form edits, graphics, logos and cinematic VFX —
              I craft experiences that last.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
  href="https://wa.me/9557940863?text=Hi%20Monu,%20I%20want%20to%20start%20a%20project"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-[#E3FF73] text-black font-semibold px-6 py-3"
>
  Start a Project
</a>

              <a
                href="#"
                className="rounded-full border border-white/15 px-6 py-3 hover:bg-white/5"
              >
                See Rate Card
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/*
  Small global CSS helpers you can add to your stylesheet:
  .no-scrollbar::-webkit-scrollbar{display:none}
  .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
*/
