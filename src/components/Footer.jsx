"use client";

import { useUI } from "@/hooks/HideModal";
import Link from "next/link";
import { FaArrowUp, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiCopyrightFill } from "react-icons/ri";


const Footer = () => {
    const ui = useUI();
    const navOpen = ui?.navOpen ?? false;

    if (navOpen) return null;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative w-full border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#020716]">

            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    UtkalaKeshari
                </h2>

                <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
                    <Link href={process.env.NEXT_PUBLIC_GITHUB} target="blank" className="hover:text-blue-500 hover:scale-110 transition">
                        <FaGithubSquare className="w-5 h-5" />
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_LINKEDIN} target="blank" className="hover:text-blue-500 hover:scale-110 transition">
                        <FaLinkedin className="w-5 h-5" />
                    </Link>
                    <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="hover:text-blue-500 hover:scale-110 transition">
                        <MdEmail className="w-5 h-5" />
                    </Link>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <RiCopyrightFill /> {new Date().getFullYear()} Utkalakeshari All rights reserved.
                </p>

            </div>

            {/* Floating scroll-to-top button */}
            {!navOpen && (
                <button
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110"
                >
                    <FaArrowUp className="w-4 h-4" />
                </button>
            )}

        </footer>
    );
};

export default Footer;