"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "../hooks/ThemeToggle";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed top-4 left-0 w-full flex justify-center z-50">
            <nav className="w-[90%] max-w-6xl backdrop-blur-[2px] bg-transparent  border border-black/10 dark:border-white/20 rounded-full px-6 py-3 shadow-lg transition-colors duration-300">

                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <h1 className="text-gray-900 dark:text-white text-lg font-semibold tracking-wide">
                        {/* Utkala */}
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 dark:text-gray-200">
                        <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition">HOME</Link>
                        <Link href="/#about" className="hover:text-gray-900 dark:hover:text-white transition">ABOUT ME</Link>
                        {/* <Link href="/#skills" className="hover:text-gray-900 dark:hover:text-white transition">SKILLS</Link> */}
                        <Link href="/#experience" className="hover:text-gray-900 dark:hover:text-white transition">EXPERIENCE</Link>
                        <Link href="/#projects" className="hover:text-gray-900 dark:hover:text-white transition">PROJECTS</Link>
                        <Link href="/#contact" className="hover:text-gray-900 dark:hover:text-white transition">CONTACT</Link>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        {/* Theme Toggle */}
                        <div className="hidden md:block">
                            <ThemeToggle />
                        </div>

                        {/* Button */}
                        <button className="hidden md:block border border-blue-400 text-blue-400 px-4 py-1 rounded-full text-sm hover:bg-blue-400 hover:text-white transition">
                            ASK AI ✨
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-gray-900 dark:text-white text-xl"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden flex flex-col items-center gap-4 mt-4 text-gray-600 dark:text-gray-200">
                        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                        <Link href="/#about" onClick={() => setOpen(false)}>About</Link>
                        <Link href="/#skills" onClick={() => setOpen(false)}>Skills</Link>
                        <Link href="/#experience" onClick={() => setOpen(false)}>Experience</Link>
                        <Link href="/#projects" onClick={() => setOpen(false)}>Projects</Link>
                        <Link href="/#certifications" onClick={() => setOpen(false)}>Certifications</Link>
                        <ThemeToggle />
                    </div>
                )}
            </nav>
        </div>
    );
};

export default NavBar;