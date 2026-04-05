"use client";

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-[#020716] px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-3xl text-center text-blue-500 font-medium uppercase tracking-wider">
            About Me
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="flex-col sm:flex sm:flex-row gap-14 items-center">

          {/* LEFT - IMAGE CARD */}
          <div className="relative group">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 bg-gray-100 dark:bg-white/5">

              <div className="rounded-xl overflow-hidden w-80 h-100">
                <img
                  src="/profile.jpeg"
                  alt="profile"
                  className="w-full h-100 object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* RIGHT - TEXT */}
          <div className="space-y-5">

            <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
              Transforming Ideas Into Reality
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate frontend developer with a strong focus on
              building modern, high-performance web applications. I specialize
              in crafting seamless user experiences using React and Next.js.
            </p>

            <p className=" text-gray-600 dark:text-gray-400 leading-relaxed">
              My approach combines clean architecture, scalability, and
              performance optimization. I enjoy solving real-world problems and
              turning ideas into production-ready solutions.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;