"use client";

import React from "react";
import { FiTool, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020716] via-[#020617] to-[#020716] px-6">

      {/* CARD */}
      <div className="w-full max-w-xl text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 shadow-xl">

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20">
            <FiTool className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Under Maintenance
        </h1>

        {/* SUBTEXT */}
        <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
          We're currently improving our website to give you a better experience.
          Please check back later.
        </p>

        {/* STATUS BADGE */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs border border-yellow-500/20">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          Ongoing Updates
        </div>

        {/* BUTTON */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Maintenance;