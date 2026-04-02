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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black px-4 sm:px-6"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]"></div>

      {/* GLOW EFFECT (RESPONSIVE) */}
      <div className="absolute w-[18rem] h-[18rem] sm:w-[28rem] sm:h-[28rem] md:w-[37rem] md:h-[37rem] bg-blue-500/20 blur-[100px] sm:blur-[120px] rounded-full top-[-5rem] left-[-5rem]"></div>

      <div className="absolute w-[18rem] h-[18rem] sm:w-[26rem] sm:h-[26rem] md:w-[31rem] md:h-[31rem] bg-purple-500/20 blur-[100px] sm:blur-[120px] rounded-full bottom-[-5rem] right-[-5rem]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl text-center">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-[#1556b8] font-semibold backdrop-blur-md text-xs sm:text-sm text-gray-700 dark:text-gray-300"
        >
          Available for freelance
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent"
        >
          UtkalaKeshari Satapathy
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 font-mono px-2"
        >
          <span className="text-green-500">{`const role = `}</span>
          <span className="text-yellow-500">
            <span className="text-green-500">{`<`} </span>
            Frontend Developer
            <span className="text-green-500"> {`/>`}</span>
          </span>
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
        >
          <button
            onClick={() => handleScroll("projects")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg hover:scale-105 transition"
          >
            View Projects
          </button>

          <button
            onClick={() => handleScroll("contact")}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition"
          >
            Contact Me
          </button>
        </motion.div>

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
              <div className="w-1.5 h-2.5 sm:h-3 bg-blue-400 dark:bg-blue-600 rounded-full animate-scroll"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroPage;