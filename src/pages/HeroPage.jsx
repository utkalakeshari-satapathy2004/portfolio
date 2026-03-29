"use client";

import { motion } from "framer-motion";

const HeroPage = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">

            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]"></div>

            {/* GLOW EFFECT */}
            <div className="absolute w-[37rem] h-[37rem] bg-blue-500/20 blur-[120px] rounded-full -top-25 -left-25"></div>
            <div className="absolute w-[31rem] h-[31rem] bg-purple-500/20 blur-[120px] rounded-full -bottom-25 -right-25"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-5xl text-center px-6">

                {/* BADGE */}
                <div className="inline-block mb-6 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-[#1556b8] font-bold backdrop-blur-md text-sm text-gray-700 dark:text-gray-300">
                    Available for freelance
                </div>

                {/* HEADING */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent">
                    UtkalaKeshari Satapathy
                </h1>

                {/* DESCRIPTION */}
                <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-mono">
                    <span className="text-green-500">{`const role = `}</span>
                    <span className="text-yellow-500">
                        <span className="text-green-500">{`<`} </span>
                        Frontend Developer
                        <span className="text-green-500"> {`/>`}</span>
                    </span>
                </p>

                {/* CTA BUTTONS */}
                <div className="mt-8 flex justify-center gap-4 flex-wrap">
                    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg hover:scale-105 transition">
                        View Projects
                    </button>

                    <button className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 transition">
                        Contact Me
                    </button>
                </div>

                <div className="mt-16 flex justify-center w-full">
                    <div className="flex flex-col items-center gap-2 animate-fadeUp">

                        {/* Mouse */}
                        <div className="w-6 h-10 border-2 border-blue-400 dark:border-blue-600 rounded-full flex justify-center p-1 animate-float">

                            {/* Scroll wheel */}
                            <div className="w-1.5 h-3 bg-blue-400 dark:bg-blue-600 rounded-full animate-scroll"></div>

                        </div>
                    </div>
                </div>
                
            </div>

        </section>
    );
};

export default HeroPage;