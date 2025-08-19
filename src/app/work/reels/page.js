"use client";

import React, { useState } from "react";

// ReelsPage.jsx
// Usage: import ReelsPage from './ReelsPage' and use <ReelsPage /> inside your app
// Tailwind CSS required.

const reelsData = [
  {
    id: 1,
    title: "Gym Motivation Reel",
    category: "Gym",
    src: "/video/f1.mp4",
    poster: "https://images.unsplash.com/photo-1599058917212-d750089bc04b?w=800&q=80",
  },
  {
    id: 2,
    title: "Political Speech Highlight",
    category: "Politics",
    src: "/video/f2.mp4",
    poster: "https://images.unsplash.com/photo-1606214174585-2ef769b6ee53?w=800&q=80",
  },
  {
    id: 3,
    title: "Tech Product Reveal",
    category: "Tech",
    src: "/video/f3.mp4",
    poster: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&q=80",
  },
  {
    id: 4,
    title: "Gym Training Session",
    category: "Gym",
    src: "/video/f4.mp4",
    poster: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80",
  },
  {
    id: 5,
    title: "Tech Coding Tutorial",
    category: "Tech",
    src: "/video/f5.mp4",
    poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    id: 6,
    title: "Political Campaign Reel",
    category: "Politics",
    src: "/video/f6.mp4",
    poster: "https://images.unsplash.com/photo-1606741965222-fbf6b62dc90d?w=800&q=80",
  },
  // add more reels as needed
];

const categories = ["All", "Gym", "Politics", "Tech"];

export default function ReelsPage() {
  const [active, setActive] = useState(null); // id of active reel
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openReel = (reel) => {
    setActive(reel);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeReel = () => {
    setActive(null);
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const filteredReels = reelsData.filter(
    (reel) => selectedCategory === "All" || reel.category === selectedCategory
  );

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-[#0b0b0b] text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h1 className="text-4xl text-text-stone-300 sm:text-7xl panchang font-extrabold">Selected <sup className="text-[#E3FF73] sharpie text-7xl">Reels</sup> </h1>
          <p className="text-xl text-gray-600 sharpie dark:text-stone-300">A collection of short reels & micro-case studies</p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mt-36 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(4);
              }}
              className={`px-4 py-1.5 rounded-full border text-sm transition ${
                selectedCategory === cat
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white/60 dark:bg-white/5 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredReels.slice(0, visibleCount).map((reel) => (
            <article
              key={reel.id}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[#111111] cursor-pointer"
              onClick={() => openReel(reel)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" ? openReel(reel) : null)}
            >
              <div className="aspect-[9/16] w-full bg-black relative">
                <img
                  src={reel.poster}
                  alt={reel.title}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="p-3 bg-black/40 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-3 border-t border-gray-100 dark:border-gray-800">
                <h3 className="text-sm font-semibold truncate">{reel.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{reel.category} · Tap to play</p>
              </div>
            </article>
          ))}
        </section>

        {/* Load more */}
        {visibleCount < filteredReels.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMore}
              className="px-5 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-white/5 hover:shadow-md"
            >
              Load more
            </button>
          </div>
        )}
      </div>

      {/* Modal / Lightbox */}
      {isOpen && active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60"
          onClick={closeReel}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="w-full max-w-3xl rounded-xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={closeReel}
                className="absolute top-3 right-3 z-20 bg-black/40 p-2 rounded-full"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video
                src={active.src}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[80vh] bg-black"
              />
              <div className="p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white text-lg font-semibold">{active.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{active.category} / 15s</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
