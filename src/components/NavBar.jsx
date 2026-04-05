"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import ThemeToggle from "../hooks/ThemeToggle";
import { IoMdClose } from "react-icons/io";
import { useUI } from "@/hooks/HideModal";
import { BsRobot } from "react-icons/bs";
import { IoHomeOutline, IoHomeSharp, IoBriefcaseOutline, IoMailOutline, IoMail, IoGridOutline, IoGrid } from "react-icons/io5";

const NavBar = () => {
    const { navOpen: open, setNavOpen: setOpen } = useUI() || {};
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = ["home", "about", "projects", "contact"];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.4 }
        );
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

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
                <nav className="w-[90%] hidden md:block max-w-6xl backdrop-blur-[2px] bg-transparent border border-black/10 dark:border-white/20 rounded-full px-6 py-3 shadow-lg">

                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <h1 className="text-gray-900 dark:text-white text-lg font-semibold cursor-pointer">
                            Utkala
                        </h1>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-8 text-sm text-gray-600 dark:text-gray-200">
                            <button className="cursor-pointer hover:text-blue-500 hover:underline" onClick={() => handleScroll("home")}>HOME</button>
                            <button className="cursor-pointer hover:text-blue-500 hover:underline" onClick={() => handleScroll("about")}>ABOUT</button>
                            <button className="cursor-pointer hover:text-blue-500 hover:underline" onClick={() => handleScroll("experience")}>EXPERIENCE</button>
                            <button className="cursor-pointer hover:text-blue-500 hover:underline" onClick={() => handleScroll("projects")}>PROJECTS</button>
                            <button className="cursor-pointer hover:text-blue-500 hover:underline" onClick={() => handleScroll("contact")}>CONTACT</button>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:block">
                                <ThemeToggle />
                            </div>

                            <button
                                className="flex gap-1 border border-blue-400 text-blue-400 px-4 py-1 rounded-full text-sm hover:bg-blue-400 hover:text-white cursor-pointer"
                                onClick={() => window.dispatchEvent(new CustomEvent("open-chatbot"))}
                            >
                                <span className="hidden sm:block">ASK AI ✨</span>
                                <span className="block sm:hidden"><BsRobot /></span>
                                {/* <span className="hidden sm:block"> </span> */}

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
                <button className="cursor-pointer hover:text-blue-500" onClick={() => { handleScroll("home"); setOpen(false); }}>
                    Home
                </button>

                <button className="cursor-pointer hover:text-blue-500" onClick={() => { handleScroll("about"); setOpen(false); }}>
                    About Me
                </button>

                <button className="cursor-pointer hover:text-blue-500" onClick={() => { handleScroll("experience"); setOpen(false); }}>
                    Experience
                </button>

                <button className="cursor-pointer hover:text-blue-500" onClick={() => { handleScroll("projects"); setOpen(false); }}>
                    Projects
                </button>

                <button className="cursor-pointer hover:text-blue-500" onClick={() => { handleScroll("contact"); setOpen(false); }}>
                    Contact
                </button>

                <div onClick={() => setOpen(false)}>
                    <ThemeToggle />
                </div>

            </div>

            {/* BOTTOM MOBILE NAV */}
            <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white dark:bg-[#0d1117] border-t border-gray-200 dark:border-white/10 shadow-lg">
                <div className="flex items-center justify-around py-2">

                    {/* Home */}
                    <button
                        onClick={() => handleScroll("home")}
                        className={`flex flex-col items-center gap-0.5 px-4 py-1 text-xs transition-colors ${
                            activeSection === "home"
                                ? "text-blue-500"
                                : "text-gray-500 dark:text-gray-400"
                        }`}
                    >
                        {activeSection === "home" ? <IoHomeSharp className="text-xl" /> : <IoHomeOutline className="text-xl" />}
                        <span>Home</span>
                    </button>

                    {/* Projects */}
                    <button
                        onClick={() => handleScroll("projects")}
                        className={`flex flex-col items-center gap-0.5 px-4 py-1 text-xs transition-colors ${
                            activeSection === "projects"
                                ? "text-blue-500"
                                : "text-gray-500 dark:text-gray-400"
                        }`}
                    >
                        {activeSection === "projects" ? <IoGrid className="text-xl" /> : <IoGridOutline className="text-xl" />}
                        <span>Projects</span>
                    </button>

                    {/* Contact */}
                    <button
                        onClick={() => handleScroll("contact")}
                        className={`flex flex-col items-center gap-0.5 px-4 py-1 text-xs transition-colors ${
                            activeSection === "contact"
                                ? "text-blue-500"
                                : "text-gray-500 dark:text-gray-400"
                        }`}
                    >
                        {activeSection === "contact" ? <IoMail className="text-xl" /> : <IoMailOutline className="text-xl" />}
                        <span>Contact</span>
                    </button>

                    {/* Menu */}
                    <button
                        onClick={() => setOpen(true)}
                        className="flex flex-col items-center gap-0.5 px-4 py-1 text-xs text-gray-500 dark:text-gray-400 transition-colors"
                    >
                        <IoBriefcaseOutline className="text-xl" />
                        <span>Menu</span>
                    </button>

                </div>
            </div>
        </>
    );
};

export default NavBar;