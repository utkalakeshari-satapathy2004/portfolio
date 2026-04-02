"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "../hooks/ThemeToggle";
import { IoMdClose } from "react-icons/io";
import { useUI } from "@/hooks/HideModal";

const NavBar = () => {
    const { navOpen: open, setNavOpen: setOpen } = useUI();

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
        <>
            {/* NAVBAR */}
            <div className="fixed top-4 left-0 w-full flex justify-center z-50">
                <nav className="w-[90%] max-w-6xl backdrop-blur-[2px] bg-transparent border border-black/10 dark:border-white/20 rounded-full px-6 py-3 shadow-lg">

                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <h1 className="text-gray-900 dark:text-white text-lg font-semibold">
                            Utkala
                        </h1>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-8 text-sm text-gray-600 dark:text-gray-200">
                            <button onClick={() => handleScroll("home")}>HOME</button>
                            <button onClick={() => handleScroll("about")}>ABOUT</button>
                            <button onClick={() => handleScroll("experience")}>EXPERIENCE</button>
                            <button onClick={() => handleScroll("projects")}>PROJECTS</button>
                            <button onClick={() => handleScroll("contact")}>CONTACT</button>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-4">
                            <div className="">
                                <ThemeToggle />
                            </div>

                            <button
                                className="flex gap-1 border border-blue-400 text-blue-400 px-4 py-1 rounded-full text-sm hover:bg-blue-400 hover:text-white"
                                onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
                            >
                                <span className="hidden sm:block">ASK</span>
                                AI ✨
                            </button>

                            {/* Mobile Toggle */}
                            <button
                                className={`md:hidden text-xl text-gray-900 dark:text-white 
                                    ${open ? "hidden" : "opacity-100"}`}
                                onClick={() => setOpen(true)}
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* FULL SCREEN MOBILE MENU */}
            <div
                className={`fixed inset-0 z-50 bg-white dark:bg-black/90 dark:backdrop-blur-sm flex flex-col items-center justify-center gap-8 text-xl transform transition-transform duration-300 dark:text-white ${open
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "-translate-y-full opacity-0 pointer-events-none"}`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 text-3xl text-gray-900 dark:text-white"
                    onClick={() => setOpen(false)}
                >
                    <IoMdClose />
                </button>

                {/* Menu Items */}
                <button onClick={() => { handleScroll("home"); setOpen(false); }}>
                    Home
                </button>

                <button onClick={() => { handleScroll("about"); setOpen(false); }}>
                    About Me
                </button>

                <button onClick={() => { handleScroll("experience"); setOpen(false); }}>
                    Experience
                </button>

                <button onClick={() => { handleScroll("projects"); setOpen(false); }}>
                    Projects
                </button>

                <button onClick={() => { handleScroll("contact"); setOpen(false); }}>
                    Contact
                </button>


            </div>
        </>
    );
};

export default NavBar;