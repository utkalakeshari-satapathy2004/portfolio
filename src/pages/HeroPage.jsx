"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const HeroPage = () => {
  const smallStars = useMemo(
    () =>
      Array.from({ length: 70 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
      })),
    []
  );

  const mediumStars = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
      })),
    []
  );

  const bigStars = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      })),
    []
  );
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden 
      px-4 sm:px-6 md:px-10
      bg-gradient-to-br from-white via-blue-50 to-purple-100 
      dark:bg-[#020717]"
    >
      {/* ===== LIGHT MODE BACKGROUND (UNCHANGED + RESPONSIVE SIZE) ===== */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-100" />

        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_70%)]" 
        />

        {/* responsive blobs */}
        <div className="absolute w-[18rem] h-[18rem] sm:w-[35rem] sm:h-[35rem] bg-blue-400/20 blur-[120px] rounded-full -top-20 -left-20" />
        <div className="absolute w-[16rem] h-[16rem] sm:w-[30rem] sm:h-[30rem] bg-purple-400/20 blur-[120px] rounded-full -bottom-20 -right-20" />
      </div>

      {/* ===== DARK THEME (NOTHING REMOVED) ===== */}
      <div className="absolute inset-0 overflow-hidden hidden dark:block">

        <div className="absolute inset-0 bg-[#020717]" />

        <div className="absolute inset-0 
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" 
        />

        {/* SMALL STARS */}
        <div className="absolute inset-0">
          {smallStars.map((star, i) => (
            <span
              key={"s-" + i}
              className="absolute w-[1px] h-[1px] rounded-full bg-white/50 animate-twinkle"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>

        {/* MEDIUM STARS */}
        <div className="absolute inset-0">
          {mediumStars.map((star, i) => (
            <span
              key={"m-" + i}
              className="absolute w-[2px] h-[2px] rounded-full bg-white/80 animate-twinkle-slow"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                animationDelay: `${star.delay}s`,
              }}
            />
          ))}
        </div>

        {/* BIG STARS */}
        <div className="absolute inset-0">
          {bigStars.map((star, i) => (
            <span
              key={"b-" + i}
              className="absolute w-[3px] h-[3px] rounded-full bg-white animate-pulse"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
              }}
            />
          ))}
        </div>

        {/* SHOOTING STARS */}
        <div className="absolute inset-0 overflow-hidden">
          <span className="shooting-star" />
          <span className="shooting-star delay-2000" />
        </div>

        {/* CORNER GLOW (responsive tweak only) */}
        <div className="absolute w-[18rem] h-[18rem] sm:w-[30rem] sm:h-[30rem] bg-blue-900/10 blur-[120px] rounded-full top-[-10rem] left-[-10rem]" />
        <div className="absolute w-[18rem] h-[18rem] sm:w-[30rem] sm:h-[30rem] bg-purple-900/10 blur-[120px] rounded-full bottom-[-10rem] right-[-10rem]" />

      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full max-w-5xl text-center">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gray-300 
          bg-white/60 backdrop-blur-md text-xs sm:text-sm text-gray-700 
          dark:border-gray-700 dark:bg-white/10 dark:text-gray-300"
        >
          Available for freelance
        </motion.div>

        {/* TITLE (responsive only) */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold leading-tight
          text-[clamp(1rem,6vw,5rem)]
          bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
          bg-clip-text text-transparent
          dark:text-white dark:bg-none"
        >
          UtkalaKeshari Satapathy
        </motion.h1>

        {/* ROLE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 sm:mt-6 
          text-[clamp(0.9rem,2.5vw,1.2rem)]
          text-gray-600 dark:text-gray-400 font-mono"
        >
          <span className="text-green-500">{`const role = `}</span>
          <span className="text-yellow-500">
            <span className="text-green-500">{`<`} </span>
            Frontend Developer
            <span className="text-green-500"> {`/>`}</span>
          </span>
        </motion.p>

        {/* BUTTONS */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={() => handleScroll("projects")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl 
            bg-gradient-to-r from-blue-500 to-purple-500 
            text-white shadow-lg hover:scale-105 transition"
          >
            View Projects
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 
            text-gray-800 hover:bg-gray-100 transition
            dark:border-gray-700 dark:text-gray-200 dark:hover:bg-white/10"
          >
            Contact Me
          </button>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 sm:mt-16 flex justify-center"
        >
          <div
            onClick={() => handleScroll("about")}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-blue-400 dark:border-blue-600 rounded-full flex justify-center p-1 animate-float">
              <div className="w-1.5 h-2.5 sm:h-3 bg-blue-500 dark:bg-blue-400 rounded-full animate-scroll"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroPage;