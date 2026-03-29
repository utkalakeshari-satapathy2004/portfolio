"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    image: "/portfolio.png",
    desc: "A modern developer portfolio built with Next.js, Tailwind, and smooth animations.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "Study Platform",
    image: "/studypage.png",
    desc: "A full-stack study platform with secure authentication, admin dashboard, cloud-based media uploads, and email notifications. Features include notes management, progress tracking, and scalable backend APIs.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Cloudinary", "Resend"],
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    image: "/e-commerce.png", 
    desc: "A full-stack e-commerce platform with product management, secure authentication, cart & checkout system, and admin dashboard. Includes cloud image uploads and scalable backend APIs.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary"],
    link: "/maintenance",
  }
  // {
  //   title: "Task Manager App",
  //   image: "/profile.jpeg",
  //   desc: "A full-stack task management app with authentication, CRUD operations, and responsive UI.",
  //   tech: ["React", "Node.js", "MongoDB"],
  //   link: "#",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 bg-white dark:bg-[#020716]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <div className="mb-16">
          <p className="text-3xl text-center text-blue-500 font-semibold uppercase tracking-wider">
            Projects
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col h-full rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 p-4"
            >

              {/* IMAGE */}
              <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-grow">

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

                {/* BUTTON AT BOTTOM */}
                <div className="mt-auto pt-6">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-blue-500 dark:text-blue-400 text-sm font-medium hover:underline"
                  >
                    View Project →
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;