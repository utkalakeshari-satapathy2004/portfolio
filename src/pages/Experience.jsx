"use client";

import React from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2024 - Present",
    description:
      "Building modern web applications using React, Next.js, and Tailwind. Focused on performance, UI/UX, and scalable architecture.",
  },
  {
    role: "React Developer",
    company: "Personal Projects",
    period: "2023 - 2024",
    description:
      "Developed multiple projects including dashboards, games, and portfolio systems with clean UI and reusable components.",
  },
  {
    role: "Web Development Learner",
    company: "Self Learning",
    period: "2022 - 2023",
    description:
      "Started journey in web development, learned HTML, CSS, JavaScript and built foundational projects.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-24 bg-white dark:bg-[#020716] text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
       <div className="mb-16">
          <p className="text-3xl text-center text-blue-500 font-medium uppercase tracking-wider">
            EXPERIENCE
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-3 top-0 w-[2px] h-full bg-gray-300 dark:bg-white/10"></div>

          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">

                {/* DOT */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* CARD */}
                <div className="border border-gray-200 dark:border-white/10 rounded-xl p-6 bg-gray-50 dark:bg-[#01071a] backdrop-blur hover:bg-gray-100 dark:hover:bg-slate-900 transition">

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                    <h3 className="text-xl font-semibold">
                      {exp.role}
                    </h3>

                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </span>

                  </div>

                  <p className="text-blue-500 dark:text-blue-400 text-sm mt-1">
                    {exp.company}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                    {exp.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;