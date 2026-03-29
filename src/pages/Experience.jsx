"use client";

import Link from "next/link";


const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "01-06-2025 - 01-12-2025",
    description:
      "Built modern web applications using React, Next.js, and Tailwind CSS with a strong focus on performance, responsive UI/UX, and scalable architecture.",
  },
  {
    role: "Software Developer",
    company: "APPROBES SOFTWARE (OPC) PRIVATE LIMITED",
    link: "https://www.approbes.com/",
    period: "12-12-2025 - Present",
    description:
      "Developing high-performance and scalable web applications using React, Next.js, and Tailwind CSS. Focused on clean UI/UX, performance optimization, and maintainable frontend architecture while collaborating with teams.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full py-24 bg-white dark:bg-[#020716] text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="mb-16 text-center">
          <p className="text-3xl text-blue-500 font-medium uppercase tracking-wider">
            EXPERIENCE
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-3 top-0 w-[2px] h-full bg-gray-300 dark:bg-white/10"></div>

          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 group">

                {/* DOT */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* CARD */}
                <div className="border border-gray-200 dark:border-white/10 rounded-xl p-6 bg-gray-50 dark:bg-[#01071a] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">

                  {/* TOP */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                    <h3 className="text-xl font-semibold">
                      {exp.role}
                    </h3>

                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </span>

                  </div>

                  {/* COMPANY */}
                  <p className="text-blue-500 dark:text-blue-400 text-sm mt-1">
                    {exp.link ? (
                      <Link
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.company}
                      </Link>
                    ) : (
                      exp.company
                    )}
                  </p>

                  {/* DESCRIPTION */}
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