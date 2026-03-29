"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "../hooks/ThemeToggle";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    /* ================= SMOOTH SCROLL ================= */
    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const offset = 100; // adjust based on navbar height
        const top = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed top-4 left-0 w-full flex justify-center z-50">
            <nav className="w-[90%] max-w-6xl backdrop-blur-[2px] bg-transparent border border-black/10 dark:border-white/20 rounded-full px-6 py-3 shadow-lg transition-colors duration-300">

                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <h1 className="text-gray-900 dark:text-white text-lg font-semibold tracking-wide">
                        Utkala
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 dark:text-gray-200">

                        <button onClick={() => handleScroll("home")} className="hover:text-gray-900 dark:hover:text-white transition cursor-pointer">
                            HOME
                        </button>

                        <button onClick={() => handleScroll("about")} className="hover:text-gray-900 dark:hover:text-white transition cursor-pointer">
                            ABOUT ME
                        </button>

                        <button onClick={() => handleScroll("experience")} className="hover:text-gray-900 dark:hover:text-white transition  cursor-pointer">
                            EXPERIENCE
                        </button>

                        <button onClick={() => handleScroll("projects")} className="hover:text-gray-900 dark:hover:text-white transition  cursor-pointer">
                            PROJECTS
                        </button>

                        <button onClick={() => handleScroll("contact")} className="hover:text-gray-900 dark:hover:text-white transition  cursor-pointer">
                            CONTACT
                        </button>

                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        {/* Theme Toggle */}
                        <div className="hidden md:block">
                            <ThemeToggle />
                        </div>

                        {/* AI Button */}
                        <button
                            className="hidden md:block border border-blue-400 text-blue-400 px-4 py-1 rounded-full text-sm hover:bg-blue-400 hover:text-white transition"
                            onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
                        >
                            ASK AI ✨
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-gray-900 dark:text-white text-xl cursor-pointer"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden flex flex-col items-center gap-4 mt-4 text-gray-600 dark:text-gray-200">

                        <button className="cursor-pointer" onClick={() => { handleScroll("home"); setOpen(false); }}>
                            Home
                        </button>

                        <button className="cursor-pointer" onClick={() => { handleScroll("about"); setOpen(false); }}>
                            About
                        </button>

                        <button className="cursor-pointer" onClick={() => { handleScroll("experience"); setOpen(false); }}>
                            Experience
                        </button>

                        <button className="cursor-pointer" onClick={() => { handleScroll("projects"); setOpen(false); }}>
                            Projects
                        </button>

                        <button className="cursor-pointer" onClick={() => { handleScroll("contact"); setOpen(false); }}>
                            Contact
                        </button>

                        <ThemeToggle />
                    </div>
                )}
            </nav>
        </div>
    );
};

export default NavBar;