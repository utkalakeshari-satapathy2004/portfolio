"use client";

import { motion } from "framer-motion";

const HeroPage = () => {
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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 
      bg-gradient-to-br from-white via-blue-50 to-purple-100 
      dark:bg-[#020717]"
    >
      {/* ===== LIGHT MODE BACKGROUND (NEW) ===== */}
      <div className="absolute inset-0 dark:hidden">
        {/* BASE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-100" />

        {/* SOFT CENTER LIGHT */}
        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_70%)]" 
        />

        {/* GLOW BLOBS */}
        <div className="absolute w-[35rem] h-[35rem] bg-blue-400/20 blur-[120px] rounded-full -top-20 -left-20" />
        <div className="absolute w-[30rem] h-[30rem] bg-purple-400/20 blur-[120px] rounded-full -bottom-20 -right-20" />
      </div>

      {/* ===== YOUR DARK THEME (UNCHANGED) ===== */}
      <div className="absolute inset-0 overflow-hidden hidden dark:block">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#020717]" />

        {/* SOFT CENTER LIGHT */}
        <div className="absolute inset-0 
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]" 
        />

        {/* SMALL STARS */}
        <div className="absolute inset-0">
          {[...Array(70)].map((_, i) => (
            <span
              key={"s-" + i}
              className="absolute w-[1px] h-[1px] rounded-full bg-white/50 animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* MEDIUM STARS */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <span
              key={"m-" + i}
              className="absolute w-[2px] h-[2px] rounded-full bg-white/80 animate-twinkle-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* BIG STARS */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <span
              key={"b-" + i}
              className="absolute w-[3px] h-[3px] rounded-full bg-white animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* SHOOTING STARS */}
        <div className="absolute inset-0 overflow-hidden">
          <span className="shooting-star" />
          <span className="shooting-star delay-2000" />
        </div>

        {/* CORNER GLOW */}
        <div className="absolute w-[30rem] h-[30rem] bg-blue-900/10 blur-[120px] rounded-full top-[-10rem] left-[-10rem]" />
        <div className="absolute w-[30rem] h-[30rem] bg-purple-900/10 blur-[120px] rounded-full bottom-[-10rem] right-[-10rem]" />

      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-5xl text-center">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-6 px-4 py-2 rounded-full border border-gray-300 
          bg-white/60 backdrop-blur-md text-sm text-gray-700 
          dark:border-gray-700 dark:bg-white/10 dark:text-gray-300"
        >
          Available for freelance
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-6xl md:text-7xl font-bold 
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
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 font-mono"
        >
          <span className="text-green-500">{`const role = `}</span>
          <span className="text-yellow-500">
            <span className="text-green-500">{`<`} </span>
            Frontend Developer
            <span className="text-green-500"> {`/>`}</span>
          </span>
        </motion.p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => handleScroll("projects")}
            className="px-6 py-3 rounded-xl 
            bg-gradient-to-r from-blue-500 to-purple-500 
            text-white shadow-lg hover:scale-105 transition"
          >
            View Projects
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="px-6 py-3 rounded-xl border border-gray-300 
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
          className="mt-16 flex justify-center"
        >
          <div
            onClick={() => handleScroll("about")}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <div className="w-6 h-10 border-2 border-blue-400 dark:border-blue-600 rounded-full flex justify-center p-1 animate-float">
              <div className="w-1.5 h-3 bg-blue-500 dark:bg-blue-400 rounded-full animate-scroll"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroPage;