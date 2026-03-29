"use client";

import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Carrom Game",
    image: "/profile.jpeg",
    desc: "A complete browser-based carrom game with realistic physics, AI opponent, and multiplayer support.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Shadow Runner",
    image: "/profile.jpeg",
    desc: "An endless runner action game with smooth animations, traps, and time-slowing mechanics.",
    tech: ["JavaScript", "Canvas", "Game Logic"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    image: "/profile.jpeg",
    desc: "A modern developer portfolio built with Next.js, Tailwind, and smooth animations.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "Task Manager App",
    image: "/profile.jpeg",
    desc: "A full-stack task management app with authentication, CRUD operations, and responsive UI.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 bg-white dark:bg-[#020716]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-3xl text-center text-blue-500 font-medium uppercase tracking-wider">
            PROJECTS
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-gray-200 dark:border-white/10 rounded-2xl p-6 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* TECH */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* LINK */}
              <Link
                href={project.link}
                className="inline-block mt-6 text-blue-500 dark:text-blue-400 text-sm font-medium group-hover:underline"
              >
                View Project →
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;