"use client";

import { motion } from "framer-motion";

const HeroPage = () => {


    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const offset = 100;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]"></div>

            {/* GLOW EFFECT */}
            <div className="absolute w-[37rem] h-[37rem] bg-blue-500/20 blur-[120px] rounded-full -top-25 -left-25"></div>
            <div className="absolute w-[31rem] h-[31rem] bg-purple-500/20 blur-[120px] rounded-full -bottom-25 -right-25"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-5xl text-center px-6">

                {/* BADGE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-6 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-[#1556b8] font-bold backdrop-blur-md text-sm text-gray-700 dark:text-gray-300"
                >
                    Available for freelance
                </motion.div>

                {/* HEADING */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent"
                >
                    UtkalaKeshari Satapathy
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-mono"
                >
                    <span className="text-green-500">{`const role = `}</span>
                    <span className="text-yellow-500">
                        <span className="text-green-500">{`<`} </span>
                        Frontend Developer
                        <span className="text-green-500"> {`/>`}</span>
                    </span>
                </motion.p>

                {/* CTA BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-8 flex justify-center gap-4 flex-wrap"
                >
                    <button
                        onClick={() => handleScroll("projects")}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg hover:scale-105 transition"
                    >
                        View Projects
                    </button>

                    <button
                        onClick={() => handleScroll("contact")}
                        className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    >
                        Contact Me
                    </button>
                </motion.div>

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
                            <div className="w-1.5 h-3 bg-blue-400 dark:bg-blue-600 rounded-full animate-scroll"></div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroPage;